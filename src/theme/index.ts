// src/theme/index.ts

import { activityBarColors } from "./activity-bar.js";
import { aiColors } from "./ai.js";
import { borderColors } from "./border.js";
import { bracketColors } from "./bracket.js";
import { breadcrumbColors } from "./breadcrumb.js";
import { chartColors } from "./chart.js";
import { commandCenterColors } from "./command-center.js";
import { copilotColors } from "./copilot.js";
import { debugColors } from "./debug.js";
import { diffColors } from "./diff.js";
import { editorColors } from "./editor.js";
import { gitColors } from "./git.js";
import { listColors } from "./list.js";
import { mapColors } from "./map.js";
import { mergeColors } from "./merge.js";
import { notebookColors } from "./notebook.js";
import { panelColors } from "./panel.js";
import { peekViewColors } from "./peek-view.js";
import { settingsColors } from "./settings.js";
import { sideBarColors } from "./side-bar.js";
import { statusBarColors } from "./status-bar.js";
import { tabColors } from "./tab.js";
import { terminalColors } from "./terminal.js";
import { testingColors } from "./testing.js";
import { tokenColors } from "./token-colors.js";
import { uiColors } from "./ui.js";
import { welcomePageColors } from "./welcome-page.js";
import { workbenchColors } from "./workbench.js";

export const colors = {
  ...activityBarColors,
  ...aiColors,
  ...borderColors,
  ...bracketColors,
  ...breadcrumbColors,
  ...chartColors,
  ...commandCenterColors,
  ...copilotColors,
  ...debugColors,
  ...diffColors,
  ...editorColors,
  ...gitColors,
  ...listColors,
  ...mapColors,
  ...mergeColors,
  ...notebookColors,
  ...panelColors,
  ...peekViewColors,
  ...settingsColors,
  ...sideBarColors,
  ...statusBarColors,
  ...tabColors,
  ...terminalColors,
  ...testingColors,
  ...uiColors,
  ...welcomePageColors,
  ...workbenchColors,
} as const;

export { tokenColors };
