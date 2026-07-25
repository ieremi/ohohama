import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const panelColors = {
   "panel.background": semantic.background, // Panel background color.
   "panel.border": semantic.zero, // Panel border color to separate the panel from the editor.
   "panel.dropBorder": semantic.zero, // Drag and drop feedback color for the panel titles. Panels are shown below the editor area and contain views like output and integrated terminal.
   "panelInput.border": semantic.zero, // Input box border for inputs in the panel.
   "panelSection.border": semantic.zero,
   "panelSection.dropBackground": semantic.background, // Drag and drop feedback color for the panel sections. The color should have transparency so that the panel sections can still shine through. Panels are shown below the editor area and contain views like output and integrated terminal.
   "panelSectionHeader.background": semantic.background,
   "panelSectionHeader.border": semantic.zero, // Panel section header border color used when multiple views are stacked vertically in the panel. Panels are shown below the editor area and contain views like output and integrated terminal.
   "panelSectionHeader.foreground": semantic.accent,
   "panelStickyScroll.background": semantic.zero,
   "panelStickyScroll.border": semantic.accent,
   "panelStickyScroll.shadow": semantic.zero,
   "panelTitle.activeBorder": semantic.active, // Border color for the active panel title.
   "panelTitle.activeForeground": semantic.active,
   "panelTitle.border": semantic.zero, // Panel title border color on the bottom, separating the title from the views. Panels are shown below the editor area and contain views like output and integrated terminal.
   "panelTitle.inactiveForeground": semantic.inactive,
   "panelTitleBadge.background": semantic.info, // Panel title badge background color. Panels are shown below the editor area and contain views like output and integrated terminal.
   "panelTitleBadge.foreground": semantic.foreground, // Panel title badge foreground color. Panels are shown below the editor area and contain views like output and integrated terminal.
} satisfies ThemeColors;
