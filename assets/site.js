// Mobile menu toggle (same behaviour as the main SPHINX Global site)
(function () {
  var nav = document.getElementById('site-nav');
  if (!nav) return;
  var toggle = nav.querySelector('.nav-toggle');
  function setOpen(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  toggle.addEventListener('click', function () { setOpen(!nav.classList.contains('open')); });
  nav.querySelectorAll('.nav-links a').forEach(function (a) {
    a.addEventListener('click', function () { setOpen(false); });
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
})();
