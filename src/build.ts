// src/build.ts

import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { colors, tokenColors } from "./theme.js";

const currentFile = fileURLToPath(import.meta.url);
const currentDirectory = dirname(currentFile);

const outputPath = resolve(
  currentDirectory,
  "../themes/ohohama-new-color-theme.json",
);

const theme = {
  name: "My Theme",
  type: "dark",
  colors,
  tokenColors,
  semanticHighlighting: true,
};

await mkdir(dirname(outputPath), {
  recursive: true,
});

await writeFile(
  outputPath,
  `${JSON.stringify(theme, null, 2)}\n`,
  "utf8",
);

console.log(`Theme generated: ${outputPath}`);