import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const settingsColors = {
    "settings.checkboxBackground": semantic.background, // Checkbox background.
    "settings.checkboxBorder": semantic.zero, // Checkbox border.
    "settings.checkboxForeground": semantic.zero, // Checkbox foreground.
    "settings.dropdownBackground": semantic.background, // Dropdown background.
    "settings.dropdownBorder": semantic.border, // Dropdown border.
    "settings.dropdownForeground": semantic.foreground, // Dropdown foreground.
    "settings.dropdownListBorder": semantic.border, // Dropdown list border.
    "settings.focusedRowBackground": semantic.background, // Background color of a focused setting row.
    "settings.focusedRowBorder": semantic.zero, // The color of the row's top and bottom border when the row is focused.
    "settings.headerBorder": semantic.zero, // The color of the header container border.
    "settings.headerForeground": semantic.foreground, // The foreground color for a section header or active title.
    "settings.modifiedItemIndicator": semantic.modified, // The line that indicates a modified setting.
    "settings.numberInputBackground": semantic.background, // Number input box background.
    "settings.numberInputBorder": semantic.border, // Number input box border.
    "settings.numberInputForeground": semantic.foreground, // Number input box foreground.
    "settings.rowHoverBackground": semantic.background, // The background color of a settings row when hovered.
    "settings.sashBorder": semantic.border, // The color of the Settings editor splitview sash border.
    "settings.settingsHeaderHoverForeground": semantic.hover, // The foreground color for a section header or hovered title.
    "settings.textInputBackground": semantic.background, // Text input box background.
    "settings.textInputBorder": semantic.border, // Text input box border.
    "settings.textInputForeground": semantic.foreground, // Text input box foreground.

} satisfies ThemeColors;

