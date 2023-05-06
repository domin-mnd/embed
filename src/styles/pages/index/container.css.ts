import { rem } from "@util/units/rem";
import { style } from "styled-vanilla-extract/qwik";

export const container: string = style({
  flexGrow: 1,

  "@media": {
    "screen and (max-width: 820px)": {
      display: "flex",
      flexDirection: "column",
      gap: rem(10),
    },
  },
});