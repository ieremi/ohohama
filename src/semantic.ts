// semantic.ts

import { palette } from "./palette";

export const semantic = {
  background: palette.primary.background,
  foreground: palette.primary.foreground,

  accent: palette.normal.magenta,
  link: palette.bright.blue,
  border: palette.bright.black,

  error: palette.normal.red,
  warning: palette.normal.yellow,
  info: palette.normal.cyan,
  success: palette.normal.green,
  deleted: palette.normal.white,
  added: palette.normal.blue,
  syntax: {
    comment: palette.bright.black,
    keyword: palette.normal.magenta,
    string: palette.bright.green,
    function: palette.bright.blue,
    variable: palette.primary.foreground,
    type: palette.bright.cyan,
    constant: palette.normal.yellow,
  },
} as const;
