import type { Semantic } from "../vscode/semantic.js";

export const config = (semantic: Semantic) => ({
    colors: {
        primary: {
            background: semantic.background,
            foreground: semantic.foreground,
        },
        cursor: {
            cursor: semantic.accent,
        },
        vi_mode_cursor: {
            cursor: semantic.foreground,
            text: semantic.foreground,
        },
        selection: {
            text: semantic.foreground,
            background: semantic.accent,
        },
        normal: semantic.ansi.normal,
        bright: semantic.ansi.bright,
    }
});
