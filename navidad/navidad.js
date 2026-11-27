/* =====================================================================
   REAL BROW STUDIO · TEMPORADA NAVIDEÑA 2026 · navidad/navidad.js
   Los datos del estudio son una COPIA EXACTA del bloque «TUS DATOS» de la
   página principal (index.html). Si cambia un dato, se actualiza en los dos sitios.
   ===================================================================== */

const ESTUDIO = {
  whatsapp:  "573102448076",                  // Con código de país, sin +, espacios ni guiones
  whatsappVisible: "+57 310 244 8076",        // Cómo se muestra el número en la página
  instagram: "realbrow.jesscamejo",           // Usuario de Instagram sin @
  facebook:  "Real Brow Studio",              // Nombre de la página de Facebook
  facebookUrl: "",                            // Enlace de la página de Facebook (opcional)
  direccion: "Arauca, Arauca · Colombia — atención con cita previa",
  horario:   "Lunes a sábado · 9:00 a.m. a 6:00 p.m.",
  diasCerrado: [0],                           // 0 = domingo (días sin atención)
};

// Fotos principales (guárdalas en la carpeta "imagenes")
const FOTOS = {
  retrato: "imagenes/jessica-camejo.jpg",   // Foto de "Sobre mí": Jessica mirando a la cámara
};

// Técnicas y precios
const SERVICIOS = [
  { nombre: "Henna Brow", sub: "Diseño, depilación con cera y sombreado con henna",
    descripcion: "Diseño personalizado según la fisonomía de tu rostro, depilación con cera y sombreado con henna que aporta definición y apariencia de mayor densidad.",
    ideal: "Ideal si quieres unas cejas más llenas y marcadas.",
    duracion: "1 h 30 min", precio: "$50.000" },
  { nombre: "Natural Brow", sub: "Diseño y depilación con cera",
    descripcion: "Diseño personalizado según la fisonomía de tu rostro y depilación con cera para definir una forma limpia y armónica.",
    ideal: "Ideal para mantener tus cejas definidas y en equilibrio con tus facciones.",
    duracion: "1 h", precio: "$40.000" },
  { nombre: "Técnica Real Brow", sub: "Fibras que simulan el vello natural",
    descripcion: "Fibras biocompatibles que simulan el vello natural para rellenar espacios sin vello y dar mayor densidad y definición.",
    ideal: "No quirúrgica y temporal. Requiere valoración previa para saber si tu ceja es apta y definir el valor.",
    duracion: "Dura de 4 a 8 meses aprox.", precio: "Según valoración", valoracion: true },
  { nombre: "Rehabilitación folicular de cejas", sub: "Microneedling con Dermapen y activos",
    descripcion: "Protocolo con microneedling (Dermapen) y activos especializados que busca favorecer la recuperación del vello perdido en las cejas.",
    ideal: "Requiere valoración previa para definir la viabilidad y tu plan de sesiones personalizado.",
    duracion: "Mínimo 3 sesiones", precio: "$100.000", nota: "por sesión", valoracion: true },
];

