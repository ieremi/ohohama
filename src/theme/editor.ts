// src/theme/editor.ts

import { semantic } from "../semantic.js";
import type { ThemeColors } from "../generated/theme-colors.js";

export const editorColors = {
    "editor.background": semantic.background,
    "editor.foreground": semantic.foreground,
    "editorLineNumber.foreground": semantic.foreground,
    "editor.lineHighlightBorder": semantic.border,
    "editor.lineHighlightBackground": semantic.focus,
    "editorLineNumber.activeForeground": semantic.accent,
    "editor.selectionForeground": semantic.accent,
    "editor.selectionBackground": semantic.accent,
    } satisfies ThemeColors;
