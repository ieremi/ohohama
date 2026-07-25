// src/theme/terminal.ts

import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const terminalColors = {
    "terminal.background": semantic.terminal.background,
    "terminal.foreground": semantic.foreground,
    "terminal.ansiBlack": semantic.ansi.black,
    "terminal.ansiWhite": semantic.ansi.white,
    "terminal.ansiBlue": semantic.ansi.blue,
    "terminal.ansiCyan": semantic.ansi.cyan,
    "terminal.ansiGreen": semantic.ansi.green,
    "terminal.ansiMagenta": semantic.ansi.magenta,
    "terminal.ansiRed": semantic.ansi.red,
    "terminal.ansiYellow": semantic.ansi.yellow,
    "terminal.ansiBrightBlack": semantic.ansi.brightBlack,
    "terminal.ansiBrightWhite": semantic.ansi.brightWhite,
    "terminal.ansiBrightBlue": semantic.ansi.brightBlue,
    "terminal.ansiBrightCyan": semantic.ansi.brightCyan,
    "terminal.ansiBrightGreen": semantic.ansi.brightGreen,
    "terminal.ansiBrightMagenta": semantic.ansi.brightMagenta,
    "terminal.ansiBrightRed": semantic.ansi.brightRed,
    "terminal.ansiBrightYellow": semantic.ansi.brightYellow,
    "terminal.border": semantic.zero, // The color of the border that separates split panes within the terminal. This defaults to panel.border.
    "terminal.dropBackground": semantic.background, // The background color when dragging on top of terminals. The color should have transparency so that the terminal contents can still shine through.
    "terminal.findMatchBackground": semantic.match, // Color of the current search match in the terminal. The color must not be opaque so as not to hide underlying terminal content.
    "terminal.findMatchBorder": semantic.zero, // Border color of the current search match in the terminal.
    "terminal.findMatchHighlightBackground": semantic.highlight, // Color of the other search matches in the terminal. The color must not be opaque so as not to hide underlying terminal content.
    "terminal.findMatchHighlightBorder": semantic.zero, // Border color of the other search matches in the terminal.
    "terminal.hoverHighlightBackground": semantic.background, // Color of the highlight when hovering a link in the terminal.
    "terminal.inactiveSelectionBackground": semantic.background, // The selection background color of the terminal when it does not have focus.
    "terminal.initialHintForeground": semantic.info, // Foreground color of the terminal initial hint.
    "terminal.selectionBackground": semantic.focus, // The selection background color of the terminal.
    "terminal.selectionForeground": semantic.foreground, // The selection foreground color of the terminal. When this is null the selection foreground will be retained and have the minimum contrast ratio feature applied.
    "terminal.tab.activeBorder": semantic.zero, // Border on the side of the terminal tab in the panel. This defaults to `tab.activeBorder`.
    "terminalCommandDecoration.defaultBackground": semantic.background, // The default terminal command decoration background color.
    "terminalCommandDecoration.errorBackground": semantic.background, // The terminal command decoration background color for error commands.
    "terminalCommandDecoration.successBackground": semantic.background, // The terminal command decoration background color for successful commands.
    "terminalCommandGuide.foreground": semantic.foreground, // The foreground color of the terminal command guide that appears to the left of a command and its output on hover.
    "terminalCursor.background": semantic.focus, // The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block cursor.
    "terminalCursor.foreground": semantic.foreground, // The foreground color of the terminal cursor.
    "terminalOverviewRuler.border": semantic.zero, // The overview ruler left-side border color.
    "terminalOverviewRuler.cursorForeground": semantic.foreground, // The overview ruler cursor color.
    "terminalOverviewRuler.findMatchForeground": semantic.match, // Overview ruler marker color for find matches in the terminal.
    "terminalStickyScroll.background": semantic.sticky, // The background color of the sticky scroll overlay in the terminal.
    "terminalStickyScroll.border": semantic.border, // The border of the sticky scroll overlay in the terminal.
    "terminalStickyScrollHover.background": semantic.hover, // The background color of the sticky scroll overlay in the terminal when hovered.
    "terminalSymbolIcon.aliasForeground": semantic.foreground, // The foreground color for an alias icon. These icons will appear in the terminal suggest widget
    "terminalSymbolIcon.argumentForeground": semantic.foreground, // The foreground color for an argument icon. These icons will appear in the terminal suggest widget.
    "terminalSymbolIcon.branchForeground": semantic.foreground, // The foreground color for a branch icon. These icons will appear in the terminal suggest widget.
    "terminalSymbolIcon.commitForeground": semantic.foreground, // The foreground color for a commit icon. These icons will appear in the terminal suggest widget.
    "terminalSymbolIcon.fileForeground": semantic.foreground, // The foreground color for a file icon. These icons will appear in the terminal suggest widget.
    "terminalSymbolIcon.flagForeground": semantic.foreground, // The foreground color for an flag icon. These icons will appear in the terminal suggest widget
    "terminalSymbolIcon.folderForeground": semantic.foreground, // The foreground color for a folder icon. These icons will appear in the terminal suggest widget.
    "terminalSymbolIcon.inlineSuggestionForeground": semantic.foreground, // The foreground color for an inline suggestion icon. These icons will appear in the terminal suggest widget.
    "terminalSymbolIcon.methodForeground": semantic.foreground, // The foreground color for a method icon. These icons will appear in the terminal suggest widget.
    "terminalSymbolIcon.optionForeground": semantic.foreground, // The foreground color for an option icon. These icons will appear in the terminal suggest widget.
    "terminalSymbolIcon.optionValueForeground": semantic.foreground, // The foreground color for an enum member icon. These icons will appear in the terminal suggest widget.
    "terminalSymbolIcon.pullRequestDoneForeground": semantic.foreground, // The foreground color for a completed pull request icon. These icons will appear in the terminal suggest widget.
    "terminalSymbolIcon.pullRequestForeground": semantic.foreground, // The foreground color for a pull request icon. These icons will appear in the terminal suggest widget.
    "terminalSymbolIcon.remoteForeground": semantic.remote, // The foreground color for a remote icon. These icons will appear in the terminal suggest widget.
    "terminalSymbolIcon.stashForeground": semantic.foreground, // The foreground color for a stash icon. These icons will appear in the terminal suggest widget.
    "terminalSymbolIcon.symbolicLinkFileForeground": semantic.foreground, // The foreground color for a symbolic link file icon. These icons will appear in the terminal suggest widget.
    "terminalSymbolIcon.symbolicLinkFolderForeground": semantic.foreground, // The foreground color for a symbolic link folder icon. These icons will appear in the terminal suggest widget.
    "terminalSymbolIcon.symbolText": semantic.foreground, // The foreground color for a plaintext suggestion. These icons will appear in the terminal suggest widget.
    "terminalSymbolIcon.tagForeground": semantic.foreground, // The foreground color for a tag icon. These icons will appear in the terminal suggest widget.
} satisfies ThemeColors;
