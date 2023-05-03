import { theme } from "@theme/general";
import { rem } from "@util/units/rem";
import { style } from "styled-vanilla-extract/qwik";

export const footer: string = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.space.md,

  maxWidth: rem(700),
  width: "100%",
  fontSize: theme.fontSize.md,

  padding: theme.space.xxl,
  paddingRight: theme.space.md,
  paddingLeft: theme.space.md,

  // Set footer above the grid background
  zIndex: 1,

  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
    },
  },
});

export const link: string = style({
  transition: "opacity .3s",

  ":hover": {
    opacity: .75,
    transition: "opacity .3s",
  }
});

export const watermark: string = style({
  color: theme.color.text,
  fontWeight: theme.fontWeight.bold,
  textAlign: "center",
});
