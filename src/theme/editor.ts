// src/theme/editor.ts

import { semantic } from "../semantic.js";
import type { ThemeColors } from "../generated/theme-colors.js";

export const editorColors = {
    "editor.background": semantic.background,
    "editor.findMatchBackground": semantic.match,
    "editor.findMatchBorder": semantic.zero,
    "editor.findMatchForeground": semantic.foreground,
    "editor.findMatchHighlightBackground": semantic.match,
    "editor.findMatchHighlightBorder": semantic.match,
    "editor.findMatchHighlightForeground": semantic.foreground,
    "editor.findRangeHighlightBackground": semantic.match,
    "editor.findRangeHighlightBorder": semantic.zero,
    "editor.foreground": semantic.foreground,
    "editor.lineHighlightBackground": semantic.focus,
    "editor.lineHighlightBorder": semantic.zero,
    "editor.selectionBackground": semantic.accent,
    "editor.selectionForeground": semantic.accent,
    "editorLineNumber.activeForeground": semantic.accent,
    "editorLineNumber.dimmedForeground": semantic.inactive, // Color of the final editor line when editor.renderFinalNewline is set to dimmed.
    "editorLineNumber.foreground": semantic.foreground,
    "editorLink.activeForeground": semantic.link, // Color of active links.
    "editorPane.background": semantic.background, // Background color of the editor pane visible on the left and right side of the centered editor layout.
    "editorRuler.foreground": semantic.foreground, // Color of the editor rulers.
    "editorStickyScroll.background": semantic.sticky,
    "editorUnnecessaryCode.border": semantic.zero, // Border color of unnecessary (unused) source code in the editor.
    "editorUnnecessaryCode.opacity": semantic.zero, // Opacity of unnecessary (unused) source code in the editor. For example, `"#000000c0"` will render the code with 75% opacity. For high contrast themes, use the `"editorUnnecessaryCode.border"` theme color to underline unnecessary code instead of fading it out.
    "editorWhitespace.foreground": semantic.foreground, // Color of whitespace characters in the editor.
    "sideBySideEditor.horizontalBorder": semantic.zero, // Color to separate two editors from each other when shown side by side in an editor group from top to bottom.
    "sideBySideEditor.verticalBorder": semantic.zero, // Color to separate two editors from each other when shown side by side in an editor group from left to right.
    "walkThrough.embeddedEditorBackground": semantic.background, // Background color for the embedded editors on the Interactive Playground.
    "walkthrough.stepTitle.foreground": semantic.foreground, // Foreground color of the heading of each walkthrough step.  "editor.compositionBorder": "", // The border color for an IME composition.
    "editor.foldBackground": semantic.background, // Background color for folded ranges. The color must not be opaque so as not to hide underlying decorations.
    "editor.foldPlaceholderForeground": semantic.foreground, // Color of the collapsed text after the first line of a folded range.
    "interactive.activeCodeBorder": semantic.zero, // The border color for the current interactive code cell when the editor has focus.
    "interactive.inactiveCodeBorder": semantic.zero, // The border color for the current interactive code cell when the editor does not have focus.
} satisfies ThemeColors;
