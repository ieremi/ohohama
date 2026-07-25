import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const testingColors = {
    "testing.coverCountBadgeBackground": semantic.info, // Background for the badge indicating execution count
    "testing.coverCountBadgeForeground": semantic.foreground, // Foreground for the badge indicating execution count
    "testing.coveredBackground": semantic.background, // Background color of text that was covered.
    "testing.coveredBorder": semantic.zero, // Border color of text that was covered.
    "testing.coveredGutterBackground": semantic.background, // Gutter color of regions where code was covered.
    "testing.iconErrored": semantic.error, // Color for the 'Errored' icon in the test explorer.
    "testing.iconErrored.retired": semantic.error, // Retired color for the 'Errored' icon in the test explorer.
    "testing.iconFailed": semantic.error, // Color for the 'failed' icon in the test explorer.
    "testing.iconFailed.retired": semantic.error, // Retired color for the 'failed' icon in the test explorer.
    "testing.iconPassed": semantic.success, // Color for the 'passed' icon in the test explorer.
    "testing.iconPassed.retired": semantic.success, // Retired color for the 'passed' icon in the test explorer.
    "testing.iconQueued": semantic.info, // Color for the 'Queued' icon in the test explorer.
    "testing.iconQueued.retired": semantic.info, // Retired color for the 'Queued' icon in the test explorer.
    "testing.iconSkipped": semantic.foreground, // Color for the 'Skipped' icon in the test explorer.
    "testing.iconSkipped.retired": semantic.foreground, // Retired color for the 'Skipped' icon in the test explorer.
    "testing.iconUnset": semantic.info, // Color for the 'Unset' icon in the test explorer.
    "testing.iconUnset.retired": semantic.info, // Retired color for the 'Unset' icon in the test explorer.
    "testing.message.error.badgeBackground": semantic.error, // Background color of test error messages shown inline in the editor.
    "testing.message.error.badgeBorder": semantic.zero, // Border color of test error messages shown inline in the editor.
    "testing.message.error.badgeForeground": semantic.foreground, // Text color of test error messages shown inline in the editor.
    "testing.message.error.lineBackground": semantic.background, // Margin color beside error messages shown inline in the editor.
    "testing.message.info.decorationForeground": semantic.foreground, // Text color of test info messages shown inline in the editor.
    "testing.message.info.lineBackground": semantic.background, // Margin color beside info messages shown inline in the editor.
    "testing.messagePeekBorder": semantic.zero, // Color of the peek view borders and arrow when peeking a logged message.
    "testing.messagePeekHeaderBackground": semantic.background, // Color of the peek view borders and arrow when peeking a logged message.
    "testing.peekBorder": semantic.zero, // Color of the peek view borders and arrow.
    "testing.peekHeaderBackground": semantic.background, // Color of the peek view borders and arrow.
    "testing.runAction": semantic.accent, // Color for 'run' icons in the editor.
    "testing.uncoveredBackground": semantic.info, // Background color of text that was not covered.
    "testing.uncoveredBorder": semantic.zero, // Border color of text that was not covered.
    "testing.uncoveredBranchBackground": semantic.info, // Background of the widget shown for an uncovered branch.
    "testing.uncoveredGutterBackground": semantic.background, // Gutter color of regions where code not covered.
} satisfies ThemeColors;
