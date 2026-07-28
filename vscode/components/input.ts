import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const inputColors = {
    "inputOption.activeBackground": semantic.background, // Background color of activated options in input fields.
    "inputOption.activeBorder": semantic.zero, // Border color of activated options in input fields.
    "inputOption.activeForeground": semantic.active, // Foreground color of activated options in input fields.
    "inputOption.hoverBackground": semantic.background, // Background color of activated options in input fields.
    "inputValidation.errorBackground": semantic.error, // Input validation background color for error severity.
    "inputValidation.errorBorder": semantic.zero, // Input validation border color for error severity.
    "inputValidation.errorForeground": semantic.foreground, // Input validation foreground color for error severity.
    "inputValidation.infoBackground": semantic.info, // Input validation background color for information severity.
    "inputValidation.infoBorder": semantic.zero, // Input validation border color for information severity.
    "inputValidation.infoForeground": semantic.info, // Input validation foreground color for information severity.
    "inputValidation.warningBackground": semantic.warning, // Input validation background color for information warning.
    "inputValidation.warningBorder": semantic.zero, // Input validation border color for warning severity.
    "inputValidation.warningForeground": semantic.foreground, // Input validation foreground color for warning severity.
    "quickInput.background": semantic.background, // Quick input background color. The quick input widget is the container for views like the color theme picker.
    "quickInput.foreground": semantic.foreground, // Quick input foreground color. The quick input widget is the container for views like the color theme picker.
    "quickInputList.focusBackground": semantic.focus, // Quick picker background color for the focused item.
    "quickInputList.focusForeground": semantic.foreground, // Quick picker foreground color for the focused item.
    "quickInputList.focusIconForeground": semantic.foreground, // Quick picker icon foreground color for the focused item.
    "quickInputTitle.background": semantic.background, // Quick picker title background color. The quick picker widget is the container for pickers like the Command Palette.
} satisfies ThemeColors;
