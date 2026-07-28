import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const notebookColors = {
    "notebook.cellBorderColor": semantic.zero, // The border color for notebook cells.
    "notebook.cellEditorBackground": semantic.background, // The color of the notebook cell editor background
    "notebook.cellHoverBackground": semantic.hover, // The background color of a cell when the cell is hovered.
    "notebook.cellInsertionIndicator": semantic.added, // The color of the notebook cell insertion indicator.
    "notebook.cellStatusBarItemHoverBackground": semantic.hover, // The background color of notebook cell status bar items.
    "notebook.cellToolbarSeparator": semantic.border, // The color of the separator in the cell bottom toolbar
    "notebook.editorBackground": semantic.background, // Notebook background color.
    "notebook.focusedCellBackground": semantic.focus, // The background color of a cell when the cell is focused.
    "notebook.focusedCellBorder": semantic.zero, // The color of the cell's focus indicator borders when the cell is focused.
    "notebook.focusedEditorBorder": semantic.zero, // The color of the notebook cell editor border.
    "notebook.inactiveFocusedCellBorder": semantic.zero, // The color of the cell's top and bottom border when a cell is focused while the primary focus is outside of the editor.
    "notebook.inactiveSelectedCellBorder": semantic.zero, // The color of the cell's borders when multiple cells are selected.
    "notebook.outputContainerBackgroundColor": semantic.background, // The Color of the notebook output container background.
    "notebook.outputContainerBorderColor": semantic.zero, // The border color of the notebook output container.
    "notebook.selectedCellBackground": semantic.background, // The background color of a cell when the cell is selected.
    "notebook.selectedCellBorder": semantic.zero, // The color of the cell's top and bottom border when the cell is selected but not focused.
    "notebook.symbolHighlightBackground": semantic.highlight, // Background color of highlighted cell
    "notebookEditorOverviewRuler.runningCellForeground": semantic.foreground, // The color of the running cell decoration in the notebook editor overview ruler.
    "notebookScrollbarSlider.activeBackground": semantic.slider, // Notebook scrollbar slider background color when clicked on.
    "notebookScrollbarSlider.background": semantic.slider, // Notebook scrollbar slider background color.
    "notebookScrollbarSlider.hoverBackground": semantic.hover, // Notebook scrollbar slider background color when hovering.
    "notebookStatusErrorIcon.foreground": semantic.foreground, // The error icon color of notebook cells in the cell status bar.
    "notebookStatusRunningIcon.foreground": semantic.foreground, // The running icon color of notebook cells in the cell status bar.
    "notebookStatusSuccessIcon.foreground": semantic.foreground, // The success icon color of notebook cells in the cell status bar.
} satisfies ThemeColors;
