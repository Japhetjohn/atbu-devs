/**
 * ATBU Developers Club — Activities & Flagship Programs Carousel
 * Debounced slide switching, keyboard arrows, and directional touch gestures.
 */
(function initCarousel() {
  const slides = document.querySelectorAll('.activity-slide');
  const dots = document.querySelectorAll('.activities-dots .dot-btn');
  const prevBtn = document.getElementById('activities-prev');
  const nextBtn = document.getElementById('activities-next');
  const carousel = document.getElementById('activities-carousel');

  if (!slides.length) return;

  let currentIndex = 0;
  let timer = null;
  let isBusy = false;
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;

  function goToSlide(index) {
    if (isBusy) return;
    isBusy = true;
    setTimeout(() => { isBusy = false; }, 280);

    slides[currentIndex].classList.remove('is-active');
    if (dots[currentIndex]) {
      dots[currentIndex].classList.remove('is-active');
      dots[currentIndex].setAttribute('aria-selected', 'false');
    }

    currentIndex = (index + slides.length) % slides.length;

    slides[currentIndex].classList.add('is-active');
    if (dots[currentIndex]) {
      dots[currentIndex].classList.add('is-active');
      dots[currentIndex].setAttribute('aria-selected', 'true');
    }
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      nextSlide();
      resetTimer();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      prevSlide();
      resetTimer();
    });
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      goToSlide(idx);
      resetTimer();
    });
  });

  if (carousel) {
    carousel.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
        resetTimer();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
        resetTimer();
      }
    });

    carousel.addEventListener('touchstart', (e) => {
      if (e.target.closest('.activities-controls')) return;
      clearInterval(timer);
      if (e.changedTouches && e.changedTouches[0]) {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
      }
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
      if (e.target.closest('.activities-controls')) return;
      if (e.changedTouches && e.changedTouches[0]) {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
      }
      resetTimer();
    }, { passive: true });

    carousel.addEventListener('mouseenter', () => clearInterval(timer));
    carousel.addEventListener('mouseleave', () => resetTimer());
  }

  function handleSwipe() {
    const dx = touchEndX - touchStartX;
    const dy = touchEndY - touchStartY;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.3) {
      if (dx < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      resetTimer();
    }
  }

  function startTimer() {
    timer = setInterval(nextSlide, 7000);
  }

  function resetTimer() {
    clearInterval(timer);
    startTimer();
  }

  startTimer();
})();
