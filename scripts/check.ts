import { writeFileSync } from "node:fs";
import { ramps } from "../vscode/palette.js"

writeFileSync(
    "palette.json",
    JSON.stringify(ramps, null, 2),
    "utf8"
);
