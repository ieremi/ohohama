// src/theme/index.ts

import { activityBarColors } from "./activity-bar.js";
import { borderColors } from "./border.js";
import { debugColors } from "./debug.js";
import { diffColors } from "./diff.js";
import { editorColors } from "./editor.js";
import { gitColors } from "./git.js";
import { listColors } from "./list.js";
import { mapColors } from "./map.js";
import { sideBarColors } from "./side-bar.js";
import { statusColors } from "./status.js";
import { terminalColors } from "./terminal.js";
import { tokenColors } from "./token-colors.js";
import { workbenchColors } from "./workbench.js";

export const colors = {
  ...activityBarColors,
  ...borderColors,
  ...debugColors,
  ...diffColors,
  ...editorColors,
  ...gitColors,
  ...listColors,
  ...mapColors,
  ...sideBarColors,
  ...statusColors,
  ...terminalColors,
  ...workbenchColors,
} as const;

export { tokenColors };
