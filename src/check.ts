import { writeFileSync } from "node:fs";
import { ramps } from "./palette.js"

writeFileSync(
    "palette.json",
    JSON.stringify(ramps, null, 2),
    "utf8"
);
