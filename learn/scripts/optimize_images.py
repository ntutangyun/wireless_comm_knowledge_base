#!/usr/bin/env python3
"""Shrink the ebook PNG cache (learn/build/images/) via palette quantization.

The rendered visuals are near-monochrome line art, so 128 colors are visually
indistinguishable from full RGB while cutting file size several-fold.
Optional step between render_images.mjs and build_epub.py; requires Pillow
(skips cleanly if unavailable). Idempotent: already-palettized files are left
untouched.

Usage: python optimize_images.py
"""
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    raise SystemExit("Pillow not installed - skipping optimization (pip install Pillow)")

IMAGE_DIR = Path(__file__).resolve().parent.parent / "build" / "images"

total_before = total_after = converted = 0
for p in sorted(IMAGE_DIR.glob("*.png")):
    before = p.stat().st_size
    total_before += before
    with Image.open(p) as img:
        if img.mode == "P":
            total_after += before
            continue
        quant = img.convert("RGB").quantize(colors=128)
    quant.save(p, optimize=True)
    total_after += p.stat().st_size
    converted += 1

print(f"optimized {converted} PNGs: {total_before / 1e6:.1f} MB -> {total_after / 1e6:.1f} MB")
