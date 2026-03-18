/* ══════════════════════════════════════════
   CONNECT.JS — Mariyam Ashraf
══════════════════════════════════════════ */

/* ── ISO BACKGROUND GRID ── */
(function () {
  const canvas = document.getElementById('bg-grid');
  const ctx = canvas.getContext('2d'); let t = 0;
  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize(); window.addEventListener('resize', resize);
  const TW = 80, TH = 40;
  function iso(col, row, w, h) {
    return { x: w * 0.5 + (col - row) * (TW * 0.5), y: h * 0.28 + (col + row) * (TH * 0.5) };
  }
  function draw() {
    const w = canvas.width, h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    for (let row = -2; row < 28; row++) {
      for (let col = -2; col < 28; col++) {
        const dist = Math.sqrt((col - 14) ** 2 + (row - 14) ** 2);
        const fade = Math.max(0, 1 - dist / (14 * 1.41 * 0.85));
        const pulse = (Math.sin(t * 0.6 - dist * 0.28) * 0.5 + 0.5) * fade;
        const alpha = (0.06 + pulse * 0.18) * fade;
        const tl = iso(col, row, w, h), tr = iso(col + 1, row, w, h),
              br = iso(col + 1, row + 1, w, h), bl = iso(col, row + 1, w, h);
        ctx.beginPath();
        ctx.moveTo(tl.x, tl.y); ctx.lineTo(tr.x, tr.y);
        ctx.lineTo(br.x, br.y); ctx.lineTo(bl.x, bl.y);
        ctx.closePath();
        ctx.fillStyle = `rgba(255,255,255,${pulse * 0.025})`; ctx.fill();
        ctx.strokeStyle = `rgba(255,255,255,${alpha})`; ctx.lineWidth = 0.5; ctx.stroke();
      }
    }
    t += 0.014; requestAnimationFrame(draw);
  }
  draw();
})();

/* ── CURSOR ── */
const cur = document.getElementById('cur'), curR = document.getElementById('cur-r');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cur.style.left = mx + 'px'; cur.style.top = my + 'px';
});
(function loop() {
  rx += (mx - rx) * 0.09; ry += (my - ry) * 0.09;
  curR.style.left = rx + 'px'; curR.style.top = ry + 'px';
  requestAnimationFrame(loop);
})();
document.querySelectorAll('a, button, input, textarea, .c-link').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cur-lg'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cur-lg'));
});

/* ── CLOCK ── */
function tick() {
  const el = document.getElementById('clock');
  if (!el) return;
  const d = new Date();
  el.textContent = d.toLocaleTimeString('en-GB', {
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  }) + ' GST';
}
tick(); setInterval(tick, 1000);

/* ── FORM ── */
const form      = document.getElementById('cForm');
const submitBtn = document.getElementById('cSubmit');
const formWrap  = document.getElementById('formWrap');
const success   = document.getElementById('cSuccess');
const again     = document.getElementById('cAgain');

// Clear errors on input
['cf-name', 'cf-email', 'cf-msg'].forEach(id => {
  const field = document.getElementById(id);
  if (!field) return;
  field.querySelector('input, textarea').addEventListener('input', () => {
    field.classList.remove('err');
  });
});

function validate() {
  let ok = true;
  const nameF  = document.getElementById('cf-name');
  const emailF = document.getElementById('cf-email');
  const msgF   = document.getElementById('cf-msg');

  if (!document.getElementById('f-name').value.trim()) {
    nameF.classList.add('err'); ok = false;
  } else nameF.classList.remove('err');

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.getElementById('f-email').value.trim())) {
    emailF.classList.add('err'); ok = false;
  } else emailF.classList.remove('err');

  if (!document.getElementById('f-msg').value.trim()) {
    msgF.classList.add('err'); ok = false;
  } else msgF.classList.remove('err');

  return ok;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!validate()) return;
  submitBtn.classList.add('loading');
  submitBtn.disabled = true;
  // Replace setTimeout with real fetch() to your endpoint
  setTimeout(() => {
    formWrap.style.display = 'none';
    success.classList.add('on');
  }, 1200);
});

again.addEventListener('click', () => {
  success.classList.remove('on');
  formWrap.style.display = '';
  form.reset();
  submitBtn.classList.remove('loading');
  submitBtn.disabled = false;
});