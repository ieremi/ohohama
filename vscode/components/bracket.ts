import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const bracketColors = {
    "editorBracketHighlight.foreground1": semantic.order[1]!, // Foreground color of brackets (1). Requires enabling bracket pair colorization.
    "editorBracketHighlight.foreground2": semantic.order[2]!, // Foreground color of brackets (2). Requires enabling bracket pair colorization.
    "editorBracketHighlight.foreground3": semantic.order[3]!, // Foreground color of brackets (3). Requires enabling bracket pair colorization.
    "editorBracketHighlight.foreground4": semantic.order[4]!, // Foreground color of brackets (4). Requires enabling bracket pair colorization.
    "editorBracketHighlight.foreground5": semantic.order[5]!, // Foreground color of brackets (5). Requires enabling bracket pair colorization.
    "editorBracketHighlight.foreground6": semantic.order[6]!, // Foreground color of brackets (6). Requires enabling bracket pair colorization.
    "editorBracketHighlight.unexpectedBracket.foreground": semantic.error, // Foreground color of unexpected brackets.
    "editorBracketMatch.background": semantic.match, // Background color behind matching brackets.
    "editorBracketMatch.border": semantic.zero, // Color for matching brackets boxes.
    "editorBracketMatch.foreground": semantic.foreground, // Foreground color for matching brackets.
    "editorBracketPairGuide.activeBackground1": semantic.order[1]!, // Background color of active bracket pair guides (1). Requires enabling bracket pair guides.
    "editorBracketPairGuide.activeBackground2": semantic.order[2]!, // Background color of active bracket pair guides (2). Requires enabling bracket pair guides.
    "editorBracketPairGuide.activeBackground3": semantic.order[3]!, // Background color of active bracket pair guides (3). Requires enabling bracket pair guides.
    "editorBracketPairGuide.activeBackground4": semantic.order[4]!, // Background color of active bracket pair guides (4). Requires enabling bracket pair guides.
    "editorBracketPairGuide.activeBackground5": semantic.order[5]!, // Background color of active bracket pair guides (5). Requires enabling bracket pair guides.
    "editorBracketPairGuide.activeBackground6": semantic.order[6]!, // Background color of active bracket pair guides (6). Requires enabling bracket pair guides.
    "editorBracketPairGuide.background1": semantic.order[1]!, // Background color of inactive bracket pair guides (1). Requires enabling bracket pair guides.
    "editorBracketPairGuide.background2": semantic.order[2]!, // Background color of inactive bracket pair guides (2). Requires enabling bracket pair guides.
    "editorBracketPairGuide.background3": semantic.order[3]!, // Background color of inactive bracket pair guides (3). Requires enabling bracket pair guides.
    "editorBracketPairGuide.background4": semantic.order[4]!, // Background color of inactive bracket pair guides (4). Requires enabling bracket pair guides.
    "editorBracketPairGuide.background5": semantic.order[5]!, // Background color of inactive bracket pair guides (5). Requires enabling bracket pair guides.
    "editorBracketPairGuide.background6": semantic.order[6]!, // Background color of inactive bracket pair guides (6). Requires enabling bracket pair guides.
} satisfies ThemeColors;

