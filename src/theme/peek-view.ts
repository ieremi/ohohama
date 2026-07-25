import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const peekViewColors = {
    "peekView.border": semantic.zero, // Color of the peek view borders and arrow.
    "peekViewEditor.background": semantic.background, // Background color of the peek view editor.
    "peekViewEditor.matchHighlightBackground": semantic.match, // Match highlight color in the peek view editor.
    "peekViewEditor.matchHighlightBorder": semantic.zero, // Match highlight border color in the peek view editor.
    "peekViewEditorGutter.background": semantic.background, // Background color of the gutter in the peek view editor.
    "peekViewEditorStickyScroll.background": semantic.sticky, // Background color of sticky scroll in the peek view editor.
    "peekViewEditorStickyScrollGutter.background": semantic.background, // Background color of the gutter part of sticky scroll in the peek view editor.
    "peekViewResult.background": semantic.background, // Background color of the peek view result list.
    "peekViewResult.fileForeground": semantic.foreground, // Foreground color for file nodes in the peek view result list.
    "peekViewResult.lineForeground": semantic.foreground, // Foreground color for line nodes in the peek view result list.
    "peekViewResult.matchHighlightBackground": semantic.match, // Match highlight color in the peek view result list.
    "peekViewResult.selectionBackground": semantic.focus, // Background color of the selected entry in the peek view result list.
    "peekViewResult.selectionForeground": semantic.foreground, // Foreground color of the selected entry in the peek view result list.
    "peekViewTitle.background": semantic.background, // Background color of the peek view title area.
    "peekViewTitleDescription.foreground": semantic.foreground, // Color of the peek view title info.
    "peekViewTitleLabel.foreground": semantic.foreground, // Color of the peek view title.
} satisfies ThemeColors;
