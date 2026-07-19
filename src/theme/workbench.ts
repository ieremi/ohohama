// src/theme/workbench.ts

import { semantic } from "../semantic.js";
import type { ThemeColors } from "../generated/theme-colors.js";

export const workbenchColors = {
    "workbench.background": semantic.background,
    "statusBar.background": semantic.accent,
    "statusBar.debuggingBackground:": semantic.old,
    "statusBar.border": semantic.zero,
    "statusBar.debuggingBorder": semantic.zero,
    "statusBar.noFolderBorder": semantic.zero,
    "statusBar.focusBorder": semantic.zero,
    "titleBar.activeBackground": semantic.background,
    "titleBar.activeForeground": semantic.active,
    "titleBar.inactiveBackground": semantic.background,
    "titleBar.inactiveForeground": semantic.inactive,
} satisfies ThemeColors;
