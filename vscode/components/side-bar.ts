// src/theme/debug.ts

import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const sideBarColors = {
    "sideBar.background": semantic.background,
    "sideBar.border": semantic.zero, // Side Bar border color on the side separating the editor.
    "sideBar.dropBackground": semantic.drop,
    "sideBar.foreground": semantic.foreground,
    "sideBarActivityBarTop.border": semantic.zero, // Border color between the activity bar at the top/bottom and the views.
    "sideBarSectionHeader.background": semantic.highlight,
    "sideBarSectionHeader.border": semantic.zero, // Side bar section header border color.
    "sideBarSectionHeader.foreground": semantic.foreground,
    "sideBarStickyScroll.background": semantic.sticky,
    "sideBarStickyScroll.border": semantic.zero,
    "sideBarStickyScroll.shadow": semantic.shadow,
    "sideBarTitle.background": semantic.background,
    "sideBarTitle.border": semantic.zero, // Side bar title border color on the bottom, separating the title from the views. The side bar is the container for views like explorer and search.
    "sideBarTitle.foreground": semantic.foreground,
    "tree.inactiveIndentGuidesStroke": semantic.inactive, // Tree stroke color for the indentation guides that are not active.
    "tree.indentGuidesStroke": semantic.inactive, // Tree Widget's stroke color for indent guides.
    "tree.tableColumnsBorder": semantic.zero, // Tree stroke color for the indentation guides.
    "tree.tableOddRowsBackground": semantic.background, // Background color for odd table rows.
} satisfies ThemeColors;
