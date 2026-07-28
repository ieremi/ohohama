// src/color.ts

export type HexColor = `#${string}`;

/**
 * Add an alpha channel to a #RRGGBB color.
 *
 * Example:
 *   alpha("#2196F3", 0.5) === "#2196F380"
 */
export function alpha(
  color: HexColor,
  value: number,
): HexColor {
  if (!/^#[0-9A-Fa-f]{6}$/.test(color)) {
    throw new Error(
      `Expected #RRGGBB, got "${color}".`,
    );
  }

  if (value < 0 || value > 1) {
    throw new RangeError(
      `Alpha must be between 0 and 1, got ${value}.`,
    );
  }

  const aa = Math.round(value * 255)
    .toString(16)
    .toUpperCase()
    .padStart(2, "0");

  return `${color}${aa}` as HexColor;
}
