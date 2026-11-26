"""Generador de bordes de papel rasgado (vista previa local, fuera del repositorio).

Produce, para cada transición, tres capas alineadas:
  mascara  -> recorta el borde inferior de la sección de arriba (la superficie del papel)
  alma     -> alma fibrosa del papel + fibras sueltas + sombra, debajo de la sección de arriba
  labio    -> deshilachado y relieve de la superficie, dentro de la sección de arriba
Unidades de los parámetros: px CSS. Se renderiza a 4x y se exporta a 2x.
"""
import sys, json, math
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

SS = 4      # escala de cálculo (px por px CSS)
OUT = 2     # escala de exportación


def catmull(pts, n, period, rng):
    """Ruido 1D de valor con interpolación Catmull-Rom (suave, no periódico)."""
    k = int(n / period) + 4
    c = rng.uniform(-1, 1, k)
    x = np.arange(n) / period
    i = np.floor(x).astype(int)
    t = x - i
    p0, p1, p2, p3 = c[i], c[i + 1], c[i + 2], c[i + 3]
    return 0.5 * ((2 * p1) + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t ** 2
                  + (-p0 + 3 * p1 - 3 * p2 + p3) * t ** 3)


def noise2d(h, w, sy, sx, rng):
    """Ruido 2D de valor (sy, sx: tamaño de celda en px de cálculo)."""
    gh, gw = int(h / sy) + 3, int(w / sx) + 3
    small = Image.fromarray(rng.random((gh, gw)).astype(np.float32), mode="F")
    big = small.resize((int(gw * sx), int(gh * sy)), Image.BICUBIC)
    return np.asarray(big, dtype=np.float32)[:h, :w] - 0.5


def smoothstep(a, b, x):
    t = np.clip((x - a) / (b - a), 0, 1)
    return t * t * (3 - 2 * t)


def _box(a, r, axis):
    r = max(1, int(r))
    pad = [(0, 0), (0, 0)]
    pad[axis] = (r + 1, r)
    c = np.cumsum(np.pad(a, pad, mode="edge"), axis=axis, dtype=np.float64)
    hi = np.take(c, np.arange(2 * r + 1, c.shape[axis]), axis=axis)
    lo = np.take(c, np.arange(0, c.shape[axis] - 2 * r - 1), axis=axis)
    return ((hi - lo) / (2 * r + 1)).astype(np.float32)


def blur(arr, sigma):
    """Desenfoque gaussiano aproximado con tres pasadas de caja."""
    r = sigma * math.sqrt(3) / math.sqrt(3) * 1.0
    a = arr.astype(np.float32)
    for _ in range(3):
        a = _box(_box(a, r, 0), r, 1)
    return a


def over(dst, rgb, a):
    """Composición «over» sobre un lienzo RGBA premultiplicado (float)."""
    a = np.clip(a, 0, 1)[..., None]
    dst[..., :3] = rgb * a + dst[..., :3] * (1 - a)
    dst[..., 3:] = a + dst[..., 3:] * (1 - a)


def export(canvas, path, size, quality=86):
    a = np.clip(canvas[..., 3], 1e-6, 1)
    rgb = np.clip(canvas[..., :3] / a[..., None], 0, 255)
    rgba = np.dstack([rgb, np.clip(canvas[..., 3], 0, 1) * 255]).astype(np.uint8)
    im = Image.fromarray(rgba, "RGBA").resize(size, Image.LANCZOS)
    im.save(path, "WEBP", quality=quality, alpha_quality=90, method=6)


