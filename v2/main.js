/* Career Portfolio — Version B. No dependencies.
   1 mobile nav  2 scroll reveals  3 accordions  4 project filters
   5 case detail  6 lightbox  7 contact form  8 year stamp            */

(function () {
  'use strict';

  var NAV_BREAKPOINT = 864; // matches the 54rem breakpoint in styles.css

  /* 1 — MOBILE NAV ------------------------------------------------------- */

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');

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

    document.addEventListener('click', function (event) {
      if (!nav.classList.contains('is-open')) return;
      if (event.target.closest('.site-header')) return;
      setNav(false);
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > NAV_BREAKPOINT) setNav(false);
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
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.06 });

    Array.prototype.forEach.call(revealables, function (el) {
      observer.observe(el);
    });
  }

  /* 3 — EXPERIENCE ACCORDIONS -------------------------------------------- */

  Array.prototype.forEach.call(document.querySelectorAll('[data-accordion]'), function (group) {
    group.addEventListener('click', function (event) {
      var head = event.target.closest('.tl-head');
      if (!head || !group.contains(head)) return;

      var item = head.closest('.tl-item');
      var open = head.getAttribute('aria-expanded') === 'true';

      head.setAttribute('aria-expanded', open ? 'false' : 'true');
      item.classList.toggle('is-open', !open);
    });
  });

  /* 4 — PROJECT FILTERS -------------------------------------------------- */

  var filters = document.querySelectorAll('[data-filter]');
  var caseGrid = document.querySelector('[data-cases]');
  var filterStatus = document.querySelector('[data-filter-status]');

  if (filters.length && caseGrid) {
    var cases = caseGrid.querySelectorAll('.case');

    var applyFilter = function (value) {
      var shown = 0;

      Array.prototype.forEach.call(cases, function (card) {
        var match = value === 'all' || card.getAttribute('data-category') === value;
        card.hidden = !match;
        if (match) shown += 1;
      });

      Array.prototype.forEach.call(filters, function (btn) {
        btn.setAttribute('aria-pressed', btn.getAttribute('data-filter') === value ? 'true' : 'false');
      });

      if (filterStatus) {
        var label = value === 'all'
          ? 'Showing all ' + shown + ' projects'
          : 'Showing ' + shown + (shown === 1 ? ' project' : ' projects') + ' in this category';
        filterStatus.textContent = shown ? label : 'No projects in this category';
      }
    };

    Array.prototype.forEach.call(filters, function (btn) {
      btn.addEventListener('click', function () {
        applyFilter(btn.getAttribute('data-filter'));
      });
    });
  }

  /* 5 — CASE DETAIL DISCLOSURE ------------------------------------------- */

  document.addEventListener('click', function (event) {
    var btn = event.target.closest('[data-case-toggle]');
    if (!btn) return;

    var card = btn.closest('.case');
    var open = btn.getAttribute('aria-expanded') === 'true';
    var label = btn.querySelector('.btn__label');
    var arrow = btn.querySelector('.btn__arrow');

    btn.setAttribute('aria-expanded', open ? 'false' : 'true');
    card.classList.toggle('is-open', !open);
    if (label) label.textContent = open ? 'View project' : 'Close';
    if (arrow) arrow.textContent = open ? '↓' : '↑';
  });

  /* 6 — LIGHTBOX --------------------------------------------------------- */

  var lightbox = document.getElementById('lightbox');

  if (lightbox) {
    var lightboxImg = lightbox.querySelector('img');
    var lightboxCaption = lightbox.querySelector('.lightbox__caption');
    var lightboxClose = lightbox.querySelector('[data-lightbox-close]');
    var lastTrigger = null;

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
      if (!trigger) return;

      event.preventDefault();
      lastTrigger = trigger;
      lightboxImg.src = trigger.getAttribute('data-lightbox-src');
      lightboxImg.alt = trigger.getAttribute('data-lightbox-caption') || '';
      lightboxCaption.textContent = trigger.getAttribute('data-lightbox-caption') || '';
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
      lightboxClose.focus();
    });

    lightbox.addEventListener('click', function (event) {
      if (event.target === lightbox || event.target.closest('[data-lightbox-close]')) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', function (event) {
      if (lightbox.hidden) return;
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'Tab') {
        // only one focusable control inside — keep focus in the dialog
        event.preventDefault();
        lightboxClose.focus();
      }
    });
  }

  /* 7 — CONTACT FORM ----------------------------------------------------- */

  var form = document.querySelector('[data-contact-form]');

  if (form) {
    var status = form.querySelector('[data-form-status]');
    var RECIPIENT = 'anika_diazderivera@dlsu.edu.ph';

    var setFieldState = function (input, valid) {
      var field = input.closest('.field');
      if (field) field.classList.toggle('is-invalid', !valid);
      input.setAttribute('aria-invalid', valid ? 'false' : 'true');
    };

    var validate = function (input) {
      var value = input.value.trim();
      var valid = true;

      if (input.hasAttribute('required') && !value) valid = false;
      if (valid && input.type === 'email' && value) valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
      if (valid && input.id === 'cf-message' && value.length < 10) valid = false;

      setFieldState(input, valid);
      return valid;
    };

    // clear the error as soon as the field becomes valid again
    Array.prototype.forEach.call(form.querySelectorAll('input, textarea'), function (input) {
      input.addEventListener('blur', function () {
        if (input.value.trim()) validate(input);
      });
      input.addEventListener('input', function () {
        if (input.closest('.field').classList.contains('is-invalid')) validate(input);
      });
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var required = form.querySelectorAll('[required]');
      var firstInvalid = null;
      var allValid = true;

      Array.prototype.forEach.call(required, function (input) {
        if (!validate(input)) {
          allValid = false;
          if (!firstInvalid) firstInvalid = input;
        }
      });

      if (!allValid) {
        status.textContent = 'Please check the highlighted fields and try again.';
        status.className = 'form-status is-error';
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      var name = form.querySelector('#cf-name').value.trim();
      var email = form.querySelector('#cf-email').value.trim();
      var org = form.querySelector('#cf-org').value.trim();
      var message = form.querySelector('#cf-message').value.trim();

      var subject = 'Portfolio enquiry from ' + name + (org ? ' (' + org + ')' : '');
      var body = message + '\n\n—\n' + name + (org ? '\n' + org : '') + '\n' + email;

      status.textContent = 'Opening your email app with the message ready to send…';
      status.className = 'form-status is-success';

      window.location.href = 'mailto:' + RECIPIENT +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);
    });
  }

  /* 8 — YEAR STAMP ------------------------------------------------------- */

  Array.prototype.forEach.call(document.querySelectorAll('[data-year]'), function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
