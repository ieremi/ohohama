// src/theme/debug.ts

import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const notificationColors = {
    "notificationCenter.border": semantic.zero, // Notification Center border color.
    "notificationCenterHeader.background": semantic.background, // Notification Center header background color.
    "notificationCenterHeader.foreground": semantic.foreground, // Notification Center header foreground color.
    "notificationLink.foreground": semantic.link, // Notification links foreground color.
    "notifications.background": semantic.background, // Notification background color.
    "notifications.border": semantic.zero, // Notification border color separating from other notifications in the Notification Center.
    "notifications.foreground": semantic.foreground, // Notification foreground color.
    "notificationsErrorIcon.foreground": semantic.error, // The color used for the notification error icon.
    "notificationsInfoIcon.foreground": semantic.info, // The color used for the notification info icon.
    "notificationsWarningIcon.foreground": semantic.warning, // The color used for the notification warning icon.
    "notificationToast.border": semantic.zero, // Notification toast border color.
} satisfies ThemeColors;

