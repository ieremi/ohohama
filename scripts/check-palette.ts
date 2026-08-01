import { writeFileSync } from "node:fs";
import { palette } from "../palette.js"

writeFileSync(
    "./generated/palette.json",
    JSON.stringify(palette, null, 2),
    "utf8"
);
