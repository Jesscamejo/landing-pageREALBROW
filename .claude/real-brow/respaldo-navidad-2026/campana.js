// =====================================================================
// VISTA PREVIA LOCAL · Campaña de Navidad 2026 · Real Brow Studio
// No es código del repositorio. Reorganiza la presentación de la web actual
// sin tocar sus textos, precios, fotos ni el formulario de WhatsApp.
// Textos nuevos marcados como PROPUESTA: pendientes de aprobación.
// Añade ?habitual=1 para ver la web sin la campaña.
// =====================================================================
(() => {
  if (new URLSearchParams(location.search).has('habitual')) return;
  const html = document.documentElement;
  html.classList.add('campana');
  const f = document.createElement('link'); f.rel = 'stylesheet';
  f.href = 'https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap';
  document.head.appendChild(f);
  const $ = s => document.querySelector(s);
  const el = (tag, cls, inner) => { const e = document.createElement(tag); if (cls) e.className = cls; if (inner != null) e.innerHTML = inner; return e; };

  // ---------- Damasco tonal original (roseta de ocho pétalos) ----------
  const damasco = color => {
    // Estrella de ocho puntas facetada, al estilo de un damasco de invierno (no flor)
    const rayos = Array.from({ length: 8 }, (_, k) => `<path d='M80 34 L84 64 L80 74 L76 64 Z' transform='rotate(${k * 45} 80 80)'/>`).join('');
    const finos = Array.from({ length: 8 }, (_, k) => `<path d='M80 52 L81.4 68 L80 72 L78.6 68 Z' transform='rotate(${k * 45 + 22.5} 80 80)'/>`).join('');
    const mini = (x, y) => Array.from({ length: 4 }, (_, k) => `<path d='M${x} ${y - 12} L${x + 2} ${y - 3} L${x} ${y} L${x - 2} ${y - 3} Z' transform='rotate(${k * 90 + 45} ${x} ${y})'/>`).join('');
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><g fill='${color}'>${rayos}${finos}<circle cx='80' cy='80' r='3'/>${mini(0, 0)}${mini(160, 0)}${mini(0, 160)}${mini(160, 160)}</g></svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  };
  html.style.setProperty('--damasco-vino', damasco('rgba(255,236,220,0.05)'));
  html.style.setProperty('--damasco-crema', damasco('rgba(74,14,25,0.04)'));
  // Grano de papel para las secciones claras
  html.style.setProperty('--grano', `url("data:image/svg+xml,${encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 .35 0 0 0 0 .25 0 0 0 0 .2 0 0 0 .09 0'/></filter><rect width='220' height='220' filter='url(%23g)'/></svg>".replace('%23', '#'))}")`);

  // ---------- Sello de lacre dorado con monograma RB (original) ----------
  let sid = 0;
  const sello = () => {
    const g = ++sid, cx = 75, cy = 90, n = 120;
    const pts = Array.from({ length: n }, (_, i) => { const a = i / n * Math.PI * 2, k = 1 + .028 * Math.sin(5 * a + .6) + .018 * Math.sin(13 * a + 2) + .01 * Math.sin(29 * a); return `${(cx + 66 * k * Math.cos(a)).toFixed(1)},${(cy + 82 * k * Math.sin(a)).toFixed(1)}`; });
    return `<svg viewBox="0 0 150 180" aria-hidden="true"><defs>
      <radialGradient id="oro${g}" cx="38%" cy="30%" r="80%"><stop offset="0" stop-color="#F3E5C3"/><stop offset=".42" stop-color="#D3B57F"/><stop offset=".78" stop-color="#A98650"/><stop offset="1" stop-color="#7E5F30"/></radialGradient>
      <path id="arco${g}" d="M ${cx} ${cy - 66} a 52 66 0 1 1 -0.1 0"/></defs>
      <polygon points="${pts.join(' ')}" fill="url(#oro${g})"/>
      <ellipse cx="${cx}" cy="${cy}" rx="57" ry="72" fill="none" stroke="#8A6A38" stroke-width="1.3"/>
      <ellipse cx="${cx}" cy="${cy}" rx="44" ry="57" fill="none" stroke="#8A6A38" stroke-width=".9"/>
      <ellipse cx="${cx}" cy="${cy}" rx="42.6" ry="55.6" fill="none" stroke="rgba(255,244,220,.55)" stroke-width=".8"/>
      <text font-family="Jost, sans-serif" font-weight="500" font-size="8.6" letter-spacing="2.4" fill="#6F5226"><textPath href="#arco${g}">REAL BROW STUDIO · NAVIDAD · MMXXVI ·</textPath></text>
      <text x="${cx + .9}" y="${cy + 14.9}" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-style="italic" font-weight="500" font-size="44" fill="rgba(255,244,220,.6)">RB</text>
      <text x="${cx}" y="${cy + 14}" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-style="italic" font-weight="500" font-size="44" fill="#6F5226">RB</text>
    </svg>`;
  };
  const WA = '<svg class="wa" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.6-4.2A8.5 8.5 0 1 1 20.5 11.6z"/><path d="M9 8.6c0 3.3 2.9 6.3 6.3 6.3l1.1-1.4-2-1-1 .9c-1.2-.5-2.3-1.5-2.8-2.8l.9-1-1-2z"/></svg>';

  // ---------- 1. Portada de campaña ----------
  const portada = $('#inicio');
  const hero = el('div', 'c-hero');
  hero.innerHTML = `
    <div class="c-foto">
      <img src="imagenes/campana-portada.webp" alt="Modelo con vestido de encaje rojo junto a un árbol de Navidad, peinando su ceja con un cepillo spoolie" width="1536" height="1024" fetchpriority="high">
      <div class="c-velo" aria-hidden="true"></div>
    </div>
    <div class="c-texto">
      <span class="c-logo" role="img" aria-label="Jessica Camejo · Real Brow Studio"></span>
      <h1 class="c-titulo"><span class="c-mayus">Temporada</span><span class="c-guion">Navideña</span></h1>
      <span class="c-regla" aria-hidden="true"></span>
      <p class="c-mensaje">Este diciembre, regálate un momento <em>para ti</em>.</p>
      <div class="c-acciones"><a href="#reservar" class="btn btn-principal">${WA}Reservar mi cita</a><a href="#galeria" class="c-enlace">Ver mis trabajos</a></div>
    </div>`;
  portada.appendChild(hero);

  // ---------- 2. Manifiesto tipográfico (textos ya aprobados) ----------
  const valores = [...document.querySelectorAll('.valores li')].map(li => li.textContent.trim());
  const man = el('section', 'c-manifiesto c-crema');
  man.setAttribute('aria-label', 'Real Brow Studio');
  man.innerHTML = `<div class="contenedor"><div><span class="c-pre oscuro">Real Brow Studio · Navidad</span><h2>Cejas que enmarcan <span class="c-guion">tu mirada</span></h2></div><ol class="c-lista">${valores.map(v => `<li>${v}</li>`).join('')}</ol></div>`;
  portada.after(man);

  // ---------- 3. Capítulos numerados en las secciones de servicio ----------
  [['#henna-brow', '01'], ['#natural-brow', '02'], ['#tecnica-real-brow', '03'], ['#rehabilitacion-folicular', '04']].forEach(([s, n]) => {
    const t = $(s + ' .texto'); t.insertAdjacentHTML('afterbegin', `<span class="c-num" aria-hidden="true">${n}</span>`);
  });

  // ---------- 4. Nota de Jessica (PROPUESTA de texto) ----------
  const nota = el('section', 'c-nota c-crema');
  nota.setAttribute('aria-label', 'Una nota de Jessica');
  nota.innerHTML = `<div class="contenedor"><span class="c-pre oscuro">Una nota de Jessica</span>
    <blockquote>«Gracias por confiarme tu mirada este año. En diciembre te espero con calma, para que este momento sea solo para ti.»</blockquote>
    <div class="c-firma"><img class="r" src="imagenes/jessica-camejo.jpg" alt="Jessica Camejo"><span class="c-logo vino" role="img" aria-label="Jessica Camejo · Real Brow Studio"></span></div></div>`;
  $('#proceso').after(nota);

  // ---------- 5. Galería: fotografías impresas, ligeramente giradas ----------
  const giros = [-2.2, 1.6, -1, 2.4, -1.8, 1.1, -2.6, 1.9, -.8, 2.1];
  document.querySelectorAll('.pieza').forEach((p, i) => p.style.setProperty('--r', giros[i % giros.length] + 'deg'));

  // ---------- 6. Reservas: sello sobre la tarjeta de regalo ----------
  // (sin sello: la marca se representa solo con el logo original)

  // ---------- 7. Pie de campaña ----------
  $('.pie-pagina .contenedor').insertAdjacentHTML('beforeend', '<div class="c-pie-mastil"><span>Real Brow Studio</span><span>·</span><span>Edición de Navidad</span><span>·</span><span>Arauca · MMXXVI</span></div>');

  // ---------- 9. Papel rasgado v2 (bordes generados, cada transición con carácter propio) ----------
  // Capas, de atrás hacia delante: sombra de contacto · fibras sueltas · núcleo blanco del papel · papel con textura.
  const W = 1440, H = 120, PASO = 2;
  const generar = ({ semilla, base, amp, saltos, aspereza, labio }) => {
    let s = semilla; const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647;
    const ruido = paso => { const c = Array.from({ length: Math.ceil(W / paso) + 2 }, rnd); return x => { const i = Math.floor(x / paso), t = x / paso - i, u = t * t * (3 - 2 * t); return c[i] * (1 - u) + c[i + 1] * u - .5; }; };
    const n1 = ruido(260), n2 = ruido(70), n3 = ruido(18), n4 = ruido(6), nl = ruido(110), nf = ruido(4);
    // Saltos bruscos: escalones que se suman y aparecen al azar (el papel se rompe «a tirones»)
    const esc = []; let acc = 0; for (let x = 0; x <= W; x += 30) { if (rnd() < saltos) acc += (rnd() - .5) * amp * 1.1; acc *= .82; esc.push(acc); }
    const escalon = x => { const i = Math.floor(x / 30), t = Math.min(1, (x / 30 - i) * 5); return esc[i] * (1 - t) + (esc[i + 1] ?? esc[i]) * t; };
    const ys = [], fib = [], hil = [];
    for (let x = 0; x <= W; x += PASO) {
      ys.push(base + amp * (n1(x) * 1.25 + n2(x) * .6 + n3(x) * .3 * aspereza) + escalon(x) + n4(x) * 2.2 * aspereza + (rnd() - .5) * 1.4 * aspereza);
      const ancho = 1.2 + Math.max(0, nl(x) + .18) * labio + Math.abs(nf(x)) * 3;   // núcleo: fino casi siempre, ancho en los «labios»
      fib.push(ancho); hil.push(ancho + 1.5 + rnd() * 3.2 * aspereza);              // fibras sueltas, muy dentadas
    }
    const n = ys.length, mezcla = 40; for (let k = 0; k < mezcla; k++) { const t = k / mezcla, u = t * t * (3 - 2 * t); ys[n - mezcla + k] = ys[n - mezcla + k] * (1 - u) + ys[0] * u; fib[n - mezcla + k] = fib[n - mezcla + k] * (1 - u) + fib[0] * u; hil[n - mezcla + k] = hil[n - mezcla + k] * (1 - u) + hil[0] * u; }
    return { ys, fib, hil };
  };
  const forma = (b, extra) => {
    const pts = b.ys.map((y, i) => `${i * PASO},${(y + extra(i)).toFixed(1)}`).reverse().join(' L');
    return `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='${W}' height='${H}' viewBox='0 0 ${W} ${H}' preserveAspectRatio='none'><path d='M0,0 L${W},0 L${pts} Z' fill='#000'/></svg>`)}")`;
  };
  const rasgar = (seccion, papel, params) => {
    const b = generar(params);
    const r = el('div', `c-rasgado arriba ${papel}`); r.setAttribute('aria-hidden', 'true');
    const capa = (cls, m, envolver) => { const c = el('i', cls); c.style.webkitMaskImage = m; c.style.maskImage = m; if (envolver) { const w = el('i', cls + '-w'); w.appendChild(c); r.appendChild(w); } else r.appendChild(c); };
    capa('sombra', forma(b, i => b.fib[i] + 3.5), true);   // sombra estrecha justo bajo el borde
    capa('hilos', forma(b, i => b.hil[i]));                // fibras sueltas
    capa('nucleo', forma(b, i => b.fib[i]));               // interior blanco del papel
    capa('papel', forma(b, () => 0));                      // superficie del papel
    capa('textura', forma(b, () => 0), true);              // grano de algodón, solo cerca del borde
    seccion.classList.add('c-con-rasgado', 'rasgado-arriba');
    seccion.appendChild(r);
  };
  // 1 · Natural → Técnica: marfil sobre vino, rasgado medio con algún labio
  rasgar($('#tecnica-real-brow'), 'marfil', { semilla: 7919, base: 62, amp: 20, saltos: .35, aspereza: 1, labio: 9 });
  // 2 · Técnica → Rehabilitación: ahora es el VINO el que se rasga sobre el crema (núcleo rosado)
  rasgar($('#rehabilitacion-folicular'), 'vino', { semilla: 104729, base: 58, amp: 26, saltos: .5, aspereza: 1.25, labio: 3 });
  // 3 · Nota → Galería: crema, rasgado más suave y fino
  rasgar($('#galeria'), 'crema', { semilla: 31337, base: 56, amp: 13, saltos: .2, aspereza: .8, labio: 5 });
  // 4 · Preguntas → Reservas: crema, el más dramático, con labios anchos
  rasgar($('#reservar'), 'crema', { semilla: 271828, base: 64, amp: 28, saltos: .5, aspereza: 1.1, labio: 14 });

  // ---------- 10. Tipografía de campaña en titulares (mismo texto, nueva composición) ----------
  const titular = (sel, serif, guion) => { const h = $(sel); h.classList.add('c-titular'); h.innerHTML = `<span class="c-mayus-s">${serif}</span> <span class="c-guion-s">${guion}</span>`; };
  titular('#tecnica-real-brow h2', 'Técnica', 'Real Brow');
  titular('#galeria h2', 'Mis', 'trabajos');
  titular('#reservar h2', 'Reserva', 'tu cita');

  // ---------- 8. Control de movimiento ----------
  const P = '<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><rect x="3" y="2" width="3.4" height="12" rx="1"/><rect x="9.6" y="2" width="3.4" height="12" rx="1"/></svg><span>Pausar movimiento</span>';
  const R = '<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M4 2.5v11l9-5.5z"/></svg><span>Reanudar movimiento</span>';
  const bs = document.querySelectorAll('.c-pausa');
  const pinta = on => bs.forEach(b => { b.innerHTML = on ? R : P; b.setAttribute('aria-pressed', on); });
  pinta(false);
  bs.forEach(b => b.addEventListener('click', () => pinta(html.classList.toggle('c-pausado'))));
})();
