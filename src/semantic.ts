// src/semantic.ts

import { palette } from "./palette.ts";

export const semantic = {
  surface: {
    background: palette.primary.background,
    foreground: palette.primary.foreground,

    elevated: palette.normal.black,
    sunken: palette.bright.black,

    border: palette.normal.blue,
    borderMuted: palette.bright.black,
  },

  text: {
    primary: palette.primary.foreground,
    secondary: palette.bright.green,
    muted: palette.bright.black,

    link: palette.bright.blue,
    linkActive: palette.bright.green,
  },

  accent: {
    primary: palette.normal.magenta,
    secondary: palette.normal.green,
    subtle: palette.normal.blue,
    strong: palette.bright.blue,
  },

  status: {
    error: palette.normal.red,
    warning: palette.normal.yellow,
    success: palette.normal.green,
    info: palette.normal.cyan,
  },

  selection: {
    background: palette.normal.blue,
    foreground: palette.primary.foreground,
  },

  focus: {
    border: palette.bright.blue,
  },

  terminal: {
    normal: palette.normal,
    bright: palette.bright,
  },
} as const;

export type SemanticColors = typeof semantic;