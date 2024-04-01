/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-cardholder": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-cardholder": IconAttrs;
    }
  }
}

@customElement("ph-cardholder")
class PhCardholder extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M208,52H48A20,20,0,0,0,28,72V184a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V72A20,20,0,0,0,208,52ZM36,92H220v24H160a4,4,0,0,0-4,4,28,28,0,0,1-56,0,4,4,0,0,0-4-4H36ZM48,60H208a12,12,0,0,1,12,12V84H36V72A12,12,0,0,1,48,60ZM208,196H48a12,12,0,0,1-12-12V124H92.22a36,36,0,0,0,71.56,0H220v60A12,12,0,0,1,208,196Z"/>`,
    ],
    [
      "light",
      svg`<path d="M208,50H48A22,22,0,0,0,26,72V184a22,22,0,0,0,22,22H208a22,22,0,0,0,22-22V72A22,22,0,0,0,208,50ZM38,94H218v20H160a6,6,0,0,0-6,6,26,26,0,0,1-52,0,6,6,0,0,0-6-6H38ZM48,62H208a10,10,0,0,1,10,10V82H38V72A10,10,0,0,1,48,62ZM208,194H48a10,10,0,0,1-10-10V126H90.47a38,38,0,0,0,75.06,0H218v58A10,10,0,0,1,208,194Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M208,48H48A24,24,0,0,0,24,72V184a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V72A24,24,0,0,0,208,48ZM40,96H216v16H160a8,8,0,0,0-8,8,24,24,0,0,1-48,0,8,8,0,0,0-8-8H40Zm8-32H208a8,8,0,0,1,8,8v8H40V72A8,8,0,0,1,48,64ZM208,192H48a8,8,0,0,1-8-8V128H88.8a40,40,0,0,0,78.4,0H216v56A8,8,0,0,1,208,192Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M208,44H48A28,28,0,0,0,20,72V184a28,28,0,0,0,28,28H208a28,28,0,0,0,28-28V72A28,28,0,0,0,208,44ZM48,68H208a4,4,0,0,1,4,4V88H160a12,12,0,0,0-12,12,20,20,0,0,1-40,0A12,12,0,0,0,96,88H44V72A4,4,0,0,1,48,68ZM208,188H48a4,4,0,0,1-4-4V112H85.66a44,44,0,0,0,84.68,0H212v72A4,4,0,0,1,208,188Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M208,48H48A24,24,0,0,0,24,72V184a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V72A24,24,0,0,0,208,48Zm-56,72a24,24,0,0,1-48,0,8,8,0,0,0-8-8H40V96H216v16H160A8,8,0,0,0,152,120ZM48,64H208a8,8,0,0,1,8,8v8H40V72A8,8,0,0,1,48,64Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M224,72v48H160a32,32,0,0,1-64,0H32V72A16,16,0,0,1,48,56H208A16,16,0,0,1,224,72Z" opacity="0.2"/><path d="M208,48H48A24,24,0,0,0,24,72V184a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V72A24,24,0,0,0,208,48ZM40,96H216v16H160a8,8,0,0,0-8,8,24,24,0,0,1-48,0,8,8,0,0,0-8-8H40Zm8-32H208a8,8,0,0,1,8,8v8H40V72A8,8,0,0,1,48,64ZM208,192H48a8,8,0,0,1-8-8V128H88.8a40,40,0,0,0,78.4,0H216v56A8,8,0,0,1,208,192Z"/>`,
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
      ${PhCardholder.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhCardholder };
