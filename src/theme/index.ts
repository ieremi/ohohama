// src/theme/index.ts

import { activityBarColors } from "./activity-bar.js";
import { borderColors } from "./border.js";
import { copilotColors } from "./copilot.js";
import { debugColors } from "./debug.js";
import { diffColors } from "./diff.js";
import { editorColors } from "./editor.js";
import { gitColors } from "./git.js";
import { listColors } from "./list.js";
import { mapColors } from "./map.js";
import { panelColors } from "./panel.js";
import { sideBarColors } from "./side-bar.js";
import { statusColors } from "./status.js";
import { tabColors } from "./tab.js";
import { terminalColors } from "./terminal.js";
import { tokenColors } from "./token-colors.js";
import { workbenchColors } from "./workbench.js";

export const colors = {
  ...activityBarColors,
  ...borderColors,
  ...copilotColors,
  ...debugColors,
  ...diffColors,
  ...editorColors,
  ...gitColors,
  ...listColors,
  ...mapColors,
  panelColors,
  ...sideBarColors,
  ...statusColors,
    tabColors,
  ...terminalColors,
  ...workbenchColors,
} as const;

export { tokenColors };
