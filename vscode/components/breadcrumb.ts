import type { ThemeColors } from "../generated/theme-colors.js";
import type { Semantic } from "../semantic.js";

export const breadcrumbColors = (semantic: Semantic) => ({
    "breadcrumb.activeSelectionForeground": semantic.active, // Color of selected breadcrumb items.
    "breadcrumb.background": semantic.background, // Background color of breadcrumb items.
    "breadcrumb.focusForeground": semantic.focus, // Color of focused breadcrumb items.
    "breadcrumb.foreground": semantic.foreground, // Color of breadcrumb items.
    "breadcrumbPicker.background": semantic.background, // Background color of breadcrumb item picker.
} satisfies ThemeColors);
