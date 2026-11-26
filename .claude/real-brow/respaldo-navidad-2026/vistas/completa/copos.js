// =====================================================================
// COPOS DE NIEVE FIJOS · capa decorativa de fondo · Navidad 2026 · vista previa local
// - Copos delgados originales (seis brazos), generados por código.
// - Quedan fijos en la pantalla: al desplazarse, se mueve el contenido y los copos permanecen.
// - Cada sección los recorta a su área (clip-path) y los tiñe según su fondo:
//   blancos tenues en rojo, rojo #752120 tenue en marfil y crema. Mismas posiciones en todas,
//   así que al cruzar de una sección a otra solo cambia el color.
// - Sin animación: no se mueven por sí solos.
// =====================================================================
(() => {
  const NS = 'http://www.w3.org/2000/svg';
  const azar = semilla => () => (semilla = (semilla * 16807) % 2147483647) / 2147483647;

  // ---------- Diseños delgados (los aprobados antes) ----------
  const disenos = (() => {
    const r = azar(4021), lista = [];
    for (let d = 0; d < 9; d++) {
      const L = 40;
      let brazo = `M0 0 L0 ${-L}`;
      const nRamas = 1 + Math.floor(r() * 3);
      for (let k = 0; k < nRamas; k++) {
        const t = .32 + k * (.5 / nRamas) + r() * .08;
        const largo = L * (.16 + r() * .2) * (1 - k * .18);
        const ang = (d % 3 === 0 ? 45 : 60) * Math.PI / 180;
        const y = -L * t, dx = Math.sin(ang) * largo, dy = -Math.cos(ang) * largo;
        brazo += ` M0 ${y} l${dx.toFixed(2)} ${dy.toFixed(2)} M0 ${y} l${(-dx).toFixed(2)} ${dy.toFixed(2)}`;
      }
      if (r() < .5) brazo += ` M0 ${-L * .86} l4 -4 M0 ${-L * .86} l-4 -4`;
      else brazo += ` M0 ${-L} l2.6 -3.4 l-2.6 -3.4 l-2.6 3.4 z`;
      const centro = r() < .55 ? `<polygon points="${[0,1,2,3,4,5].map(i => { const a = i * Math.PI / 3; return `${(7 * Math.sin(a)).toFixed(2)},${(-7 * Math.cos(a)).toFixed(2)}`; }).join(' ')}"/>` : '';
      const grosor = 1.6 + r() * .8;
      lista.push(`<g fill="none" stroke-width="${grosor.toFixed(2)}" stroke-linecap="round" stroke-linejoin="round">${centro}${[0,1,2,3,4,5].map(i => `<path d="${brazo}" transform="rotate(${i * 60})"/>`).join('')}</g>`);
    }
    return lista;
  })();

  // ---------- Posiciones: una sola distribución del tamaño de la pantalla ----------
  function distribuir(W, H) {
    const r = azar(1225), movil = W < 700;
    const objetivo = Math.round(W * H / (movil ? 9500 : 15000));
    const puestos = []; let intentos = 0;
    while (puestos.length < objetivo && intentos++ < objetivo * 40) {
      const q = r();
      const s = q < .45 ? 9 + r() * 7 : q < .85 ? 17 + r() * 11 : 30 + r() * 14;
      const x = r() * W, y = r() * H;
      if (puestos.some(p => Math.hypot(p.x - x, p.y - y) < (p.s + s) * 1.15 + 10)) continue;
      puestos.push({ x, y, s, rot: r() * 60, d: Math.floor(r() * disenos.length), a: s > 15 ? .07 + r() * .07 : .045 + r() * .085 });
    }
    return puestos;
  }

  function pintar() {
    const W = innerWidth, H = Math.max(innerHeight, screen.height || 0);   // cubre también la barra del navegador móvil
    const puestos = distribuir(W, H);
    document.querySelectorAll('[data-copos]').forEach((sec, n) => {
      sec.querySelector(':scope > .copos')?.remove();
      const rojo = sec.dataset.copos === 'rojo';
      const [tinta, relieve, desp, k] = rojo ? ['255,246,238', '40,4,6', .6, 1.75] : ['117,33,32', '255,255,255', -.6, 1.2];
      const svg = document.createElementNS(NS, 'svg');
      svg.setAttribute('class', 'copos'); svg.setAttribute('aria-hidden', 'true');
      svg.setAttribute('width', W); svg.setAttribute('height', H);
      svg.innerHTML = `<defs>${disenos.map((g, i) => `<symbol id="copo${n}-${i}" viewBox="-50 -50 100 100" overflow="visible">${g}</symbol>`).join('')}</defs>` +
        puestos.map(p => {
          const t = `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)}) rotate(${p.rot.toFixed(1)})`, sz = (p.s * 2).toFixed(1), o = -p.s, a = p.a * k;
          return `<use href="#copo${n}-${p.d}" x="${o + desp}" y="${o + desp}" width="${sz}" height="${sz}" transform="${t}" stroke="rgb(${relieve})" opacity="${(a * .7).toFixed(3)}"/>` +
                 `<use href="#copo${n}-${p.d}" x="${o}" y="${o}" width="${sz}" height="${sz}" transform="${t}" stroke="rgb(${tinta})" opacity="${a.toFixed(3)}"/>`;
        }).join('');
      sec.prepend(svg);
      sec.dataset.coposPuestos = puestos.length;
    });
  }

  const iniciar = () => document.fonts.ready.then(pintar);
  if (document.readyState === 'complete') iniciar(); else addEventListener('load', iniciar);
  let ancho = innerWidth, t;
  addEventListener('resize', () => { if (innerWidth === ancho) return; ancho = innerWidth; clearTimeout(t); t = setTimeout(pintar, 200); });
})();
