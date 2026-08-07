import { stringify } from "smol-toml";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { config } from "./config.js";

const manifest = {
    manifest_version: 3,
    name: "Ohohama",
    version: "1.0",
    theme: config,
}

const OUTPUT_PATH =
    "./chrome/themes/manifest.json";

await mkdir(
    dirname(OUTPUT_PATH),
    { recursive: true },
);

await writeFile(
    OUTPUT_PATH,
    `${JSON.stringify(manifest, null, 2)}\n`,
    "utf8",
);