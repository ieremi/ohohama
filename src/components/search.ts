import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const searchColors = {
    "search.resultsInfoForeground": semantic.foreground, // Color of the text in the search viewlet's completion message. For example, this color is used in the text that says "`{x} results in {y} files`".
    "searchEditor.findMatchBackground": semantic.match, // Color of the editor's results.
    "searchEditor.findMatchBorder": semantic.zero, // Border color of the editor's results.
    "searchEditor.textInputBorder": semantic.zero, // Search editor text input box border.
} satisfies ThemeColors;
