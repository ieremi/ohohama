// src/theme.ts

import { semantic } from "./semantic.js";

export const colors = {
  /*
   * Editor
   */
  "editor.background": semantic.surface.background,
  "editor.foreground": semantic.text.primary,

  "editorCursor.foreground": semantic.accent.strong,

  "editor.selectionBackground": semantic.selection.background,
  "editor.selectionForeground": semantic.selection.foreground,

  "editor.inactiveSelectionBackground": semantic.accent.subtle,

  "editorLineNumber.foreground": semantic.text.muted,
  "editorLineNumber.activeForeground": semantic.text.primary,

  "editorIndentGuide.background1": semantic.surface.borderMuted,
  "editorIndentGuide.activeBackground1": semantic.surface.border,

  /*
   * Focus and borders
   */
  "focusBorder": semantic.focus.border,

  "contrastBorder": semantic.surface.border,
  "widget.border": semantic.surface.border,
  "editorWidget.border": semantic.surface.border,

  /*
   * Side bar
   */
  "sideBar.background": semantic.surface.elevated,
  "sideBar.foreground": semantic.text.primary,
  "sideBar.border": semantic.surface.borderMuted,

  "sideBarTitle.foreground": semantic.text.primary,
  "sideBarSectionHeader.background": semantic.surface.sunken,
  "sideBarSectionHeader.foreground": semantic.text.primary,

  /*
   * Activity bar
   */
  "activityBar.background": semantic.surface.elevated,
  "activityBar.foreground": semantic.accent.strong,
  "activityBar.inactiveForeground": semantic.text.muted,
  "activityBar.border": semantic.surface.borderMuted,

  "activityBarBadge.background": semantic.accent.primary,
  "activityBarBadge.foreground": semantic.text.primary,

  /*
   * Status bar
   */
  "statusBar.background": semantic.accent.subtle,
  "statusBar.foreground": semantic.text.primary,
  "statusBar.border": semantic.surface.borderMuted,

  "statusBar.debuggingBackground": semantic.status.warning,
  "statusBar.noFolderBackground": semantic.surface.sunken,

  /*
   * Title bar
   */
  "titleBar.activeBackground": semantic.surface.elevated,
  "titleBar.activeForeground": semantic.text.primary,
  "titleBar.inactiveBackground": semantic.surface.background,
  "titleBar.inactiveForeground": semantic.text.muted,
  "titleBar.border": semantic.surface.borderMuted,

  /*
   * Tabs
   */
  "editorGroupHeader.tabsBackground": semantic.surface.elevated,
  "editorGroupHeader.tabsBorder": semantic.surface.borderMuted,

  "tab.activeBackground": semantic.surface.background,
  "tab.activeForeground": semantic.text.primary,
  "tab.activeBorderTop": semantic.accent.primary,

  "tab.inactiveBackground": semantic.surface.elevated,
  "tab.inactiveForeground": semantic.text.secondary,

  "tab.border": semantic.surface.borderMuted,

  /*
   * Lists
   */
  "list.activeSelectionBackground": semantic.accent.subtle,
  "list.activeSelectionForeground": semantic.text.primary,

  "list.inactiveSelectionBackground": semantic.surface.sunken,
  "list.inactiveSelectionForeground": semantic.text.primary,

  "list.hoverBackground": semantic.surface.sunken,
  "list.hoverForeground": semantic.text.primary,

  "list.focusOutline": semantic.focus.border,

  /*
   * Input
   */
  "input.background": semantic.surface.sunken,
  "input.foreground": semantic.text.primary,
  "input.border": semantic.surface.border,

  "input.placeholderForeground": semantic.text.muted,

  "inputValidation.errorBorder": semantic.status.error,
  "inputValidation.warningBorder": semantic.status.warning,
  "inputValidation.infoBorder": semantic.status.info,

  /*
   * Buttons
   */
  "button.background": semantic.accent.primary,
  "button.foreground": semantic.text.primary,
  "button.hoverBackground": semantic.accent.strong,

  "button.secondaryBackground": semantic.surface.sunken,
  "button.secondaryForeground": semantic.text.primary,
  "button.secondaryHoverBackground": semantic.accent.subtle,

  /*
   * Notifications
   */
  "notifications.background": semantic.surface.elevated,
  "notifications.foreground": semantic.text.primary,
  "notifications.border": semantic.surface.border,

  "notificationsErrorIcon.foreground": semantic.status.error,
  "notificationsWarningIcon.foreground": semantic.status.warning,
  "notificationsInfoIcon.foreground": semantic.status.info,

  /*
   * Diagnostics
   */
  "editorError.foreground": semantic.status.error,
  "editorWarning.foreground": semantic.status.warning,
  "editorInfo.foreground": semantic.status.info,

  /*
   * Links
   */
  "textLink.foreground": semantic.text.link,
  "textLink.activeForeground": semantic.text.linkActive,

  /*
   * Terminal
   */
  "terminal.background": semantic.surface.background,
  "terminal.foreground": semantic.text.primary,

  "terminal.ansiBlack": semantic.terminal.normal.black,
  "terminal.ansiRed": semantic.terminal.normal.red,
  "terminal.ansiGreen": semantic.terminal.normal.green,
  "terminal.ansiYellow": semantic.terminal.normal.yellow,
  "terminal.ansiBlue": semantic.terminal.normal.blue,
  "terminal.ansiMagenta": semantic.terminal.normal.magenta,
  "terminal.ansiCyan": semantic.terminal.normal.cyan,
  "terminal.ansiWhite": semantic.terminal.normal.white,

  "terminal.ansiBrightBlack": semantic.terminal.bright.black,
  "terminal.ansiBrightRed": semantic.terminal.bright.red,
  "terminal.ansiBrightGreen": semantic.terminal.bright.green,
  "terminal.ansiBrightYellow": semantic.terminal.bright.yellow,
  "terminal.ansiBrightBlue": semantic.terminal.bright.blue,
  "terminal.ansiBrightMagenta": semantic.terminal.bright.magenta,
  "terminal.ansiBrightCyan": semantic.terminal.bright.cyan,
  "terminal.ansiBrightWhite": semantic.terminal.bright.white,
} as const;
export const tokenColors = [
  {
    name: "Comments",
    scope: [
      "comment",
      "punctuation.definition.comment",
    ],
    settings: {
      foreground: semantic.text.muted,
      fontStyle: "italic",
    },
  },
  {
    name: "Strings",
    scope: [
      "string",
      "string.quoted",
    ],
    settings: {
      foreground: semantic.status.success,
    },
  },
  {
    name: "Keywords",
    scope: [
      "keyword",
      "storage.type",
      "storage.modifier",
    ],
    settings: {
      foreground: semantic.accent.primary,
    },
  },
  {
    name: "Functions",
    scope: [
      "entity.name.function",
      "support.function",
    ],
    settings: {
      foreground: semantic.text.link,
    },
  },
  {
    name: "Types",
    scope: [
      "entity.name.type",
      "entity.name.class",
      "support.type",
    ],
    settings: {
      foreground: semantic.status.info,
    },
  },
  {
    name: "Variables",
    scope: [
      "variable",
      "variable.other",
    ],
    settings: {
      foreground: semantic.text.primary,
    },
  },
] as const;