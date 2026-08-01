// src/theme/debug.ts

import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const indentColors = {
	"editorIndentGuide.activeBackground1": semantic.order[1]!, // Color of the active editor indentation guides (1).
	"editorIndentGuide.activeBackground2": semantic.order[2]!, // Color of the active editor indentation guides (2).
	"editorIndentGuide.activeBackground3": semantic.order[3]!, // Color of the active editor indentation guides (3).
	"editorIndentGuide.activeBackground4": semantic.order[4]!, // Color of the active editor indentation guides (4).
	"editorIndentGuide.activeBackground5": semantic.order[5]!, // Color of the active editor indentation guides (5).
	"editorIndentGuide.activeBackground6": semantic.order[6]!, // Color of the active editor indentation guides (6).
	"editorIndentGuide.background1": semantic.order[1]!, // Color of the editor indentation guides (1).
	"editorIndentGuide.background2": semantic.order[2]!, // Color of the editor indentation guides (2).
	"editorIndentGuide.background3": semantic.order[3]!, // Color of the editor indentation guides (3).
	"editorIndentGuide.background4": semantic.order[4]!, // Color of the editor indentation guides (4).
	"editorIndentGuide.background5": semantic.order[5]!, // Color of the editor indentation guides (5).
	"editorIndentGuide.background6": semantic.order[6]!, // Color of the editor indentation guides (6).
} satisfies ThemeColors;
