/**
 * ATBU Developers Club — Production Main Script Entry
 * Bundles interactive client-side controllers.
 */
document.addEventListener('DOMContentLoaded', () => {
  // Update copyright year dynamically
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
