/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-shovel": PhShovel;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-shovel": PhShovel;
    }
  }
}

@customElement("ph-shovel")
class PhShovel extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M242.83,61.17l-48-48a4,4,0,0,0-5.66,5.66L210.34,40l-76.68,76.69L96.49,79.51a12,12,0,0,0-17,0l-56,56A11.93,11.93,0,0,0,20,144v80a12,12,0,0,0,12,12h80a12,12,0,0,0,8.49-3.51l56-56a12,12,0,0,0,0-17l-37.18-37.17L216,45.66l21.17,21.17a4,4,0,1,0,5.66-5.66Zm-72,104a4,4,0,0,1,0,5.66l-56,56A4,4,0,0,1,112,228H32a4,4,0,0,1-4-4V144a4,4,0,0,1,1.17-2.83l56-56a4,4,0,0,1,5.66,0L128,122.34,85.17,165.17a4,4,0,0,0,5.66,5.66L133.66,128Z"/>`,
    ],
    [
      "light",
      svg`<path d="M244.24,59.76l-48-48a6,6,0,0,0-8.48,8.48L207.52,40l-73.86,73.86L97.9,78.1a14,14,0,0,0-19.8,0l-56,56A13.94,13.94,0,0,0,18,144v80a14,14,0,0,0,14,14h80a13.94,13.94,0,0,0,9.9-4.1l56-56a14,14,0,0,0,0-19.8l-35.76-35.76L216,48.48l19.76,19.76a6,6,0,1,0,8.48-8.48ZM169.41,166.58a2,2,0,0,1,0,2.84l-56,56A2,2,0,0,1,112,226H32a2,2,0,0,1-2-2V144a2,2,0,0,1,.58-1.42l56-56A2,2,0,0,1,88,86a2.07,2.07,0,0,1,1.42.58l35.75,35.76L83.76,163.76a6,6,0,1,0,8.48,8.48l41.42-41.41Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M245.66,58.34l-48-48a8,8,0,0,0-11.32,11.32L204.69,40l-71,71L99.31,76.68a16,16,0,0,0-22.62,0l-56,56A15.89,15.89,0,0,0,16,144v80a16,16,0,0,0,16,16h80a15.86,15.86,0,0,0,11.31-4.69l56-56a16,16,0,0,0,0-22.62L145,122.34l71-71,18.34,18.35a8,8,0,0,0,11.32-11.32ZM168,168l-56,56H32V144L88,88l34.34,34.34-40,40a8,8,0,0,0,11.32,11.32l40-40Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M248.49,55.51l-48-48a12,12,0,0,0-17,17L199,40l-65.37,65.37L102.14,73.86a20,20,0,0,0-28.28,0l-56,56A19.9,19.9,0,0,0,12,144v80a20,20,0,0,0,20,20h80a19.86,19.86,0,0,0,14.14-5.86l56-56a20,20,0,0,0,0-28.28l-31.51-31.52L216,57l15.51,15.52a12,12,0,1,0,17-17ZM162.34,168l-52,52H36V145.66l52-52,28.69,28.68L79.51,159.51a12,12,0,0,0,17,17l37.17-37.18Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M245.66,69.66a8,8,0,0,1-11.32,0L216,51.31l-71,71L133.66,111l71-71L186.34,21.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,245.66,69.66ZM88,176a8,8,0,0,1-5.66-13.66L133.66,111,99.31,76.68a16,16,0,0,0-22.62,0l-56,56A15.89,15.89,0,0,0,16,144v80a16,16,0,0,0,16,16h80a15.86,15.86,0,0,0,11.31-4.69l56-56a16,16,0,0,0,0-22.62L145,122.34,93.66,173.66A8,8,0,0,1,88,176Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M173.66,173.66l-56,56A8,8,0,0,1,112,232H32a8,8,0,0,1-8-8V144a8,8,0,0,1,2.34-5.66l56-56a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,173.66,173.66Z" opacity="0.2"/><path d="M245.66,58.34l-48-48a8,8,0,0,0-11.32,11.32L204.69,40l-71,71L99.31,76.68a16,16,0,0,0-22.62,0l-56,56A15.89,15.89,0,0,0,16,144v80a16,16,0,0,0,16,16h80a15.86,15.86,0,0,0,11.31-4.69l56-56a16,16,0,0,0,0-22.62L145,122.34l71-71,18.34,18.35a8,8,0,0,0,11.32-11.32ZM168,168l-56,56H32V144L88,88l34.34,34.34-40,40a8,8,0,0,0,11.32,11.32l40-40Z"/>`,
    ],
  ]);

  @property({ type: String })
  size: string | number = "1em";

  @property({ type: String })
  weight: IconWeight = "regular";

  @property({ type: String })
  color: string = "currentColor";

  @property({ type: Boolean })
  mirrored: boolean = false;

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
      ${PhShovel.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhShovel };
