// src/palette.ts

import {
    argbFromHex,
    hexFromArgb,
    Hct,
    TonalPalette,
} from "@material/material-color-utilities";

const source = [
    Hct.fromInt(argbFromHex("#0db4e2")),
    Hct.fromInt(argbFromHex("#021b3a")),
    Hct.fromInt(argbFromHex("#041155")),
];

const mt = source.map((v, k) => TonalPalette.fromHueAndChroma(
    v.hue,
    v.chroma
));

const lights = Array.from({ length: 20 }, (_, i) =>
    hexFromArgb(mt[0].tone(i * 5))
);

const blues = Array.from({ length: 20 }, (_, i) =>
    hexFromArgb(mt[1].tone(i * 5))
);

const darks = Array.from({ length: 20 }, (_, i) =>
    hexFromArgb(mt[2].tone(i * 5))
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