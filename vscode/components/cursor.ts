import type { ThemeColors } from "../generated/theme-colors.js";
import type { Semantic } from "../semantic.js";

export const cursorColors = (semantic: Semantic) => ({
    "editorCursor.background": semantic.background, // The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor.
    "editorCursor.foreground": semantic.accent, // Color of the editor cursor.
    "editorMultiCursor.primary.background": semantic.background, // The background color of the primary editor cursor when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor.
    "editorMultiCursor.primary.foreground": semantic.accent, // Color of the primary editor cursor when multiple cursors are present.
    "editorMultiCursor.secondary.background": semantic.background, // The background color of secondary editor cursors when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor.
    "editorMultiCursor.secondary.foreground": semantic.accent, // Color of secondary editor cursors when multiple cursors are present.

} satisfies ThemeColors);
