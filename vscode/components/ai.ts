import type { ThemeColors } from "../generated/theme-colors.js";
import { semantic } from "../semantic.js";

export const aiColors = {
    "agentSessionReadIndicator.foreground": semantic.foreground, // Foreground color for the read indicator in an agent session.
    "agentSessionSelectedBadge.border": semantic.zero, // Border color for the badges in selected agent session items.
    "agentSessionSelectedUnfocusedBadge.border": semantic.zero, // Border color for the badges in selected agent session items when the view is unfocused.
    "agentStatusIndicator.background": semantic.background, // Background color of the agent status indicator in the titlebar.
    "chat.avatarBackground": semantic.background, // The background color of a chat avatar.
    "chat.avatarForeground": semantic.foreground, // The foreground color of a chat avatar.
    "chat.checkpointSeparator": semantic.border, // Chat checkpoint separator color.
    "chat.editedFileForeground": semantic.modified, // The foreground color of a chat edited file in the edited file list.
    "chat.linesAddedForeground": semantic.addedTransparent, // Foreground color of lines added in chat code block pill.
    "chat.linesRemovedForeground": semantic.deletedTransparent, // Foreground color of lines removed in chat code block pill.
    "chat.requestBackground": semantic.background, // The background color of a chat request.
    "chat.requestBorder": semantic.zero, // The border color of a chat request.
    "chat.requestBubbleBackground": semantic.backgroundTransparent, // Background color of the chat request bubble.
    "chat.requestBubbleHoverBackground": semantic.hover, // Background color of the chat request bubble on hover.
    "chat.requestCodeBorder": semantic.zero, // Border color of code blocks within the chat request bubble.
    "chat.slashCommandBackground": semantic.background, // The background color of a chat slash command.
    "chat.slashCommandForeground": semantic.foreground, // The foreground color of a chat slash command.
    "chat.thinkingShimmer": semantic.backgroundTransparent, // Shimmer highlight for thinking/working labels.
} satisfies ThemeColors;

