import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const editorGroupColors = {
   "editorGroup.border": semantic.zero, // Color to separate multiple editor groups from each other.
   "editorGroup.dropBackground": semantic.background, // Background color when dragging editors around.
   "editorGroup.dropIntoPromptBackground": semantic.background, // Background color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor.
   "editorGroup.dropIntoPromptBorder": semantic.zero, // Border color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor.
   "editorGroup.dropIntoPromptForeground": semantic.foreground, // Foreground color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor.
   "editorGroup.emptyBackground": semantic.background, // Background color of an empty editor group.
   "editorGroup.focusedEmptyBorder": semantic.zero, // Border color of an empty editor group that is focused.
   "editorGroupHeader.border": semantic.zero, // Border color between editor group header and editor (below breadcrumbs if enabled).
   "editorGroupHeader.noTabsBackground": semantic.background, // Background color of the editor group title header when using single Tab (set `"workbench.editor.showTabs": "single"`).
   "editorGroupHeader.tabsBackground": semantic.background, // Background color of the Tabs container.
   "editorGroupHeader.tabsBorder": semantic.background, // Border color below the editor tabs control when tabs are enabled.
} satisfies ThemeColors;

