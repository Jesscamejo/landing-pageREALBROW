"""Textura de papel continua (sin costuras): grano fino + fibras de algodón. Vista previa local."""
import sys, math
import numpy as np
from PIL import Image, ImageDraw
N = 256
rng = np.random.default_rng(1225)
def campo(beta, lo, hi):
    f = np.fft.fftfreq(N)[:, None]**2 + np.fft.fftfreq(N)[None, :]**2
    f = np.sqrt(f); f[0, 0] = 1
    filt = (f >= lo) * (f <= hi) / f**beta
    n = np.real(np.fft.ifft2(np.fft.fft2(rng.normal(size=(N, N))) * filt))
    return n / n.std()
n = campo(0.2, 0.12, 0.5) * 0.85 + campo(1.0, 0.02, 0.08) * 0.18
# fibras de algodón largas y muy tenues, con continuidad en los bordes del mosaico
fib = Image.new("L", (N * 3, N * 3), 0); d = ImageDraw.Draw(fib)
for _ in range(70):
    x, y = rng.uniform(N, 2 * N, 2); a = rng.uniform(0, math.pi); L = rng.uniform(18, 70); c = rng.normal(0, .6)
    pts = [(x + math.cos(a + c * t) * L * t, y + math.sin(a + c * t) * L * t) for t in np.linspace(0, 1, 9)]
    d.line(pts, fill=int(rng.uniform(60, 140)), width=1)
f = np.asarray(fib, np.float32) / 255
f = sum(f[i*N:(i+1)*N, j*N:(j+1)*N] for i in range(3) for j in range(3))
v = np.clip(n * 0.5, -1, 1) * float(sys.argv[2]) + f * 0.05
claro = v > 0
rgb = np.where(claro[..., None], np.array([255, 253, 248]), np.array([40, 22, 18])).astype(np.uint8)
a = (np.clip(np.abs(v), 0, 1) * 255).astype(np.uint8)
Image.fromarray(np.dstack([rgb, a]), "RGBA").save(sys.argv[1], "WEBP", quality=80, alpha_quality=70, method=6)
