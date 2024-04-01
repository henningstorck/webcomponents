/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-alarm": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-alarm": IconAttrs;
    }
  }
}

@customElement("ph-alarm")
class PhAlarm extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M128,44a92,92,0,1,0,92,92A92.1,92.1,0,0,0,128,44Zm0,176a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,220ZM58.83,34.83l-32,32a4,4,0,0,1-5.66-5.66l32-32a4,4,0,0,1,5.66,5.66Zm176,32a4,4,0,0,1-5.66,0l-32-32a4,4,0,0,1,5.66-5.66l32,32A4,4,0,0,1,234.83,66.83ZM188,136a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V80a4,4,0,0,1,8,0v52h52A4,4,0,0,1,188,136Z"/>`,
    ],
    [
      "light",
      svg`<path d="M128,42a94,94,0,1,0,94,94A94.11,94.11,0,0,0,128,42Zm0,176a82,82,0,1,1,82-82A82.1,82.1,0,0,1,128,218ZM60.24,36.24l-32,32a6,6,0,1,1-8.48-8.48l32-32a6,6,0,1,1,8.48,8.48Zm176,32a6,6,0,0,1-8.48,0l-32-32a6,6,0,0,1,8.48-8.48l32,32A6,6,0,0,1,236.24,68.24ZM184,130a6,6,0,0,1,0,12H128a6,6,0,0,1-6-6V80a6,6,0,0,1,12,0v50Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM61.66,37.66l-32,32A8,8,0,0,1,18.34,58.34l32-32A8,8,0,0,1,61.66,37.66Zm176,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,237.66,69.66ZM184,128a8,8,0,0,1,0,16H128a8,8,0,0,1-8-8V80a8,8,0,0,1,16,0v48Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M128,36A100,100,0,1,0,228,136,100.11,100.11,0,0,0,128,36Zm0,176a76,76,0,1,1,76-76A76.08,76.08,0,0,1,128,212ZM32.49,72.49a12,12,0,1,1-17-17l32-32a12,12,0,1,1,17,17Zm208,0a12,12,0,0,1-17,0l-32-32a12,12,0,1,1,17-17l32,32A12,12,0,0,1,240.49,72.49ZM176,124a12,12,0,0,1,0,24H128a12,12,0,0,1-12-12V88a12,12,0,0,1,24,0v36Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M61.66,37.66l-32,32A8,8,0,0,1,18.34,58.34l32-32A8,8,0,0,1,61.66,37.66Zm176,20.68-32-32a8,8,0,0,0-11.32,11.32l32,32a8,8,0,0,0,11.32-11.32ZM224,136a96,96,0,1,1-96-96A96.11,96.11,0,0,1,224,136Zm-32,0a8,8,0,0,0-8-8H136V80a8,8,0,0,0-16,0v56a8,8,0,0,0,8,8h56A8,8,0,0,0,192,136Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M216,136a88,88,0,1,1-88-88A88,88,0,0,1,216,136Z" opacity="0.2"/><path d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM61.66,37.66l-32,32A8,8,0,0,1,18.34,58.34l32-32A8,8,0,0,1,61.66,37.66Zm176,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,237.66,69.66ZM184,128a8,8,0,0,1,0,16H128a8,8,0,0,1-8-8V80a8,8,0,0,1,16,0v48Z"/>`,
    ],
  ]);

  @property({ type: String, reflect: true })
  size?: string | number = "1em";

  @property({ type: String, reflect: true })
  weight?: IconWeight = "regular";

  @property({ type: String, reflect: true })
  color?: string = "currentColor";

  @property({ type: Boolean, reflect: true })
  mirrored?: boolean = false;

  render() {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="${this.size}"
      height="${this.size}"
      fill="${this.color}"
      viewBox="0 0 256 256"
      transform=${this.mirrored ? "scale(-1, 1)" : null}
    >
      <slot></slot>
      ${PhAlarm.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhAlarm };
