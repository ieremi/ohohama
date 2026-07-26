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
    "editorStickyScroll.background": semantic.sticky,
    "walkThrough.embeddedEditorBackground": semantic.background, // Background color for the embedded editors on the Interactive Playground.
    "walkthrough.stepTitle.foreground": semantic.foreground, // Foreground color of the heading of each walkthrough step.
} satisfies ThemeColors;
