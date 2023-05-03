import { assignInlineVars } from "@vanilla-extract/dynamic";
import type { QwikIntrinsicElements } from "@builder.io/qwik";
import { Slot, component$ } from "@builder.io/qwik";
import { box, heightVar, widthVar } from "./styles.css";
import { rem } from "@util/units/rem";

export const Box = component$<QwikIntrinsicElements["div"] & BoxProps>(
  ({ class: classes, width, height, ...props }) => (
    <div
      class={`${box} ${classes}`}
      style={assignInlineVars({
        [widthVar]: width ? rem(width) : "unset",
        [heightVar]: height ? rem(height) : "unset",
      })}
      {...props}
    >
      <Slot />
    </div>
  )
);
