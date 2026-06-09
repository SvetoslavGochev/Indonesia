from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent
IMG_DIR = ROOT / "assets" / "images"

# base_name -> source extension
BIRD_SOURCES = {
    "bird-javan-ostrich": ".png",
    "bird-cockatoo": ".png",
    "bird-harpy-eagle": ".png",
    "bird-hornbill": ".jpg",
    "bird-paradise-bird": ".png",
    "bird-green-parrot": ".png",
    "bird-javan-pheasant": ".png",
    "bird-myna": ".png",
}

TARGET_WIDTHS = [480, 960]
WEBP_QUALITY = 72


def encode_webp(source_path: Path, output_path: Path, target_width: int) -> tuple[int, int]:
    with Image.open(source_path) as img:
        # Normalize alpha images before WebP export.
        if img.mode in ("RGBA", "LA", "P"):
            img = img.convert("RGBA")
        else:
            img = img.convert("RGB")

        width, height = img.size
        resized = img

        if width > target_width:
            new_height = int(height * (target_width / width))
            resized = img.resize((target_width, new_height), Image.Resampling.LANCZOS)

        resized.save(output_path, format="WEBP", quality=WEBP_QUALITY, method=6)

    return output_path.stat().st_size, target_width


def main() -> None:
    generated = []
    for base, ext in BIRD_SOURCES.items():
        source = IMG_DIR / f"{base}{ext}"
        if not source.exists():
            print(f"SKIP missing source: {source.name}")
            continue

        for width in TARGET_WIDTHS:
            out = IMG_DIR / f"{base}-{width}.webp"
            size_bytes, _ = encode_webp(source, out, width)
            generated.append((out.name, round(size_bytes / 1024, 1)))

    print("Generated/updated files:")
    for name, kb in generated:
        print(f"- {name}: {kb} KB")


if __name__ == "__main__":
    main()
