// Small JS file for navigation toggle and lightbox
document.addEventListener('DOMContentLoaded', function () {
  // set year in footer
  const y = new Date().getFullYear();
  document.getElementById('year').textContent = y;

  // mobile nav
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    if (siteNav.style.display === 'block') {
      siteNav.style.display = '';
    } else {
      siteNav.style.display = 'block';
    }
  });

  // gallery lightbox
  const gallery = document.getElementById('gallery');
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbClose = document.getElementById('lightbox-close');

  if (gallery) {
    gallery.addEventListener('click', (e) => {
      const img = e.target.closest('img');
      if (!img) return;
      const full = img.getAttribute('data-full') || img.src;
      lbImg.src = full;
      lbImg.alt = img.alt || '';
      lightbox.style.display = 'flex';
      lightbox.setAttribute('aria-hidden', 'false');
    });
  }

  const closeLightbox = () => {
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden', 'true');
    lbImg.src = '';
  };

  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
});
