// src/theme/terminal.ts

import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const terminalColors = {
    "terminal.background": semantic.terminal.background,
    "terminal.foreground": semantic.foreground,
    "terminal.ansiYellow": semantic.ansi.yellow,
    "terminal.ansiBlue": semantic.ansi.blue,
    "terminal.ansiMagenta": semantic.ansi.magenta,
    "terminal.ansiCyan": semantic.ansi.cyan,
    "terminal.ansiWhite": semantic.ansi.white,
    "terminal.ansiBlack": semantic.ansi.black,
    "terminal.ansiBrightBlack": semantic.ansi.brightBlack,
    "terminal.ansiBrightWhite": semantic.ansi.brightWhite,
    "terminal.ansiBrightBlue": semantic.ansi.brightBlue,
    "terminal.ansiBrightCyan": semantic.ansi.brightCyan,
    "terminal.ansiBrightGreen": semantic.ansi.brightGreen,
    "terminal.ansiBrightMagenta": semantic.ansi.brightMagenta,
    "terminal.ansiBrightRed": semantic.ansi.brightRed,
    "terminal.ansiBrightYellow": semantic.ansi.brightYellow
} satisfies ThemeColors;
