/* ══════════════════════════════════════════
   COLLECTION.JS — Mariyam Ashraf
══════════════════════════════════════════ */

/* ── DATA ── */
const CATS = {
  edit:       { dot: '#7eb8f7', l: 'Photo Edit' },
  poster:     { dot: '#e8c87a', l: 'Poster' },
  cover:      { dot: '#e8987a', l: 'Cover Art' },
  generative: { dot: '#9ef77e', l: 'Generative' },
};

const ITEMS = [
  { id:1, title:'Urban', sub:'Drift', cat:'edit', tags:['Colour Grade','Glow'], desc:'Aerial cityscape transformed through icy blue grading and cinematic motion blur.',                   pal:['#0d0020','#1a0040','#2d0060'], acc:'#b87ef7', blob:['#d4b8f7','#c4a0f0'] ,iframe:'https://www.canva.com/design/DAHETk001ow/MyHFD87OFeibItdmNOssJA/view?embed'},
  { id:2,  title:'Cyber', sub:'Security', cat:'poster', tags:['Typography','Minimal'], desc:'A bold infographic exploring the fundamentals of cybersecurity and its impact on the modern world.',    pal:['#050514','#0a0a28','#0f0f40'], acc:'#7eb8f7', blob:['#b8d8f7','#a8c8f0'],iframe:'https://www.canva.com/design/DAHEJfVU5uk/waTch_ZwLvYpMf3vxbhZGg/view?embed' },
  { id:3, title:'Innovate', sub:'Web', cat:'cover', tags:['Warm','Album Art'], desc:'A bold tech poster fusing neon aesthetics with web development culture — design, develop, disrupt.',                              pal:['#1a0a00','#2e1400','#3d1c00'], acc:'#f7c97e', blob:['#f7e0b0','#f0d090'],iframe:'https://www.canva.com/design/DAHETV_kO_c/6mNsdBpo_Ado6Ew0gHUgpA/view?embed' },
  { id:4, title:'Double', sub:'Exposure', cat:'edit', tags:['Logo','Fluid'], desc:'A dreamy double exposure portrait blending a woman with a tropical landscape and ocean reflections.',                           pal:['#06181a','#0d2a2d','#0f3236'], acc:'#7ef7c9', blob:['#a8f0d8','#88e8c8'] ,iframe:'https://www.canva.com/design/DAHETo2gxJ8/5LGT0Iwei43GD0t-vsKLcA/view?embed' },
  { id:5, title:'Golden', sub:'Mane', cat:'edit', tags:['Glitch','Portrait'], desc:'A powerful double exposure merging a lion portrait with a fiery sunset over still water.',                       pal:['#0f0008','#200010','#300018'], acc:'#f7907e', blob:['#f7c0b0','#f0a898'],iframe:'https://www.canva.com/design/DAHET8FIE38/zXCwEgeEpNJmM5OH0rdIYg/view?embed' },
  { id:6, title:'Creative', sub:'Computing', cat:'poster', tags:['Bauhaus','Geometric'], desc:'An immersive infographic exploring the future of creative computing — from programming fundamentals to virtual reality.',       pal:['#080808','#141414','#1e1e1e'], acc:'#e0e0e0', blob:['#e8e4dc','#d8d0c8'],iframe:'https://www.canva.com/design/DAHEJbBKCt0/TmlRgwk3LjKPwtH4gqfwUA/view?embed' },
  { id:7, title:'Robotics', sub:'Automation', cat:'cover', tags:['Pastel','Ambient'], desc:'A striking split poster visualising the rise of AI-controlled machines and the future of intelligent industry.',                     pal:['#080818','#10102a','#181840'], acc:'#9eb8f7', blob:['#c0d0f0','#b0c8e8'],iframe:'https://www.canva.com/design/DAHET5o6E2o/IlS44suNvo9nQSxXMISsQQ/view?embed' },
  { id:8, title:'Artificial', sub:'Intelligence', cat:'poster', tags:['Wordmark','Prism'], desc:'A futuristic infographic showcasing how AI is reshaping daily life, creative workflows, and intelligent automation.',                        pal:['#040418','#080830','#0d0d48'], acc:'#c87ef7', blob:['#d8b8f7','#c8a0f0'] ,iframe:'https://www.canva.com/design/DAHEJOYLSAc/IYZnHsje0NbVwfGO1iZJ5w/view?embed'},
  { id:9,  title:'FLOATING',  sub:' PARTICLES',   cat:'generative', tags:['p5.js','Live'], desc:'A live generative sketch built in p5.js.',       pal:['#080018','#0d0030','#120040'], acc:'#a78bfa', blob:['#c4b0f7','#b09cf0'], iframe:'https://editor.p5js.org/mariyamaashraf/full/Qm7MPx5j8' },
  { id:15, title:'Elegant', sub:'Symmetric Lines',   cat:'generative', tags:['p5.js','Live'], desc:'A live generative sketch built in p5.js.',       pal:['#000d18','#001428','#001e3a'], acc:'#7eb8f7', blob:['#b0c8f7','#98b8f0'], iframe:'https://editor.p5js.org/mariyamaashraf/full/DMZg29CFp' },
  { id:16, title:'Gainful', sub:' anatosaurus', cat:'generative', tags:['p5.js','Live'], desc:'A live generative sketch built in p5.js.',       pal:['#080018','#120020','#1a0030'], acc:'#f7b8e8', blob:['#f0c8e8','#e8b0d8'], iframe:'https://editor.p5js.org/mariyamaashraf/full/6Hjsc5hHa' },
  { id:17, title:'Rotating Hexagon', sub:' Generative Art',  cat:'generative', tags:['p5.js','Live'], desc:'A live generative sketch built in p5.js.',       pal:['#001810','#002018','#003020'], acc:'#9ef77e', blob:['#b0f7c8','#98f0b8'], iframe:'https://editor.p5js.org/mariyamaashraf/full/HI9BZVE2g' },
  { id:18, title:'Spirograph', sub:' pattern',  cat:'generative', tags:['p5.js','Live'], desc:'A live generative sketch built in p5.js.',       pal:['#180800','#281000','#381800'], acc:'#f7c97e', blob:['#f7e0b0','#f0d090'], iframe:'https://editor.p5js.org/mariyamaashraf/full/WOgbdS-eo' },
  { id:19, title:'Artificial', sub:'Intelligence', cat:'poster',  tags:['Canva','Design'],           desc:'A bold poster exploring the theme of artificial intelligence.',                           pal:['#050514','#0a0a28','#0f0f40'], acc:'#7eb8f7', blob:['#b8d8f7','#a8c8f0'], iframe:'https://www.canva.com/design/DAHEStKArLY/Ol_7OHlNzEN5FCGoQAtQkA/view?embed' },
  { id:20, title:'Software', sub:'Development', cat:'poster', tags:['Canva','Design'], desc:'A clean service poster highlighting tailored software solutions, 24/7 support, and future-ready tech innovation.',         pal:['#0a0500','#1a0c00','#261200'], acc:'#f7c97e', blob:['#f7e0b0','#f0d090'], iframe:'https://www.canva.com/design/DAHEJOmGSgE/UQj7ejna6kVVTh3itZ9cVg/view?embed' },
  { id:10, title:'White', sub:'Reverie', cat:'edit', tags:['Composite','Cinematic'], desc:'An ethereal black and white edit capturing a woman in flowing white beside a majestic horse.',                              pal:['#0a0810','#160d1a','#200e25'], acc:'#e89ef7', blob:['#e0b8f8','#d0a0f0'],iframe:'https://www.canva.com/design/DAHET1nZZSs/OMe4ur8KG9M3LiWbkHqzrA/view?embed' },
  { id:11, title:'Future', sub:'Intelligence', cat:'cover', tags:['Collage','Print'], desc:'A cinematic poster exploring the power of AI technology through a robotic hand reaching into a neon holographic interface.',                            pal:['#0a0000','#180000','#200808'], acc:'#f78e7e', blob:['#f7c0b0','#f0a898'] ,iframe:'https://www.canva.com/design/DAHET3t5-jM/V69dd8mPYstEtUThszuM1A/view?embed' },
  { id:12, title:'Machine', sub:'Learning', cat:'poster', tags:['Icons','System'], desc:'A neon-lit infographic unpacking machine learning — from training and algorithms to real-world applications.',                  pal:['#060614','#0c0c24','#141436'], acc:'#7eb8f7', blob:['#b8d0f8','#a0c0f0'],iframe:'https://www.canva.com/design/DAHETahIsnc/W11iSeIjboNMWwUfZxL6-w/view?embed' },
  { id:13, title:'Sweet', sub:'Moments', cat:'edit', tags:['Glitch','Portrait'], desc:'A selective colour edit isolating vibrant macarons and heart-shaped coffee cups against a moody monochrome backdrop.',                       pal:['#0f0008','#200010','#300018'], acc:'#f7907e', blob:['#f7c0b0','#f0a898'],iframe:'https://www.canva.com/design/DAHET6JqiwQ/79v2Gowpgt2RGs6ap7O2IQ/view?embed' },
  { id:11, title:'Future', sub:'Technology', cat:'cover', tags:['Collage','Print'], desc:'A cyberpunk-inspired poster revealing the power of artificial intelligence — smarter solutions, faster decisions, limitless creativity.',                        pal:['#0a0000','#180000','#200808'], acc:'#f78e7e', blob:['#f7c0b0','#f0a898'] ,iframe:'https://www.canva.com/design/DAHET1rXwYU/Za3xZnp4Sb975oAnkQ2tfA/view?embed' },
];

