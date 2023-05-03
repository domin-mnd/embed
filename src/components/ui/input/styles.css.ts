import { theme } from "@theme/general";
import { rem } from "@util/units/rem";
import { globalStyle } from "@vanilla-extract/css";
import { style } from "styled-vanilla-extract/qwik";

export const input: string = style({
  appearance: 0,

  paddingLeft: theme.space.md,
  paddingRight: theme.space.md,
  paddingTop: theme.space.sm,
  paddingBottom: theme.space.sm,

  backgroundColor: theme.color.text,
  border: `${rem(2)} solid ${theme.color.line}`,
  borderRadius: theme.borderRadius.xs,

  color: theme.color.textInner,
  fontSize: theme.fontSize.sm,
  fontWeight: theme.fontWeight.semiBold,

  "@media": {
    "screen and (max-width: 820px)": {
      width: "100%",
    },
  },
});

export const textarea: string = style({
  resize: "none",
  scrollbarColor: `${theme.color.textLight} ${theme.color.text}`,
  scrollbarWidth: "thin",
});

globalStyle(`${textarea}::-webkit-scrollbar`, {
  width: rem(8),
});

globalStyle(`${textarea}::-webkit-scrollbar-track`, {
  backgroundColor: theme.color.text,
});

globalStyle(`${textarea}::-webkit-scrollbar-thumb`, {
  backgroundColor: theme.color.textLight,
});

globalStyle(`${input}::placeholder`, {
  color: theme.color.textLight,
  opacity: 1, // Firefox needs that one
});

globalStyle(`${input}[type="file"]`, {
  display: "none",
});

globalStyle(`label${input}`, {
  cursor: "pointer",
});
