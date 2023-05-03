import type { QwikIntrinsicElements } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { input, textarea as textareaStyle } from "./styles.css";

export const Input = component$<
  QwikIntrinsicElements["input" | "textarea"] & InputProps
>(({ textarea, ...props }) =>
  "type" in props && props.type === "file" ? (
    <label for="file-upload" class={input}>
      Select A File
      <input id="file-upload" type="file" class={input} />
    </label>
  ) : !textarea ? (
    <input class={input} {...(props as QwikIntrinsicElements["input"])} />
  ) : (
    <textarea
      class={[input, textareaStyle]}
      rows={4}
      {...(props as QwikIntrinsicElements["textarea"])}
    />
  )
);
