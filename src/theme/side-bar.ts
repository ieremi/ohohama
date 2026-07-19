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
} satisfies ThemeColors;
