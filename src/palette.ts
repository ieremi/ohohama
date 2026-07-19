// src/palette.ts

export const palette = {
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
} as const;

export type Palette = typeof Palette;