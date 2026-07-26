import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const hintColors = {
    "editorHint.border": semantic.zero, // Border color of hint boxes in the editor.
    "editorHint.foreground": semantic.foreground, // Foreground color of hints in the editor.
    "editorInlayHint.background": semantic.info, // Background color of inline hints.
    "editorInlayHint.foreground": semantic.foreground, // Foreground color of inline hints.
    "editorInlayHint.parameterBackground": semantic.background, // Background color of inline hints for parameters
    "editorInlayHint.parameterForeground": semantic.foreground, // Foreground color of inline hints for parameters
    "editorInlayHint.typeBackground": semantic.background, // Background color of inline hints for types
    "editorInlayHint.typeForeground": semantic.foreground, // Foreground color of inline hints for types
} satisfies ThemeColors;
