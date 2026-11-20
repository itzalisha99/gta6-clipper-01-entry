// gta6-clipper-01 entry: hand in the YouTube video in VIDEO.json.
//
// The entry is the video itself. This program (Node 22, standard library
// only) reads VIDEO.json from the repository root, checks it really names
// one YouTube video, and copies it byte for byte to the output directory,
// where the gate reads it. The house then reads the video's views itself
// through the YouTube Data API; nothing this program writes about the
// video is scored, so it writes nothing else.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// A YouTube video address, as the Share button gives it:
// youtube.com/shorts/<id>, youtube.com/watch?v=<id> or youtu.be/<id>,
// with an 11-character video id.
const YOUTUBE_URL =
  /^https:\/\/(?:www\.|m\.)?(?:youtube\.com\/(?:shorts\/|watch\?v=)|youtu\.be\/)[A-Za-z0-9_-]{11}(?:[?#].*)?$/;

function fail(message: string): never {
  console.error(`gta6-clipper-01: ${message}`);
  process.exit(1);
}

const source = join(BOT_DIR, 'VIDEO.json');

let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(source, 'utf8'));
} catch (err) {
  fail(`VIDEO.json could not be read as JSON: ${(err as Error).message}`);
}

if (
  typeof parsed !== 'object' ||
  parsed === null ||
  Array.isArray(parsed) ||
  typeof (parsed as { url?: unknown }).url !== 'string' ||
  !YOUTUBE_URL.test((parsed as { url: string }).url)
) {
  fail('VIDEO.json must be {"url": "<a YouTube video address>"}');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(source, join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  fail(`VIDEO.json could not be copied to ${OUTPUT_DIR}: ${(err as Error).message}`);
}
