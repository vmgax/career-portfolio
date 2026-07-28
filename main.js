/* Career e-Portfolio — no dependencies.
   1. mobile nav toggle   2. scroll reveals   3. work-sample lightbox   4. year stamp */

(function () {
  'use strict';

  /* 1 — MOBILE NAV ------------------------------------------------------- */

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  if (toggle && nav) {
    var setNav = function (open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    };

    toggle.addEventListener('click', function () {
      setNav(toggle.getAttribute('aria-expanded') !== 'true');
    });

    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) setNav(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        setNav(false);
        toggle.focus();
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 860) setNav(false);
    });
  }

  /* 2 — SCROLL REVEALS --------------------------------------------------- */

  var revealables = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(revealables, function (el) {
      el.classList.add('is-visible');
    });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });

    Array.prototype.forEach.call(revealables, function (el) {
      observer.observe(el);
    });
  }

  /* 3 — LIGHTBOX --------------------------------------------------------- */

  var lightbox = document.getElementById('lightbox');

  if (lightbox) {
    var lightboxImg = lightbox.querySelector('img');
    var lightboxCaption = lightbox.querySelector('.lightbox-caption');
    var lightboxClose = lightbox.querySelector('[data-lightbox-close]');
    var lastTrigger = null;

    var openLightbox = function (trigger) {
      lastTrigger = trigger;
      lightboxImg.src = trigger.getAttribute('data-lightbox-src');
      lightboxImg.alt = trigger.getAttribute('data-lightbox-caption') || '';
      lightboxCaption.textContent = trigger.getAttribute('data-lightbox-caption') || '';
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
      lightboxClose.focus();
    };

    var closeLightbox = function () {
      lightbox.hidden = true;
      lightboxImg.removeAttribute('src');
      document.body.style.overflow = '';
      if (lastTrigger) {
        lastTrigger.focus();
        lastTrigger = null;
      }
    };

    document.addEventListener('click', function (event) {
      var trigger = event.target.closest('[data-lightbox-src]');
      if (trigger) {
        event.preventDefault();
        openLightbox(trigger);
      }
    });

    lightbox.addEventListener('click', function (event) {
      // close on the backdrop or the close button, never on the image itself
      if (event.target === lightbox || event.target.closest('[data-lightbox-close]')) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', function (event) {
      if (lightbox.hidden) return;
      if (event.key === 'Escape') closeLightbox();
      // only one focusable control inside — keep focus from escaping the dialog
      if (event.key === 'Tab') {
        event.preventDefault();
        lightboxClose.focus();
      }
    });
  }

  /* 4 — YEAR STAMP ------------------------------------------------------- */

  Array.prototype.forEach.call(document.querySelectorAll('[data-year]'), function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
