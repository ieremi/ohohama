import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const welcomePageColors = {
    "welcomePage.background": semantic.background, // Background color for the Welcome page.
    "welcomePage.progress.background": semantic.background, // Foreground color for the Welcome page progress bars.
    "welcomePage.progress.foreground": semantic.foreground, // Background color for the Welcome page progress bars.
    "welcomePage.tileBackground": semantic.background, // Background color for the tiles on the Welcome page.
    "welcomePage.tileBorder": semantic.zero, // Border color for the tiles on the Welcome page.
    "welcomePage.tileHoverBackground": semantic.hover, // Hover background color for the tiles on the Welcome page.
} satisfies ThemeColors;
