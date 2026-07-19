// src/theme/debug.ts

import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const listColors = {
    "editorWidget.foreground": semantic.inactive,
    "list.activeSelectionBackground": semantic.focus,
    "list.activeSelectionForeground": semantic.active,
    "list.highlightForeground": semantic.accent,
    "list.inactiveSelectionForeground": semantic.inactive,
    "keybindingLabel.border": semantic.foreground,
    "keybindingLabel.bottomBorder": semantic.foreground,
    "keybindingLabel.foreground": semantic.foreground,
} satisfies ThemeColors;
