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
    "/* Ohohama（VS Code のテーマ）に合わせた Obsidian の見た目。Settings → Appearance → CSS snippets でオンにする\n" +
    "   github.com/ieremi/ohohama の obsidian/ から生成。直接は編集しない */\n";

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
