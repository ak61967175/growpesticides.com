// Optimizes the original product images into small WebP files for the website.
// Usage:  npm run optimize-images
//   input : source-images/*   (keep your big original photos here)
//   output: public/assets/*.webp (+ logo.png, 512px)  and  src/data/imageSizes.json
// Run this whenever you add a new product photo to source-images/.
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const SRC = "source-images";
const OUT = "public/assets";
const MAX = 900; // longest side in px — plenty for product pages, retina phones included
fs.mkdirSync(OUT, { recursive: true });

const sizes = {};
for (const file of fs.readdirSync(SRC)) {
  if (!/\.(png|jpe?g|webp)$/i.test(file)) continue;
  const base = path.parse(file).name;
  const img = sharp(path.join(SRC, file), { limitInputPixels: false });
  const meta = await img.metadata();
  const isLogo = base.toLowerCase() === "logo";
  const max = isLogo ? 512 : MAX;
  const out = await sharp(path.join(SRC, file), { limitInputPixels: false })
    .resize({ width: max, height: max, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(path.join(OUT, `${base}.webp`));
  sizes[`/assets/${base}.webp`] = [out.width, out.height];
  if (isLogo) {
    // Search engines/social cards prefer a PNG logo.
    await sharp(path.join(SRC, file))
      .resize({ width: 512, height: 512, fit: "inside" })
      .png({ compressionLevel: 9 })
      .toFile(path.join(OUT, "logo.png"));
  }
  console.log(`${file} ${meta.width}x${meta.height} -> ${out.width}x${out.height} ${(out.size / 1024).toFixed(0)}KB`);
}
fs.writeFileSync("src/data/imageSizes.json", JSON.stringify(sizes, null, 1));
