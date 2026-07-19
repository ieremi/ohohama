// semantic.ts

import { palette } from "./palette.js";
import { alpha } from "./color.js"

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
  hover: alpha(palette.normal.blue, 0.3),
  focus: alpha(palette.normal.cyan, 0.3),
  ansi: {
    black: palette.normal.black,
    white: palette.normal.white,
    blue: palette.normal.blue,
    cyan: palette.normal.cyan,
    green: palette.normal.green,
    magenta: palette.normal.magenta,
    red: palette.normal.red,
    yellow: palette.normal.yellow,
    brightBlack: palette.bright.black,
    brightWhite: palette.bright.white,
    brightBlue: palette.bright.blue,
    brightCyan: palette.bright.cyan,
    brightGreen: palette.bright.green,
    brightMagenta: palette.bright.magenta,
    brightRed: palette.bright.red,
    brightYellow: palette.bright.yellow,
  },
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
