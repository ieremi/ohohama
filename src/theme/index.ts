// src/theme/index.ts

import { actionListColors } from "./actionList.js";
import { activityBarColors } from "./activity-bar.js";
import { aiColors } from "./ai.js";
import { borderColors } from "./border.js";
import { bracketColors } from "./bracket.js";
import { breadcrumbColors } from "./breadcrumb.js";
import { chartColors } from "./chart.js";
import { commandCenterColors } from "./command-center.js";
import { copilotColors } from "./copilot.js";
import { cursorColors } from "./cursor.js";
import { debugColors } from "./debug.js";
import { diffColors } from "./diff.js";
import { editorColors } from "./editor.js";
import { editorGroupColors } from "./editorGroup.js";
import { gitColors } from "./git.js";
import { hintColors } from "./hint.js";
import { indentColors } from "./indent.js";
import { inputColors } from "./input.js";
import { listColors } from "./list.js";
import { mapColors } from "./map.js";
import { mergeColors } from "./merge.js";
import { notebookColors } from "./notebook.js";
import { notificationColors } from "./workbench.js";
import { panelColors } from "./panel.js";
import { peekViewColors } from "./peek-view.js";
import { searchColors } from "./workbench.js";
import { settingsColors } from "./settings.js";
import { sideBarColors } from "./side-bar.js";
import { statusBarColors } from "./status-bar.js";
import { symbolIconColors } from "./symbol-icon.js";
import { tabColors } from "./tab.js";
import { terminalColors } from "./terminal.js";
import { testingColors } from "./testing.js";
import { textColors } from "./text.js";
import { tokenColors } from "./token-colors.js";
import { uiColors } from "./ui.js";
import { welcomePageColors } from "./welcome-page.js";
import { widgetColors } from "./widget.js";
import { workbenchColors } from "./workbench.js";

export const colors = {
  ...actionListColors,
  ...activityBarColors,
  ...aiColors,
  ...borderColors,
  ...bracketColors,
  ...breadcrumbColors,
  ...chartColors,
  ...commandCenterColors,
  ...copilotColors,
  ...cursorColors,
  ...debugColors,
  ...diffColors,
  ...editorColors,
  ...editorGroupColors,
  ...gitColors,
  ...hintColors,
  ...indentColors,
  ...inputColors,
  ...listColors,
  ...mapColors,
  ...mergeColors,
  ...notebookColors,
  ...notificationColors,
  ...panelColors,
  ...peekViewColors,
  ...searchColors,
  ...settingsColors,
  ...sideBarColors,
  ...statusBarColors,
  ...symbolIconColors,
  ...tabColors,
  ...terminalColors,
  ...testingColors,
  ...textColors,
  ...uiColors,
  ...welcomePageColors,
  ...widgetColors,
  ...workbenchColors,
} as const;

export { tokenColors };
