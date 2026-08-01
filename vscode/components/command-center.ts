import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const commandCenterColors = {
    "commandCenter.activeBackground": semantic.background, // Active background color of the Command Center.
    "commandCenter.activeBorder": semantic.zero, // Active border color of the Command Center.
    "commandCenter.activeForeground": semantic.foreground, // Active foreground color of the Command Center.
    "commandCenter.background": semantic.background, // Background color of the Command Center.
    "commandCenter.border": semantic.zero, // Border color of the Command Center.
    "commandCenter.debuggingBackground": semantic.backgroundTransparent, // Command Center background color when a program is being debugged.
    "commandCenter.foreground": semantic.foreground, // Foreground color of the Command Center.
    "commandCenter.inactiveBorder": semantic.zero, // Border color of the Command Center when the window is inactive.
    "commandCenter.inactiveForeground": semantic.inactive, // Foreground color of the Command Center when the window is inactive.
} satisfies ThemeColors;
