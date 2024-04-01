/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-ice-cream": PhIceCream;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-ice-cream": PhIceCream;
    }
  }
}

@customElement("ph-ice-cream")
class PhIceCream extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M204,100.4V96A76,76,0,0,0,52,96v4.4A20,20,0,0,0,56,140h5.61l56,97.95a12,12,0,0,0,20.84,0l56-97.95H200a20,20,0,0,0,4-39.6ZM131.47,234a4,4,0,0,1-6.94,0L70.82,140H99.39l42.9,75.06Zm5.64-94,24,42.06L146.89,207l-38.28-67Zm28.64,34-19.43-34h38.86ZM200,132H56a12,12,0,0,1,0-24,4,4,0,0,0,4-4V96a68,68,0,0,1,136,0v8a4,4,0,0,0,4,4,12,12,0,0,1,0,24Z"/>`,
    ],
    [
      "light",
      svg`<path d="M206,98.83V96A78,78,0,0,0,50,96v2.83A22,22,0,0,0,56,142h4.45L115.84,239a14,14,0,0,0,24.32,0L195.55,142H200a22,22,0,0,0,6-43.17ZM129.74,233a2,2,0,0,1-3.48,0l-52-91h24L140,215.06ZM136,142l22.89,40.06-12,20.91-34.84-61Zm29.8,28-16-28h32ZM200,130H56a10,10,0,0,1,0-20,6,6,0,0,0,6-6V96a66,66,0,0,1,132,0v8a6,6,0,0,0,6,6,10,10,0,0,1,0,20Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M208,97.37V96A80,80,0,0,0,48,96v1.37A24,24,0,0,0,56,144h3.29l54.82,95.94a16,16,0,0,0,27.78,0L196.71,144H200a24,24,0,0,0,8-46.63ZM77.71,144H97.07l40.61,71.06L128,232Zm57.08,0,21.75,38.06-9.65,16.88L115.5,144Zm31,21.94L153.21,144h25.08ZM200,128H56a8,8,0,0,1,0-16,8,8,0,0,0,8-8V96a64,64,0,0,1,128,0v8a8,8,0,0,0,8,8,8,8,0,0,1,0,16Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M228,116a32.14,32.14,0,0,0-16.37-27.92,84,84,0,0,0-167.26,0,32,32,0,0,0,12.51,59.77l53.75,94.07a20,20,0,0,0,34.74,0l53.75-94.07A32,32,0,0,0,228,116ZM58.39,108.16A12,12,0,0,0,68,96.4V96a60,60,0,0,1,120,0v.4a12,12,0,0,0,9.61,11.76A8,8,0,0,1,196,124H60a8,8,0,0,1-1.61-15.84Zm113,39.84-16.5,28.88L138.39,148Zm-86.78,0h26.14l30.32,53.06L128,223.94Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M208,97.37V96A80,80,0,0,0,48,96v1.37A24,24,0,0,0,56,144h3.29l54.82,95.94a16,16,0,0,0,27.78,0L196.71,144H200a24,24,0,0,0,8-46.63ZM146.89,198.94,115.5,144h19.29l21.75,38.06ZM77.71,144H97.07l40.61,71.06L128,232Zm88,21.94L153.21,144h25.08Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M216,120a16,16,0,0,1-16,16H56a16,16,0,0,1,0-32V96a72,72,0,0,1,144,0v8A16,16,0,0,1,216,120Z" opacity="0.2"/><path d="M208,97.37V96A80,80,0,0,0,48,96v1.37A24,24,0,0,0,56,144h3.29l54.82,95.94a16,16,0,0,0,27.78,0L196.71,144H200a24,24,0,0,0,8-46.63ZM77.71,144H97.07l40.61,71.06L128,232Zm57.08,0,21.75,38.06-9.65,16.88L115.5,144Zm31,21.94L153.21,144h25.08ZM200,128H56a8,8,0,0,1,0-16,8,8,0,0,0,8-8V96a64,64,0,0,1,128,0v8a8,8,0,0,0,8,8,8,8,0,0,1,0,16Z"/>`,
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
      ${PhIceCream.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhIceCream };
