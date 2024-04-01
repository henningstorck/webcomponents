/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-monitor-play": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-monitor-play": IconAttrs;
    }
  }
}

@customElement("ph-monitor-play")
class PhMonitorPlay extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M162.22,116.67l-48-32A4,4,0,0,0,108,88v64a4,4,0,0,0,2.11,3.53,4,4,0,0,0,4.11-.2l48-32a4,4,0,0,0,0-6.66ZM116,144.53V95.47L152.79,120ZM208,44H48A20,20,0,0,0,28,64V176a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V64A20,20,0,0,0,208,44Zm12,132a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V64A12,12,0,0,1,48,52H208a12,12,0,0,1,12,12Zm-56,48a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,224Z"/>`,
    ],
    [
      "light",
      svg`<path d="M163.33,115l-48-32A6,6,0,0,0,106,88v64a6,6,0,0,0,9.33,5l48-32a6,6,0,0,0,0-10ZM118,140.79V99.21L149.18,120ZM208,42H48A22,22,0,0,0,26,64V176a22,22,0,0,0,22,22H208a22,22,0,0,0,22-22V64A22,22,0,0,0,208,42Zm10,134a10,10,0,0,1-10,10H48a10,10,0,0,1-10-10V64A10,10,0,0,1,48,54H208a10,10,0,0,1,10,10Zm-52,48a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,224Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Zm-48,48a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224Zm-3.56-110.66-48-32A8,8,0,0,0,104,88v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,137.05V103l25.58,17Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M168,120a12,12,0,0,1-5.12,9.83l-40,28A12,12,0,0,1,104,148V92a12,12,0,0,1,18.88-9.83l40,28A12,12,0,0,1,168,120Zm68-56V176a28,28,0,0,1-28,28H48a28,28,0,0,1-28-28V64A28,28,0,0,1,48,36H208A28,28,0,0,1,236,64Zm-24,0a4,4,0,0,0-4-4H48a4,4,0,0,0-4,4V176a4,4,0,0,0,4,4H208a4,4,0,0,0,4-4ZM160,216H96a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M168,224a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224ZM232,64V176a24,24,0,0,1-24,24H48a24,24,0,0,1-24-24V64A24,24,0,0,1,48,40H208A24,24,0,0,1,232,64Zm-68,56a8,8,0,0,0-3.41-6.55l-40-28A8,8,0,0,0,108,92v56a8,8,0,0,0,12.59,6.55l40-28A8,8,0,0,0,164,120Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M208,48H48A16,16,0,0,0,32,64V176a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V64A16,16,0,0,0,208,48ZM112,152V88l48,32Z" opacity="0.2"/><path d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Zm-48,48a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224Zm-3.56-110.66-48-32A8,8,0,0,0,104,88v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,137.05V103l25.58,17Z"/>`,
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
      ${PhMonitorPlay.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhMonitorPlay };
