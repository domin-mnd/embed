import { component$ } from "@builder.io/qwik";
import { box, button } from "./styles.css";
import { buttonLabel } from "./config";

export const Card = component$(() => (
  <div class={box}>
    <button class={button}>{buttonLabel}</button>
  </div>
));
