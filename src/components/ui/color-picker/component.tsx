import type { QwikIntrinsicElements, QwikMouseEvent } from "@builder.io/qwik";
import { useVisibleTask$ } from "@builder.io/qwik";
import { component$, useSignal } from "@builder.io/qwik";
import { popup, color as colorStyle, button, colorVar } from "./styles.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

export const ColorPicker = component$<QwikIntrinsicElements["canvas"]>(
  (props) => {
    const popupOpened = useSignal<boolean>(false);
    const colorCanvas = useSignal<HTMLCanvasElement>();
    const pickedColor = useSignal<string>();
    const color = "#0000ff";

    /**
     * @see {@link https://dev.to/bhaskar95460442/create-an-html-color-picker-using-javascript-3obm JS ColorPicker}
     */
    useVisibleTask$(() => {
      const colorContext = colorCanvas.value?.getContext("2d");

      const gradientH = colorContext?.createLinearGradient(
        0,
        0,
        colorContext?.canvas.width,
        0
      );
      gradientH?.addColorStop(0, "#fff");
      gradientH?.addColorStop(1, color);
      if (colorContext) {
        colorContext.fillStyle = gradientH as CanvasGradient;
      }
      colorContext?.fillRect(
        0,
        0,
        colorContext?.canvas.width,
        colorContext?.canvas.height
      );

      // Create a Vertical Gradient(white to black)
      const gradientV = colorContext?.createLinearGradient(
        0,
        0,
        0,
        colorContext?.canvas.height
      );
      gradientV?.addColorStop(0, "rgba(0,0,0,0)");
      gradientV?.addColorStop(1, "#000");

      if (colorContext) {
        colorContext.fillStyle = gradientV as CanvasGradient;
      }

      colorContext?.fillRect(
        0,
        0,
        colorContext.canvas.width,
        colorContext.canvas.height
      );
    });

    function getColor(
      event: QwikMouseEvent<HTMLCanvasElement, MouseEvent>
    ): string {
      const colorContext = colorCanvas.value?.getContext("2d");
      const x = event.clientX; // Get X coordinate
      const y = event.clientY; // Get Y coordinate
      const pixel = colorContext?.getImageData(x, y, 1, 1).data; // Read pixel Color

      if (pixel) {
        return `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;
      } else {
        return "rgb(0, 0, 0)"
      }
    }

    return (
      <div>
        <button class={button} onClick$={() => !popupOpened.value}>
          <span>Pick your color</span>
          <div
            class={colorStyle}
            style={assignInlineVars({
              [colorVar]: pickedColor.value ?? "rgb(0, 0, 0)",
            })}
          />
        </button>
        <div class={popup} data-popup-opened={popupOpened.value}>
          <canvas ref={colorCanvas} onClick$={(event) => pickedColor.value = getColor(event)} {...props} />
        </div>
      </div>
    );
  }
);
