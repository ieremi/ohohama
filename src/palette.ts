// src/palette.ts

import {
    argbFromHex,
    hexFromArgb,
    Hct,
    TonalPalette,
} from "@material/material-color-utilities";

const tonal = [
    TonalPalette.fromHueAndChroma(220, 100),
    TonalPalette.fromHueAndChroma(245, 100),
    TonalPalette.fromHueAndChroma(275, 100),
    TonalPalette.fromHueAndChroma(250, 0),
];

export const ramps = tonal.map(p =>
    Array.from({ length: 20 }, (_, i) =>
        hexFromArgb(p.tone(i * 5))
    )
);

const [lights, blues, darks, grays] = ramps;


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
    light: lights,
    blue: blues,
    dark: darks,
    gray: grays,
} as const;
export type Palette = typeof palette;