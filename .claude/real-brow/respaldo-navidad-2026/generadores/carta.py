"""Carta de pergamino envejecido con rollo superior (vista previa local, original).
Uso: carta.py ANCHO ALTO ROLLO SALIDA [semilla]   (medidas en px CSS; se genera a 2x)
La imagen incluye un margen M para la sombra sobre el fondo."""
import sys, math
import numpy as np
from PIL import Image

Wc, Hc, Rc = int(sys.argv[1]), int(sys.argv[2]), int(sys.argv[3])
SALIDA = sys.argv[4]; SEM = int(sys.argv[5]) if len(sys.argv) > 5 else 7
S = 2; M = 28                                   # escala y margen para la sombra (px CSS)
W, H = (Wc + 2 * M) * S, (Hc + 2 * M) * S
rng = np.random.default_rng(SEM)
yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)

def ruido1(n, per, amp):
    k = int(n / per) + 4; c = rng.uniform(-1, 1, k); x = np.arange(n) / per
    i = np.floor(x).astype(int); t = x - i
    p0, p1, p2, p3 = c[i], c[i+1], c[i+2], c[i+3]
    return amp * 0.5 * (2*p1 + (-p0+p2)*t + (2*p0-5*p1+4*p2-p3)*t**2 + (-p0+3*p1-3*p2+p3)*t**3)

def ruido2(sy, sx):
    gh, gw = int(H / sy) + 3, int(W / sx) + 3
    a = Image.fromarray(rng.random((gh, gw)).astype(np.float32), "F").resize((int(gw * sx), int(gh * sy)), Image.BICUBIC)
    return np.asarray(a, dtype=np.float32)[:H, :W] - .5

def borde(n, base):   # borde rasgado: ondulación amplia + dientes irregulares
    return base + ruido1(n, 140*S, 3.2*S) + ruido1(n, 38*S, 2.2*S) + ruido1(n, 9*S, 1.3*S) + ruido1(n, 3*S, .6*S)

def suav(a, s):
    k = max(1, int(s)); im = Image.fromarray(a.astype(np.float32), "F")
    return np.asarray(im.resize((max(1, W // k), max(1, H // k)), Image.BILINEAR).resize((W, H), Image.BICUBIC), dtype=np.float32)

def ss(a, b, x): t = np.clip((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t)

x0, x1 = M * S, (M + Wc) * S
y_rollo0, y_rollo1 = M * S, (M + Rc) * S
y_cuerpo0, y1 = int((M + Rc * .55) * S), (M + Hc) * S

# ---------- Cuerpo de la carta (cuatro bordes rasgados) ----------
izq = borde(H, x0 + 4*S)[:, None]; der = borde(H, x1 - 4*S)[:, None]
inf = borde(W, y1 - 5*S)[None, :]
d_cuerpo = np.minimum.reduce([xx - izq, der - xx, inf - yy, yy - y_cuerpo0])
cuerpo = ss(-.6*S, .6*S, d_cuerpo)

# ---------- Rollo superior ----------
r_izq = borde(H, x0 + 1*S)[:, None]; r_der = borde(H, x1 - 1*S)[:, None]
r_sup = (y_rollo0 + ruido1(W, 200*S, 1.5*S))[None, :]
r_inf = (y_rollo1 + ruido1(W, 260*S, 2*S))[None, :]
d_rollo = np.minimum.reduce([xx - r_izq, r_der - xx, yy - r_sup, r_inf - yy])
rollo = ss(-.6*S, .6*S, d_rollo)
v = np.clip((yy - r_sup) / np.maximum(r_inf - r_sup, 1), 0, 1)       # 0 arriba, 1 abajo del cilindro

# ---------- Color y envejecimiento del pergamino ----------
marfil = np.array([240, 230, 208], np.float32)
tostado = np.array([196, 160, 108], np.float32)
quemado = np.array([112, 72, 38], np.float32)
manchas = ruido2(160*S, 220*S) * 1.0 + ruido2(60*S, 70*S) * .6
fibras = ruido2(1.2*S, 9*S) * .5 + ruido2(.8*S, 3*S) * .4
grano = ruido2(.6*S, .6*S)

d_total = np.maximum(d_cuerpo, d_rollo)                              # distancia al borde (px de cálculo)
envej = 1 - ss(0, (34 + 18 * ruido2(50*S, 50*S)) * S, d_total)      # tostado cerca del borde, irregular
env_quem = 1 - ss(0, (4.5 + 3 * ruido2(14*S, 14*S)) * S, d_total)   # filo oscuro de papel viejo
t_tost = np.clip(envej * .75 + np.clip(manchas, 0, None) * .22 + .08, 0, 1)
col = marfil * (1 - t_tost[..., None]) + tostado * t_tost[..., None]
col = col * (1 - env_quem[..., None] * .55) + quemado * (env_quem[..., None] * .55)
# manchas de humedad y puntos de envejecimiento muy tenues
for _ in range(9):
    cx, cy = rng.uniform(x0, x1), rng.uniform(y_cuerpo0, y1); rr = rng.uniform(6, 30) * S
    m = np.exp(-(((xx - cx) ** 2 + (yy - cy) ** 2) / (rr ** 2)) ** 1.4) * rng.uniform(.04, .1)
    col = col * (1 - m[..., None]) + tostado * m[..., None]
col *= (1 + fibras * .055 + grano * .035)[..., None]

# ---------- Iluminación: papel ligeramente ondulado + rollo cilíndrico ----------
alt = suav(ruido2(90*S, 140*S), 1)
gy, gx = np.gradient(alt * 30)
ondas = 1 + (-gx * .5 - gy * .7) * .3
luz_general = 1.04 - .08 * (xx / W) - .06 * (yy / H)
col_cuerpo = col * (ondas * luz_general)[..., None]
cil = .72 + .42 * np.sin(np.clip(v, 0, 1) * math.pi * .92 + .1) + .12 * np.exp(-((v - .3) / .12) ** 2)
cil *= (1 - .35 * ss(.78, 1, v))
col_rollo = col * (cil * luz_general)[..., None]
# Sombra del rollo sobre el cuerpo
dist_bajo = (yy - r_inf) / S
sombra_rollo = np.clip(1 - dist_bajo / 22, 0, 1) ** 2 * (dist_bajo > -2) * .38
col_cuerpo *= (1 - sombra_rollo)[..., None]

# ---------- Composición ----------
papel_a = np.maximum(cuerpo, rollo)
col_final = col_cuerpo * (1 - rollo[..., None]) + col_rollo * rollo[..., None]
# Sombra sobre el fondo rojo: suave y amplia + contacto
sil = papel_a
sombra = np.clip(np.roll(np.roll(suav(sil, 16*S), 10*S, 0), 4*S, 1) * .55 + np.roll(suav(sil, 3*S), 2*S, 0) * .35, 0, 1)
alfa = np.clip(sil + sombra * (1 - sil), 0, 1)
negro = np.array([22, 4, 6], np.float32)
rgb = (col_final * sil[..., None] + negro * (sombra * (1 - sil))[..., None]) / np.maximum(alfa, 1e-4)[..., None]
img = Image.fromarray(np.dstack([np.clip(rgb, 0, 255), alfa * 255]).astype(np.uint8), "RGBA")
img.save(SALIDA, "WEBP", quality=84, alpha_quality=85, method=6)
print("carta", Wc, "x", Hc, "->", SALIDA)
