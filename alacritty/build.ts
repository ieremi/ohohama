import { stringify } from "smol-toml";
import { writeFile } from "node:fs/promises";
import { config } from "./config.js";

await writeFile(
    "./alacritty/themes/ohohama.toml",
    stringify(config),
    "utf8",
);