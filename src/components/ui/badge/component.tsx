import { component$ } from "@builder.io/qwik";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { badge, backgroundColor, textColor } from "./styles.css";

export const Badge = component$<BadgeProps>(({ label, color }) => (
  <div class={badge} style={assignInlineVars({ [backgroundColor]: color.background, [textColor]: color.text })}>
    {label}
  </div>
));
