// src/theme/git.ts

import { semantic } from "../semantic.js";
import type { ThemeColors } from "../generated/theme-colors.js";

export const gitColors = {
    "gitDecoration.addedResourceForeground": semantic.added,
    "gitDecoration.deletedResourceForeground": semantic.deleted,
    "gitDecoration.modifiedResourceForeground": semantic.modified,
    "gitDecoration.untrackedResourceForeground": semantic.deleted,
    "git.blame.editorDecorationForeground": semantic.foreground, // Color for the blame editor decoration.
    "gitDecoration.conflictingResourceForeground": semantic.accent, // Color for conflicting Git resources. Used for file labels and the SCM viewlet.
    "gitDecoration.ignoredResourceForeground": semantic.inactive, // Color for ignored Git resources. Used for file labels and the SCM viewlet.
    "gitDecoration.renamedResourceForeground": semantic.modified, // Color for renamed or copied Git resources. Used for file labels and the SCM viewlet.
    "gitDecoration.stageDeletedResourceForeground": semantic.deleted, // Color for staged deletions git decorations.  Used for file labels and the SCM viewlet.
    "gitDecoration.stageModifiedResourceForeground": semantic.modified, // Color for staged modifications git decorations.  Used for file labels and the SCM viewlet.
    "gitDecoration.submoduleResourceForeground": semantic.inactive, // Color for submodule resources.
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
