import { theme } from "@theme/general";
import { rem } from "@util/units/rem";
import { createVar } from "@vanilla-extract/css";
import { style } from "styled-vanilla-extract/qwik";

export const widthVar: string = createVar("width");
export const heightVar: string = createVar("height");

export const box: string = style({
  paddingTop: rem(15),
  paddingBottom: rem(15),
  paddingLeft: rem(20),
  paddingRight: rem(20),

  display: "flex",
  flexDirection: "column",
  gap: theme.space.xs,

  width: widthVar,
  height: heightVar,

  borderRadius: theme.borderRadius.md,
  backgroundColor: theme.color.text,
  boxShadow: `0 ${rem(4)} ${rem(4)} rgb(0, 0, 0, .25)`,
});
