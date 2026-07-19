import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const panelColors = {
   "panelStickyScroll.background": semantic.zero,
   "panelStickyScroll.shadow": semantic.zero,
   "panelStickyScroll.border": semantic.accent,
   "panelSection.border": semantic.zero,
   "panelSectionHeader.foreground": semantic.accent,
   "panelSectionHeader.background": semantic.background,
   "panelTitle.activeForeground": semantic.active,
   "panelTitle.inactiveForeground": semantic.inactive,
   } satisfies ThemeColors;
