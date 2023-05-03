import { rem } from "@util/units/rem";
import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";

export const theme = createGlobalTheme(":root", {
  space: {
    /** 2px */
    xxs: rem(2),
    /** 4px */
    xs: rem(4),
    /** 7px */
    sm: rem(7),
    /** 12px */
    md: rem(12),
    /** 16px */
    lg: rem(16),
    /** 24px */
    xl: rem(24),
    /** 36px */
    xxl: rem(36),
  },
  fontSize: {
    /** 12px */
    xxs: rem(12),
    /** 14px */
    xs: rem(14),
    /** 16px */
    sm: rem(16),
    /** 18px */
    md: rem(18),
    /** 20px */
    lg: rem(20),
    /** 24px */
    xl: rem(24),
    /** 30px */
    xxl: rem(30),
  },
  fontWeight: {
    light: "300",
    regular: "400",
    medium: "500",
    semiBold: "600",
    bold: "700",
    extraBold: "800",
    black: "900",
  },
  fontFamily: {
    content: "Figtree",
  },
  borderRadius: {
    /** 2px */
    xs: rem(2),
    /** 4px */
    sm: rem(4),
    /** 6px */
    md: rem(6),
    /** 8px */
    lg: rem(8),
    /** 16px */
    xl: rem(16),
    circle: "50%",
  },
  color: {
    bg: "#000000",
    text: "#FFFFFF",
    textLight: "#CCCCCC",
    textInner: "#000000",
    line: "#000000",
    selection: "#AAAAAA",
    selectionText: "#000000",
    badge: {
      orange: {
        background: "#FF9C29",
        text: "#FFFFFF"
      }, // Used in footer
      yellow: {
        background: "#FDFF95",
        text: "#000000",
      }, // Used in site name OG
      blue: {
        background: "#59D7FF",
        text: "#000000",
      }, // Used in title OG
      red: {
        background: "#B42F57",
        text: "#FFFFFF",
      }, // Used in generated link
      purple: {
        background: "#8D2AC9",
        text: "#FFFFFF",
      }, // Used in description OG
      pink: {
        background: "#A82082",
        text: "#FFFFFF",
      }, // Used in image OG
    },
  },
});

globalStyle(":root", {
  colorScheme: "dark",
});

globalStyle("*", {
  margin: 0,
  padding: 0,
  outline: "none",

  fontFamily: theme.fontFamily.content,
});

globalStyle("*, ::before, ::after", {
  boxSizing: "border-box",
});

globalStyle("::selection", {
  backgroundColor: theme.color.selection,
  color: theme.color.selectionText,
});