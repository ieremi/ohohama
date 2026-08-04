import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const chartColors = {
    "chart.axis": semantic.foreground, // Axis color for the chart.
    "chart.guide": semantic.foreground, // Guide line for the chart.
    "chart.line": semantic.foreground, // Line color for the chart.
    "charts.blue": semantic.ansi.normal.blue, // Color for blue elements in charts.
    "charts.foreground": semantic.foreground, // Contrast color for text in charts.
    "charts.green": semantic.ansi.normal.green, // Color for green elements in charts.
    "charts.lines": semantic.foreground, // Color for lines in charts.
    "charts.orange": semantic.ansi.bright.yellow, // Color for orange elements in charts.
    "charts.purple": semantic.ansi.bright.magenta, // Color for purple elements in charts.
    "charts.red": semantic.ansi.normal.red, // Color for red elements in charts.
    "charts.yellow": semantic.ansi.normal.yellow, // Color for yellow elements in charts.
} satisfies ThemeColors;
