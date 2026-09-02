// One-off utility: upload optimized fly-card preview assets to Cloudinary.
// - Heavy stills -> image resources (delivered via f_auto,q_auto,w_800).
// - Animated GIFs -> transcoded to mp4 (see the ffmpeg step in chat history)
//   and uploaded as video resources (delivered via f_auto,q_auto).
//
// Reads creds from .env (PUBLIC_CLOUDINARY_CLOUD_NAME, PUBLIC_CLOUDINARY_API_KEY,
// CLOUDINARY_API_SECRET). Run: node scripts/upload-previews.mjs
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { v2 as cloudinary } from "cloudinary";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

function loadEnv(file) {
  try {
    for (const line of readFileSync(resolve(root, file), "utf8").split("\n")) {
      const m = line.match(/^([A-Z_]+)=(.*)$/);
      if (m && !(m[1] in process.env)) {
        process.env[m[1]] = m[2].trim().replace(/^['"]|['"]$/g, "");
      }
    }
  } catch {}
}
loadEnv(".env");
loadEnv(".env.local");

cloudinary.config({
  cloud_name: process.env.PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const FOLDER = "portfolio/previews";

// [ absoluteOrRepoRelPath, publicIdWithinFolder, resourceType ]
const assets = [
  // Stills (from the repo's public/ dir)
  ["public/png/MINTLE/MT-SF-0.png", "mintle-sf-0", "image"],
  ["public/png/FARAMOVE/FARAMOVE_Campaign/FRMV-CAMPAIGN-SHORT-BUS.png", "frmv-campaign-short-bus", "image"],
  // Transcoded videos (from /tmp/previews)
  ["/tmp/previews/opsin-3d-base-depth.mp4", "opsin-3d-base-depth", "video"],
  ["/tmp/previews/bwi-pattern-loop-1.mp4", "bwi-pattern-loop-1", "video"],
  ["/tmp/previews/faramove-arrow-loop-wide.mp4", "faramove-arrow-loop-wide", "video"],
  ["/tmp/previews/frmv-launch-pc-screen.mp4", "frmv-launch-pc-screen", "video"],
];

const run = async () => {
  if (!process.env.CLOUDINARY_API_SECRET) {
    console.error("Missing CLOUDINARY_API_SECRET — check .env");
    process.exit(1);
  }
  // Remove the stray image version of the opsin gif left over from testing.
  try {
    await cloudinary.uploader.destroy(`${FOLDER}/opsin-3d-base-depth`, {
      resource_type: "image", invalidate: true,
    });
  } catch {}

  for (const [p, id, resource_type] of assets) {
    const file = p.startsWith("/") ? p : resolve(root, p);
    process.stdout.write(`Uploading ${id} (${resource_type}) ... `);
    try {
      const res = await cloudinary.uploader.upload(file, {
        resource_type,
        public_id: id,
        folder: FOLDER,
        overwrite: true,
        invalidate: true,
      });
      console.log(`ok  [${res.public_id}]  ${(res.bytes / 1024).toFixed(0)}KB`);
    } catch (e) {
      console.log("FAILED");
      console.error("  ", e?.message || e);
    }
  }
};

run();
