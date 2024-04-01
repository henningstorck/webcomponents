/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-rewind": PhRewind;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-rewind": PhRewind;
    }
  }
}

@customElement("ph-rewind")
class PhRewind extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M221.85,61.48a12,12,0,0,0-12.18.39L124,116.43V71.84a11.66,11.66,0,0,0-6.15-10.36,12,12,0,0,0-12.18.39L17.48,118a11.81,11.81,0,0,0,0,19.94l88.19,56.16a12,12,0,0,0,12.18.39A11.66,11.66,0,0,0,124,184.16V139.57l85.67,54.56a12,12,0,0,0,12.18.39A11.66,11.66,0,0,0,228,184.16V71.84A11.66,11.66,0,0,0,221.85,61.48ZM116,184.16a3.76,3.76,0,0,1-2,3.35,3.91,3.91,0,0,1-4-.13L21.78,131.22a3.8,3.8,0,0,1,0-6.44L110,68.62a3.94,3.94,0,0,1,2.13-.63,4,4,0,0,1,1.91.5,3.76,3.76,0,0,1,2,3.35Zm104,0a3.76,3.76,0,0,1-2,3.35,3.91,3.91,0,0,1-4-.13l-88.18-56.16a3.8,3.8,0,0,1,0-6.44L214,68.62a3.94,3.94,0,0,1,2.13-.63,4,4,0,0,1,1.91.5,3.76,3.76,0,0,1,2,3.35Z"/>`,
    ],
    [
      "light",
      svg`<path d="M222.81,59.72a14,14,0,0,0-14.22.46L126,112.79V71.84a13.83,13.83,0,0,0-7.19-12.12,14,14,0,0,0-14.22.46L16.41,116.35a13.79,13.79,0,0,0,0,23.3l88.18,56.17a14,14,0,0,0,14.22.46A13.83,13.83,0,0,0,126,184.16V143.21l82.59,52.61a14,14,0,0,0,14.22.46A13.83,13.83,0,0,0,230,184.16V71.84A13.83,13.83,0,0,0,222.81,59.72ZM114,184.16a1.73,1.73,0,0,1-1,1.59,1.9,1.9,0,0,1-2-.06L22.85,129.53a1.8,1.8,0,0,1,0-3.06L111,70.31a1.87,1.87,0,0,1,1-.32,2,2,0,0,1,1,.26,1.73,1.73,0,0,1,1,1.59Zm104,0a1.73,1.73,0,0,1-1,1.59,1.9,1.9,0,0,1-2-.06l-88.19-56.16a1.8,1.8,0,0,1,0-3.06L215,70.31a1.87,1.87,0,0,1,1-.32,2,2,0,0,1,1,.26,1.73,1.73,0,0,1,1,1.59Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M223.77,58a16,16,0,0,0-16.25.53L128,109.14V71.84A15.91,15.91,0,0,0,103.52,58.5L15.33,114.66a15.8,15.8,0,0,0,0,26.68l88.19,56.16A15.91,15.91,0,0,0,128,184.16v-37.3l79.52,50.64A15.91,15.91,0,0,0,232,184.16V71.84A15.83,15.83,0,0,0,223.77,58ZM112,183.93,24.18,128,112,72.06Zm104,0L128.18,128,216,72.06Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M225.7,54.46a20,20,0,0,0-20.33.66L132,101.85v-30a19.91,19.91,0,0,0-30.63-16.72L13.19,111.29a19.79,19.79,0,0,0,0,33.42l88.18,56.17A19.91,19.91,0,0,0,132,184.16v-30l73.37,46.73A19.91,19.91,0,0,0,236,184.16V71.84A19.84,19.84,0,0,0,225.7,54.46ZM108,176.64,31.63,128,108,79.36Zm104,0L135.63,128,212,79.36Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M232,71.84V184.16a15.92,15.92,0,0,1-24.48,13.34L128,146.86v37.3a15.92,15.92,0,0,1-24.48,13.34L15.33,141.34a15.8,15.8,0,0,1,0-26.68L103.52,58.5A15.91,15.91,0,0,1,128,71.84v37.3L207.52,58.5A15.91,15.91,0,0,1,232,71.84Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M224,71.85v112.3a7.91,7.91,0,0,1-12.18,6.59l-88.19-56.15a7.8,7.8,0,0,1,0-13.18l88.19-56.15A7.91,7.91,0,0,1,224,71.85ZM107.82,65.26,19.63,121.41a7.8,7.8,0,0,0,0,13.18l88.19,56.15A7.91,7.91,0,0,0,120,184.15V71.85A7.91,7.91,0,0,0,107.82,65.26Z" opacity="0.2"/><path d="M223.77,58a16,16,0,0,0-16.25.53L128,109.14V71.84A15.91,15.91,0,0,0,103.52,58.5L15.33,114.66a15.8,15.8,0,0,0,0,26.68l88.19,56.16A15.91,15.91,0,0,0,128,184.16v-37.3l79.52,50.64A15.91,15.91,0,0,0,232,184.16V71.84A15.83,15.83,0,0,0,223.77,58ZM112,183.93,24.18,128,112,72.06Zm104,0L128.18,128,216,72.06Z"/>`,
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
      ${PhRewind.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhRewind };
