import sharp from "sharp";
import fs from "node:fs";
/**
 * @param {Object} param0
 * @param {string} param0.input
 * @param {number[]} param0.sizes
 */
export function generateFavicons({ input, sizes }) {
  fs.access(`public/${input}`, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(`File ${input} does not exist`);
      console.error(`Favicon generation aborted`);
    }
  });

  sizes.map((size) => {
    const dest = `public/favicon-${size}.webp`;
    // Check if the file exists
    fs.access(dest, fs.constants.F_OK, (err) => {
      if (err) {
        sharp(`public/${input}`)
          .resize({ width: size, height: size })
          .toFile(dest)
          .catch((err) => console.log(err));
      }
    });
  });
}
