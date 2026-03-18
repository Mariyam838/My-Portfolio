
/* ══════════════════════════════════════════
   ISO BACKGROUND GRID (same as projects.js)
══════════════════════════════════════════ */
(function(){
  const canvas = document.getElementById('bg-grid');
  const ctx = canvas.getContext('2d'); let t = 0;
  function resize(){ canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize(); window.addEventListener('resize', resize);
  const TW = 80, TH = 40;
  function iso(col, row, w, h){ return { x: w*0.5 + (col-row)*(TW*0.5), y: h*0.28 + (col+row)*(TH*0.5) }; }
  function draw(){
    const w = canvas.width, h = canvas.height; ctx.clearRect(0,0,w,h);
    for(let row=-2; row<28; row++){ for(let col=-2; col<28; col++){
      const dist = Math.sqrt((col-14)**2 + (row-14)**2);
      const fade = Math.max(0, 1 - dist/(14*1.41*0.85));
      const pulse = (Math.sin(t*0.6 - dist*0.28)*0.5 + 0.5)*fade;
      const alpha = (0.06 + pulse*0.18)*fade;
      const tl=iso(col,row,w,h), tr=iso(col+1,row,w,h), br=iso(col+1,row+1,w,h), bl=iso(col,row+1,w,h);
      ctx.beginPath(); ctx.moveTo(tl.x,tl.y); ctx.lineTo(tr.x,tr.y); ctx.lineTo(br.x,br.y); ctx.lineTo(bl.x,bl.y); ctx.closePath();
      ctx.fillStyle = `rgba(255,255,255,${pulse*0.025})`; ctx.fill();
      ctx.strokeStyle = `rgba(255,255,255,${alpha})`; ctx.lineWidth = 0.5; ctx.stroke();
    }}
    t += 0.014; requestAnimationFrame(draw);
  } draw();
})();

/* ── CURSOR ── */
const cur = document.getElementById('cur');
const curR = document.getElementById('cur-r');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cur.style.left = mx + 'px'; cur.style.top = my + 'px';
});
(function loop() {
  rx += (mx - rx) * .09; ry += (my - ry) * .09;
  curR.style.left = rx + 'px'; curR.style.top = ry + 'px';
  requestAnimationFrame(loop);
})();
document.querySelectorAll('.tile, a, button, .discipline-row').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cur-lg'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cur-lg'));
});

/* ── CLOCK ── */
function tick() {
  const d = new Date();
  document.getElementById('clock').textContent =
    d.toLocaleTimeString('en-GB', { hour:'2-digit', minute:'2-digit', second:'2-digit' }) + ' GST';
}
tick(); setInterval(tick, 1000);

/* ── CANVAS HELPER ── */
function setup(id) {
  const c = document.getElementById(id);
  if (!c) return null;
  const tile = c.closest('.tile');
  c.width = tile.offsetWidth; c.height = tile.offsetHeight;
  return { c, x: c.getContext('2d'), w: c.width, h: c.height };
}

/* C1: LIQUID CHROME WAVES */
(function () {
  const s = setup('c1'); if (!s) return;
  const { x, w, h } = s; let t = 0;
  function draw() {
    x.fillStyle = 'rgba(8,8,8,.15)'; x.fillRect(0, 0, w, h);
    for (let i = 0; i < 11; i++) {
      const y0 = h * (i + 1) / 12;
      x.beginPath(); x.moveTo(0, y0);
      for (let px = 0; px <= w; px += 3) {
        const wave = Math.sin(px * .007 + t * .55 + i * .5) * 22 + Math.sin(px * .018 + t * .38 - i * .3) * 9 + Math.sin(px * .004 + t * .22 + i) * 14;
        x.lineTo(px, y0 + wave);
      }
      const a = 0.08 + i * .028; const l = 200 + i * 5;
      x.strokeStyle = `rgba(${l},${l},${l + 10},${a})`; x.lineWidth = .9; x.stroke();
    }
    const g = x.createRadialGradient(w * .35, h * .42, 0, w * .35, h * .42, w * .3);
    g.addColorStop(0, 'rgba(255,255,255,.08)'); g.addColorStop(1, 'rgba(0,0,0,0)');
    x.fillStyle = g; x.fillRect(0, 0, w, h);
    t += .009; requestAnimationFrame(draw);
  } draw();
})();

