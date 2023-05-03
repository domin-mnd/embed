import { theme } from "@theme/general";
import { rem } from "@util/units/rem";
import { style } from "styled-vanilla-extract/qwik";

export const main: string = style({
  maxWidth: rem(700),
  width: "100%",
  flexGrow: 1,

  display: "flex",
  flexDirection: "column",

  paddingTop: rem(140),
  paddingBottom: rem(70),
  
  paddingRight: theme.space.md,
  paddingLeft: theme.space.md,

  // Set main above the grid background
  zIndex: 1,

  "@media": {
    "screen and (max-width: 820px)": {
      paddingTop: rem(120),
      paddingBottom: rem(30),
    },
  },
});