// Galería: tipo "foto" o "video". Guarda los archivos en "imagenes" o "videos".
// Mientras "archivo" esté vacío, se muestra un espacio de ejemplo.
const GALERIA = [
  { tipo: "foto", archivo: "imagenes/real-brow-antes-despues-2.jpg", titulo: "Antes y después", tecnica: "Técnica Real Brow", antesDespues: "lado" },
  { tipo: "foto", archivo: "imagenes/diseno-pigmentacion-2.jpg", titulo: "Antes y después", tecnica: "Henna Brow", antesDespues: "arriba" },
  { tipo: "video", archivo: "videos/diseno-depilacion-1.mp4", portada: "imagenes/diseno-depilacion-video.jpg", titulo: "Resultado en video", tecnica: "Natural Brow" },
  { tipo: "foto", archivo: "imagenes/rehabilitacion-sesiones.jpg", titulo: "Antes, 1.ª y 2.ª sesión", tecnica: "Rehabilitación folicular" },
  { tipo: "foto", archivo: "imagenes/diseno-pigmentacion-5.jpg", titulo: "Antes y después", tecnica: "Henna Brow", antesDespues: "arriba" },
  { tipo: "foto", archivo: "imagenes/real-brow-antes-despues-1.jpg", titulo: "Antes y después", tecnica: "Técnica Real Brow", antesDespues: "arriba" },
  { tipo: "foto", archivo: "imagenes/diseno-pigmentacion-3.jpg", titulo: "Antes y después", tecnica: "Henna Brow", antesDespues: "arriba" },
  { tipo: "foto", archivo: "imagenes/real-brow-antes-despues-3.jpg", titulo: "Antes y después", tecnica: "Técnica Real Brow", antesDespues: "arriba" },
  { tipo: "foto", archivo: "imagenes/rehabilitacion-evolucion-1.jpg", titulo: "Evolución por sesiones", tecnica: "Rehabilitación folicular" },
  { tipo: "foto", archivo: "imagenes/diseno-pigmentacion-1.jpg", titulo: "Antes y después", tecnica: "Henna Brow", antesDespues: "arriba" },
  { tipo: "foto", archivo: "imagenes/sombreado-antes-despues.jpg", titulo: "Antes y después", tecnica: "Henna Brow", antesDespues: "lado" },
  { tipo: "foto", archivo: "imagenes/diseno-pigmentacion-6.jpg", titulo: "Antes y después", tecnica: "Henna Brow", antesDespues: "arriba" },
  { tipo: "foto", archivo: "imagenes/real-brow-antes-despues-4.jpg", titulo: "Antes y después", tecnica: "Técnica Real Brow", antesDespues: "arriba" },
  { tipo: "foto", archivo: "imagenes/rehabilitacion-antes-durante-despues.jpg", titulo: "Antes, durante y después", tecnica: "Rehabilitación folicular" },
  { tipo: "foto", archivo: "imagenes/diseno-pigmentacion-4.jpg", titulo: "Antes y después", tecnica: "Henna Brow", antesDespues: "arriba" },
  { tipo: "foto", archivo: "imagenes/sombreado-diseno.jpg", titulo: "Diseño a medida", tecnica: "Henna Brow" },
  { tipo: "foto", archivo: "imagenes/diseno-depilacion-1.jpg", titulo: "Resultado", tecnica: "Natural Brow" },
  { tipo: "foto", archivo: "imagenes/rehabilitacion-evolucion-2.jpg", titulo: "Evolución por sesiones", tecnica: "Rehabilitación folicular" },
  // Para agregar más, copia una línea y cambia los datos. Ejemplos:
  // { tipo: "foto",  archivo: "imagenes/diseno-1.jpg", titulo: "Antes y después", tecnica: "Natural Brow", antesDespues: "lado" },
  // { tipo: "video", archivo: "videos/proceso-1.mp4", portada: "imagenes/proceso-1.jpg", titulo: "Proceso", tecnica: "Técnica Real Brow" },
  // antesDespues: "lado" (antes a la izquierda) o "arriba" (antes arriba) agrega las etiquetas.
  // Bórralo si la foto ya trae sus etiquetas o no es de antes y después.
];

/* =====================================================================
   A partir de aquí: funcionamiento de la página de Navidad
   (misma lógica que la página principal)
   ===================================================================== */
// Tamaño real de cada foto de la galería: reserva su espacio desde el inicio y evita saltos al desplazarse
const MEDIDAS = {"imagenes/real-brow-antes-despues-2.jpg": [1179, 1023], "imagenes/diseno-pigmentacion-2.jpg": [800, 1604], "imagenes/rehabilitacion-sesiones.jpg": [844, 1500], "imagenes/diseno-pigmentacion-5.jpg": [899, 1600], "imagenes/real-brow-antes-despues-1.jpg": [1125, 1500], "imagenes/diseno-pigmentacion-3.jpg": [800, 1604], "imagenes/real-brow-antes-despues-3.jpg": [1000, 1334], "imagenes/rehabilitacion-evolucion-1.jpg": [1200, 1005], "imagenes/diseno-pigmentacion-1.jpg": [800, 1604], "imagenes/sombreado-antes-despues.jpg": [1386, 1200], "imagenes/diseno-pigmentacion-6.jpg": [900, 1599], "imagenes/real-brow-antes-despues-4.jpg": [1000, 1334], "imagenes/rehabilitacion-antes-durante-despues.jpg": [720, 1280], "imagenes/diseno-pigmentacion-4.jpg": [800, 1604], "imagenes/sombreado-diseno.jpg": [1100, 1467], "imagenes/diseno-depilacion-1.jpg": [900, 1599], "imagenes/rehabilitacion-evolucion-2.jpg": [844, 1500], "imagenes/diseno-depilacion-video.jpg": [720, 1280]};
const dims = a => MEDIDAS[a] ? ` width="${MEDIDAS[a][0]}" height="${MEDIDAS[a][1]}"` : '';
const RAIZ = '../';   // las fotos y videos se toman de la página principal, sin duplicarlos
const ruta = a => RAIZ + a;
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

