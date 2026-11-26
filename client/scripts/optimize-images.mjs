import sharp from "sharp";
import { readdirSync } from "fs";
import path from "path";

const dir = "src/assets";
const files = readdirSync(dir).filter((f) => /\.(jpg|jpeg|png)$/i.test(f));

for (const file of files) {
  const input = path.join(dir, file);
  const output = path.join(dir, file.replace(/\.(jpg|jpeg|png)$/i, ".webp"));
  await sharp(input)
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(output);
  console.log(`✓ ${file} → ${path.basename(output)}`);
}