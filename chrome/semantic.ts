import { palette } from "../palette.js";
import { hexFromArgb } from "@material/material-color-utilities";

export const semantic = {
    accent: hexFromArgb(palette.primary.tone(70)),
    background: hexFromArgb(palette.tertiary.tone(20)),
    bookmark_text: palette.white,
    border: palette.zero,
    button: hexFromArgb(palette.primary.tone(80)),
    control: palette.city.t,
    field: palette.black,
    foreground: palette.white,
    frame: hexFromArgb(palette.neutral.tone(30)),
    header: palette.city.k,
    highlight: hexFromArgb(palette.primary.tone(35)),
    icon: palette.white,
    inactive: hexFromArgb(palette.neutral.tone(50)),
    omnibox: hexFromArgb(palette.secondary.tone(30)),
    popup: palette.black,
    result: palette.white,
    selected: palette.city.t,
    tab: hexFromArgb(palette.primary.tone(10)),
    text: palette.white,
    toolbar: hexFromArgb(palette.tertiary.tone(20)),
    url: palette.city.k,
    zero: palette.zero,
} as const;