/* C2: PARTICLE FIELD */
(function () {
  const s = setup('c2'); if (!s) return;
  const { x, w, h } = s;
  const pts = Array.from({ length: 140 }, () => ({
    px: Math.random() * w, py: Math.random() * h,
    vx: (Math.random() - .5) * .2, vy: (Math.random() - .5) * .2,
    r: Math.random() * 1.4 + .3, op: Math.random() * .5 + .12
  }));
  function draw() {
    x.fillStyle = 'rgba(8,8,8,.11)'; x.fillRect(0, 0, w, h);
    pts.forEach((a, i) => {
      pts.slice(i + 1, i + 8).forEach(b => {
        const d = Math.hypot(a.px - b.px, a.py - b.py);
        if (d < 90) { x.beginPath(); x.moveTo(a.px, a.py); x.lineTo(b.px, b.py); x.strokeStyle = `rgba(255,255,255,${.06 * (1 - d / 90)})`; x.lineWidth = .4; x.stroke(); }
      });
      x.beginPath(); x.arc(a.px, a.py, a.r, 0, Math.PI * 2); x.fillStyle = `rgba(255,255,255,${a.op})`; x.fill();
      a.px += a.vx; a.py += a.vy;
      if (a.px < 0) a.px = w; if (a.px > w) a.px = 0; if (a.py < 0) a.py = h; if (a.py > h) a.py = 0;
    });
    requestAnimationFrame(draw);
  } draw();
})();

/* C3: PERSPECTIVE GRID */
(function () {
  const s = setup('c3'); if (!s) return;
  const { x, w, h } = s; let t = 0;
  function draw() {
    x.fillStyle = 'rgba(8,8,8,.12)'; x.fillRect(0, 0, w, h);
    const vx = w * .5, vy = h * .36;
    for (let i = 1; i < 22; i++) { const p = i / 22; const y = vy + (h - vy) * Math.pow(p, 1.45); x.beginPath(); x.moveTo(0, y); x.lineTo(w, y); x.strokeStyle = `rgba(255,255,255,${.04 + p * .13})`; x.lineWidth = .5; x.stroke(); }
    for (let i = 0; i <= 20; i++) { const bx = w * (i / 20); x.beginPath(); x.moveTo(vx, vy); x.lineTo(bx, h); x.strokeStyle = `rgba(255,255,255,${.04 + Math.abs(i / 20 - .5) * .1})`; x.lineWidth = .5; x.stroke(); }
    const sy = vy + (h - vy) * (Math.sin(t * .33) * .5 + .5);
    const sg = x.createLinearGradient(0, sy - 4, 0, sy + 4);
    sg.addColorStop(0, 'rgba(255,255,255,0)'); sg.addColorStop(.5, 'rgba(255,255,255,.45)'); sg.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = sg; x.fillRect(0, sy - 5, w, 10);
    t += .006; requestAnimationFrame(draw);
  } draw();
})();

/* C4: GLITCH STATIC */
(function () {
  const s = setup('c4'); if (!s) return;
  const { x, w, h } = s; let t = 0;
  function draw() {
    x.fillStyle = 'rgba(8,8,8,.35)'; x.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 3) { x.fillStyle = 'rgba(0,0,0,.06)'; x.fillRect(0, y, w, 1); }
    if (Math.random() < .12) { const gy = Math.random() * h, gh = Math.random() * 4 + 1, gx = Math.random() * w * .35; x.fillStyle = `rgba(255,255,255,${Math.random() * .15})`; x.fillRect(gx, gy, w - gx, gh); }
    const cols = Math.floor(w / 26);
    for (let i = 0; i < cols; i++) { if (Math.random() < .055) { x.fillStyle = `rgba(255,255,255,${Math.random() * .09})`; x.fillRect(i * 26, Math.random() * h, 24, Math.random() * h * .32); } }
    const ly = (t * 36) % h;
    const lg = x.createLinearGradient(0, ly - 10, 0, ly + 10);
    lg.addColorStop(0, 'rgba(255,255,255,0)'); lg.addColorStop(.5, 'rgba(255,255,255,.28)'); lg.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = lg; x.fillRect(0, ly - 10, w, 20);
    t += .007; requestAnimationFrame(draw);
  } draw();
})();

