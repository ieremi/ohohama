import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const mergeColors = {
    "merge.border": semantic.zero, // Border color on headers and the splitter in inline merge conflicts.
    "merge.commonContentBackground": semantic.background, // Common ancestor content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
    "merge.commonHeaderBackground": semantic.background, // Common ancestor header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
    "merge.currentContentBackground": semantic.background, // Current content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
    "merge.currentHeaderBackground": semantic.background, // Current header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
    "merge.incomingContentBackground": semantic.new, // Incoming content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
    "merge.incomingHeaderBackground": semantic.new, // Incoming header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
    "mergeEditor.change.background": semantic.modified, // The background color for changes.
    "mergeEditor.change.word.background": semantic.modified, // The background color for word changes.
    "mergeEditor.changeBase.background": semantic.modified, // The background color for changes in base.
    "mergeEditor.changeBase.word.background": semantic.modified, // The background color for word changes in base.
    "mergeEditor.conflict.handled.minimapOverViewRuler": semantic.highlight, // The foreground color for changes in input 1.
    "mergeEditor.conflict.handledFocused.border": semantic.zero, // The border color of handled focused conflicts.
    "mergeEditor.conflict.handledUnfocused.border": semantic.zero, // The border color of handled unfocused conflicts.
    "mergeEditor.conflict.input1.background": semantic.highlight, // The background color of decorations in input 1.
    "mergeEditor.conflict.input2.background": semantic.highlight, // The background color of decorations in input 2.
    "mergeEditor.conflict.unhandled.minimapOverViewRuler": semantic.background, // The foreground color for changes in input 1.
    "mergeEditor.conflict.unhandledFocused.border": semantic.zero, // The border color of unhandled focused conflicts.
    "mergeEditor.conflict.unhandledUnfocused.border": semantic.zero, // The border color of unhandled unfocused conflicts.
    "mergeEditor.conflictingLines.background": semantic.highlight, // The background of the "Conflicting Lines" text.
} satisfies ThemeColors;