let filt = [...ITEMS], ci = 0, busy = false;

/* ── THUMBNAIL ART FACTORY ── */
function ha(h, a) {
  const [r, g, b] = [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
  return `rgba(${r},${g},${b},${a})`;
}

function mkArt(it, W = 480, H = 640) {
  const cv = document.createElement('canvas'); cv.width = W; cv.height = H;
  const x = cv.getContext('2d');
  const bg = x.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, it.pal[0]); bg.addColorStop(.5, it.pal[1]); bg.addColorStop(1, it.pal[2]);
  x.fillStyle = bg; x.fillRect(0, 0, W, H);
  for (let i = 0; i < 9000; i++) { x.fillStyle = `rgba(255,255,255,${Math.random() * .028})`; x.fillRect(Math.random() * W, Math.random() * H, 1, 1); }

  if (it.cat === 'poster') {
    x.font = `800 ${H * .52}px Inter,sans-serif`; x.fillStyle = ha(it.acc, .065); x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(String(it.id).padStart(2, '0'), W * .5, H * .5);
    for (let i = 0; i < 16; i++) { const op = .1 + Math.random() * .18; const lw = W * (.15 + Math.random() * .7); x.fillStyle = ha(it.acc, op); x.fillRect(W * .05 + Math.random() * W * .1, H * (.07 + i * .058), lw, 1 + Math.random() * 1.2); }
    const tg = x.createLinearGradient(0, H * .55, 0, H); tg.addColorStop(0, 'rgba(0,0,0,0)'); tg.addColorStop(1, 'rgba(0,0,0,.6)'); x.fillStyle = tg; x.fillRect(0, 0, W, H);
    x.font = `700 ${H * .058}px Inter,sans-serif`; x.fillStyle = ha('#fff', .85); x.textAlign = 'left'; x.textBaseline = 'top'; x.fillText(it.title.toUpperCase() + ' ' + it.sub.toUpperCase(), W * .07, H * .07);
    x.strokeStyle = ha(it.acc, .2); x.lineWidth = .8; x.strokeRect(W * .045, H * .045, W * .91, H * .91);

  } else if (it.cat === 'generative') {
    const g2 = x.createRadialGradient(W * .5, H * .42, 0, W * .5, H * .5, W * .7);
    g2.addColorStop(0, ha(it.acc, .45)); g2.addColorStop(.5, ha(it.acc, .12)); g2.addColorStop(1, 'rgba(0,0,0,0)');
    x.fillStyle = g2; x.fillRect(0, 0, W, H);
    x.strokeStyle = ha(it.acc, .55); x.lineWidth = 1.2; x.beginPath();
    for (let i = 0; i <= W; i += 2) { const sy = H * .5 + Math.sin(i * .04) * H * .18 + Math.sin(i * .09) * H * .08; i === 0 ? x.moveTo(i, sy) : x.lineTo(i, sy); } x.stroke();
    x.strokeStyle = ha(it.acc, .25); x.lineWidth = .7; x.beginPath();
    for (let i = 0; i <= W; i += 2) { const sy = H * .5 + Math.sin(i * .03 + 1) * H * .22 + Math.cos(i * .07) * H * .06; i === 0 ? x.moveTo(i, sy) : x.lineTo(i, sy); } x.stroke();
    const vg = x.createLinearGradient(0, H * .6, 0, H); vg.addColorStop(0, 'rgba(0,0,0,0)'); vg.addColorStop(1, 'rgba(0,0,0,.75)'); x.fillStyle = vg; x.fillRect(0, 0, W, H);
    x.font = `300 ${H * .032}px DM Mono,monospace`; x.fillStyle = ha('#fff', .35); x.textAlign = 'left'; x.textBaseline = 'top'; x.fillText('p5.js / live', W * .07, H * .07);
    x.font = `300 ${H * .046}px Cormorant Garamond,serif`; x.fillStyle = ha('#fff', .82); x.textAlign = 'center'; x.textBaseline = 'bottom'; x.fillText(it.title + ' ' + it.sub, W * .5, H * .93);

  } else if (it.cat === 'edit') {
    const g2 = x.createRadialGradient(W * .38, H * .36, 0, W * .5, H * .48, W * .75);
    g2.addColorStop(0, ha(it.acc, .32)); g2.addColorStop(.5, ha(it.acc, .09)); g2.addColorStop(1, 'rgba(0,0,0,0)');
    x.fillStyle = g2; x.fillRect(0, 0, W, H);
    x.fillStyle = 'rgba(0,0,0,.04)'; for (let y = 0; y < H; y += 3) x.fillRect(0, y, W, 1.5);
    const v = x.createRadialGradient(W * .5, H * .5, H * .06, W * .5, H * .5, H * .92); v.addColorStop(0, 'rgba(0,0,0,0)'); v.addColorStop(1, 'rgba(0,0,0,.72)'); x.fillStyle = v; x.fillRect(0, 0, W, H);
    x.font = `200 ${H * .038}px Inter,sans-serif`; x.fillStyle = ha('#fff', .2); x.textAlign = 'center'; x.textBaseline = 'bottom'; x.fillText((it.title + ' ' + it.sub).toUpperCase(), W * .5, H * .93);

  } else if (it.cat === 'cover') {
    const cx = W * .5, cy = H * .42, r = W * .32;
    const glo = x.createRadialGradient(cx, cy, 0, cx, cy, r * 2.1); glo.addColorStop(0, ha(it.acc, .38)); glo.addColorStop(.6, ha(it.acc, .1)); glo.addColorStop(1, 'rgba(0,0,0,0)');
    x.fillStyle = glo; x.fillRect(0, 0, W, H);
    for (let i = 7; i > 0; i--) { x.beginPath(); x.arc(cx, cy, r * (i / 7), 0, Math.PI * 2); x.strokeStyle = ha(it.acc, .14 + i * .02); x.lineWidth = .7; x.stroke(); }
    x.beginPath(); x.arc(cx, cy, r * .26, 0, Math.PI * 2);
    const cf = x.createRadialGradient(cx, cy, 0, cx, cy, r * .26); cf.addColorStop(0, ha(it.acc, .4)); cf.addColorStop(1, ha(it.acc, .12)); x.fillStyle = cf; x.fill();
    const sg = x.createLinearGradient(0, H * .58, 0, H); sg.addColorStop(0, 'rgba(0,0,0,0)'); sg.addColorStop(1, 'rgba(0,0,0,.72)'); x.fillStyle = sg; x.fillRect(0, 0, W, H);
    x.font = `300 ${H * .046}px Cormorant Garamond,serif`; x.fillStyle = ha('#fff', .85); x.textAlign = 'center'; x.textBaseline = 'bottom'; x.fillText(it.title + ' ' + it.sub, W * .5, H * .93);
    x.font = `300 ${H * .026}px DM Mono,monospace`; x.fillStyle = ha('#fff', .28); x.textAlign = 'center'; x.textBaseline = 'bottom'; x.fillText(it.tags.join('  ·  ').toUpperCase(), W * .5, H * .975);

  } else {
    x.strokeStyle = ha(it.acc, .09); x.lineWidth = .4;
    for (let px = 0; px < W; px += 44) { x.beginPath(); x.moveTo(px, 0); x.lineTo(px, H); x.stroke(); }
    for (let py = 0; py < H; py += 44) { x.beginPath(); x.moveTo(0, py); x.lineTo(W, py); x.stroke(); }
    const bx = W * .28, by = H * .28, bw = W * .44, bh = W * .44;
    const br = x.createLinearGradient(bx, by, bx + bw, by + bh); br.addColorStop(0, ha(it.acc, .2)); br.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = br; x.fillRect(bx, by, bw, bh);
    x.strokeStyle = ha(it.acc, .55); x.lineWidth = 1.2; x.strokeRect(bx, by, bw, bh);
    x.strokeStyle = ha(it.acc, .12); x.lineWidth = .6; x.strokeRect(bx - 18, by - 18, bw + 36, bh + 36);
    const ini = (it.title + it.sub).split('').filter(c => c === c.toUpperCase() && c.trim()).slice(0, 2).join('');
    x.font = `600 ${W * .12}px Inter,sans-serif`; x.fillStyle = ha('#fff', .55); x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(ini || it.title.slice(0, 2).toUpperCase(), W * .5, by + bh * .5);
    const sg = x.createLinearGradient(0, H * .62, 0, H); sg.addColorStop(0, 'rgba(0,0,0,0)'); sg.addColorStop(1, 'rgba(0,0,0,.58)'); x.fillStyle = sg; x.fillRect(0, 0, W, H);
    x.font = `500 ${H * .042}px Inter,sans-serif`; x.fillStyle = ha('#fff', .72); x.textAlign = 'left'; x.textBaseline = 'top'; x.fillText(it.title.toUpperCase(), W * .07, H * .07);
  }
  x.font = `700 ${H * .38}px Inter,sans-serif`; x.fillStyle = 'rgba(255,255,255,.016)'; x.textAlign = 'right'; x.textBaseline = 'bottom'; x.fillText(String(it.id).padStart(2, '0'), W * .97, H * .98);
  return cv;
}

