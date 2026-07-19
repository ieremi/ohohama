// src/theme/debug.ts

import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const debugColors = {
    "errorForeground": semantic.error,
    "editorWarning.foreground": semantic.warning,
    "editorInfo.foreground": semantic.info,
    "editorError.foreground": semantic.error,
    "editorError.border": semantic.zero,
    "editorWarning.border": semantic.zero,
    "editorInfo.border": semantic.zero,
    "editorError.background": semantic.background,
    "editorWarning.background": semantic.background,
    "editorInfo.background": semantic.zero,
    "list.warningForeground": semantic.warning,
    "list.errorForeground": semantic.error,
    "activityWarningBadge.background": semantic.warning,
    "activityErrorBadge.background": semantic.error,
    "activityWarningBadge.foreground": semantic.foreground,
    "activityErrorBadge.foreground": semantic.foreground,
    "debugIcon.breakpointForeground": semantic.breakpoint,
    "editorLightBulb.foreground": semantic.info,
    "editorLightBulbAi.foreground": semantic.info,
    "editorLightBulbAutoFix.foreground": semantic.info,
    
} satisfies ThemeColors;
