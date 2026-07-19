// src/theme/debug.ts

import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const listColors = {
    "editorWidget.foreground": semantic.inactive,
    "list.activeSelectionBackground": semantic.focus,
    "list.activeSelectionForeground": semantic.active,
    "list.highlightForeground": semantic.accent,
    "list.hoverBackground": semantic.hover,
    "list.hoverForeground": semantic.foreground,
    "list.inactiveSelectionBackground": semantic.focus,
    "list.inactiveSelectionForeground": semantic.inactive,
    "keybindingLabel.border": semantic.foreground,
    "keybindingLabel.bottomBorder": semantic.foreground,
    "keybindingLabel.foreground": semantic.foreground,
    "input.background": semantic.input,
    "input.border": semantic.zero,
    "input.foreground": semantic.foreground,
    "input.placeholderForeground": semantic.placeholder,
} satisfies ThemeColors;
