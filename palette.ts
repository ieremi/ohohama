import {
    TonalPalette,
} from "@material/material-color-utilities";

export const palette = {
    fund: {
        zero: "#00000000",
    },
    background: "#3F3F3F",
    foreground: "#E6EDF9",
    black: "#080D10",
    white: "#E6EDF9",
    city: {
        t: "#0B8BEE",
        k: "#00205B",
    },
    primary: TonalPalette.fromHueAndChroma(220, 96),
    secondary: TonalPalette.fromHueAndChroma(235, 48),
    tertiary: TonalPalette.fromHueAndChroma(250, 72),
    neutral: TonalPalette.fromHueAndChroma(220, 8),
    neutralVariant: TonalPalette.fromHueAndChroma(230, 16),
} as const;
export type Palette = typeof palette;