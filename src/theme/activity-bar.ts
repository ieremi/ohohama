import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const activityBarColors = {
    "activityBar.background": semantic.background,
    "activityBar.foreground": semantic.active,
    "activityBar.inactiveForeground": semantic.inactive,
    "activityBarBadge.background": semantic.info,
    
    "activityBarBadge.foreground": semantic.foreground,
    "activityBar.border": semantic.border,
} satisfies ThemeColors;
