/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-number-square-four": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-number-square-four": IconAttrs;
    }
  }
}

@customElement("ph-number-square-four")
class PhNumberSquareFour extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,172a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Zm-52-60H148V80a4,4,0,0,0-7.16-2.46l-56,72A4,4,0,0,0,88,156h52v20a4,4,0,0,0,8,0V156h12a4,4,0,0,0,0-8Zm-20,0H96.18L140,91.66Z"/>`,
    ],
    [
      "light",
      svg`<path d="M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm2,174a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Zm-50-62H150V80a6,6,0,0,0-10.74-3.68l-56,72A6,6,0,0,0,88,158h50v18a6,6,0,0,0,12,0V158h10a6,6,0,0,0,0-12Zm-22,0H100.27L138,97.49Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208Zm-48-64h-8V80a8,8,0,0,0-14.31-4.91l-56,72A8,8,0,0,0,88,160h48v16a8,8,0,0,0,16,0V160h8a8,8,0,0,0,0-16Zm-24,0H104.36L136,103.32Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H204ZM88,164h44v12a12,12,0,0,0,24,0V164h4a12,12,0,0,0,0-24h-4V80a12,12,0,0,0-21.47-7.37l-56,72A12,12,0,0,0,88,164Zm44-49v25H112.54Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM160,160h-8v16a8,8,0,0,1-16,0V160H88a8,8,0,0,1-6.31-12.91l56-72A8,8,0,0,1,152,80v64h8a8,8,0,0,1,0,16Zm-55.64-16L136,103.32V144Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z" opacity="0.2"/><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208Zm-48-64h-8V80a8,8,0,0,0-14.31-4.91l-56,72A8,8,0,0,0,88,160h48v16a8,8,0,0,0,16,0V160h8a8,8,0,0,0,0-16Zm-24,0H104.36L136,103.32Z"/>`,
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
      ${PhNumberSquareFour.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhNumberSquareFour };
