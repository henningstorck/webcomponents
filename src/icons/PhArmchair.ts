/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-armchair": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-armchair": IconAttrs;
    }
  }
}

@customElement("ph-armchair")
class PhArmchair extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M212,92.23V72a36,36,0,0,0-36-36H80A36,36,0,0,0,44,72V92.23a36,36,0,0,0,0,71.55V200a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V163.78a36,36,0,0,0,0-71.55ZM80,44h96a28,28,0,0,1,28,28V92.23A36,36,0,0,0,172,128v4H84v-4A36,36,0,0,0,52,92.23V72A28,28,0,0,1,80,44ZM208.3,156H208a4,4,0,0,0-4,4v40a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V160h0a4,4,0,0,0-4-4h-.3A28,28,0,1,1,76,128v40a4,4,0,0,0,8,0V140h88v28a4,4,0,0,0,8,0V128a28,28,0,1,1,28.3,28Z"/>`,
    ],
    [
      "light",
      svg`<path d="M214,90.48V72a38,38,0,0,0-38-38H80A38,38,0,0,0,42,72V90.48a38,38,0,0,0,0,75.05V200a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V165.53a38,38,0,0,0,0-75ZM80,46h96a26,26,0,0,1,26,26V90.48A38.05,38.05,0,0,0,170,128v2H86v-2A38.05,38.05,0,0,0,54,90.48V72A26,26,0,0,1,80,46ZM208.35,154H208a6,6,0,0,0-6,6v40a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V160h0a6,6,0,0,0-6-6h-.35A26,26,0,1,1,74,128v40a6,6,0,0,0,12,0V142h84v26a6,6,0,0,0,12,0V128a26,26,0,1,1,26.35,26Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M216,88.8V72a40,40,0,0,0-40-40H80A40,40,0,0,0,40,72V88.8a40,40,0,0,0,0,78.4V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V167.2a40,40,0,0,0,0-78.4ZM80,48h96a24,24,0,0,1,24,24V88.8A40.07,40.07,0,0,0,168,128H88A40.07,40.07,0,0,0,56,88.8V72A24,24,0,0,1,80,48ZM208.39,152H208a8,8,0,0,0-8,8v40H56V160a8,8,0,0,0-8-8h-.39A24,24,0,1,1,72,128v40a8,8,0,0,0,16,0V144h80v24a8,8,0,0,0,16,0V128a24,24,0,1,1,24.39,24Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M220,78.53V72a44.05,44.05,0,0,0-44-44H80A44.05,44.05,0,0,0,36,72v6.53a52,52,0,0,0,0,99V200a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V177.51a52,52,0,0,0,0-99ZM80,52h96a20,20,0,0,1,20,20v4.62A52.09,52.09,0,0,0,152.17,124H103.83A52.09,52.09,0,0,0,60,76.62V72A20,20,0,0,1,80,52ZM206.81,155.86A12,12,0,0,0,196,167.8V196H60V167.8a12,12,0,0,0-10.81-11.94A28,28,0,1,1,80,128v36a12,12,0,0,0,24,0V148h48v16a12,12,0,0,0,24,0V128a28,28,0,1,1,30.81,27.86Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M240,132a28,28,0,0,1-24,27.71V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V159.71A28,28,0,1,1,72,132v36a8,8,0,0,0,16,0V144h80v24a8,8,0,0,0,16,0V132a28,28,0,0,1,56,0ZM44,88a44.06,44.06,0,0,1,43.81,40h80.38A44.06,44.06,0,0,1,212,88a4,4,0,0,0,4-4V72a40,40,0,0,0-40-40H80A40,40,0,0,0,40,72V84A4,4,0,0,0,44,88Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M240,128a32,32,0,0,1-32,32v40a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V160a32,32,0,0,1,0-64V72A32,32,0,0,1,80,40h96a32,32,0,0,1,32,32V96A32,32,0,0,1,240,128Z" opacity="0.2"/><path d="M216,88.8V72a40,40,0,0,0-40-40H80A40,40,0,0,0,40,72V88.8a40,40,0,0,0,0,78.4V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V167.2a40,40,0,0,0,0-78.4ZM80,48h96a24,24,0,0,1,24,24V88.8A40.07,40.07,0,0,0,168,128H88A40.07,40.07,0,0,0,56,88.8V72A24,24,0,0,1,80,48ZM208.39,152H208a8,8,0,0,0-8,8v40H56V160a8,8,0,0,0-8-8h-.39A24,24,0,1,1,72,128v40a8,8,0,0,0,16,0V144h80v24a8,8,0,0,0,16,0V128a24,24,0,1,1,24.39,24Z"/>`,
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
      ${PhArmchair.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhArmchair };
