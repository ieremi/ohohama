// src/palette.ts

export const palette = {
    fund: {
        zero: "#00000000",
    },
    primary: {
        background: "#3F3F3F",
        foreground: "#E6EDF9",
    },

    normal: {
        black: "#080D10",
        white: "#E6EDF9",
        blue: "#00205B",
        cyan: "#0D47A1",
        green: "#1976D2",
        magenta: "#2196F3",
        red: "#1565C0",
        yellow: "#1E88E5",
    },

    bright: {
        black: "#23272C",
        white: "#F5F5F5",
        blue: "#0B8BEE",
        cyan: "#42A5F5",
        green: "#90CAF9",
        magenta: "#E3F2FD",
        red: "#64B5F6",
        yellow: "#BBDEFB",
    },
    city: {
        t: "#0B8BEE",
        k: "#00205B",
    },
    blue: [
        "#F8FCFF",
        "#F1F8FE",
        "#EAF4FE",
        "#E2F0FD",
        "#D8EAFD",
        "#CDE4FC",
        "#C0DDFC",
        "#B1D5FB",
        "#A0CDF9",
        "#8BC3F7",
        "#2196F3",
        "#1F90EC",
        "#1D89E3",
        "#1B82DA",
        "#197BD0",
        "#1773C6",
        "#156CBC",
        "#1262AF",
        "#1058A7",
        "#0D47A1",
    ],
    gray: [
        "#E6E6E6",
        "#D0D0D0",
        "#B8B8B8",
        "#A0A0A0",
        "#888888",
        "#707070",
        "#606060",
        "#505050",
        "#454545",
        "#3F3F3F",
    ]
} as const;

export type Palette = typeof Palette;