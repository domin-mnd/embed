import { theme } from "@theme/general";
import { globalStyle } from "@vanilla-extract/css";
import { style } from "styled-vanilla-extract/qwik";

export const color: string = style({
  display: "flex",
  flexDirection: "row",
});

// Title
globalStyle(`${color} span`, {
  fontWeight: theme.fontWeight.bold,
  fontSize: theme.fontSize.md,
  color: theme.color.textInner,
});

globalStyle(`${color} span`, {
  fontWeight: theme.fontWeight.bold,
  fontSize: theme.fontSize.md,
  color: theme.color.textInner,
});