const CVS = {};
ITEMS.forEach(it => { CVS[it.id] = mkArt(it); });

/* ── LIVE P5 SKETCHES ── */
const SKETCHES = {

  lissajous: function(p) {
    let t = 0, trail = [], hueShift = 0;
    p.setup = function() {
      p.createCanvas(p.windowWidth > 600 ? 360 : 260, p.windowHeight > 600 ? 480 : 340);
      p.colorMode(p.HSB, 360, 255, 255, 255);
      p.background(8); p.strokeWeight(1.2);
    };
    p.draw = function() {
      p.fill(8, 0, 0, 10); p.noStroke(); p.rect(0, 0, p.width, p.height);
      const cx = p.width / 2, cy = p.height / 2;
      const a = p.map(p.mouseX, 0, p.windowWidth, 1, 5);
      const b = p.map(p.mouseY, 0, p.windowHeight, 1, 5);
      const sc = p.min(p.width, p.height) * .38;
      const x = cx + p.sin(a * t) * sc, y = cy + p.cos(b * t) * sc;
      trail.push({ x, y }); if (trail.length > 800) trail.shift();
      for (let i = 1; i < trail.length; i++) {
        const al = p.map(i, 0, trail.length, 0, 200);
        p.stroke((hueShift + i * .2) % 360, 200, 255, al);
        p.line(trail[i - 1].x, trail[i - 1].y, trail[i].x, trail[i].y);
      }
      t += 0.018; hueShift += 0.1;
    };
    p.mousePressed = function() { trail = []; t = 0; p.background(8); };
  },

  starfield: function(p) {
    let stars = [];
    p.setup = function() {
      p.createCanvas(p.windowWidth > 600 ? 360 : 260, p.windowHeight > 600 ? 480 : 340);
      p.colorMode(p.HSB, 360, 255, 255, 255);
      for (let i = 0; i < 300; i++) stars.push({ x: p.random(-p.width, p.width), y: p.random(-p.height, p.height), z: p.random(p.width), pz: 0 });
    };
    p.draw = function() {
      p.background(0, 0, 8); p.translate(p.width / 2, p.height / 2);
      const speed = p.map(p.mouseX, 0, p.windowWidth, 1, 20);
      for (const s of stars) {
        s.pz = s.z; s.z -= speed;
        if (s.z < 1) { s.x = p.random(-p.width, p.width); s.y = p.random(-p.height, p.height); s.z = p.width; s.pz = s.z; }
        const sx = p.map(s.x / s.z, 0, 1, 0, p.width), sy = p.map(s.y / s.z, 0, 1, 0, p.height);
        const px2 = p.map(s.x / s.pz, 0, 1, 0, p.width), py2 = p.map(s.y / s.pz, 0, 1, 0, p.height);
        const br = p.map(s.z, 0, p.width, 255, 80), sw = p.map(s.z, 0, p.width, 2.5, 0.3);
        p.stroke(220, 120, br, 220); p.strokeWeight(sw); p.line(px2, py2, sx, sy);
      }
    };
    p.mousePressed = function() { stars.forEach(s => { s.z = p.random(p.width); s.pz = s.z; }); };
  },

  spirograph: function(p) {
    let t = 0, points = [], col = 220;
    p.setup = function() {
      p.createCanvas(p.windowWidth > 600 ? 360 : 260, p.windowHeight > 600 ? 480 : 340);
      p.colorMode(p.HSB, 360, 255, 255, 255);
      p.background(8); p.strokeWeight(1.1);
    };
    p.draw = function() {
      p.fill(8, 0, 0, 14); p.noStroke(); p.rect(0, 0, p.width, p.height);
      p.translate(p.width / 2, p.height / 2);
      const maxR = p.min(p.width, p.height) * .28;
      const R = maxR;
      const r = p.map(p.mouseX, 0, p.windowWidth, 10, maxR * .85);
      const d = p.map(p.mouseY, 0, p.windowHeight, 10, maxR);
      const x = (R - r) * p.cos(t) + d * p.cos(((R - r) / r) * t);
      const y = (R - r) * p.sin(t) - d * p.sin(((R - r) / r) * t);
      points.push({ x, y }); if (points.length > 1800) points.shift();
      for (let i = 1; i < points.length; i++) {
        const h = (col + p.map(i, 0, points.length, 0, 80)) % 360;
        const a = p.map(i, 0, points.length, 20, 200);
        p.stroke(h, 200, 255, a); p.line(points[i - 1].x, points[i - 1].y, points[i].x, points[i].y);
      }
      t += 0.05;
    };
    p.mousePressed = function() { col = p.random(360); points = []; t = 0; p.background(8); };
  }

};

/* ── BUILD ── */
function buildAll() { buildSlides(); buildList(); sync(0); }

const P5INST = {};

function buildSlides() {
  Object.values(P5INST).forEach(p => p.remove());
  for (const k in P5INST) delete P5INST[k];

  document.getElementById('slides').innerHTML = '';
  filt.forEach((it, i) => {
    const m = CATS[it.cat] || { dot: '#888', l: it.cat };
    const isIframe = !!it.iframe;
    const isGen    = it.cat === 'generative';

    let imgHTML;
    if (isIframe) {
      imgHTML = `<iframe
        src="${it.iframe}"
        width="100%" height="100%"
        frameborder="0"
        scrolling="no"
        allow="autoplay"
        style="position:absolute;inset:0;width:100%;height:100%;border:none;pointer-events:all;">
      </iframe>`;
    } else if (it.sketch) {
      imgHTML = `<div id="p5wrap${it.id}" style="width:100%;height:100%;position:relative;overflow:hidden;"></div>`;
    } else {
      imgHTML = `<canvas id="sc${it.id}"></canvas>`;
    }
    const s = document.createElement('div');
    s.className = 'slide' + (i === 0 ? ' active' : '');
    s.innerHTML = `
      <div class="sb">
        <div class="aw${isGen ? ' aw--gen' : ''}">
          <span class="aw-tl"></span><span class="aw-br"></span>
          <div class="aw-book">
            <div class="aw-mat">
              <div class="aw-img">${imgHTML}</div>
              <p class="aw-mat-label">${it.title} ${it.sub}</p>
            </div>
          </div>
          <p class="aw-ed">Ed. ${String(i + 1).padStart(2, '0')} / ${String(filt.length).padStart(2, '0')}</p>
        </div>
        <div class="at">
          <div class="at-over"><span class="at-line"></span><span class="at-label">${m.l}</span></div>
          <h2 class="at-title">${it.title}<em>${it.sub}</em></h2>
          <div class="at-div"></div>
          <p class="at-desc">${it.desc}</p>
          <div class="at-tags">${it.tags.map(t => `<span class="at-tag">${t}</span>`).join('')}</div>
          <div class="at-foot"><span class="at-foot-dot" style="background:${m.dot}"></span>${isGen && !it.iframe ? m.l + ' — live p5.js' : isIframe && !isGen ? m.l + ' — Canva' : m.l}</div>
        </div>
      </div>`;
    document.getElementById('slides').appendChild(s);

    if (isIframe) {
      // iframe is already in the HTML, nothing extra to mount
    } else if (it.sketch) {
      const wrap = s.querySelector(`#p5wrap${it.id}`);
      const inst = new p5(SKETCHES[it.sketch] || SKETCHES.lissajous, wrap);
      P5INST[it.id] = inst;
    } else {
      const tc = s.querySelector(`#sc${it.id}`), src = CVS[it.id];
      tc.width = src.width; tc.height = src.height;
      tc.getContext('2d').drawImage(src, 0, 0);
    }
  });
}

