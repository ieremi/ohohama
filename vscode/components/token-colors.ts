import type { Semantic } from "../semantic.js";

export const tokenColors = (semantic: Semantic) => [
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
      "punctuation.definition.heading.markdown",
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
      fontStyle: "bold",
    },
  },
  {
    name: "Word Operators",
    scope: [
      "keyword.operator.new",
      "keyword.operator.expression",
    ],
    settings: {
      foreground: semantic.syntax.keyword,
      fontStyle: "bold",
    },
  },
  {
    name: "Operators",
    scope: [
      "keyword.operator",
    ],
    settings: {
      foreground: semantic.syntax.operator,
      fontStyle: "",
    },
  },
  {
    name: "Punctuation",
    scope: [
      "punctuation",
    ],
    settings: {
      foreground: semantic.syntax.punctuation,
    },
  },
  {
    name: "String Punctuation",
    scope: [
      "punctuation.definition.string",
    ],
    settings: {
      foreground: semantic.syntax.string,
    },
  },
  {
    name: "Tag Punctuation",
    scope: [
      "punctuation.definition.tag",
    ],
    settings: {
      foreground: semantic.syntax.tag,
    },
  },
  {
    name: "Language Variables",
    scope: [
      "variable.language",
    ],
    settings: {
      foreground: semantic.syntax.keyword,
      fontStyle: "italic",
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
      "entity.name.namespace",
      "support.type",
    ],
    settings: {
      foreground: semantic.syntax.type,
    },
  },
  {
    name: "Classes",
    scope: [
      "entity.name.class",
      "entity.name.type.class",
      "support.class",
    ],
    settings: {
      foreground: semantic.syntax.class,
    },
  },
  {
    name: "Interfaces",
    scope: [
      "entity.name.type.interface",
    ],
    settings: {
      foreground: semantic.syntax.interface,
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
      "support.type.property-name",
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
  {
    name: "Markup Bold",
    scope: [
      "markup.bold",
    ],
    settings: {
      fontStyle: "bold",
    },
  },
  {
    name: "Markup Italic",
    scope: [
      "markup.italic",
    ],
    settings: {
      fontStyle: "italic",
    },
  },
  {
    name: "Markup Links",
    scope: [
      "markup.underline.link",
      "string.other.link",
    ],
    settings: {
      foreground: semantic.link,
    },
  },
  {
    name: "Markup Inline Code",
    scope: [
      "markup.inline.raw",
    ],
    settings: {
      foreground: semantic.syntax.fenced,
    },
  },
  {
    name: "Markup Quotes",
    scope: [
      "markup.quote",
    ],
    settings: {
      foreground: semantic.syntax.string,
      fontStyle: "italic",
    },
  },
  {
    name: "Markup List Markers",
    scope: [
      "punctuation.definition.list.begin.markdown",
    ],
    settings: {
      foreground: semantic.syntax.keyword,
    },
  },
  {
    name: "Diff Inserted",
    scope: [
      "markup.inserted",
    ],
    settings: {
      foreground: semantic.added,
    },
  },
  {
    name: "Diff Deleted",
    scope: [
      "markup.deleted",
    ],
    settings: {
      foreground: semantic.deleted,
    },
  },
  {
    name: "Diff Changed",
    scope: [
      "markup.changed",
    ],
    settings: {
      foreground: semantic.syntax.constant,
    },
  },
  {
    name: "Diff Headers",
    scope: [
      "meta.diff.header",
      "meta.diff.range",
    ],
    settings: {
      foreground: semantic.syntax.heading,
    },
  },
] as const;
