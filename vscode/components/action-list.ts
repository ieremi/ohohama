import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const actionListColors = {
    "editorActionList.background": semantic.background, // Action List background color.
    "editorActionList.focusBackground": semantic.background, // Action List background color for the focused item.
    "editorActionList.focusForeground": semantic.foreground, // Action List foreground color for the focused item.
    "editorActionList.foreground": semantic.foreground, // Action List foreground color.
} satisfies ThemeColors;
