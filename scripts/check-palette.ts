import { writeFileSync } from "node:fs";
import { ramps } from "../palette.js"

writeFileSync(
    "./vscode/generated/palette.json",
    JSON.stringify(ramps, null, 2),
    "utf8"
);