function buildList() {
  const el = document.getElementById('pl'); el.innerHTML = '';
  document.getElementById('plH').textContent = `${filt.length} piece${filt.length !== 1 ? 's' : ''}`;
  filt.forEach((it, i) => {
    const m = CATS[it.cat] || { dot: '#888' };
    const d = document.createElement('div');
    d.className = 'pi' + (i === 0 ? ' on' : ''); d.dataset.i = i;
    d.innerHTML = `
      <span class="pi-n">${String(i + 1).padStart(2, '0')}</span>
      <div class="pi-th"><canvas width="36" height="36"></canvas></div>
      <div class="pi-info">
        <p class="pi-name">${it.title} ${it.sub}</p>
        <p class="pi-cat">${m.l}</p>
      </div>
      <span class="pi-dot" style="background:${m.dot}"></span>`;
    d.querySelector('canvas').getContext('2d').drawImage(CVS[it.id], 0, 0, 36, 36);
    d.addEventListener('click', () => go(i));
    el.appendChild(d);
  });
}

/* ── SYNC ── */
function sync(i) {
  const s = String(i + 1).padStart(2, '0'), t = String(filt.length).padStart(2, '0');
  document.getElementById('bCN').textContent = s;
  document.getElementById('bCT').textContent = t;
  const pct = ((i + 1) / filt.length * 100) + '%';
  document.getElementById('spgF').style.width = pct;
  document.getElementById('pnBF').style.width = pct;
  document.querySelectorAll('.pi').forEach((el, j) => {
    el.classList.toggle('on', j === i);
    if (j === i) el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  });
  const n = filt[(i + 1) % filt.length];
  const rc = document.getElementById('pnC'); rc.width = 290; rc.height = 387;
  rc.getContext('2d').drawImage(CVS[n.id], 0, 0, 290, 387);
  document.getElementById('pnT').textContent = n.title + ' ' + n.sub;
  document.getElementById('pnCat').textContent = (CATS[n.cat]?.l || n.cat).toUpperCase();
  const it = filt[i];
  document.getElementById('blob1').style.background = it.blob?.[0] || '#e8e0d4';
  document.getElementById('blob2').style.background = it.blob?.[1] || '#d8cfc4';
}

