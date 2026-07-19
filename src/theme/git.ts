// src/theme/git.ts

import { semantic } from "../semantic.js";
import type { ThemeColors } from "../generated/theme-colors.js";

export const gitColors = {
    "gitDecoration.addedResourceForeground": semantic.added,
    "gitDecoration.deletedResourceForeground": semantic.deleted,
    "gitDecoration.modifiedResourceForeground": semantic.modified,
    "gitDecoration.untrackedResourceForeground": semantic.deleted,
} satisfies ThemeColors;