// Servicios
const lista = document.getElementById('lista-servicios');
const selector = document.getElementById('servicio');
lista.innerHTML = SERVICIOS.map((s, i) => `
  <article class="tarjeta">
    <span class="num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
    <h3>${esc(s.nombre)}</h3>${s.sub ? `<p class="sub">${esc(s.sub)}</p>` : ''}
    <p>${esc(s.descripcion)}</p>
    <p class="ideal">${esc(s.ideal)}</p>
    <div class="datos"><span>${esc(s.duracion)}</span><span class="precio"><strong>${esc(s.precio)}</strong>${s.nota ? `<small>${esc(s.nota)}</small>` : ''}</span></div>
    <button class="enlace-reserva" data-servicio="${esc(s.nombre)}">${s.valoracion ? 'Reservar valoración' : 'Reservar este servicio'}</button>
  </article>`).join('');
selector.innerHTML = SERVICIOS.map(s => `<option>${esc(s.nombre)}</option>`).join('')
  + '<option>Aún no sé, quiero una valoración</option>';
const irAReservar = servicio => {
  selector.value = servicio;
  document.getElementById('reservar').scrollIntoView();
  setTimeout(() => document.getElementById('nombre').focus({ preventScroll: true }), 500);
};
document.addEventListener('click', e => {
  const b = e.target.closest('.reservar-servicio, .enlace-reserva');
  if (b) irAReservar(b.dataset.servicio);
});

// Galería
const rejilla = document.getElementById('rejilla');
const marcasAD = g => g.antesDespues === 'lado'
  ? '<span class="marca-ad">Antes</span><span class="marca-ad derecha">Después</span>'
  : g.antesDespues === 'arriba'
  ? '<span class="marca-ad">Antes</span><span class="marca-ad abajo">Después</span>'
  : '';
rejilla.innerHTML = GALERIA.map((g, i) => {
  if (!g.archivo) return '';
  const medio = g.tipo === 'video'
    ? `<video src="${esc(ruta(g.archivo))}"${g.portada ? ` poster="${esc(ruta(g.portada))}"${dims(g.portada)}` : ''} muted loop autoplay playsinline preload="metadata"></video><span class="icono-play"></span>`
    : `<img src="${esc(ruta(g.archivo))}" alt="${esc(g.titulo + ' · ' + g.tecnica)}"${dims(g.archivo)} loading="lazy">${marcasAD(g)}`;
  return `<button class="pieza" data-tecnica="${esc(g.tecnica)}" data-i="${i}" aria-label="Ver ${esc(g.titulo)}, ${esc(g.tecnica)}">
    <span class="medio">${medio}</span><span class="pie"><strong>${esc(g.titulo)}</strong><small>${esc(g.tecnica)}</small></span>
  </button>`;
}).join('') + (ESTUDIO.instagram ? `<a class="pieza mas" href="https://instagram.com/${esc(ESTUDIO.instagram)}" target="_blank" rel="noopener">
    <span>Más resultados</span><strong>Míralos en mi Instagram</strong><span>@${esc(ESTUDIO.instagram)}</span></a>` : '');
const filtros = document.querySelector('.filtros');
const categorias = [...new Set(GALERIA.filter(g => g.archivo).map(g => g.tecnica))];
if (categorias.length < 2) filtros.hidden = true;
filtros.innerHTML = ['Todo', ...categorias].map((c, i) =>
  `<button class="filtro${i ? '' : ' activo'}" data-filtro="${i ? esc(c) : 'todo'}">${esc(c)}</button>`).join('');
