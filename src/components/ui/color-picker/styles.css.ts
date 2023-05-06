import { createVar } from "@vanilla-extract/css";
import { style } from "styled-vanilla-extract/qwik";

const padding: string = "1rem";

export const colorVar: string = createVar("color");

export const popup: string = style({
  padding,
});

export const color: string = style({
  padding,
});

export const button: string = style({
  padding,
});
