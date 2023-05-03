import { footer, link, watermark as watermarkStyle } from "./styles.css";
import { copyright, watermark } from "./config";
import { component$ } from "@builder.io/qwik";
import { Badge } from "@component/ui/badge";
import { theme } from "@theme/general";
import { unstyledAnchor } from "@style/global/unstyled";

export const Footer = component$(() => (
  <footer class={footer}>
    <a class={[unstyledAnchor, link]} href={copyright.href} target="_blank">
      <Badge label={copyright.label} color={theme.color.badge.orange} />
    </a>
    <span class={watermarkStyle}>
      {watermark}
    </span>
  </footer>
));
