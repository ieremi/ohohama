import { hexFromArgb } from "@material/material-color-utilities";
import { formatHex, interpolate } from "culori";
import { mkdir, writeFile } from "node:fs/promises";
import { palette } from "../palette.js";
import { alpha } from "../vscode/color.js";
import { dark, light, type Semantic } from "../vscode/semantic.js";

const style = (colors: Semantic) => ({
    background: colors.background,
    "surface.background": colors.background,
    "elevated_surface.background": colors.raised,
    "title_bar.background": colors.background,
    "title_bar.inactive_background": colors.background,
    "toolbar.background": colors.background,
    "status_bar.background": colors.background,
    "panel.background": colors.background,
    "tab_bar.background": colors.background,
    "tab.active_background": colors.raised,
    "tab.inactive_background": colors.background,
    border: colors.border,
    "border.variant": colors.border,
    "border.focused": colors.accent,
    "border.selected": colors.accent,
    "pane.focused_border": colors.border,
    "panel.focused_border": colors.accent,
    text: colors.foreground,
    "text.muted": colors.inactive,
    "text.disabled": colors.disabled,
    "text.placeholder": colors.candidate,
    "text.accent": colors.link,
    "link_text.hover": colors.link,
    icon: colors.foreground,
    "icon.muted": colors.inactive,
    "icon.disabled": colors.disabled,
    "icon.accent": colors.link,
    accents: [colors.accent],
    "element.background": colors.raised,
    "element.hover": colors.hover,
    "element.active": colors.selection,
    "element.selected": colors.selection,
    "element.disabled": colors.input,
    "ghost_element.hover": colors.hover,
    "ghost_element.active": colors.selection,
    "ghost_element.selected": colors.selection,
    "editor.background": colors.background,
    "editor.foreground": colors.foreground,
    "editor.gutter.background": colors.background,
    "editor.subheader.background": colors.raised,
    "editor.active_line.background": formatHex(interpolate([colors.background, colors.foreground])(0.04)),
    "editor.line_number": colors.inactive,
    "editor.active_line_number": colors.foreground,
    "editor.invisible": colors.inactive,
    "editor.indent_guide": colors.border,
    "editor.indent_guide_active": colors.inactive,
    "search.match_background": colors.selection,
    "scrollbar.thumb.background": colors.slider,
    players: [{ cursor: colors.accent, background: colors.accent, selection: colors.selection }],
    created: colors.added,
    "created.background": colors.addedTransparent,
    modified: colors.modified,
    deleted: colors.deleted,
    "deleted.background": colors.deletedTransparent,
    conflict: colors.warning,
    renamed: colors.info,
    error: colors.error,
    warning: colors.warning,
    info: colors.info,
    hint: colors.inactive,
    success: colors.success,
    "terminal.background": colors.terminal.background,
    "terminal.foreground": colors.foreground,
    ...Object.fromEntries(Object.entries(colors.ansi.normal).map(([name, color]) => [`terminal.ansi.${name}`, color])),
    ...Object.fromEntries(Object.entries(colors.ansi.bright).map(([name, color]) => [`terminal.ansi.bright_${name}`, color])),
    syntax: {
        ...Object.fromEntries(Object.entries(colors.syntax).map(([name, color]) => [name, { color }])),
        "comment.doc": { color: colors.syntax.comment },
        "function.method": { color: colors.syntax.function },
        "punctuation.bracket": { color: colors.syntax.punctuation },
        "punctuation.delimiter": { color: colors.syntax.punctuation },
        "string.escape": { color: colors.syntax.escape },
        "string.regex": { color: colors.syntax.regexp },
        title: { color: colors.syntax.heading },
        "title.markup": { color: colors.syntax.heading, font_style: "normal" },
        "variable.special": { color: colors.syntax.variable },
    },
});

const lightBlue = hexFromArgb(palette.cityT.tone(45));
const lightStyle = {
    ...style({
        ...light,
        accent: palette.city.t,
        link: lightBlue,
        selection: alpha(palette.city.t, 0.29),
        slider: alpha(palette.city.t, 0.32),
        syntax: { ...light.syntax, heading: hexFromArgb(palette.cityT.tone(50)) },
    }),
    "panel.background": formatHex(interpolate([light.background, light.raised])(0.55)),
};

const theme = {
    $schema: "https://zed.dev/schema/themes/v0.2.0.json",
    name: "Ohohama",
    author: "ieremius",
    themes: [
        { name: "Ohohama Dark", appearance: "dark", style: style(dark) },
        { name: "Ohohama Light", appearance: "light", style: lightStyle },
    ],
};

const output = new URL("./themes/", import.meta.url);
await mkdir(output, { recursive: true });
await writeFile(new URL("ohohama.json", output), JSON.stringify(theme, null, 2) + "\n", "utf8");
