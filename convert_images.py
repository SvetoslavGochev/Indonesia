"""
Image Optimization Utility

Converts PNG images to JPG and optimizes JPEG files for web use.
Supports batch processing with progress tracking and statistics.

Usage:
    python convert_images.py --mode full --quality 85
    python convert_images.py --mode png
    python convert_images.py --mode jpg --quality 82
"""

import os
import logging
import argparse
from pathlib import Path
from typing import Tuple, Optional
from PIL import Image

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


class Config:
    """Image optimization settings with defaults."""
    PNG_TO_JPG_QUALITY = 85
    JPG_COMPRESSION_QUALITY = 82
    WEBP_QUALITY = 80
    OPTIMIZE = True
    IMG_DIRECTORY = Path('assets/images')
    PNG_FILES = [
        'jakarta-stadium-aerial.png',
        'stadium-interior.png'
    ]
    JPG_FILES = [
        'bandung.jpg',
        'jakarta.jpg',
        'makassar.jpg',
        'medan.jpg',
        'palembang.jpg',
        'semarang.jpg',
        'surabaya.jpg',
        'yogyakarta.jpg',
        'jakarta-stadium.jpg'
    ]

    WEBP_FILES = PNG_FILES + JPG_FILES


def get_file_size_kb(filepath: str) -> float:
    """Get file size in kilobytes."""
    try:
        return os.path.getsize(filepath) / 1024
    except OSError:
        return 0.0


def convert_rgba_to_rgb(img: Image.Image, bg_color: Tuple[int, int, int] = (255, 255, 255)) -> Image.Image:
    """
    Convert RGBA/LA/Palette mode image to RGB.
    
    Args:
        img: PIL Image object
        bg_color: Background color RGB tuple for transparency
    
    Returns:
        RGB mode Image object
    """
    if img.mode not in ('RGBA', 'LA', 'P'):
        return img
    
    if img.mode == 'P':
        img = img.convert('RGBA')
    
    rgb_img = Image.new('RGB', img.size, bg_color)
    if img.mode == 'RGBA':
        rgb_img.paste(img, mask=img.split()[3])
    else:
        rgb_img.paste(img)
    
    return rgb_img


def convert_png_to_jpg(png_path: str, quality: int = None) -> Optional[Tuple[str, float, float]]:
    """
    Convert PNG to JPG format with size reporting.
    
    Args:
        png_path: Path to PNG file
        quality: JPEG quality (1-100), uses config default if None
    
    Returns:
        Tuple of (jpg_path, original_size_kb, new_size_kb) or None if failed
    """
    if quality is None:
        quality = Config.PNG_TO_JPG_QUALITY
    
    try:
        if not os.path.exists(png_path):
            logger.warning(f"PNG file not found: {png_path}")
            return None
        
        logger.info(f"Converting: {png_path}")
        img = Image.open(png_path)
        img = convert_rgba_to_rgb(img)
        
        jpg_path = str(png_path).replace('.png', '.jpg')
        img.save(jpg_path, 'JPEG', quality=quality, optimize=Config.OPTIMIZE)
        
        original_size = get_file_size_kb(png_path)
        new_size = get_file_size_kb(jpg_path)
        savings = ((original_size - new_size) / original_size * 100) if original_size > 0 else 0
        
        logger.info(f"  {original_size:.1f} KB → {new_size:.1f} KB (saved {savings:.1f}%)")
        return jpg_path, original_size, new_size
        
    except Exception as e:
        logger.error(f"Failed to convert {png_path}: {e}")
        return None


def optimize_jpg(jpg_path: str, quality: int = None) -> Optional[Tuple[float, float]]:
    """
    Optimize JPEG file compression.
    
    Args:
        jpg_path: Path to JPG file
        quality: JPEG quality (1-100), uses config default if None
    
    Returns:
        Tuple of (original_size_kb, new_size_kb) or None if failed
    """
    if quality is None:
        quality = Config.JPG_COMPRESSION_QUALITY
    
    try:
        if not os.path.exists(jpg_path):
            logger.warning(f"JPG file not found: {jpg_path}")
            return None
        
        logger.info(f"Optimizing: {jpg_path}")
        img = Image.open(jpg_path)
        original_size = get_file_size_kb(jpg_path)
        
        img.save(jpg_path, 'JPEG', quality=quality, optimize=Config.OPTIMIZE)
        
        new_size = get_file_size_kb(jpg_path)
        savings = ((original_size - new_size) / original_size * 100) if original_size > 0 else 0
        
        logger.info(f"  {original_size:.1f} KB → {new_size:.1f} KB (saved {savings:.1f}%)")
        return original_size, new_size
        
    except Exception as e:
        logger.error(f"Failed to optimize {jpg_path}: {e}")
        return None


