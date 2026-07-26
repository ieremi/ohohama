import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const highlightColors = {
    "editor.focusedStackFrameHighlightBackground": semantic.highlight, // Background color of the focused stack frame highlight in the editor.
    "editor.hoverHighlightBackground": semantic.hover, // Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations.
    "editor.inactiveLineHighlightBackground": semantic.highlight, // Background color for the highlight of line at the cursor position when the editor is not focused.
    "editor.rangeHighlightBackground": semantic.highlight, // Background color of highlighted ranges, used by Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations.
    "editor.rangeHighlightBorder": semantic.zero, // Background color of the border around highlighted ranges.
    "editor.selectionHighlightBackground": semantic.highlight, // Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations.
    "editor.selectionHighlightBorder": semantic.zero, // Border color for regions with the same content as the selection.
    "editor.snippetFinalTabstopHighlightBackground": semantic.highlight, // Highlight background color of the final tabstop of a snippet.
    "editor.snippetFinalTabstopHighlightBorder": semantic.zero, // Highlight border color of the final tabstop of a snippet.
    "editor.snippetTabstopHighlightBackground": semantic.highlight, // Highlight background color of a snippet tabstop.
    "editor.snippetTabstopHighlightBorder": semantic.zero, // Highlight border color of a snippet tabstop.
    "editor.stackFrameHighlightBackground": semantic.highlight, // Background color of the top stack frame highlight in the editor.
    "editor.symbolHighlightBackground": semantic.highlight, // Background color of highlighted symbol. The color must not be opaque so as not to hide underlying decorations.
    "editor.symbolHighlightBorder": semantic.zero, // Background color of the border around highlighted symbols.
    "editor.wordHighlightBackground": semantic.highlight, // Background color of a symbol during read-access, for example when reading a variable. The color must not be opaque so as not to hide underlying decorations.
    "editor.wordHighlightBorder": semantic.zero, // Border color of a symbol during read-access, for example when reading a variable.
    "editor.wordHighlightStrongBackground": semantic.highlight, // Background color of a symbol during write-access, for example when writing to a variable. The color must not be opaque so as not to hide underlying decorations.
    "editor.wordHighlightStrongBorder": semantic.zero, // Border color of a symbol during write-access, for example when writing to a variable.
    "editor.wordHighlightTextBackground": semantic.highlight, // Background color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations.
    "editor.wordHighlightTextBorder": semantic.zero, // Border color of a textual occurrence for a symbol.
    "editorUnicodeHighlight.background": semantic.highlight, // Background color used to highlight unicode characters.
    "editorUnicodeHighlight.border": semantic.zero, // Border color used to highlight unicode characters.
} satisfies ThemeColors;
