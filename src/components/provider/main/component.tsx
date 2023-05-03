import { main } from "./styles.css";
import { Slot, component$ } from "@builder.io/qwik";

export const Main = component$(() => (
  <main class={main}>
    <Slot />
  </main>
));
