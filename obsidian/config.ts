import { hexFromArgb } from "@material/material-color-utilities";
import { converter } from "culori";
import { palette } from "../palette.js";
import { alpha } from "../vscode/color.js";

const toRgb = converter("rgb");
const toHsl = converter("hsl");

// rgba(var(--x-rgb), a) や --callout-* で使う "r, g, b" の形
function rgb(color: string): string {
    const parsed = toRgb(color);

    if (parsed === undefined) {
        throw new Error(`Invalid color: ${color}`);
    }

    return [parsed.r, parsed.g, parsed.b]
        .map(c => Math.round(c * 255))
        .join(", ");
}

function accentHsl(color: string) {
    const parsed = toHsl(color);

    if (parsed === undefined) {
        throw new Error(`Invalid color: ${color}`);
    }

    const { h = 0, s, l } = parsed;

    return {
        "--accent-h": `${Math.round(h)}`,
        "--accent-s": `${Math.round(s * 100)}%`,
        "--accent-l": `${Math.round(l * 100)}%`,
    };
}

type Variables = Record<`--${string}`, string>;

// 両方のモードで同じもの
export const shared: Variables = {
    ...accentHsl(palette.city.t),
    "--git-change-bg": alpha(hexFromArgb(palette.tertiary.tone(70)), 0.18),
    "--git-selected": palette.city.t,
    "--git-move": hexFromArgb(palette.secondary.tone(70)),
};

export const dark: Variables = {
    // 背景：Ohohama の black。サイドバーも同じ色で、線はほとんど見せない
    "--background-primary": palette.black,
    "--background-primary-alt": hexFromArgb(palette.neutral.tone(5)),
    "--background-secondary": palette.black,
    "--background-secondary-alt": hexFromArgb(palette.neutral.tone(5)),
    "--background-modifier-border": hexFromArgb(palette.neutral.tone(13)),
    "--background-modifier-hover": alpha(hexFromArgb(palette.neutral.tone(60)), 0.2),
    "--background-modifier-active-hover": alpha(hexFromArgb(palette.neutral.tone(30)), 0.4),

    // 文字：Ohohama の white と neutral のグレー
    "--text-normal": palette.white,
    "--text-muted": hexFromArgb(palette.neutral.tone(70)),
    "--text-faint": hexFromArgb(palette.neutral.tone(60)),
    "--text-accent": hexFromArgb(palette.tertiary.tone(80)),
    "--text-accent-hover": hexFromArgb(palette.primary.tone(90)),
    "--text-selection": alpha(hexFromArgb(palette.primary.tone(70)), 0.35),
    "--text-highlight-bg": alpha(palette.city.t, 0.35),
    "--text-highlight-bg-active": alpha(hexFromArgb(palette.primary.tone(70)), 0.45),
    "--text-on-accent": palette.black,
    "--interactive-accent": palette.city.t,
    "--interactive-accent-hover": hexFromArgb(palette.primary.tone(70)),

    "--code-background": alpha(hexFromArgb(palette.neutral.tone(60)), 0.12),
    "--code-normal": hexFromArgb(palette.neutral.tone(80)),
    "--code-comment": hexFromArgb(palette.secondary.tone(70)),
    "--code-string": hexFromArgb(palette.neutral.tone(60)),
    "--code-keyword": hexFromArgb(palette.tertiary.tone(70)),
    "--code-function": hexFromArgb(palette.secondary.tone(70)),
    "--code-value": hexFromArgb(palette.tertiary.tone(60)),
    "--blockquote-border-color": palette.city.t,
    "--table-header-background": hexFromArgb(palette.neutral.tone(7)),
    "--scrollbar-thumb-bg": alpha(hexFromArgb(palette.primary.tone(90)), 0.3),

    // 見出し
    "--ohohama-heading": palette.white,
    "--ohohama-heading-accent": hexFromArgb(palette.tertiary.tone(70)),
    "--ohohama-heading-sub": hexFromArgb(palette.neutral.tone(70)),
    "--ohohama-h1-bg": alpha(palette.city.t, 0.06),
    "--ohohama-h1-border": alpha(palette.white, 0.7),
    "--ohohama-h2-bg": alpha(palette.city.t, 0.035),
    "--ohohama-h2-border": alpha(palette.white, 0.45),
    "--ohohama-h3-bg": alpha(hexFromArgb(palette.tertiary.tone(70)), 0.05),
    "--ohohama-h1-band": alpha(palette.city.t, 0.14),
    "--ohohama-h1-circle": alpha(hexFromArgb(palette.primary.tone(70)), 0.45),
    "--ohohama-h2-bar": palette.city.t,
    "--ohohama-h2-text": palette.white,
    "--ohohama-h2-stripe": alpha(palette.city.t, 0.16),
    "--ohohama-h2-stripe-bg": alpha(palette.city.t, 0.05),

    // Git プラグイン（obsidian-git）
    "--ohohama-git-add": hexFromArgb(palette.primary.tone(70)),
    "--ohohama-git-change": hexFromArgb(palette.tertiary.tone(70)),
    "--ohohama-git-delete": palette.city.t,
    "--ohohama-git-add-rgb": rgb(hexFromArgb(palette.primary.tone(70))),
    "--ohohama-git-delete-rgb": rgb(palette.city.t),

    // 警告・黄色・オレンジ・緑を青系に
    "--text-warning": hexFromArgb(palette.tertiary.tone(70)),
    "--color-yellow": hexFromArgb(palette.tertiary.tone(70)),
    "--color-yellow-rgb": rgb(hexFromArgb(palette.tertiary.tone(70))),
    "--color-orange": hexFromArgb(palette.secondary.tone(70)),
    "--color-orange-rgb": rgb(hexFromArgb(palette.secondary.tone(70))),
    "--text-success": hexFromArgb(palette.primary.tone(70)),
    "--color-green": hexFromArgb(palette.primary.tone(70)),
    "--color-green-rgb": rgb(hexFromArgb(palette.primary.tone(70))),
};

