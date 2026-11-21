import {
    argbFromHex,
    TonalPalette,
} from "@material/material-color-utilities";

const cityT = "#0B8BEE";

export const palette = {
    zero: "#00000000",
    black: "#080D10",
    white: "#E6EDF9",
    city: {
        t: cityT,
        k: "#00205B",
    },
    // Blues with the chroma of city.t at different tones
    cityT: TonalPalette.fromInt(argbFromHex(cityT)),
    primary: TonalPalette.fromHueAndChroma(220, 96),
    secondary: TonalPalette.fromHueAndChroma(235, 48),
    tertiary: TonalPalette.fromHueAndChroma(250, 72),
    neutral: TonalPalette.fromHueAndChroma(220, 8),
    neutralVariant: TonalPalette.fromHueAndChroma(230, 16),
} as const;
export type Palette = typeof palette;