import { stringify } from "smol-toml";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { config } from "./config.js";

const OUTPUT_PATH =
    "./alacritty/themes/ohohama.toml";

await mkdir(
    dirname(OUTPUT_PATH),
    { recursive: true },
);

await writeFile(
    OUTPUT_PATH,
    stringify(config),
    "utf8",
);