import { themeColorKeys } from "./generated/theme-colors.js";
import { colors } from "./theme/index.js";

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
const assignedCount = [...assigned].filter((k) =>
    themeColorKeys.includes(k),
).length;

console.log();
console.log("Coverage");
console.log("========");
console.log(
    `Overall: ${assignedCount}/${total} (${(
        assignedCount / total * 100
    ).toFixed(1)}%)`,
);

console.log();

const width = 24;

for (const [name, stat] of [...groups.entries()].sort()) {
    const percent = stat.assigned / stat.total;
    const bar =
        "█".repeat(Math.round(percent * 10)) +
        "░".repeat(10 - Math.round(percent * 10));

    console.log(
        `${name.padEnd(width)} ${bar} ${(percent * 100)
            .toFixed(0)
            .padStart(3)}% (${stat.assigned}/${stat.total})`,
    );
}