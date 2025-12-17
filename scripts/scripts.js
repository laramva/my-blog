import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SRC_DIR = path.join(process.cwd(), "public", "images");
const OUT_DIR = path.join(process.cwd(), "public", "images", "thumbs");

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const files = fs
  .readdirSync(SRC_DIR)
  .filter((f) => f.toLowerCase().endsWith(".png"))
  // evita gerar thumbs dos seus ícones de assunto e outras coisas
  .filter((f) => !f.toLowerCase().includes("icone"))
  .filter((f) => !f.toLowerCase().includes("hero"))
  .filter((f) => !f.toLowerCase().includes("home"))
  .filter((f) => !f.toLowerCase().includes("thumb"));

for (const file of files) {
  const input = path.join(SRC_DIR, file);
  const output = path.join(OUT_DIR, file);

  // ✅ thumb grande + recorte inteligente + sharpen leve
  await sharp(input)
    .trim() // remove bordas sólidas (ajuda MUITO quando a ilustração tem “margem”)
    .resize(1024, 1024, { fit: "cover", position: "attention" })

    .sharpen({ sigma: 0.9, m1: 1.0, m2: 2.0 })
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(output);

  console.log("thumb ok:", file);
}

console.log("Finalizado. Thumbs em /public/images/thumbs");
