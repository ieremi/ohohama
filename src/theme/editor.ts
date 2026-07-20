// src/theme/editor.ts

import { semantic } from "../semantic.js";
import type { ThemeColors } from "../generated/theme-colors.js";

export const editorColors = {
    "editor.background": semantic.background,
    "editor.foreground": semantic.foreground,
    "editorLineNumber.foreground": semantic.foreground,
    "editor.lineHighlightBorder": semantic.zero,
    "editor.lineHighlightBackground": semantic.focus,
    "editorLineNumber.activeForeground": semantic.accent,
    "editor.selectionForeground": semantic.accent,
    "editor.selectionBackground": semantic.accent,
    "editorStickyScroll.background": semantic.sticky,
    "editor.findMatchBackground": semantic.highlight,
    "editor.findMatchBorder": semantic.border,
    "editor.findMatchForeground": semantic.accent,
    "editor.findMatchHighlightBackground": semantic.highlight,
    "editor.findMatchHighlightBorder": semantic.border,
    "editor.findMatchHighlightForeground": semantic.accent,
    "editor.findRangeHighlightBackground": semantic.highlight,
    "editor.findRangeHighlightBorder": semantic.border,
} satisfies ThemeColors;
