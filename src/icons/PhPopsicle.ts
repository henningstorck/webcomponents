/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-popsicle": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-popsicle": IconAttrs;
    }
  }
}

@customElement("ph-popsicle")
class PhPopsicle extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M128,12A68.07,68.07,0,0,0,60,80v96a12,12,0,0,0,12,12h36v44a20,20,0,0,0,40,0V188h36a12,12,0,0,0,12-12V80A68.07,68.07,0,0,0,128,12Zm12,220a12,12,0,0,1-24,0V188h24Zm48-56a4,4,0,0,1-4,4H72a4,4,0,0,1-4-4V80a60,60,0,0,1,120,0ZM116,72v80a4,4,0,0,1-8,0V72a4,4,0,0,1,8,0Zm32,0v80a4,4,0,0,1-8,0V72a4,4,0,0,1,8,0Z"/>`,
    ],
    [
      "light",
      svg`<path d="M128,10A70.08,70.08,0,0,0,58,80v96a14,14,0,0,0,14,14h34v42a22,22,0,0,0,44,0V190h34a14,14,0,0,0,14-14V80A70.08,70.08,0,0,0,128,10Zm10,222a10,10,0,0,1-20,0V190h20Zm48-56a2,2,0,0,1-2,2H72a2,2,0,0,1-2-2V80a58,58,0,0,1,116,0ZM118,72v80a6,6,0,0,1-12,0V72a6,6,0,0,1,12,0Zm32,0v80a6,6,0,0,1-12,0V72a6,6,0,0,1,12,0Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M128,8A72.08,72.08,0,0,0,56,80v96a16,16,0,0,0,16,16h32v40a24,24,0,0,0,48,0V192h32a16,16,0,0,0,16-16V80A72.08,72.08,0,0,0,128,8Zm8,224a8,8,0,0,1-16,0V192h16Zm48-56H72V80a56,56,0,0,1,112,0v96ZM120,72v80a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Zm32,0v80a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M128,4A76.08,76.08,0,0,0,52,80v96a20,20,0,0,0,20,20H96v28a32,32,0,0,0,64,0V196h24a20,20,0,0,0,20-20V80A76.08,76.08,0,0,0,128,4Zm8,220a8,8,0,0,1-16,0V196h16Zm44-52H76V80a52,52,0,0,1,104,0ZM120,76v68a12,12,0,0,1-24,0V76a12,12,0,0,1,24,0Zm40,0v68a12,12,0,0,1-24,0V76a12,12,0,0,1,24,0Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M128,8A72.08,72.08,0,0,0,56,80v96a16,16,0,0,0,16,16h32v40a24,24,0,0,0,48,0V192h32a16,16,0,0,0,16-16V80A72.08,72.08,0,0,0,128,8ZM112,152a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Zm24,80a8,8,0,0,1-16,0V192h16Zm24-80a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M192,80v96a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8V80a64,64,0,0,1,64-64h0A64,64,0,0,1,192,80Z" opacity="0.2"/><path d="M128,8A72.08,72.08,0,0,0,56,80v96a16,16,0,0,0,16,16h32v40a24,24,0,0,0,48,0V192h32a16,16,0,0,0,16-16V80A72.08,72.08,0,0,0,128,8Zm8,224a8,8,0,0,1-16,0V192h16Zm48-56H72V80a56,56,0,0,1,112,0v96ZM120,72v80a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Zm32,0v80a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Z"/>`,
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
      ${PhPopsicle.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhPopsicle };
