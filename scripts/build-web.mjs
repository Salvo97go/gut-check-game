// Copies the web game into www/, which Capacitor bundles into the iOS app.
// The repo root stays the source of truth so GitHub Pages keeps working.
import { cpSync, mkdirSync, rmSync } from "node:fs";

const files = ["index.html", "icon.png"];

rmSync("www", { recursive: true, force: true });
mkdirSync("www");
for (const file of files) cpSync(file, `www/${file}`);
console.log(`Copied ${files.length} files to www/`);
