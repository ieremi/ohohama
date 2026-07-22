// src/missing.ts

import { themeColors } from "./generated/theme-colors.js";
import { colors } from "./theme/index.js";

const assignedKeys = new Set(Object.keys(colors));

const missingColors = themeColors.filter(
    ({ key }) => !assignedKeys.has(key),
);

console.log(
    `Missing: ${missingColors.length}/${themeColors.length}`,
);
console.log();

for (const { key, description } of missingColors) {
    console.log(key);
    console.log(`  ${description}`);
    console.log();
}