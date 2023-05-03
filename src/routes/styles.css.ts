import { rem } from "@util/units/rem";
import { globalStyle } from "@vanilla-extract/css";
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

export const box: string = style({
  "@media": {
    "screen and (max-width: 820px)": {
      width: "100%",
    },
    "screen and (min-width: 821px)": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  },
});

globalStyle(`${container} ${box}`, {
  opacity: 1,
  transition: "transform .7s, opacity .3s",
});

globalStyle(`${container}:hover ${box}`, {
  opacity: 1,
});

globalStyle(`${box}:nth-child(1)`, {
  zIndex: 4,
});
globalStyle(`${container}:hover ${box}:nth-child(1)`, {
  transform: `translateX(-85%) translateY(-155%) rotate(-5.3deg)`,
  transition: "transform .7s, opacity .3s",
});

globalStyle(`${box}:nth-child(2)`, {
  zIndex: 3,
});
globalStyle(`${container}:hover ${box}:nth-child(2)`, {
  transform: `translateX(-25%) translateY(-62%) rotate(3deg)`,
  transition: "transform .7s, opacity .3s",
});

globalStyle(`${box}:nth-child(3)`, {
  zIndex: 1,
});
globalStyle(`${container}:hover ${box}:nth-child(3)`, {
  transform: `translateX(-80%) translateY(15%) rotate(-5.37deg)`,
  transition: "transform .7s, opacity .3s",
});

globalStyle(`${box}:nth-child(4)`, {
  zIndex: 2,
});
globalStyle(`${container}:hover ${box}:nth-child(4)`, {
  transform: `translateX(20%) translateY(65%) rotate(4deg)`,
  transition: "transform .7s, opacity .3s",
});
