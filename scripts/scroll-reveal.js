/**
 * ATBU Developers Club — Scroll Reveal & Card Hover Effects
 * Zero-dependency Intersection Observer and cursor tracking sheen.
 */
(function initScrollReveal() {
  if ('IntersectionObserver' in window) {
    const revealElements = document.querySelectorAll('[data-scroll-reveal]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = Number(entry.target.dataset.revealDelay) || 0;
          setTimeout(() => {
            entry.target.classList.add('is-revealed');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach((el, index) => {
      el.dataset.revealDelay = (index % 4) * 90;
      observer.observe(el);
    });
  } else {
    document.querySelectorAll('[data-scroll-reveal]').forEach(el => {
      el.classList.add('is-revealed');
    });
  }

  // Cursor hover gradient sheen across membership cards
  const cards = document.querySelectorAll('.membership-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
})();