/* C5: LIGHT BARS */
(function () {
  const s = setup('c5'); if (!s) return;
  const { x, w, h } = s; let t = 0;
  const bars = [{y:.33,bw:.74,sp:.37,ph:0},{y:.47,bw:.54,sp:.27,ph:1.3},{y:.59,bw:.38,sp:.45,ph:2.5},{y:.70,bw:.24,sp:.32,ph:.9}];
  function draw() {
    x.fillStyle = 'rgba(8,8,8,.2)'; x.fillRect(0, 0, w, h);
    const bg = x.createLinearGradient(0,0,0,h); bg.addColorStop(0,'rgba(14,14,18,.85)'); bg.addColorStop(1,'rgba(5,5,8,.85)'); x.fillStyle=bg; x.fillRect(0,0,w,h);
    bars.forEach((b,i) => {
      const yo = Math.sin(t*b.sp+b.ph)*h*.02; const cy=(b.y+.06)*h+yo; const bh=2.8+i*1.4; const hw=b.bw*w*.5; const cx2=w*.5;
      const g=x.createLinearGradient(cx2-hw,cy,cx2+hw,cy);
      g.addColorStop(0,'rgba(255,255,255,0)'); g.addColorStop(.25,`rgba(255,255,255,${.28-i*.05})`); g.addColorStop(.5,`rgba(255,255,255,${.58-i*.08})`); g.addColorStop(.75,`rgba(255,255,255,${.28-i*.05})`); g.addColorStop(1,'rgba(255,255,255,0)');
      x.fillStyle=g; x.fillRect(cx2-hw,cy-bh/2,hw*2,bh);
    });
    t+=.006; requestAnimationFrame(draw);
  } draw();
})();

/* C6: WIREFRAME SPHERE */
(function () {
  const s = setup('c6'); if (!s) return;
  const { x, w, h } = s; let t = 0;
  const R = Math.min(w,h)*.3; const cx2=w*.5,cy2=h*.5; const lat=14,lon=18;
  function proj(px,py,pz,rx,ry){
    const x1=px*Math.cos(ry)-pz*Math.sin(ry),z1=px*Math.sin(ry)+pz*Math.cos(ry);
    const y2=py*Math.cos(rx)-z1*Math.sin(rx),z2=py*Math.sin(rx)+z1*Math.cos(rx);
    const sc=600/(600+z2+200); return{px:cx2+x1*sc,py:cy2+y2*sc};
  }
  function draw(){
    x.fillStyle='rgba(8,8,8,.14)'; x.fillRect(0,0,w,h);
    const rx=t*.18,ry=t*.25;
    for(let i=0;i<lat;i++){
      const phi=(i/lat)*Math.PI; const pts=[];
      for(let j=0;j<=lon*2;j++){const th=(j/(lon*2))*Math.PI*2; pts.push(proj(R*Math.sin(phi)*Math.cos(th),-R*Math.cos(phi),R*Math.sin(phi)*Math.sin(th),rx,ry));}
      x.beginPath(); pts.forEach((p,i2)=>{i2===0?x.moveTo(p.px,p.py):x.lineTo(p.px,p.py);}); x.strokeStyle='rgba(255,255,255,.05)'; x.lineWidth=.5; x.stroke();
    }
    for(let j=0;j<lon;j++){
      const th=(j/lon)*Math.PI*2; const pts=[];
      for(let i=0;i<=lat*2;i++){const phi=(i/(lat*2))*Math.PI; pts.push(proj(R*Math.sin(phi)*Math.cos(th),-R*Math.cos(phi),R*Math.sin(phi)*Math.sin(th),rx,ry));}
      x.beginPath(); pts.forEach((p,i)=>{i===0?x.moveTo(p.px,p.py):x.lineTo(p.px,p.py);}); x.strokeStyle='rgba(255,255,255,.05)'; x.lineWidth=.5; x.stroke();
    }
    const g=x.createRadialGradient(cx2,cy2,0,cx2,cy2,R*.42);
    g.addColorStop(0,'rgba(255,255,255,.08)'); g.addColorStop(1,'rgba(0,0,0,0)'); x.fillStyle=g; x.fillRect(0,0,w,h);
    t+=.005; requestAnimationFrame(draw);
  } draw();
})();