def convert_to_webp(image_path: str, quality: int = None) -> Optional[Tuple[str, float, float]]:
    """
    Convert PNG/JPG image to WebP format with size reporting.

    Args:
        image_path: Path to source image
        quality: WebP quality (1-100), uses config default if None

    Returns:
        Tuple of (webp_path, original_size_kb, new_size_kb) or None if failed
    """
    if quality is None:
        quality = Config.WEBP_QUALITY

    try:
        if not os.path.exists(image_path):
            logger.warning(f"Image file not found: {image_path}")
            return None

        logger.info(f"Converting to WebP: {image_path}")
        img = Image.open(image_path)
        img = convert_rgba_to_rgb(img)

        source_path = Path(image_path)
        webp_path = str(source_path.with_suffix('.webp'))
        img.save(webp_path, 'WEBP', quality=quality, optimize=Config.OPTIMIZE)

        original_size = get_file_size_kb(image_path)
        new_size = get_file_size_kb(webp_path)
        savings = ((original_size - new_size) / original_size * 100) if original_size > 0 else 0

        logger.info(f"  {original_size:.1f} KB -> {new_size:.1f} KB (saved {savings:.1f}%)")
        return webp_path, original_size, new_size

    except Exception as e:
        logger.error(f"Failed to convert {image_path} to WebP: {e}")
        return None


def process_images(mode: str = 'full', quality: int = None) -> None:
    """
    Process images based on specified mode.
    
    Args:
          mode: 'full' (PNG->JPG + JPG optimize + WebP), 'png' (PNG->JPG),
              'jpg' (optimize JPG), 'webp' (generate WebP)
          quality: quality override (1-100)
    """
    img_dir = Config.IMG_DIRECTORY
    
    if not img_dir.exists():
        logger.error(f"Image directory not found: {img_dir}")
        return
    
    total_savings = 0.0
    processed_count = 0
    
    # Process PNG files
    if mode in ('full', 'png'):
        logger.info("\n=== Converting PNG to JPG ===")
        for png_file in Config.PNG_FILES:
            result = convert_png_to_jpg(img_dir / png_file, quality)
            if result:
                _, orig_size, new_size = result
                total_savings += orig_size - new_size
                processed_count += 1
    
    # Process JPG files
    if mode in ('full', 'jpg'):
        logger.info("\n=== Optimizing JPEG files ===")
        for jpg_file in Config.JPG_FILES:
            result = optimize_jpg(img_dir / jpg_file, quality)
            if result:
                orig_size, new_size = result
                total_savings += orig_size - new_size
                processed_count += 1

    # Process WebP generation
    if mode in ('full', 'webp'):
        logger.info("\n=== Generating WebP files ===")
        for image_file in Config.WEBP_FILES:
            result = convert_to_webp(img_dir / image_file, quality)
            if result:
                _, orig_size, new_size = result
                total_savings += orig_size - new_size
                processed_count += 1
    
    # Print summary
    logger.info(f"\n{'='*50}")
    logger.info(f"Total files processed: {processed_count}")
    logger.info(f"Total space saved: {total_savings:.1f} KB ({total_savings/1024:.2f} MB)")
    logger.info(f"{'='*50}\n")


def main():
    """Command-line interface entry point."""
    parser = argparse.ArgumentParser(
        description='Optimize images for web: PNG->JPG, JPEG compression and WebP generation'
    )
    parser.add_argument(
        '--mode',
        choices=['full', 'png', 'jpg', 'webp'],
        default='full',
        help='Processing mode (default: full - JPG pipeline + WebP generation)'
    )
    parser.add_argument(
        '--quality',
        type=int,
        help='Quality override (1-100, default: 85 PNG->JPG, 82 JPG optimize, 80 WebP)'
    )
    parser.add_argument(
        '--log',
        choices=['DEBUG', 'INFO', 'WARNING', 'ERROR'],
        default='INFO',
        help='Logging level (default: INFO)'
    )
    
    args = parser.parse_args()
    logger.setLevel(args.log)
    
    # Validate quality parameter
    if args.quality is not None:
        if not (1 <= args.quality <= 100):
            logger.error("Quality must be between 1 and 100")
            return
    
    process_images(args.mode, args.quality)


if __name__ == '__main__':
    main()
