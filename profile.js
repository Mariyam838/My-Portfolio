/* ══════════════════════════════════════════
   PROFILE.JS — Mariyam Ashraf
══════════════════════════════════════════ */

/* ── CURSOR ── */
const cur  = document.getElementById('cur');
const curR = document.getElementById('cur-r');
let mx = 0, my = 0, rx = 0, ry = 0;

// Detect if cursor is over the dark sidebar and swap colours
function updateCursorTheme(x) {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;
  const sidebarRight = sidebar.getBoundingClientRect().right;

  if (x <= sidebarRight) {
    // Over dark sidebar — use white cursor
    cur.style.background  = '#ffffff';
    cur.style.mixBlendMode = 'normal';
    curR.style.borderColor = 'rgba(255,255,255,0.28)';
  } else {
    // Over light main area — use dark cursor
    cur.style.background  = 'var(--ink, #111010)';
    cur.style.mixBlendMode = 'multiply';
    curR.style.borderColor = 'rgba(0,0,0,0.16)';
  }
}

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cur.style.left = mx + 'px';
  cur.style.top  = my + 'px';
  updateCursorTheme(mx);
});

(function loop() {
  rx += (mx - rx) * 0.09;
  ry += (my - ry) * 0.09;
  curR.style.left = rx + 'px';
  curR.style.top  = ry + 'px';
  requestAnimationFrame(loop);
})();

document.querySelectorAll('a, button, .ach-card, .edu-item, .cert-row, .stat, .sb-tags span').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cur-lg'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cur-lg'));
});

/* ── SCROLL REVEAL ── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('vis');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ── SKILL BAR ANIMATION ── */
// Trigger once sidebar is in view (it's sticky so always visible)
const fillBars = () => {
  document.querySelectorAll('.sb-fill').forEach(b => b.classList.add('on'));
};
// Small delay so page paint finishes first
setTimeout(fillBars, 600);