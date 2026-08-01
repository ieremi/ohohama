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
    name: "Fenced",
    scope: [
      "markup.fenced_code.block.markdown"
    ],
    settings: {
      foreground: semantic.syntax.fenced,
    }
  },
  {
    name: "Headings",
    scope: [
      "markup.heading.markdown",
    ],
    settings: {
      foreground: semantic.syntax.heading,
      fontStyle: "bold",
    }
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
  {
    name: "Constants",
    scope: [
      "constant",
      "constant.language",
    ],
    settings: {
      foreground: semantic.syntax.constant,
    },
  },
  {
    name: "Parameters",
    scope: [
      "variable.parameter",
    ],
    settings: {
      foreground: semantic.syntax.parameter,
    },
  },
  {
    name: "Properties",
    scope: [
      "variable.other.property",
      "meta.property-name",
    ],
    settings: {
      foreground: semantic.syntax.property,
    },
  },
  {
    name: "Enum Members",
    scope: [
      "variable.other.enummember",
    ],
    settings: {
      foreground: semantic.syntax.enumMember,
    },
  },
  {
    name: "Decorators",
    scope: [
      "meta.decorator",
      "entity.name.decorator",
    ],
    settings: {
      foreground: semantic.syntax.decorator,
    },
  },
  {
    name: "Tags",
    scope: [
      "entity.name.tag",
    ],
    settings: {
      foreground: semantic.syntax.tag,
    },
  },
  {
    name: "Attributes",
    scope: [
      "entity.other.attribute-name",
    ],
    settings: {
      foreground: semantic.syntax.attribute,
    },
  },
  {
    name: "Regex",
    scope: [
      "string.regexp",
    ],
    settings: {
      foreground: semantic.syntax.regexp,
    },
  },
  {
    name: "Escape",
    scope: [
      "constant.character.escape",
    ],
    settings: {
      foreground: semantic.syntax.escape,
    },
  },
  {
    name: "Invalid",
    scope: [
      "invalid",
      "invalid.illegal",
    ],
    settings: {
      foreground: semantic.syntax.invalid,
    },
  },
] as const;