const LIMITE = 8;
const verMas = document.getElementById('ver-mas');
let filtroActual = 'todo', mostrarTodo = false;
function aplicarGaleria() {
  let n = 0, ocultas = 0;
  rejilla.querySelectorAll('.pieza[data-i]').forEach(p => {
    const coincide = filtroActual === 'todo' || p.dataset.tecnica === filtroActual;
    const dentro = coincide && (mostrarTodo || n < LIMITE);
    if (coincide) { n++; if (!dentro) ocultas++; }
    p.hidden = !dentro;
  });
  verMas.hidden = ocultas === 0;
}
filtros.addEventListener('click', e => {
  const f = e.target.closest('.filtro');
  if (!f) return;
  filtros.querySelectorAll('.filtro').forEach(x => x.classList.toggle('activo', x === f));
  filtroActual = f.dataset.filtro; mostrarTodo = false; aplicarGaleria();
});
verMas.addEventListener('click', () => { mostrarTodo = true; aplicarGaleria(); });
rejilla.querySelectorAll('video').forEach(v => { v.muted = true; v.play().catch(() => {}); });
aplicarGaleria();

// Visor (ver en grande)
const visor = document.getElementById('visor');
const visorContenido = document.getElementById('visor-contenido');
const cerrarVisor = () => { visor.classList.remove('abierto'); visorContenido.innerHTML = ''; };
rejilla.addEventListener('click', e => {
  const p = e.target.closest('.pieza');
  if (!p || !p.dataset.i) return;
  const g = GALERIA[p.dataset.i];
  if (!g.archivo) return;
  visorContenido.innerHTML = g.tipo === 'video'
    ? `<video src="${esc(ruta(g.archivo))}" controls autoplay playsinline></video>`
    : `<img src="${esc(ruta(g.archivo))}" alt="${esc(g.titulo + ' · ' + g.tecnica)}">`;
  visor.classList.add('abierto');
});
visor.addEventListener('click', e => { if (e.target === visor || e.target.closest('.visor-cerrar')) cerrarVisor(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') cerrarVisor(); });

// Datos de contacto
const info = [
  ['WhatsApp', ESTUDIO.whatsapp && `<a href="https://wa.me/${esc(ESTUDIO.whatsapp)}" target="_blank" rel="noopener">${esc(ESTUDIO.whatsappVisible || "+" + ESTUDIO.whatsapp)}</a>`],
  ['Instagram', ESTUDIO.instagram && `<a href="https://instagram.com/${esc(ESTUDIO.instagram)}" target="_blank" rel="noopener">@${esc(ESTUDIO.instagram)}</a>`],
  ['Facebook', ESTUDIO.facebook && (ESTUDIO.facebookUrl ? `<a href="${esc(ESTUDIO.facebookUrl)}" target="_blank" rel="noopener">${esc(ESTUDIO.facebook)}</a>` : esc(ESTUDIO.facebook))],
  ['Ubicación', ESTUDIO.direccion && esc(ESTUDIO.direccion)],
  ['Horario', ESTUDIO.horario && esc(ESTUDIO.horario)],
];
document.getElementById('info-contacto').innerHTML = info
  .map(([t, v]) => `<li><span>${t}</span>${v || 'Por definir'}</li>`).join('');

// Formulario de reserva → WhatsApp (idéntico a la página principal)
const fecha = document.getElementById('fecha');
fecha.min = new Date().toLocaleDateString('en-CA');
const form = document.getElementById('formulario');
const aviso = document.getElementById('aviso');
form.addEventListener('submit', e => {
  e.preventDefault();
  const d = new FormData(form);
  const mostrar = t => { aviso.textContent = t; aviso.hidden = false; };
  if (!d.get('nombre').trim()) { mostrar('Por favor escribe tu nombre.'); document.getElementById('nombre').focus(); return; }
  if (!ESTUDIO.whatsapp) { mostrar('Las reservas por WhatsApp aún no están activas. Falta configurar el número del estudio.'); return; }
  if (d.get('fecha') && (ESTUDIO.diasCerrado || []).includes(new Date(d.get('fecha') + 'T12:00').getDay())) { mostrar('Ese día el estudio no atiende. Elige una fecha de lunes a sábado.'); fecha.focus(); return; }
  aviso.hidden = true;
  const dia = d.get('fecha')
    ? new Date(d.get('fecha') + 'T12:00').toLocaleDateString('es', { weekday: 'long', day: 'numeric', month: 'long' })
    : 'A convenir';
  const lineas = [
    'Hola Jessica, quiero reservar una cita en Real Brow Studio.',
    '',
    `• Nombre: ${d.get('nombre').trim()}`,
    `• Servicio: ${d.get('servicio')}`,
    `• Fecha preferida: ${dia}`,
    `• Horario: ${d.get('horario')}`,
    `• ${d.get('tipo')}`,
  ];
  if (d.get('mensaje').trim()) lineas.push(`• Comentarios: ${d.get('mensaje').trim()}`);
  window.open(`https://wa.me/${ESTUDIO.whatsapp}?text=${encodeURIComponent(lineas.join('\n'))}`, '_blank', 'noopener');
});

// Cabecera: transparente sobre la portada, marfil al bajar; menú del celular
const botonMenu = document.querySelector('.boton-menu');
const menu = document.getElementById('menu');
const cabecera = document.querySelector('.cabecera');
const flotante = document.querySelector('.flotante');
const actualizarCabecera = () => {
  const sobreLaFoto = window.scrollY < window.innerHeight * 0.6;
  cabecera.classList.toggle('transparente', sobreLaFoto && !menu.classList.contains('abierto'));
  flotante.classList.toggle('oculto', sobreLaFoto);
};
addEventListener('scroll', actualizarCabecera, { passive: true });
addEventListener('resize', actualizarCabecera);
actualizarCabecera();
botonMenu.addEventListener('click', () => {
  const abierto = menu.classList.toggle('abierto');
  botonMenu.setAttribute('aria-expanded', abierto);
  botonMenu.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
  actualizarCabecera();
});
menu.addEventListener('click', e => {
  if (e.target.closest('a')) { menu.classList.remove('abierto'); botonMenu.setAttribute('aria-expanded', false); botonMenu.setAttribute('aria-label', 'Abrir menú'); actualizarCabecera(); }
});

// Logo de portada: centrado sobre «TEMPORADA» (88 % de su ancho en computador, 66 % en celular)
const ajustarLogo = () => {
  const may = document.querySelector('.c-titulo .c-mayus'), logo = document.querySelector('.c-logo');
  const r = document.createRange(); r.selectNodeContents(may);
  const ancho = r.getBoundingClientRect().width, w = ancho * (innerWidth < 900 ? .66 : .88);
  logo.style.setProperty('--logo-w', w.toFixed(1) + 'px');
  logo.style.setProperty('--logo-x', ((ancho - w) / 2).toFixed(1) + 'px');
};
document.fonts.ready.then(ajustarLogo); addEventListener('resize', ajustarLogo);

// Año del pie
document.getElementById('anio').textContent = new Date().getFullYear();

// Aviso de fin de temporada: desde el 30-12-2026 a las 00:00 en Bogotá (05:00 UTC)
const FIN_TEMPORADA = Date.UTC(2026, 11, 30, 5, 0, 0);
const finAviso = document.getElementById('fin-temporada');
if (Date.now() >= FIN_TEMPORADA || new URLSearchParams(location.search).has('probar-aviso')) {
  finAviso.hidden = false;
  finAviso.querySelector('.fin-cerrar').addEventListener('click', () => { finAviso.hidden = true; });
}

/* =====================================================================
   COPOS DE NIEVE · delgados, fijos a la pantalla, sin animación
   Blancos tenues sobre rojo; rojo tenue sobre marfil y crema.
   ===================================================================== */
(() => {
  const NS = 'http://www.w3.org/2000/svg';
  const azar = semilla => () => (semilla = (semilla * 16807) % 2147483647) / 2147483647;
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
    const W = innerWidth, H = Math.max(innerHeight, screen.height || 0);
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
    });
  }
  pintar();
  let ancho = innerWidth, t;
  addEventListener('resize', () => { if (innerWidth === ancho) return; ancho = innerWidth; clearTimeout(t); t = setTimeout(pintar, 200); });
})();
