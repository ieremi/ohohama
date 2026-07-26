// src/theme/workbench.ts

import { semantic } from "../semantic.js";
import type { ThemeColors } from "../generated/theme-colors.js";
import { access } from "node:fs";

export const workbenchColors = {
    "actionBar.toggledBackground": semantic.background, // Background color for toggled action items in action bar.
    "button.background": semantic.accent,
    "button.border": semantic.zero,
    "button.foreground": semantic.foreground,
    "button.hoverBackground": semantic.hover,
    "button.secondaryBackground": semantic.info,
    "button.secondaryBorder": semantic.zero,
    "button.secondaryForeground": semantic.foreground,
    "button.secondaryHoverBackground": semantic.hover,
    "button.separator": semantic.foreground,
    "contrastActiveBorder": semantic.zero,
    "descriptionForeground": semantic.foreground, // Foreground color for description text providing additional information, for example for a label.
    "disabledForeground": semantic.disabled, // Overall foreground for disabled elements. This color is only used if not overridden by a component.
    "dropdown.background": semantic.accent, // Dropdown background.
    "dropdown.border": semantic.zero, // Dropdown border.
    "dropdown.foreground": semantic.accent, // Dropdown foreground.
    "dropdown.listBackground": semantic.background, // Dropdown list background.
    "extensionBadge.remoteBackground": semantic.background,
    "extensionBadge.remoteForeground": semantic.info,
    "extensionButton.background": semantic.background,
    "extensionButton.border": semantic.zero,
    "extensionButton.foreground": semantic.info,
    "extensionButton.hoverBackground": semantic.background,
    "extensionButton.prominentBackground": semantic.background,
    "extensionButton.prominentForeground": semantic.info,
    "extensionButton.prominentHoverBackground": semantic.background,
    "extensionButton.separator": semantic.border,
    "extensionIcon.preReleaseForeground": semantic.info,
    "extensionIcon.privateForeground": semantic.info,
    "extensionIcon.sponsorForeground": semantic.info,
    "extensionIcon.starForeground": semantic.info,
    "extensionIcon.verifiedForeground": semantic.info,
    "foreground": semantic.foreground, // Overall foreground color. This color is only used if not overridden by a component.
    "icon.foreground": semantic.foreground,
    "menu.background": semantic.background,
    "menu.border": semantic.zero, // Border color of menus.
    "menu.foreground": semantic.inactive,
    "menu.selectionBackground": semantic.focus,
    "menu.selectionBorder": semantic.zero, // Border color of the selected menu item in menus.
    "menu.selectionForeground": semantic.active,
    "menu.separatorBackground": semantic.border,
    "menubar.selectionBackground": semantic.focus,
    "menubar.selectionBorder": semantic.border,
    "menubar.selectionForeground": semantic.foreground,
    "profileBadge.background": semantic.info, // Profile badge background color. The profile badge shows on top of the settings gear icon in the activity bar.
    "profileBadge.foreground": semantic.foreground, // Profile badge foreground color. The profile badge shows on top of the settings gear icon in the activity bar.
    "profiles.sashBorder": semantic.zero, // The color of the Profiles editor splitview sash border.
    "progressBar.background": semantic.inactive, // Background color of the progress bar shown for long running operations.
    "sash.hoverBorder": semantic.hover, // The hover border color for draggable sashes.
    "scrollbar.shadow": semantic.zero, // Scrollbar slider shadow to indicate that the view is scrolled.
    "scrollbarSlider.activeBackground": semantic.background, // Scrollbar slider background color when clicked on.
    "titleBar.activeBackground": semantic.background,
    "titleBar.activeForeground": semantic.active,
    "titleBar.border": semantic.zero,
    "titleBar.inactiveBackground": semantic.background,
    "titleBar.inactiveForeground": semantic.inactive,
    "toolbar.activeBackground": semantic.active,
    "toolbar.hoverBackground": semantic.hover,
    "toolbar.hoverOutline": semantic.zero,
    "window.activeBorder": semantic.zero, // Border color for the active (focused) window.
    "window.inactiveBorder": semantic.zero, // Border color for the inactive (unfocused) windows.
    "selection.background": semantic.accent, // Background color of text selections in the workbench (for input fields or text areas, does not apply to selections within the editor and the terminal).
} satisfies ThemeColors;
