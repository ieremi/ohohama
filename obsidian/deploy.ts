import { copyFile } from "node:fs/promises";
import { join } from "node:path";

const SOURCE_PATH =
    "./obsidian/themes/ohohama.css";

const snippetsDirectory = process.env.OBSIDIAN_SNIPPETS_DIR;

if (snippetsDirectory === undefined || snippetsDirectory === "") {
    throw new Error("Set OBSIDIAN_SNIPPETS_DIR to the vault's .obsidian/snippets directory");
}

const outputPath = join(snippetsDirectory, "ohohama.css");

await copyFile(SOURCE_PATH, outputPath);

console.log(`Snippet copied: ${outputPath}`);
