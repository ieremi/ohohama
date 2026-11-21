import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { colors, tokenColors } from "./components/index.js";
import { dark, light, type Semantic } from "./semantic.js";

const currentFile = fileURLToPath(import.meta.url);
const currentDirectory = dirname(currentFile);

const variants: {
  name: string;
  type: "vs-dark" | "vs";
  file: string;
  semantic: Semantic;
}[] = [
  {
    name: "Ohohama",
    type: "vs-dark",
    file: "Ohohama-color-theme.json",
    semantic: dark,
  },
  {
    name: "Ohohama Light",
    type: "vs",
    file: "Ohohama-light-color-theme.json",
    semantic: light,
  },
];

for (const variant of variants) {
  const outputPath = resolve(currentDirectory, "../vscode/themes", variant.file);

  const theme = {
    name: variant.name,
    type: variant.type,
    colors: colors(variant.semantic),
    tokenColors: tokenColors(variant.semantic),
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
}
