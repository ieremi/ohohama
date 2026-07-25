import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const statusBarColors = {
    "statusBar.background": semantic.accent,
    "statusBar.border": semantic.zero,
    "statusBar.debuggingBackground": semantic.old,
    "statusBar.debuggingBorder": semantic.zero,
    "statusBar.debuggingForeground": semantic.foreground, // Status Bar foreground color when a program is being debugged.
    "statusBar.focusBorder": semantic.zero,
    "statusBar.foreground": semantic.foreground, // Status Bar foreground color.
    "statusBar.noFolderBackground": semantic.disabled,
    "statusBar.noFolderBorder": semantic.zero,
    "statusBar.noFolderForeground": semantic.foreground, // Status Bar foreground color when no folder is opened.
    "statusBarItem.activeBackground": semantic.accent, // Status Bar item background color when clicking.
    "statusBarItem.compactHoverBackground": semantic.hover, // Status bar item background color when hovering an item that contains two hovers. The status bar is shown in the bottom of the window.
    "statusBarItem.errorBackground": semantic.background, // Status bar error items background color. Error items stand out from other status bar entries to indicate error conditions.
    "statusBarItem.errorForeground": semantic.error, // Status bar error items foreground color. Error items stand out from other status bar entries to indicate error conditions.
    "statusBarItem.errorHoverBackground": semantic.hover, // Status bar error items background color when hovering. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window.
    "statusBarItem.errorHoverForeground": semantic.hover, // Status bar error items foreground color when hovering. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window.
    "statusBarItem.focusBorder": semantic.zero, // Status bar item border color when focused on keyboard navigation. The status bar is shown in the bottom of the window.
    "statusBarItem.hoverBackground": semantic.hover, // Status Bar item background color when hovering.
    "statusBarItem.hoverForeground": semantic.foreground, // Status bar item foreground color when hovering. The status bar is shown in the bottom of the window.
    "statusBarItem.offlineBackground": semantic.background, // Status bar item background color when the workbench is offline.
    "statusBarItem.offlineForeground": semantic.foreground, // Status bar item foreground color when the workbench is offline.
    "statusBarItem.offlineHoverBackground": semantic.hover, // Status bar item background hover color when the workbench is offline.
    "statusBarItem.offlineHoverForeground": semantic.hover, // Status bar item foreground hover color when the workbench is offline.
    "statusBarItem.prominentBackground": semantic.background, // Status Bar prominent items background color.
    "statusBarItem.prominentForeground": semantic.foreground, // Status Bar prominent items foreground color.
    "statusBarItem.prominentHoverBackground": semantic.hover, // Status Bar prominent items background color when hovering.
    "statusBarItem.prominentHoverForeground": semantic.foreground, // Status bar prominent items foreground color when hovering. Prominent items stand out from other status bar entries to indicate importance. The status bar is shown in the bottom of the window.
    "statusBarItem.remoteBackground": semantic.remote, // Background color for the remote indicator on the status bar.
    "statusBarItem.remoteForeground": semantic.foreground, // Foreground color for the remote indicator on the status bar.
    "statusBarItem.remoteHoverBackground": semantic.hover, // Background color for the remote indicator on the status bar when hovering.
    "statusBarItem.remoteHoverForeground": semantic.foreground, // Foreground color for the remote indicator on the status bar when hovering.
    "statusBarItem.warningBackground": semantic.warning, // Status bar warning items background color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
    "statusBarItem.warningForeground": semantic.foreground, // Status bar warning items foreground color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
    "statusBarItem.warningHoverBackground": semantic.hover, // Status bar warning items background color when hovering. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
    "statusBarItem.warningHoverForeground": semantic.foreground, // Status bar warning items foreground color when hovering. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
} satisfies ThemeColors;
