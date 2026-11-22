# Ohohama Theme

[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/ieremi.ohohama)](https://marketplace.visualstudio.com/items?itemName=ieremi.ohohama)

[![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/ieremi.ohohama)](https://marketplace.visualstudio.com/items?itemName=ieremi.ohohama)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A carefully crafted blue theme for Visual Studio Code, inspired by the calm sea and sky of **Ohohama Beach** in **Shizuoka, Japan**.

Ohohama intentionally uses a restrained color palette consisting primarily of blue and gray.

Ohohama Theme aims to provide a comfortable coding environment with cool blue tones, balanced contrast, and carefully selected syntax colors that remain pleasant during long development sessions.

## Features

* 🌊 Inspired by the colors of Ohohama Beach, Shizuoka, Japan
* 💙 Calm blue-centered color palette
* 🎨 Semantic highlighting support
* ⚙️ Generated from TypeScript sources for consistency and maintainability
* 🌙 Designed for comfortable day-to-day coding

## Screenshots

![Ohohama Theme](images/screenshot.png)

## Installation

Install **Ohohama Theme** from the Visual Studio Marketplace, then select **Ohohama-dark** or **Ohohama-light** from **Preferences → Theme → Color Theme**.

## Philosophy

Rather than maximizing saturation or contrast, Ohohama focuses on creating a balanced visual experience. The goal is to reduce visual fatigue while keeping important code elements easy to distinguish.

The theme is generated from a centralized color palette, making it easier to maintain consistent colors throughout the editor and to evolve the design over time.

## Development

```bash
npm install
npm run build
```

The Obsidian CSS snippet is generated to `obsidian/themes/ohohama.css`. Copy it into your vault's `.obsidian/snippets/` and enable it under **Settings → Appearance → CSS snippets**.

Run `npm run build:zed` to generate `zed/themes/ohohama.json`. Copy it to Zed's [local themes directory](https://zed.dev/docs/themes#local-themes), then choose **Ohohama Dark** or **Ohohama Light** in the theme selector.

To use the optional Starship prompt in Zed, set `terminal.env.STARSHIP_CONFIG` in your Zed settings to the absolute path of `zed/starship.toml`.

To regenerate the theme color definitions:

```bash
npm run generate:theme-colors
```

## License

MIT

## About Ohohama Beach

Ohohama Beach was once one of the most beloved places in **Shizuoka, Japan**. For generations, it served as a gathering place for local residents, a playground where children spent their summer days, and a destination where families and friends created lasting memories by the sea.

Although the beach itself has changed over time, it continues to hold a special place in the hearts of many people in Shizuoka. The name *Ohohama* evokes memories of the blue sea, the open sky, and peaceful days along the coast.

The Ohohama Theme is inspired by these memories and by the calm atmosphere of the beach. Its restrained palette of blues and grays reflects the colors of the sea and sky, creating a comfortable environment for long coding sessions.
