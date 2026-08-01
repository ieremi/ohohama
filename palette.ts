import {
    hexFromArgb,
    TonalPalette,
} from "@material/material-color-utilities";

const lights = Array.from({ length: 20 }, (_, i) =>
    hexFromArgb(TonalPalette.fromHueAndChroma(215, 120).tone(i * 5))
).slice(9, 19);

const blues = Array.from({ length: 20 }, (_, i) =>
    hexFromArgb(TonalPalette.fromHueAndChroma(245, 180).tone(i * 5))
).slice(7, 17);

const darks = Array.from({ length: 20 }, (_, i) =>
    hexFromArgb(TonalPalette.fromHueAndChroma(280, 60).tone(i * 5))
).slice(1, 11);

const grays = Array.from({ length: 20 }, (_, i) =>
    hexFromArgb(TonalPalette.fromHueAndChroma(245, 8).tone(i * 5))
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
    light: lights,
    blue: blues,
    dark: darks,
    gray: grays,
} as const;
export type Palette = typeof palette;