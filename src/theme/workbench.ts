// src/theme/workbench.ts

import { semantic } from "../semantic.js";
import type { ThemeColors } from "../generated/theme-colors.js";

export const workbenchColors = {
    "statusBar.background": semantic.accent,
    "statusBar.debuggingBackground": semantic.old,
    "statusBar.noFolderBackground": semantic.disabled,
    "statusBar.border": semantic.zero,
    "statusBar.debuggingBorder": semantic.zero,
    "statusBar.noFolderBorder": semantic.zero,
    "statusBar.focusBorder": semantic.zero,
    "titleBar.activeBackground": semantic.background,
    "titleBar.activeForeground": semantic.active,
    "titleBar.inactiveBackground": semantic.background,
    "titleBar.inactiveForeground": semantic.inactive,
    "button.background": semantic.accent,
    "button.secondaryBackground": semantic.info,
    "button.hoverBackground": semantic.hover,
    "button.border": semantic.zero,
    "button.foreground": semantic.foreground,
    "button.secondaryBorder": semantic.zero,
    "button.secondaryForeground": semantic.foreground,
    "button.secondaryHoverBackground": semantic.hover,
    "button.separator": semantic.foreground,
    "icon.foreground": semantic.foreground,
    "toolbar.activeBackground": semantic.active,
    "toolbar.hoverBackground": semantic.hover,
    "toolbar.hoverOutline": semantic.zero,
    "menu.background": semantic.background,
    "menu.foreground": semantic.inactive,
    "menu.selectionBackground": semantic.focus,
    "menu.selectionForeground": semantic.active,
    "menu.separatorBackground": semantic.border,
    "menubar.selectionBackground": semantic.focus,
    "menubar.selectionBorder": semantic.border,
    "menubar.selectionForeground": semantic.foreground,
} satisfies ThemeColors;
