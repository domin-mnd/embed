import { theme } from "@theme/general";
import { globalStyle } from "@vanilla-extract/css";
import { style } from "styled-vanilla-extract/qwik";

export const center: string = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  backgroundColor: theme.color.bg,

  minHeight: "100vh",
});

export const background: string = style({
  position: "absolute",
  top: 0,
  left: 0,

  pointerEvents: "none",
  userSelect: "none",

  width: "100%",
  height: "100%",
  overflow: "hidden",
});

globalStyle(`${background} svg`, {
  minWidth: "100vw",
  minHeight: "100vh",
});
