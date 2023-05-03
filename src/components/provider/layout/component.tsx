import { Grid } from "@component/vector/grid";
import { center, background } from "./styles.css";
import { Slot, component$ } from "@builder.io/qwik";

export const Layout = component$(() => (
  <div class={center}>
    <Slot />
    <div class={background}>
      <Grid />
    </div>
  </div>
));
