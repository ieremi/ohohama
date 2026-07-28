import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const textColors = {
    "textBlockQuote.background": semantic.background, // Background color for block quotes in text.
    "textBlockQuote.border": semantic.zero, // Border color for block quotes in text.
    "textCodeBlock.background": semantic.background, // Background color for code blocks in text.
    "textLink.activeForeground": semantic.foreground, // Foreground color for links in text when clicked on and on mouse hover.
    "textLink.foreground": semantic.foreground, // Foreground color for links in text.
    "textPreformat.background": semantic.background, // Background color for preformatted text segments.
    "textPreformat.border": semantic.zero, // Border color for preformatted text segments.
    "textPreformat.foreground": semantic.foreground, // Foreground color for preformatted text segments.
    "textSeparator.foreground": semantic.border, // Color for text separators.
} satisfies ThemeColors;