/* C7: FLOW FIELD */
(function () {
  const s = setup('c7'); if (!s) return;
  const { x, w, h } = s;
  const agents = Array.from({length:420},()=>({px:Math.random()*w,py:Math.random()*h,len:0,maxLen:Math.random()*75+28,dead:false}));
  let t=0;
  function noise(ax,ay,az){return Math.sin(ax*1.2+az)*Math.cos(ay*1.0+az*.6)*.5+Math.sin(ax*.7-ay*1.3+az*.4)*.5;}
  x.fillStyle='#0d0d0d'; x.fillRect(0,0,w,h);
  function draw(){
    x.fillStyle='rgba(8,8,8,.02)'; x.fillRect(0,0,w,h);
    agents.forEach(a=>{
      if(a.dead){a.px=Math.random()*w;a.py=Math.random()*h;a.len=0;a.dead=false;return;}
      const angle=noise(a.px/165,a.py/165,t*.003)*Math.PI*2.6;
      const nx=a.px+Math.cos(angle)*1.1,ny=a.py+Math.sin(angle)*1.1;
      const ed=Math.min(a.px,w-a.px,a.py,h-a.py);
      x.beginPath();x.moveTo(a.px,a.py);x.lineTo(nx,ny);
      x.strokeStyle=`rgba(255,255,255,${Math.min(.16,ed/75*.16)})`;x.lineWidth=.65;x.stroke();
      a.px=nx;a.py=ny;a.len++;
      if(a.len>a.maxLen||nx<0||nx>w||ny<0||ny>h)a.dead=true;
    });
    t++;requestAnimationFrame(draw);
  }draw();
})();

/* C8: CONCENTRIC RINGS */
(function () {
  const s = setup('c8'); if (!s) return;
  const { x, w, h } = s; let t=0;
  function draw(){
    x.fillStyle='rgba(8,8,8,.14)';x.fillRect(0,0,w,h);
    const cx2=w*.5,cy2=h*.5;
    for(let i=0;i<8;i++){const r=(i+1)*(Math.min(w,h)*.06)+Math.sin(t*.4+i)*4;x.beginPath();x.arc(cx2,cy2,r,0,Math.PI*2);x.strokeStyle=`rgba(255,255,255,${.04+.06*(8-i)/8+Math.sin(t*.5+i)*.02})`;x.lineWidth=.7;x.stroke();}
    x.beginPath();x.arc(cx2,cy2,2,0,Math.PI*2);x.fillStyle='rgba(255,255,255,.5)';x.fill();
    t+=.008;requestAnimationFrame(draw);
  }draw();
})();

/* C9: GRID MESH */
(function () {
  const s = setup('c9'); if (!s) return;
  const { x, w, h } = s; let t=0;
  const cols=20,rows=16;
  function draw(){
    x.fillStyle='rgba(8,8,8,.12)';x.fillRect(0,0,w,h);
    const cw=w/cols,rh=h/rows;
    for(let i=0;i<=cols;i++){x.beginPath();for(let j=0;j<=rows;j++){const px2=i*cw+Math.sin(j*.4+t*.5+i*.3)*6;j===0?x.moveTo(px2,j*rh):x.lineTo(px2,j*rh);}x.strokeStyle=`rgba(255,255,255,${.04+Math.abs(Math.sin(i*.3+t*.2))*.06})`;x.lineWidth=.5;x.stroke();}
    for(let j=0;j<=rows;j++){x.beginPath();for(let i=0;i<=cols;i++){const py2=j*rh+Math.sin(i*.35+t*.4+j*.25)*5;i===0?x.moveTo(i*cw,py2):x.lineTo(i*cw,py2);}x.strokeStyle=`rgba(255,255,255,${.04+Math.abs(Math.sin(j*.25+t*.15))*.06})`;x.lineWidth=.5;x.stroke();}
    t+=.01;requestAnimationFrame(draw);
  }draw();
})();

