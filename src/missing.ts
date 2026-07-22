import { themeColorKeys } from "./generated/theme-colors.js";
import { colors } from "./theme/index.js";

const assigned = new Set(Object.keys(colors));

const missing = themeColorKeys.filter((key) => !assigned.has(key));

console.log(`Missing: ${missing.length}/${themeColorKeys.length}`);
console.log();

for (const key of missing) {
    console.log(key);
}
