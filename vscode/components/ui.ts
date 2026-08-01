import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const uiColors = {
    "badge.background": semantic.info, // Badge background color.
    "badge.foreground": semantic.foreground, // Badge foreground color.
    "banner.background": semantic.info, // Banner background color.
    "banner.foreground": semantic.foreground, // Banner foreground color.
    "banner.iconForeground": semantic.foreground, // Color for the icon in front of the banner text.
    "button.background": semantic.background,
    "button.border": semantic.zero,
    "button.foreground": semantic.foreground,
    "button.hoverBackground": semantic.hover,
    "button.secondaryBackground": semantic.background,
    "button.secondaryBorder": semantic.zero,
    "button.secondaryForeground": semantic.foreground,
    "button.secondaryHoverBackground": semantic.hover,
    "button.separator": semantic.foreground,
    "checkbox.background": semantic.background, // Background color of checkbox widget.
    "checkbox.border": semantic.border, // Border color of checkbox widget.
    "checkbox.disabled.background": semantic.disabled, // Background of a disabled checkbox.
    "checkbox.disabled.foreground": semantic.foreground, // Foreground of a disabled checkbox.
    "checkbox.foreground": semantic.foreground, // Foreground color of checkbox widget.
    "checkbox.selectBackground": semantic.highlight, // Background color of checkbox widget when the element it's in is selected.
    "checkbox.selectBorder": semantic.border, // Border color of checkbox widget when the element it's in is selected.
    "pickerGroup.border": semantic.zero, // Quick picker (Quick Open) color for grouping borders.
    "pickerGroup.foreground": semantic.foreground, // Quick picker (Quick Open) color for grouping labels.
    "radio.activeBackground": semantic.background, // Background color of active radio option.
    "radio.activeBorder": semantic.border, // Border color of the active radio option.
    "radio.activeForeground": semantic.active, // Foreground color of active radio option.
    "radio.inactiveBackground": semantic.inactive, // Background color of inactive radio option.
    "radio.inactiveBorder": semantic.border, // Border color of the inactive radio option.
    "radio.inactiveForeground": semantic.inactive, // Foreground color of inactive radio option.
    "radio.inactiveHoverBackground": semantic.hover, // Background color of inactive active radio option when hovering.
} satisfies ThemeColors;
