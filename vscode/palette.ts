import {
    hexFromArgb,
    TonalPalette,
} from "@material/material-color-utilities";

const lights = Array.from({ length: 20 }, (_, i) =>
    hexFromArgb(TonalPalette.fromHueAndChroma(220, 100).tone(i * 5))
);

const blues = Array.from({ length: 20 }, (_, i) =>
    hexFromArgb(TonalPalette.fromHueAndChroma(245, 100).tone(i * 5))
);

const darks = Array.from({ length: 20 }, (_, i) =>
    hexFromArgb(TonalPalette.fromHueAndChroma(270, 50).tone(i * 5))
);

const grays = Array.from({ length: 20 }, (_, i) =>
    hexFromArgb(TonalPalette.fromHueAndChroma(250, 10).tone(i * 5))
);

export const ramps = [lights, blues, darks, grays];

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