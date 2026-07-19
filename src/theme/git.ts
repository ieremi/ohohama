// src/theme/git.ts

import { semantic } from "../semantic.js";
import type { ThemeColors } from "../generated/theme-colors.js";
import { palette } from "../palette.js";

export const gitColors = {
    "gitDecoration.addedResourceForeground": semantic.added,
    "gitDecoration.deletedResourceForeground": semantic.deleted,
    "gitDecoration.modifiedResourceForeground": semantic.modified,
    "gitDecoration.untrackedResourceForeground": semantic.deleted,
    "scmGraph.foreground1": semantic.order[1],
    "scmGraph.foreground2": semantic.order[2],
    "scmGraph.foreground3": semantic.order[3],
    "scmGraph.foreground4": semantic.order[4],
    "scmGraph.foreground5": semantic.order[5],
    "scmGraph.historyItemBaseRefColor": semantic.foreground,
    "scmGraph.historyItemHoverAdditionsForeground": semantic.added,
    "scmGraph.historyItemHoverDefaultLabelBackground": semantic.hover,
    "scmGraph.historyItemHoverDefaultLabelForeground": semantic.accent,
    "scmGraph.historyItemHoverDeletionsForeground": semantic.deleted,
    "scmGraph.historyItemHoverLabelForeground": semantic.foreground,
    "scmGraph.historyItemRefColor": semantic.local,
    "scmGraph.historyItemRemoteRefColor": semantic.remote,
    "editorHoverWidget.background": semantic.widget,
} satisfies ThemeColors;
