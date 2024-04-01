/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-caret-circle-double-right": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-caret-circle-double-right": IconAttrs;
    }
  }
}

@customElement("ph-caret-circle-double-right")
class PhCaretCircleDoubleRight extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M198.71,57.29A100,100,0,1,0,57.29,198.71,100,100,0,1,0,198.71,57.29Zm-5.66,135.76A92,92,0,1,1,220,128,91.37,91.37,0,0,1,193.05,193.05Zm-70.22-67.88a4,4,0,0,1,0,5.66l-32,32a4,4,0,0,1-5.66-5.66L114.34,128,85.17,98.83a4,4,0,0,1,5.66-5.66Zm56,0a4,4,0,0,1,0,5.66l-32,32a4,4,0,0,1-5.66-5.66L170.34,128,141.17,98.83a4,4,0,0,1,5.66-5.66Z"/>`,
    ],
    [
      "light",
      svg`<path d="M200.12,55.87A102,102,0,0,0,55.87,200.12,102,102,0,1,0,200.12,55.87Zm-8.48,135.77a90,90,0,1,1,0-127.28A90.1,90.1,0,0,1,191.64,191.64Zm-67.4-67.88a6,6,0,0,1,0,8.48l-32,32a6,6,0,0,1-8.48-8.48L111.51,128,83.76,100.24a6,6,0,0,1,8.48-8.48Zm56,0a6,6,0,0,1,0,8.48l-32,32a6,6,0,0,1-8.48-8.48L167.51,128l-27.75-27.76a6,6,0,0,1,8.48-8.48Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM190.23,190.23a88,88,0,1,1,0-124.46A88.11,88.11,0,0,1,190.23,190.23Zm-64.57-67.89a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L108.69,128,82.34,101.66A8,8,0,0,1,93.66,90.34Zm56,0a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L164.69,128l-26.35-26.34a8,8,0,0,1,11.32-11.32Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M204.4,51.6a108,108,0,1,0,0,152.8A108.16,108.16,0,0,0,204.4,51.6Zm-17,135.82a84,84,0,1,1,0-118.84A84.12,84.12,0,0,1,187.42,187.42Zm-58.93-67.91a12,12,0,0,1,0,17l-32,32a12,12,0,0,1-17-17L103,128,79.49,104.47a12,12,0,1,1,17-17Zm56,17-32,32a12,12,0,0,1-17-17L159,128l-23.52-23.53a12,12,0,1,1,17-17l32,32A12,12,0,0,1,184.51,136.49Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M201.57,54.42a104,104,0,1,0,0,147.15A104.17,104.17,0,0,0,201.57,54.42Zm-75.91,79.24-32,32a8,8,0,1,1-11.32-11.32L108.68,128,82.32,101.64A8,8,0,1,1,93.64,90.32l32,32A8,8,0,0,1,125.66,133.66Zm56,0-32,32a8,8,0,0,1-11.32-11.32L164.71,128l-26.36-26.36a8,8,0,1,1,11.32-11.32l32,32A8,8,0,0,1,181.68,133.66Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M195.88,195.88a96,96,0,1,1,0-135.76A96,96,0,0,1,195.88,195.88Z" opacity="0.2"/><path d="M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM190.23,190.23a88,88,0,1,1,0-124.46A88.11,88.11,0,0,1,190.23,190.23Zm-64.57-67.89a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L108.69,128,82.34,101.66A8,8,0,0,1,93.66,90.34Zm56,0a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L164.69,128l-26.35-26.34a8,8,0,0,1,11.32-11.32Z"/>`,
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
      ${PhCaretCircleDoubleRight.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhCaretCircleDoubleRight };
