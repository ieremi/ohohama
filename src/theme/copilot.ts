import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const copilotColors = {
    "inlineChat.background": semantic.background,
    "inlineChat.border": semantic.border,
    "inlineChat.foreground": semantic.foreground,
    "inlineChat.shadow": semantic.shadow,
    "inlineChatDiff.inserted": semantic.added,
    "inlineChatDiff.removed": semantic.deleted,
    "inlineChatInput.background": semantic.background,
    "inlineChatInput.border": semantic.border,
    "inlineChatInput.focusBorder": semantic.border,
    "inlineChatInput.placeholderForeground": semantic.placeholder,
    "inlineEdit.gutterIndicator.background": semantic.background,
    "inlineEdit.gutterIndicator.border": semantic.border,
    "inlineEdit.gutterIndicator.foreground": semantic.foreground,
    "inlineEdit.gutterIndicator.primaryBackground": semantic.accent,
    "inlineEdit.gutterIndicator.primaryBorder": semantic.zero,
    "inlineEdit.gutterIndicator.primaryForeground": semantic.foreground,
    "inlineEdit.gutterIndicator.secondaryBackground": semantic.background,
    "inlineEdit.gutterIndicator.secondaryBorder": semantic.zero,
    "inlineEdit.gutterIndicator.secondaryForeground": semantic.foreground,
    "inlineEdit.gutterIndicator.successfulBackground": semantic.success,
    "inlineEdit.gutterIndicator.successfulBorder": semantic.zero,
    "inlineEdit.gutterIndicator.successfulForeground": semantic.foreground,
    "inlineEdit.modifiedBackground": semantic.modified,
    "inlineEdit.modifiedBorder": semantic.zero,
    "inlineEdit.modifiedChangedLineBackground": semantic.modified,
    "inlineEdit.modifiedChangedTextBackground": semantic.modified,
    "inlineEdit.originalBackground": semantic.background,
    "inlineEdit.originalBorder": semantic.zero,
    "inlineEdit.originalChangedLineBackground": semantic.modified,
    "inlineEdit.originalChangedTextBackground": semantic.modified,
    "inlineEdit.tabWillAcceptModifiedBorder": semantic.modified,
    "inlineEdit.tabWillAcceptOriginalBorder": semantic.modified,
} satisfies ThemeColors;


