import {
    hexFromArgb,
    TonalPalette,
} from "@material/material-color-utilities";

const tonal = [
    TonalPalette.fromHueAndChroma(220, 100),
    TonalPalette.fromHueAndChroma(245, 100),
    TonalPalette.fromHueAndChroma(270, 50),
    TonalPalette.fromHueAndChroma(250, 10),
];

export const ramps = tonal.map(p =>
    Array.from({ length: 20 }, (_, i) =>
        hexFromArgb(p.tone(i * 5))
    )
) as const;
let var_lights: string[] = Array(20).fill("");
let var_blues: string[] = Array(20).fill("");
let var_darks: string[] = Array(20).fill("");
let var_grays: string[] = Array(20).fill("");
[var_lights, var_blues, var_darks, var_grays] = ramps;

const lights: readonly string[] = var_lights;
const blues: readonly string[] = var_blues;
const darks: readonly string[] = var_darks;
const grays: readonly string[] = var_grays;


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