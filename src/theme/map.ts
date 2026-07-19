// src/theme/debug.ts

import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const mapColors = {
    	"minimap.background": semantic.background,
        "minimap.errorHighlight": semantic.error,
		"minimap.chatEditHighlight": semantic.info,
        "minimap.findMatchHighlight": semantic.accent,
        "minimap.foregroundOpacity": semantic.hover,
		"minimap.infoHighlight": semantic.info,
		"minimap.selectionHighlight": semantic.accent, 
		"minimap.selectionOccurrenceHighlight": semantic.info,
		"minimap.warningHighlight": semantic.warning,
		"minimapGutter.addedBackground": semantic.added,
		"minimapGutter.deletedBackground": semantic.deleted,
		"minimapGutter.modifiedBackground": semantic.modified,
		"minimapSlider.activeBackground": semantic.active,
		"minimapSlider.background": semantic.background,
		"minimapSlider.hoverBackground": semantic.hover,
        "editorGutter.addedBackground": semantic.added,
		"editorGutter.addedSecondaryBackground": semantic.added,
		"editorGutter.background": semantic.background,
		"editorGutter.commentDraftGlyphForeground": semantic.syntax.comment,
		"editorGutter.commentGlyphForeground": semantic.syntax.comment,
		"editorGutter.commentRangeForeground": semantic.syntax.comment,
		"editorGutter.commentUnresolvedGlyphForeground": semantic.syntax.comment,
		"editorGutter.deletedBackground": semantic.deleted,
		"editorGutter.deletedSecondaryBackground": semantic.deleted,
		"editorGutter.foldingControlForeground": semantic.disabled,
		"editorGutter.itemBackground": semantic.info,
		"editorGutter.itemGlyphForeground": semantic.info,
		"editorGutter.modifiedBackground": semantic.modified,
		"editorGutter.modifiedSecondaryBackground": semantic.modified,
} satisfies ThemeColors;
