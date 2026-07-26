import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const widgetColors = {
    "editorHoverWidget.background": semantic.widget,
    "editorHoverWidget.border": semantic.zero, // Border color of the editor hover.
    "editorHoverWidget.foreground": semantic.foregroud, // Foreground color of the editor hover.
    "editorHoverWidget.highlightForeground": semantic.foreground, // Foreground color of the active item in the parameter hint.
    "editorHoverWidget.statusBarBackground": semantic.background, // Background color of the editor hover status bar.
    "widget.border": semantic.zero, // Border color of widgets such as Find/Replace inside the editor.
    "widget.shadow": semantic.zero, // Shadow color of widgets such as Find/Replace inside the editor.
} satisfies ThemeColors;



