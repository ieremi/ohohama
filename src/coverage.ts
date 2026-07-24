import { themeColors } from "./generated/theme-colors.js";
import { colors } from "./theme/index.js";

const themeColorKeys = themeColors.map(i => i.key);
const assigned = new Set(Object.keys(colors));

type Stats = {
    total: number;
    assigned: number;
};

const groups = new Map<string, Stats>();

function groupOf(key: string): string {
    const pos = key.indexOf(".");
    return pos === -1 ? "(root)" : key.slice(0, pos);
}

for (const key of themeColorKeys) {
    const group = groupOf(key);

    const stat = groups.get(group) ?? {
        total: 0,
        assigned: 0,
    };

    stat.total++;

    if (assigned.has(key)) {
        stat.assigned++;
    }

    groups.set(group, stat);
}

const total = themeColorKeys.length;


const assignedCount = themeColorKeys.filter((key) =>
    assigned.has(key)
).length;

console.log();
console.log("Coverage");
console.log("========");

const overallPercent =
    total === 0
        ? 0
        : (assignedCount / total) * 100;

console.log(
    `Overall: ${assignedCount}/${total} (${overallPercent.toFixed(1)}%)`,
);


const width = 24;

for (
    const [name, stat] of [...groups.entries()].sort(
        ([a], [b]) => a.localeCompare(b),
    )
) {
    const percent =
        stat.total === 0
            ? 0
            : stat.assigned / stat.total;

    const filled = Math.round(percent * 10);

    const bar =
        "█".repeat(filled) +
        "░".repeat(10 - filled);

    console.log(
        `${name.padEnd(width)} ${bar} ${(percent * 100)
            .toFixed(0)
            .padStart(3)}% (${stat.assigned}/${stat.total})`,
    );
}