/* ── NAVIGATION ── */
function go(idx, dir = 'down') {
  if (busy || idx === ci) return; busy = true;
  const ss = document.querySelectorAll('.slide');
  ss[ci].classList.remove('active'); ss[ci].classList.add(dir === 'down' ? 'xu' : 'xd');
  setTimeout(() => {
    ss[ci].classList.remove('xu', 'xd');
    ci = ((idx % filt.length) + filt.length) % filt.length;
    ss[ci].classList.add('active'); sync(ci);
    setTimeout(() => { busy = false; }, 900);
  }, 400);
}
document.getElementById('bP').addEventListener('click', () => go((ci - 1 + filt.length) % filt.length, 'up'));
document.getElementById('bN').addEventListener('click', () => go((ci + 1) % filt.length, 'down'));
document.addEventListener('keydown', e => {
  if (['ArrowUp', 'ArrowLeft'].includes(e.key)) go((ci - 1 + filt.length) % filt.length, 'up');
  if (['ArrowDown', 'ArrowRight'].includes(e.key)) go((ci + 1) % filt.length, 'down');
});
let ty = 0;
document.getElementById('stage').addEventListener('touchstart', e => { ty = e.touches[0].clientY; }, { passive: true });
document.getElementById('stage').addEventListener('touchend', e => { const d = ty - e.changedTouches[0].clientY; if (Math.abs(d) > 40) d > 0 ? go((ci + 1) % filt.length, 'down') : go((ci - 1 + filt.length) % filt.length, 'up'); });
document.getElementById('stage').addEventListener('wheel', e => { e.preventDefault(); if (busy) return; e.deltaY > 0 ? go((ci + 1) % filt.length, 'down') : go((ci - 1 + filt.length) % filt.length, 'up'); }, { passive: false });

/* ── FILTER ── */
function filterBy(cat) {
  [document.getElementById('barF'), document.getElementById('pfRow')].forEach(el => {
    el.querySelectorAll('[data-c]').forEach(b => b.classList.toggle('on', b.dataset.c === cat));
  });
  filt = cat === 'all' ? [...ITEMS] : ITEMS.filter(it => it.cat === cat);
  ci = 0; busy = false; buildSlides(); buildList(); sync(0);
}
document.getElementById('barF').addEventListener('click', e => { const b = e.target.closest('[data-c]'); if (b) filterBy(b.dataset.c); });
document.getElementById('pfRow').addEventListener('click', e => { const b = e.target.closest('[data-c]'); if (b) filterBy(b.dataset.c); });

/* ── CURSOR ── */
const dotEl = document.getElementById('dot'), ringEl = document.getElementById('ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; dotEl.style.left = mx + 'px'; dotEl.style.top = my + 'px'; });
(function loop() { rx += (mx - rx) * .09; ry += (my - ry) * .09; ringEl.style.left = rx + 'px'; ringEl.style.top = ry + 'px'; requestAnimationFrame(loop); })();
document.querySelectorAll('a,button,.pi,.bf,.pc,.pn-img').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('hov'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('hov'));
});

buildAll();