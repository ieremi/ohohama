import { stringify } from "smol-toml";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { config } from "./config.js";
import { dark, light } from "../vscode/semantic.js";

const OUTPUTS = [
    { path: "./alacritty/themes/ohohama-dark.toml", semantic: dark },
    { path: "./alacritty/themes/ohohama-light.toml", semantic: light },
];

for (const output of OUTPUTS) {
    await mkdir(
        dirname(output.path),
        { recursive: true },
    );

    await writeFile(
        output.path,
        stringify(config(output.semantic)),
        "utf8",
    );
}
