import type { ThemeColors } from "../generated/theme-colors.js";
import type { Semantic } from "../semantic.js";

export const borderColors = (semantic: Semantic) => ({
    "focusBorder": semantic.zero,
    "contrastBorder": semantic.zero,
} satisfies ThemeColors);
