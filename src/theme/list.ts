// src/theme/debug.ts

import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const listColors = {
    "editorWidget.foreground": semantic.inactive,
    "list.activeSelectionBackground": semantic.focus,
    "list.activeSelectionForeground": semantic.active,
    "list.highlightForeground": semantic.accent,
    "list.hoverBackground": semantic.hover,
    "list.hoverForeground": semantic.foreground,
    "list.inactiveSelectionBackground": semantic.focus,
    "list.inactiveSelectionForeground": semantic.inactive,
    "list.activeSelectionIconForeground": semantic.active, // List/Tree icon foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
    "list.deemphasizedForeground": semantic.foreground, // List/Tree foreground color for items that are deemphasized.
    "list.dropBackground": semantic.background, // List/Tree drag and drop background when moving items around using the mouse.
    "list.dropBetweenBackground": semantic.background, // List/Tree drag and drop border color when moving items between items when using the mouse.
    "list.filterMatchBackground": semantic.match, // Background color of the filtered matches in lists and trees.
    "list.filterMatchBorder": semantic.zero, // Border color of the filtered matches in lists and trees.
    "list.focusAndSelectionOutline": semantic.foreground, // List/Tree outline color for the focused item when the list/tree is active and selected. An active list/tree has keyboard focus, an inactive does not.
    "list.focusBackground": semantic.focus, // List/Tree background color for the focused item when the list/tree is active.
    "list.focusForeground": semantic.foreground, // List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
    "list.focusHighlightForeground": semantic.focus, // List/Tree foreground color of the match highlights on actively focused items when searching inside the list/tree.
    "list.focusOutline": semantic.zero, // List/Tree outline color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
    "list.inactiveFocusBackground": semantic.background, // List background color for the focused item when the list is inactive. An active list has keyboard focus, an inactive does not. Currently only supported in lists.
    "list.inactiveFocusOutline": semantic.foreground, // List/Tree outline color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
    "list.inactiveSelectionIconForeground": semantic.foreground, // List/Tree icon foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
    "list.invalidItemForeground": semantic.inactive, // List/Tree foreground color for invalid items, for example an unresolved root in explorer.
    "listFilterWidget.background": semantic.background, // List/Tree Filter background color of typed text when searching inside the list/tree.
    "listFilterWidget.noMatchesOutline": semantic.foreground, // List/Tree Filter Widget's outline color when no match is found of typed text when searching inside the list/tree.
    "listFilterWidget.outline": semantic.foreground, // List/Tree Filter Widget's outline color of typed text when searching inside the list/tree.
    "listFilterWidget.shadow": semantic.zero, // Shadow color of the type filter widget in lists and tree.
    "keybindingLabel.border": semantic.inactive,
    "keybindingLabel.bottomBorder": semantic.inactive,
    "keybindingLabel.foreground": semantic.inactive,
    "input.background": semantic.input,
    "input.border": semantic.zero,
    "input.foreground": semantic.foreground,
    "input.placeholderForeground": semantic.placeholder,
} satisfies ThemeColors;
