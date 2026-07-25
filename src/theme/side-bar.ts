// src/theme/debug.ts

import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const sideBarColors = {
    "sideBar.background": semantic.background,
    "sideBar.foreground": semantic.foreground,
    "sideBar.dropBackground": semantic.drop,
    "sideBarTitle.foreground": semantic.foreground,
    "sideBarSectionHeader.foreground": semantic.foreground,
    "sideBarSectionHeader.background": semantic.highlight,
    "sideBarTitle.background": semantic.background,
    "sideBarStickyScroll.background": semantic.sticky,
    "sideBarStickyScroll.border": semantic.border,
    "sideBarStickyScroll.shadow": semantic.shadow,
    "tree.inactiveIndentGuidesStroke": semantic.inactive, // Tree stroke color for the indentation guides that are not active.
    "tree.indentGuidesStroke": semantic.inactive, // Tree Widget's stroke color for indent guides.
    "tree.tableColumnsBorder": semantic.zero, // Tree stroke color for the indentation guides.
    "tree.tableOddRowsBackground": semantic.background, // Background color for odd table rows.
} satisfies ThemeColors;
