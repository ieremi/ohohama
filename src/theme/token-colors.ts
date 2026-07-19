// src/theme/token-colors.ts

import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const tokenColors = [
  {
    name: "Comments",
    scope: [
      "comment",
      "punctuation.definition.comment",
    ],
    settings: {
      foreground: semantic.syntax.comment,
      fontStyle: "italic",
    },
  },

  {
    name: "Strings",
    scope: [
      "string",
      "string.quoted",
      "string.template",
    ],
    settings: {
      foreground: semantic.syntax.string,
    },
  },

  {
    name: "Numbers",
    scope: [
      "constant.numeric",
    ],
    settings: {
      foreground: semantic.syntax.number,
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
      foreground: semantic.syntax.keyword,
    },
  },

  {
    name: "Functions",
    scope: [
      "entity.name.function",
      "support.function",
    ],
    settings: {
      foreground: semantic.syntax.function,
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
      foreground: semantic.syntax.type,
    },
  },

  {
    name: "Variables",
    scope: [
      "variable",
      "variable.other",
    ],
    settings: {
      foreground: semantic.syntax.variable,
    },
  },
] as const;