/* C10: DIAGONAL STREAKS */
(function () {
  const s = setup('c10'); if (!s) return;
  const { x, w, h } = s;
  const streaks=Array.from({length:30},()=>({x:Math.random()*w*1.5-w*.25,speed:Math.random()*1.2+.4,len:Math.random()*80+40,op:Math.random()*.15+.04,width:Math.random()*.8+.3}));
  function draw(){
    x.fillStyle='rgba(8,8,8,.18)';x.fillRect(0,0,w,h);
    streaks.forEach(s2=>{s2.x+=s2.speed;if(s2.x>w*1.3)s2.x=-w*.3;x.beginPath();x.moveTo(s2.x,0);x.lineTo(s2.x-s2.len,h);x.strokeStyle=`rgba(255,255,255,${s2.op})`;x.lineWidth=s2.width;x.stroke();});
    requestAnimationFrame(draw);
  }draw();
})();

/* C11: GLASS PLANES */
(function () {
  const s = setup('c11'); if (!s) return;
  const { x, w, h } = s; let t=0;
  function draw(){
    x.fillStyle='rgba(8,8,8,.16)';x.fillRect(0,0,w,h);
    [{cx:.5,cy:.5,rw:.55,rh:.65,rot:-.12,op:.18},{cx:.5,cy:.5,rw:.42,rh:.52,rot:.06,op:.12},{cx:.5,cy:.5,rw:.28,rh:.36,rot:.0,op:.22}].forEach((p,i)=>{
      const drift=Math.sin(t*.3+i)*8;x.save();x.translate(w*p.cx,h*p.cy+drift);x.rotate(p.rot+Math.sin(t*.15+i)*.02);
      const rw=w*p.rw*.5,rh=h*p.rh*.5;x.strokeStyle=`rgba(255,255,255,${p.op})`;x.lineWidth=.8;x.strokeRect(-rw,-rh,rw*2,rh*2);x.restore();
    });
    t+=.007;requestAnimationFrame(draw);
  }draw();
})();

/* C12: RADIAL BURST */
(function () {
  const s = setup('c12'); if (!s) return;
  const { x, w, h } = s; let t=0;
  const rays=Array.from({length:36},(_,i)=>({angle:(i/36)*Math.PI*2,len:Math.random()*.4+.3,op:Math.random()*.12+.04,speed:Math.random()*.003+.001}));
  function draw(){
    x.fillStyle='rgba(8,8,8,.14)';x.fillRect(0,0,w,h);
    const cx2=w*.5,cy2=h*.5;
    rays.forEach(r=>{r.angle+=r.speed;const maxR=Math.min(w,h)*r.len;x.beginPath();x.moveTo(cx2,cy2);x.lineTo(cx2+Math.cos(r.angle)*maxR,cy2+Math.sin(r.angle)*maxR);x.strokeStyle=`rgba(255,255,255,${r.op+Math.sin(t*.5+r.angle)*.03})`;x.lineWidth=.5;x.stroke();});
    const g=x.createRadialGradient(cx2,cy2,0,cx2,cy2,Math.min(w,h)*.25);g.addColorStop(0,'rgba(255,255,255,.1)');g.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=g;x.fillRect(0,0,w,h);
    t+=.008;requestAnimationFrame(draw);
  }draw();
})();

/* C13: TOPOGRAPHIC CONTOURS */
(function () {
  const s = setup('c13'); if (!s) return;
  const { x, w, h } = s; let t=0;
  function nz(nx,ny,nz2){return Math.sin(nx*1.4+nz2)*Math.cos(ny*1.2+nz2*.7)*.5+Math.sin(nx*.9-ny*.8+nz2*.5)*.5;}
  function draw(){
    x.fillStyle='rgba(8,8,8,.12)';x.fillRect(0,0,w,h);
    for(let lv=0;lv<12;lv++){const threshold=-1+lv*(2/12);x.beginPath();let started=false;for(let ix=0;ix<=w;ix+=4){const val=nz(ix/120,0,t*.006+lv*.3);const iy=h*.5+(val-threshold)*h*.35;if(!started){x.moveTo(ix,iy);started=true;}else x.lineTo(ix,iy);}x.strokeStyle=`rgba(255,255,255,${.05+lv*.012})`;x.lineWidth=.6;x.stroke();}
    t+=.6;requestAnimationFrame(draw);
  }draw();
})();
