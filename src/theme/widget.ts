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
    "editorCommentsWidget.rangeActiveBackground": semantic.background, // Color of background for currently selected or hovered comment range.
    "editorCommentsWidget.rangeBackground": semantic.background, // Color of background for comment ranges.
    "editorCommentsWidget.replyInputBackground": semantic.background, // Background color for comment reply input box.
    "editorCommentsWidget.resolvedBorder": semantic.zero, // Color of borders and arrow for resolved comments.
    "editorCommentsWidget.unresolvedBorder": semantic.zero, // Color of borders and arrow for unresolved comments.
    "editorWidget.background": semantic.widget, // Background color of editor widgets, such as Find/Replace.
    "editorWidget.border": semantic.zero, // Border color of the editor widget unless the widget does not contain a border or defines its own border color.
    "editorWidget.resizeBorder": semantic.zero, // Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize border and if the color is not overridden by a widget.
    "simpleFindWidget.sashBorder": semantic.zero, // Border color of the sash border.
} satisfies ThemeColors;



