import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const tabColors = {
    "tab.activeBackground": semantic.active,
    "tab.activeBorder": semantic.zero,
    "tab.activeBorderTop": semantic.zero,
    "tab.activeForeground": semantic.foreground,
    "tab.activeModifiedBorder": semantic.zero,
    "tab.inactiveBackground": semantic.inactive,
    "tab.hoverBackground": semantic.hover,
    "tab.hoverBorder": semantic.border,
    "tab.hoverForeground": semantic.foreground,
    "tab.unfocusedInactiveBackground": semantic.background,
} satisfies ThemeColors;
