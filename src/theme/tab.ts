import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const tabColors = {

    "tab.activeBackground": semantic.background,
    "tab.activeBorder": semantic.accent,
    "tab.activeBorderTop": semantic.zero,
    "tab.activeForeground": semantic.foreground,
    "tab.activeModifiedBorder": semantic.zero,
    "tab.border": semantic.zero, // Border to separate Tabs from each other.
    "tab.dragAndDropBorder": semantic.zero, // Border between tabs to indicate that a tab can be inserted between two tabs. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
    "tab.hoverBackground": semantic.hover,
    "tab.hoverBorder": semantic.border,
    "tab.hoverForeground": semantic.foreground,
    "tab.inactiveBackground": semantic.background,
    "tab.inactiveForeground": semantic.inactive, // Inactive Tab foreground color in an active group.
    "tab.inactiveModifiedBorder": semantic.zero, // Border on the top of modified (dirty) inactive tabs in an active group.
    "tab.lastPinnedBorder": semantic.zero, // Border on the right of the last pinned editor to separate from unpinned editors.
    "tab.selectedBackground": semantic.focus, // Background of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
    "tab.selectedBorderTop": semantic.zero, // Border to the top of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
    "tab.selectedForeground": semantic.foreground, // Foreground of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
    "tab.unfocusedActiveBackground": semantic.inactive, // Active Tab background color in an inactive editor group.
    "tab.unfocusedActiveBorder": semantic.zero, // Bottom border for the active tab in an inactive editor group.
    "tab.unfocusedActiveBorderTop": semantic.zero, // Top border for the active tab in an inactive editor group
    "tab.unfocusedActiveForeground": semantic.foreground, // Active tab foreground color in an inactive editor group.
    "tab.unfocusedActiveModifiedBorder": semantic.zero, // Border on the top of modified (dirty) active tabs in an unfocused group.
    "tab.unfocusedHoverBackground": semantic.hover, // Tab background color in an unfocused group when hovering
    "tab.unfocusedHoverBorder": semantic.zero, // Border to highlight tabs in an unfocused group when hovering
    "tab.unfocusedHoverForeground": semantic.foreground, // Tab foreground color in an unfocused group when hovering
    "tab.unfocusedInactiveBackground": semantic.background,
    "tab.unfocusedInactiveForeground": semantic.inactive, // Inactive tab foreground color in an inactive editor group.
    "tab.unfocusedInactiveModifiedBorder": semantic.zero, // Border on the top of modified (dirty) inactive tabs in an unfocused group.
} satisfies ThemeColors;
