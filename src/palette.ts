// src/palette.ts

import {
    formatHex,
    interpolate,
} from "culori";

const gradient = interpolate(
    [
        "#F8FCFF",
        "#051b3c",
    ],
    "oklch",
);
const blues = Array.from({ length: 20 }, (_, i) =>
    formatHex(gradient(i / 19))
);
export const palette = {
    fund: {
        zero: "#00000000",
    },
    primary: {
        background: "#3F3F3F",
        foreground: "#E6EDF9",
    },

    black: "#080D10",
    white: "#E6EDF9",
    city: {
        t: "#0B8BEE",
        k: "#00205B",
    },
    gray: [
        "#D0D0D0",
        "#B8B8B8",
        "#A0A0A0",
        "#888888",
        "#707070",
        "#606060",
        "#505050",
        "#454545",
        "#3F3F3F",
    ],
    blue: blues,
} as const;
export type Palette = typeof palette;