/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-high-definition": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-high-definition": IconAttrs;
    }
  }
}

@customElement("ph-high-definition")
class PhHighDefinition extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M176,76H152a4,4,0,0,0-4,4v96a4,4,0,0,0,4,4h24a52,52,0,0,0,0-104Zm0,96H156V84h20a44,44,0,0,1,0,88Zm-60,4V132H52v44a4,4,0,0,1-8,0V80a4,4,0,0,1,8,0v44h64V80a4,4,0,0,1,8,0v96a4,4,0,0,1-8,0ZM28,48a4,4,0,0,1,4-4H224a4,4,0,0,1,0,8H32A4,4,0,0,1,28,48ZM228,208a4,4,0,0,1-4,4H32a4,4,0,0,1,0-8H224A4,4,0,0,1,228,208Z"/>`,
    ],
    [
      "light",
      svg`<path d="M176,74H152a6,6,0,0,0-6,6v96a6,6,0,0,0,6,6h24a54,54,0,0,0,0-108Zm0,96H158V86h18a42,42,0,0,1,0,84Zm-62,6V134H54v42a6,6,0,0,1-12,0V80a6,6,0,0,1,12,0v42h60V80a6,6,0,0,1,12,0v96a6,6,0,0,1-12,0ZM26,48a6,6,0,0,1,6-6H224a6,6,0,0,1,0,12H32A6,6,0,0,1,26,48ZM230,208a6,6,0,0,1-6,6H32a6,6,0,0,1,0-12H224A6,6,0,0,1,230,208Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M176,72H152a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8h24a56,56,0,0,0,0-112Zm0,96H160V88h16a40,40,0,0,1,0,80Zm-64,8V136H56v40a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0v40h56V80a8,8,0,0,1,16,0v96a8,8,0,0,1-16,0ZM24,48a8,8,0,0,1,8-8H224a8,8,0,0,1,0,16H32A8,8,0,0,1,24,48ZM232,208a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M180,68H156a12,12,0,0,0-12,12v96a12,12,0,0,0,12,12h24a60,60,0,0,0,0-120Zm0,96H168V92h12a36,36,0,0,1,0,72Zm-76,12V140H56v36a12,12,0,0,1-24,0V80a12,12,0,0,1,24,0v36h48V80a12,12,0,0,1,24,0v96a12,12,0,0,1-24,0ZM20,44A12,12,0,0,1,32,32H224a12,12,0,0,1,0,24H32A12,12,0,0,1,20,44ZM236,212a12,12,0,0,1-12,12H32a12,12,0,0,1,0-24H224A12,12,0,0,1,236,212Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M196,128a32,32,0,0,1-32,32H152V96h12A32,32,0,0,1,196,128Zm36-72V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM120,88a8,8,0,0,0-16,0v32H64V88a8,8,0,0,0-16,0v80a8,8,0,0,0,16,0V136h40v32a8,8,0,0,0,16,0Zm92,40a48.05,48.05,0,0,0-48-48H144a8,8,0,0,0-8,8v80a8,8,0,0,0,8,8h20A48.05,48.05,0,0,0,212,128Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M224,48V208H32V48Z" opacity="0.2"/><path d="M176,72H152a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8h24a56,56,0,0,0,0-112Zm0,96H160V88h16a40,40,0,0,1,0,80Zm-64,8V136H56v40a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0v40h56V80a8,8,0,0,1,16,0v96a8,8,0,0,1-16,0ZM24,48a8,8,0,0,1,8-8H224a8,8,0,0,1,0,16H32A8,8,0,0,1,24,48ZM232,208a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208Z"/>`,
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
      ${PhHighDefinition.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhHighDefinition };
