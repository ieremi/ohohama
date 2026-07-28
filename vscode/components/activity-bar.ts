import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const activityBarColors = {
    "activityBar.background": semantic.background,
    "activityBar.foreground": semantic.active,
    "activityBar.inactiveForeground": semantic.inactive,
    "activityBarBadge.background": semantic.info,

    "activityBarBadge.foreground": semantic.foreground,
    "activityBar.border": semantic.zero,


    "activityBar.activeBackground": semantic.background,
    "activityBar.activeBorder": semantic.zero,
    "activityBar.activeFocusBorder": semantic.zero,
    "activityBar.dropBorder": semantic.zero,
    "activityBarTop.activeBackground": semantic.background,
    "activityBarTop.activeBorder": semantic.zero,
    "activityBarTop.background": semantic.background,
    "activityBarTop.dropBorder": semantic.zero,
    "activityBarTop.foreground": semantic.foreground,
    "activityBarTop.inactiveForeground": semantic.inactive,
} satisfies ThemeColors;
