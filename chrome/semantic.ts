import { palette } from "../palette.js";
import { hexFromArgb } from "@material/material-color-utilities";

export const semantic = {
    accent: hexFromArgb(palette.primary.tone(70)),
    background: palette.city.k,
    bookmark_text: palette.white,
    border: palette.zero,
    button: palette.city.k,
    control: palette.city.t,
    field: palette.black,
    foreground: palette.white,
    frame: palette.city.k,
    header: palette.city.k,
    highlight: hexFromArgb(palette.primary.tone(35)),
    icon: palette.white,
    inactive: hexFromArgb(palette.neutral.tone(50)),
    omnibox: palette.city.k,
    popup: palette.black,
    result: palette.white,
    selected: palette.city.t,
    tab: hexFromArgb(palette.primary.tone(50)),
    text: palette.white,
    toolbar: palette.city.k,
    url: palette.city.k,
    zero: palette.zero,
} as const;
