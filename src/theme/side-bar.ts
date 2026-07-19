// src/theme/debug.ts

import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const sideBarColors = {
    "sideBar.background": semantic.background,
    "sideBar.foreground": semantic.foreground,
    "sideBar.dropBackground": semantic.foreground,
    } satisfies ThemeColors;
