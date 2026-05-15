// scripts/_build-applications.mjs
//
// MEE-style application package runner.
// Auto-discovers every scripts/{slug}/build-package.mjs and runs it.
// Adding a new application = drop a new directory; no edit here required.

import { readdir, stat } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const entries = await readdir(__dirname, { withFileTypes: true });
const dirs = entries.filter(e => e.isDirectory() && !e.name.startsWith("_"));

console.log(`MEE runner: ${dirs.length} candidate dirs`);
let built = 0, failed = 0;

for (const d of dirs) {
  const script = resolve(__dirname, d.name, "build-package.mjs");
  try { await stat(script); }
  catch { console.log(`  skip ${d.name} (no build-package.mjs)`); continue; }

  console.log(`\n--- building ${d.name} ---`);
  const r = spawnSync("node", [script], { stdio: "inherit" });
  if (r.status === 0) built++;
  else { failed++; console.error(`  ${d.name} FAILED (exit ${r.status})`); }
}

console.log(`\nDone. ${built} built, ${failed} failed.`);
// Always exit 0 — one broken app must not block the whole deploy.
process.exit(0);
