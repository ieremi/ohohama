// src/theme/debug.ts

import { backup } from "node:sqlite";
import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const markerColors = {
    "editorMarkerNavigation.background": semantic.background, // Editor marker navigation widget background.
    "editorMarkerNavigationError.background": semantic.error, // Editor marker navigation widget error color.
    "editorMarkerNavigationError.headerBackground": semantic.background, // Editor marker navigation widget error heading background.
    "editorMarkerNavigationInfo.background": semantic.info, // Editor marker navigation widget info color.
    "editorMarkerNavigationInfo.headerBackground": semantic.background, // Editor marker navigation widget info heading background.
    "editorMarkerNavigationWarning.background": semantic.warning, // Editor marker navigation widget warning color.
    "editorMarkerNavigationWarning.headerBackground": semantic.background, // Editor marker navigation widget warning heading background.
} satisfies ThemeColors;