export const light: Variables = {
    // 背景：neutral の濃さちがい
    "--background-primary": hexFromArgb(palette.neutral.tone(94)),
    "--background-primary-alt": hexFromArgb(palette.neutral.tone(92)),
    "--background-secondary": hexFromArgb(palette.neutral.tone(91)),
    "--background-secondary-alt": hexFromArgb(palette.neutral.tone(87)),
    "--background-modifier-border": hexFromArgb(palette.neutral.tone(82)),
    "--background-modifier-hover": alpha(palette.city.t, 0.08),
    "--background-modifier-active-hover": alpha(palette.city.t, 0.14),

    // 文字：濃いグレー。リンクは city.t を少し暗くして読みやすく
    "--text-normal": hexFromArgb(palette.neutral.tone(16)),
    "--text-muted": hexFromArgb(palette.neutralVariant.tone(42)),
    "--text-faint": hexFromArgb(palette.neutralVariant.tone(61)),
    "--text-accent": hexFromArgb(palette.tertiary.tone(42)),
    "--text-accent-hover": palette.city.t,
    "--text-selection": alpha(palette.city.t, 0.22),
    "--text-highlight-bg": alpha(palette.city.t, 0.25),
    "--text-highlight-bg-active": alpha(palette.city.t, 0.4),
    "--interactive-accent": palette.city.t,
    "--interactive-accent-hover": hexFromArgb(palette.tertiary.tone(50)),

    "--code-background": hexFromArgb(palette.neutral.tone(91)),
    "--blockquote-border-color": palette.city.t,
    "--table-header-background": hexFromArgb(palette.neutral.tone(88)),

    // 見出し
    "--ohohama-heading": hexFromArgb(palette.neutral.tone(16)),
    "--ohohama-heading-accent": hexFromArgb(palette.tertiary.tone(42)),
    "--ohohama-heading-sub": hexFromArgb(palette.neutralVariant.tone(42)),
    "--ohohama-h1-bg": alpha(palette.city.t, 0.05),
    "--ohohama-h1-border": hexFromArgb(palette.neutral.tone(100)),
    "--ohohama-h2-bg": alpha(palette.city.t, 0.03),
    "--ohohama-h2-border": hexFromArgb(palette.neutral.tone(100)),
    "--ohohama-h3-bg": alpha(palette.city.t, 0.045),
    "--ohohama-h1-band": alpha(palette.city.t, 0.14),
    "--ohohama-h1-circle": alpha(hexFromArgb(palette.primary.tone(70)), 0.45),
    "--ohohama-h2-bar": palette.city.k,
    "--ohohama-h2-text": palette.city.k,
    "--ohohama-h2-stripe": alpha(palette.city.t, 0.16),
    "--ohohama-h2-stripe-bg": alpha(hexFromArgb(palette.neutral.tone(100)), 0.5),

    // Git プラグイン（obsidian-git）
    "--ohohama-git-add": hexFromArgb(palette.primary.tone(43)),
    "--ohohama-git-change": hexFromArgb(palette.tertiary.tone(38)),
    "--ohohama-git-delete": palette.city.k,
    "--ohohama-git-add-rgb": rgb(hexFromArgb(palette.primary.tone(43))),
    "--ohohama-git-delete-rgb": rgb(palette.city.k),

    // 警告・黄色・オレンジ・緑を青系に
    "--text-warning": hexFromArgb(palette.tertiary.tone(38)),
    "--color-yellow": hexFromArgb(palette.tertiary.tone(38)),
    "--color-yellow-rgb": rgb(hexFromArgb(palette.tertiary.tone(38))),
    "--color-orange": hexFromArgb(palette.secondary.tone(43)),
    "--color-orange-rgb": rgb(hexFromArgb(palette.secondary.tone(43))),
    "--text-success": hexFromArgb(palette.primary.tone(43)),
    "--color-green": hexFromArgb(palette.primary.tone(43)),
    "--color-green-rgb": rgb(hexFromArgb(palette.primary.tone(43))),
};

// コールアウト：Ohohama の青とグレーだけにする
export const callout = {
    dark: {
        "--callout-note": rgb(palette.city.t),
        "--callout-tip": rgb(hexFromArgb(palette.primary.tone(70))),
        "--callout-warning": rgb(hexFromArgb(palette.tertiary.tone(70))),
        "--callout-danger": rgb(hexFromArgb(palette.tertiary.tone(80))),
        "--callout-example": rgb(hexFromArgb(palette.secondary.tone(70))),
        "--callout-question": rgb(hexFromArgb(palette.secondary.tone(60))),
        "--callout-quote": rgb(hexFromArgb(palette.neutral.tone(60))),
        "--callout-summary": rgb(hexFromArgb(palette.neutral.tone(70))),
    },
    light: {
        "--callout-note": rgb(hexFromArgb(palette.tertiary.tone(42))),
        "--callout-tip": rgb(hexFromArgb(palette.primary.tone(43))),
        "--callout-warning": rgb(hexFromArgb(palette.tertiary.tone(38))),
        "--callout-danger": rgb(palette.city.k),
        "--callout-example": rgb(hexFromArgb(palette.secondary.tone(43))),
        "--callout-question": rgb(hexFromArgb(palette.secondary.tone(39))),
        "--callout-quote": rgb(hexFromArgb(palette.neutralVariant.tone(42))),
        "--callout-summary": rgb(hexFromArgb(palette.neutralVariant.tone(42))),
    },
} satisfies Record<string, Variables>;
