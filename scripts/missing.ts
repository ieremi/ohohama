import { writeFileSync } from "node:fs";

import { themeColors } from "../vscode/generated/theme-colors.js";
import { colors as colorsOf } from "../vscode/components/index.js";
import { dark } from "../vscode/semantic.js";

const colors = colorsOf(dark);

const assignedKeys = new Set(Object.keys(colors));

const missingColors = themeColors.filter(
    ({ key }) => !assignedKeys.has(key),
);

const output = missingColors
    .map(
        ({ key, description }) =>
            `  "${key}": "", // ${description}`,
    )
    .join("\n");

writeFileSync(
    "vscode/generated/missing-colors.ts",
    `export const missingColors = {\n${output}\n};\n`,
    "utf8",
);

console.log(
    `Generated missing-colors.ts (${missingColors.length} entries)`,
);