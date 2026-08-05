// src/theme/debug.ts

import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const debugColors = {
    "activityErrorBadge.background": semantic.error,
    "activityErrorBadge.foreground": semantic.foreground,
    "activityWarningBadge.background": semantic.warning,
    "activityWarningBadge.foreground": semantic.foreground,
    "commentsView.resolvedIcon": semantic.background, // Icon color for resolved comments.
    "commentsView.unresolvedIcon": semantic.background, // Icon color for unresolved comments.
    "debugConsole.errorForeground": semantic.foreground, // Foreground color for error messages in debug REPL console.
    "debugConsole.infoForeground": semantic.foreground, // Foreground color for info messages in debug REPL console.
    "debugConsole.sourceForeground": semantic.foreground, // Foreground color for source filenames in debug REPL console.
    "debugConsole.warningForeground": semantic.foreground, // Foreground color for warning messages in debug REPL console.
    "debugConsoleInputIcon.foreground": semantic.foreground, // Foreground color for debug console input marker icon.
    "debugExceptionWidget.background": semantic.background, // Exception widget background color.
    "debugExceptionWidget.border": semantic.zero, // Exception widget border color.
    "debugIcon.breakpointCurrentStackframeForeground": semantic.accent, // Icon color for the current breakpoint stack frame.
    "debugIcon.breakpointDisabledForeground": semantic.disabled, // Icon color for disabled breakpoints.
    "debugIcon.breakpointForeground": semantic.breakpoint,
    "debugIcon.breakpointStackframeForeground": semantic.accent, // Icon color for all breakpoint stack frames.
    "debugIcon.breakpointUnverifiedForeground": semantic.accent, // Icon color for unverified breakpoints.
    "debugIcon.continueForeground": semantic.accent, // Debug toolbar icon for continue.
    "debugIcon.disconnectForeground": semantic.accent, // Debug toolbar icon for disconnect.
    "debugIcon.pauseForeground": semantic.accent, // Debug toolbar icon for pause.
    "debugIcon.restartForeground": semantic.accent, // Debug toolbar icon for restart.
    "debugIcon.startForeground": semantic.accent, // Debug toolbar icon for start debugging.
    "debugIcon.stepBackForeground": semantic.accent, // Debug toolbar icon for step back.
    "debugIcon.stepIntoForeground": semantic.accent, // Debug toolbar icon for step into.
    "debugIcon.stepOutForeground": semantic.accent, // Debug toolbar icon for step over.
    "debugIcon.stepOverForeground": semantic.accent, // Debug toolbar icon for step over.
    "debugIcon.stopForeground": semantic.accent, // Debug toolbar icon for stop.
    "debugTokenExpression.boolean": semantic.foreground, // Foreground color for booleans in debug views.
    "debugTokenExpression.error": semantic.error, // Foreground color for expression errors in debug views.
    "debugTokenExpression.name": semantic.foreground, // Foreground color for the token names shown in debug views (such as in the Variables or Watch view).
    "debugTokenExpression.number": semantic.foreground, // Foreground color for numbers in debug views.
    "debugTokenExpression.string": semantic.foreground, // Foreground color for strings in debug views.
    "debugTokenExpression.type": semantic.foreground, // Foreground color for the token types shown in the debug views (ie. the Variables or Watch view).
    "debugTokenExpression.value": semantic.foreground, // Foreground color for the token values shown in debug views.
    "debugToolBar.background": semantic.background, // Debug toolbar background color.
    "debugToolBar.border": semantic.zero, // Debug toolbar border color.
    "debugView.exceptionLabelBackground": semantic.background, // Background color for a label shown in the CALL STACK view when the debugger breaks on an exception.
    "debugView.exceptionLabelForeground": semantic.foreground, // Foreground color for a label shown in the CALL STACK view when the debugger breaks on an exception.
    "debugView.stateLabelBackground": semantic.background, // Background color for a label in the CALL STACK view showing the current session's or thread's state.
    "debugView.stateLabelForeground": semantic.foreground, // Foreground color for a label in the CALL STACK view showing the current session's or thread's state.
    "debugView.valueChangedHighlight": semantic.modified, // Color used to highlight value changes in the debug views (such as in the Variables view).
    "editorError.background": semantic.backgroundTransparent,
    "editorError.border": semantic.zero,
    "editorError.foreground": semantic.error,
    "editorInfo.background": semantic.zero,
    "editorInfo.border": semantic.zero,
    "editorInfo.foreground": semantic.info,
    "editorLightBulb.foreground": semantic.info,
    "editorLightBulbAi.foreground": semantic.info,
    "editorLightBulbAutoFix.foreground": semantic.info,
    "editorWarning.background": semantic.backgroundTransparent,
    "editorWarning.border": semantic.zero,
    "editorWarning.foreground": semantic.warning,
    "errorForeground": semantic.error,
    "list.errorForeground": semantic.foreground,
    "list.warningForeground": semantic.foreground,
    "problemsErrorIcon.foreground": semantic.foreground, // The color used for the problems error icon.
    "problemsInfoIcon.foreground": semantic.foreground, // The color used for the problems info icon.
    "problemsWarningIcon.foreground": semantic.foreground, // The color used for the problems warning icon.
} satisfies ThemeColors;
