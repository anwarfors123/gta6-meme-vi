// gta6-meme-x-01 — entry runner.
//
// The entry itself is a post on X: the picture (meme.png) plus the words around it.
// This program is only the hand-off. It takes POST.json, the small file that names
// the post, and puts a copy where the grader looks for it.
//
//   source:      $MAKEFUN_BOT_DIR/POST.json      (default: /bot/POST.json)
//   destination: $MAKEFUN_OUTPUT_DIR/POST.json   (default: /output/POST.json)
//
// Nothing else happens: no network, no clock, no rewriting of the payload. Two runs
// over the same input produce the same bytes. Quiet when it works, one line on stderr
// and a non-zero status when it does not, so a broken run never looks like a pass.
//
// Locally:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const POST = "POST.json";
const srcDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const dstDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = join(srcDir, POST);
const dst = join(dstDir, POST);

try {
  mkdirSync(dstDir, { recursive: true });
  copyFileSync(src, dst);
} catch (err) {
  const why = err instanceof Error ? err.message : String(err);
  process.stderr.write(`gta6-meme-x-01: could not publish ${src} -> ${dst}: ${why}\n`);
  process.exit(1);
}
