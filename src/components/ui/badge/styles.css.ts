import { theme } from "@theme/general";
import { createVar } from "@vanilla-extract/css";
import { style } from "styled-vanilla-extract/qwik";

export const backgroundColor: string = createVar("background-color");
export const textColor: string = createVar("text-color");

export const badge: string = style({
  backgroundColor: backgroundColor,
  borderRadius: theme.borderRadius.xs,

  color: textColor,
  fontWeight: theme.fontWeight.bold,

  paddingLeft: theme.space.sm,
  paddingRight: theme.space.sm,

  width: "max-content",
});
