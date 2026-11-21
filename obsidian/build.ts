import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { callout, dark, light, shared } from "./config.js";

const RULES_PATH =
    "./obsidian/rules.css";
const OUTPUT_PATH =
    "./obsidian/themes/ohohama.css";

function block(selector: string, variables: Record<string, string>): string {
    const lines = Object.entries(variables)
        .map(([name, value]) => `  ${name}: ${value};`);

    return `${selector} {\n${lines.join("\n")}\n}\n`;
}

const header =
    "/* Obsidian look matching the Ohohama VS Code theme. Enable it under Settings → Appearance → CSS snippets.\n" +
    "   Generated from obsidian/ in github.com/ieremi/ohohama. Do not edit directly. */\n";

const css = [
    header,
    block("body.theme-dark,\nbody.theme-light", shared),
    block("body.theme-dark", dark),
    block("body.theme-light", light),
    block(".theme-dark .callout", callout.dark),
    block(".theme-light .callout", callout.light),
    await readFile(RULES_PATH, "utf8"),
].join("\n");

await mkdir(
    dirname(OUTPUT_PATH),
    { recursive: true },
);

await writeFile(
    OUTPUT_PATH,
    css,
    "utf8",
);
