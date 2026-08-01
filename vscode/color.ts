import { formatHex8, parse } from "culori";

export function alpha(color: string, opacity: number): string {
  const parsed = parse(color);

  if (parsed === undefined) {
    throw new Error(`Invalid color: ${color}`);
  }

  return formatHex8({
    ...parsed,
    alpha: opacity,
  });
}