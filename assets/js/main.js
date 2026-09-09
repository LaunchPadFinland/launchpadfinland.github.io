/* Launch Pad Finland ry — small progressive-enhancement layer.
   Everything here is optional: the page reads and works fine without JS. */

(function () {
  'use strict';

  /* --- mobile menu ------------------------------------------------------ */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });

    // Close the menu after tapping a link, so the anchor scroll is visible.
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      }
    });
  }

  /* --- scroll reveal ----------------------------------------------------- */
  var blocks = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    // No observer support: just show everything.
    blocks.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    blocks.forEach(function (el) { observer.observe(el); });
  }

  /* --- footer year ------------------------------------------------------- */
  var year = document.getElementById('year');
  if (year) { year.textContent = new Date().getFullYear(); }
})();
