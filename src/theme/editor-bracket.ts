import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const debugColors = {
        "editorBracketHighlight.foreground1": semantic.order[0],
		"editorBracketHighlight.foreground2": semantic.order[1],
		"editorBracketHighlight.foreground3": semantic.order[2],
		"editorBracketHighlight.foreground4": semantic.order[3],
		"editorBracketHighlight.foreground5": semantic.order[4],
		"editorBracketHighlight.foreground6": semantic.order[5],
		"editorBracketHighlight.unexpectedBracket.foreground": semantic.error,
		"editorBracketMatch.background": semantic.info,
		"editorBracketMatch.border": semantic.border,
		"editorBracketMatch.foreground": semantic.foreground,
		"editorBracketPairGuide.activeBackground1": semantic.order[0],
		"editorBracketPairGuide.activeBackground2": semantic.order[1],
		"editorBracketPairGuide.activeBackground3": semantic.order[2],
        "editorBracketPairGuide.activeBackground4": semantic.order[3],
		"editorBracketPairGuide.activeBackground5": semantic.order[4],
		"editorBracketPairGuide.activeBackground6": semantic.order[5],
		"editorBracketPairGuide.background1": semantic.order[6], 
		"editorBracketPairGuide.background2": semantic.order[7],
		"editorBracketPairGuide.background3": semantic.order[8], 
		"editorBracketPairGuide.background4": semantic.order[9],
		"editorBracketPairGuide.background5": semantic.order[10],
		"editorBracketPairGuide.background6": semantic.order[11],
} satisfies ThemeColors;