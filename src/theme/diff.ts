import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const diffColors = {
    "diffEditor.border": semantic.zero,
    "diffEditor.diagonalFill": semantic.hover,
    "diffEditor.insertedLineBackground": semantic.added,
    "diffEditor.insertedTextBackground": semantic.added,
    "diffEditor.insertedTextBorder": semantic.zero,
    "diffEditor.move.border": semantic.hover,
    "diffEditor.moveActive.border": semantic.zero,
    "diffEditor.removedLineBackground": semantic.deleted,
    "diffEditor.removedTextBackground": semantic.deleted,
    "diffEditor.removedTextBorder": semantic.zero,
    "diffEditor.unchangedCodeBackground": semantic.hover,
    "diffEditor.unchangedRegionBackground": semantic.hover,
    "diffEditor.unchangedRegionForeground": semantic.foreground,
    "diffEditor.unchangedRegionShadow": semantic.zero,
    "diffEditorGutter.insertedLineBackground": semantic.added,
    "diffEditorGutter.removedLineBackground": semantic.deleted,
    "diffEditorOverview.insertedForeground": semantic.added,
    "diffEditorOverview.removedForeground": semantic.deleted,
} satisfies ThemeColors;