def generar(cfg, carpeta):
    rng = np.random.default_rng(cfg["semilla"])
    Wc, Hc = cfg["ancho"], cfg["alto"]
    W, H = Wc * SS, Hc * SS
    s = SS
    xs = np.arange(W)

    # ---------- Contorno de la rotura: orgánico, asimétrico, sin repeticiones ----------
    warp = cfg["torsion"] * s * catmull(None, W + 400 * s, 170 * s, rng)[:W]
    xw = np.clip(xs + warp, 0, W + 300 * s - 1)
    def campo(period, amp):
        n = catmull(None, W + 600 * s, period * s, rng)
        return amp * s * np.interp(xw, np.arange(len(n)), n)
    env = 0.45 + 0.9 * smoothstep(-0.5, 0.5, catmull(None, W + 10, cfg["calma"] * s, rng)[:W])
    y_s = (cfg["base"] * Hc * s
           + campo(cfg["deriva_periodo"], cfg["deriva"])
           + env * campo(cfg["medio_periodo"], cfg["medio"])
           + env * campo(cfg["pequeno_periodo"], cfg["pequeno"])
           + campo(13, 1.5)
           + campo(4, 0.45))
    # Anchura del alma: borde ancho y esponjoso, con «labios» más anchos en algunos tramos
    labio = smoothstep(-0.35, 0.55, catmull(None, W + 10, cfg["labio_periodo"] * s, rng)[:W] + cfg["labios"])
    w_core = (cfg["alma_min"] + (cfg["alma_max"] - cfg["alma_min"]) * labio
              + 1.2 * catmull(None, W + 10, 26 * s, rng)[:W]) * s
    y_c = y_s + w_core + catmull(None, W + 10, 6 * s, rng)[:W] * 1.2 * s

    yy = np.arange(H, dtype=np.float32)[:, None]
    # Nube de algodón: ruido casi isótropo en varias escalas (sin rayas)
    nube = (noise2d(H, W, 2.6 * s, 2.0 * s, rng) * 0.55 + noise2d(H, W, 1.1 * s, 0.9 * s, rng) * 0.35
            + noise2d(H, W, 0.45 * s, 0.45 * s, rng) * 0.25)
    grano = noise2d(H, W, 0.5 * s, 0.5 * s, rng)

    # ---------- Superficie (máscara de la sección de arriba) ----------
    borde_s = y_s[None, :] + nube * 1.1 * s
    sup = 1 - smoothstep(-0.4 * s, 0.4 * s, yy - borde_s)

    # ---------- Alma esponjosa ----------
    dist = (yy - y_s[None, :]) / np.maximum(w_core[None, :], 1)       # 0 en la superficie, 1 en el borde
    # grumos opacos con huecos pequeños: el borde se decide por umbral, no por transparencia
    grumo = (noise2d(H, W, 2.4 * s, 1.9 * s, rng) * 0.65 + noise2d(H, W, 1.0 * s, 0.85 * s, rng) * 0.3
             + grano * 0.08)
    corte = dist - 0.9 + grumo * cfg.get("grumo", 0.55)
    alma_a = 1 - smoothstep(-0.05, 0.05, corte)
    alma_a *= (yy > y_s[None, :] - 2 * s)
    # halo de pelusa muy tenue más allá del borde
    halo = (1 - smoothstep(0, cfg["halo"] * s, yy - y_c[None, :])) * smoothstep(0.05, 0.3, nube + 0.1)
    alma_a = np.maximum(alma_a, halo * (yy > y_s[None, :]) * 0.22)

    # Fibras sueltas: cortas, finas y enredadas
    fib = Image.new("L", (W, H), 0)
    dr = ImageDraw.Draw(fib)
    dens = 0.4 + 0.9 * smoothstep(-0.4, 0.4, catmull(None, W + 10, 80 * s, rng)[:W])
    n_fib = int(Wc * cfg["fibras"])
    xs_f = rng.uniform(0, W - 1, n_fib)
    keep = rng.random(n_fib) < dens[xs_f.astype(int)] / 1.3
    for x0 in xs_f[keep]:
        i = int(x0)
        y0 = y_c[i] - rng.uniform(0.0, 0.6) * w_core[i]
        largo = min(rng.lognormal(math.log(2.4), 0.5), 7) * s
        ang = math.pi / 2 + rng.uniform(-1.45, 1.45)
        curva = rng.normal(0, 0.9)
        pts = []
        for t in np.linspace(0, 1, 6):
            a2 = ang + curva * t
            pts.append((x0 + math.cos(a2) * largo * t, y0 + math.sin(a2) * largo * t))
        dr.line(pts, fill=int(rng.uniform(130, 235)), width=int(rng.choice([1, 1, 2])))
    fib = np.asarray(fib, dtype=np.float32) / 255.0
    alma_total = np.maximum(alma_a, fib * (yy > y_s[None, :] - 1 * s))

    # Color del alma: teñido junto a la superficie y más claro hacia fuera; sombra bajo el labio
    core = np.array(cfg["alma"], np.float32)
    tinte = np.array(cfg.get("alma_tinte", cfg["alma"]), np.float32)
    t_mez = np.exp(-np.clip(yy - y_s[None, :], 0, None) / (cfg.get("tinte_px", 1.5) * s))[..., None]
    luz = (1 + 0.035 * nube + 0.025 * grano)[..., None]
    bajo_labio = (1 - cfg.get("bajo_labio", 0.06) * (1 - smoothstep(0, 1.2 * s, yy - y_s[None, :])))[..., None]
    core_rgb = np.clip((tinte * t_mez + core * (1 - t_mez)) * luz * bajo_labio, 0, 255)

    # ---------- Sombra sobre la sección de abajo ----------
    # la sombra nace del cuerpo sólido del papel, no de la pelusa (si no, rellena sus huecos)
    solido = np.maximum(sup, (1 - smoothstep(0.45, 0.85, dist)) * (yy > y_s[None, :] - 2 * s))
    cb, co = cfg.get("contacto", [2.2, 2.4])
    sombra_c = np.roll(blur(solido, cb * s), int(co * s), axis=0) * cfg["sombra"][0]
    ab, ao = cfg.get("ambiente", [9, 7])
    sombra_a = np.roll(blur(solido, ab * s), int(ao * s), axis=0) * cfg["sombra"][1]
    sombra = np.clip(sombra_c + sombra_a, 0, 1) * (1 - (sup if cfg.get("sombra_aparte") else solido))

    # ---------- Capa «alma» (debajo de la sección de arriba) ----------
    alma_canvas = np.zeros((H, W, 4), np.float32)
    sombra_canvas = np.zeros((H, W, 4), np.float32)
    over(sombra_canvas, np.array(cfg["color_sombra"], np.float32), sombra)
    if not cfg.get("sombra_aparte"):
        over(alma_canvas, np.array(cfg["color_sombra"], np.float32), sombra)
    over(alma_canvas, core_rgb, alma_total)

    # ---------- Capa «labio» (dentro de la sección de arriba, recortada por la máscara) ----------
    labio_canvas = np.zeros((H, W, 4), np.float32)
    d_sup = (y_s[None, :] - yy) / s                                    # px CSS por encima del borde
    deshilado = (1 - smoothstep(0, 1.6, d_sup + nube * 1.6)) * (d_sup > -0.5) * cfg["deshilado"]
    over(labio_canvas, core_rgb, deshilado)
    # relieve: el papel se levanta un poco junto a la rotura (luz suave, solo cerca del borde)
    relieve = (1 - smoothstep(0, 6, d_sup)) * (0.6 + nube) * cfg["relieve"]
    over(labio_canvas, np.array([255, 250, 240], np.float32), np.clip(relieve, 0, 1) * (d_sup > -1))

    # ---------- Máscara de la superficie ----------
    mask_canvas = np.zeros((H, W, 4), np.float32)
    over(mask_canvas, np.zeros(3, np.float32), sup)

    size = (Wc * OUT, Hc * OUT)
    nom = cfg["nombre"]
    export(mask_canvas, f"{carpeta}/{nom}-mascara.webp", size, 92)
    export(alma_canvas, f"{carpeta}/{nom}-alma.webp", size, 88)
    export(labio_canvas, f"{carpeta}/{nom}-labio.webp", size, 86)
    if cfg.get("sombra_aparte"):
        export(sombra_canvas, f"{carpeta}/{nom}-sombra.webp", size, 85)
    print(nom, "contorno px css:", round(float(y_s.min() / s), 1), "-", round(float(y_s.max() / s), 1))


if __name__ == "__main__":
    cfgs = json.load(open(sys.argv[1]))
    for c in cfgs:
        generar(c, sys.argv[2])
