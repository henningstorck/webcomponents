/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { IconWeight } from "../types";

@customElement("ph-club")
export default class PhClub extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M184,92a52.88,52.88,0,0,0-8.26.65,52,52,0,1,0-95.48,0A52.88,52.88,0,0,0,72,92a52,52,0,1,0,31.38,93.48L92.17,222.85A4,4,0,0,0,96,228h64a4,4,0,0,0,3.83-5.15l-11.21-37.37A52,52,0,1,0,184,92Zm0,96a43.92,43.92,0,0,1-36.73-19.77,4,4,0,0,0-7.17,3.36L154.62,220H101.38l14.52-48.41a4,4,0,0,0-7.17-3.36,44,44,0,1,1-21.91-65.67,4,4,0,0,0,4.66-6,44,44,0,1,1,73,0,4,4,0,0,0,4.66,6A44,44,0,1,1,184,188Z"/>`,
    ],
    [
      "light",
      svg`<path d="M184,90q-2.59,0-5.16.24a54,54,0,1,0-101.69,0C75.45,90.08,73.73,90,72,90A54,54,0,1,0,99.85,190.28l-9.6,32A6,6,0,0,0,96,230h64a6,6,0,0,0,5.75-7.72l-9.6-32A54,54,0,1,0,184,90Zm0,96a41.92,41.92,0,0,1-35.06-18.87,6,6,0,0,0-10.76,5L151.94,218H104.06l13.76-45.84a6,6,0,0,0-10.76-5,42,42,0,1,1-20.91-62.69,6,6,0,0,0,7-9,42,42,0,1,1,69.72,0,6,6,0,0,0,7,9A42,42,0,1,1,184,186Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M184,88c-.78,0-1.56,0-2.33,0a56,56,0,1,0-107.34,0c-.78,0-1.55,0-2.33,0A56,56,0,1,0,96.54,194.35l-8.2,27.35A8,8,0,0,0,96,232h64a8,8,0,0,0,7.66-10.3l-8.2-27.35A56,56,0,1,0,184,88Zm0,96a40,40,0,0,1-33.4-18,8,8,0,0,0-14.33,6.71l13,43.26h-42.5l13-43.26A8,8,0,0,0,105.4,166a40,40,0,1,1-19.93-59.71,8,8,0,0,0,9.33-12,40,40,0,1,1,66.4,0,8,8,0,0,0,9.33,12A40,40,0,1,1,184,184Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M186.79,84.06a60,60,0,1,0-117.58,0,60,60,0,1,0,19,117.73l-4,19.86A12,12,0,0,0,96,236h64a12,12,0,0,0,11.77-14.35l-4-19.86a60,60,0,1,0,19-117.73ZM184,180a35.88,35.88,0,0,1-24.78-9.88,12,12,0,0,0-20,11.06L145.36,212H110.64l6.16-30.82a12,12,0,0,0-20-11.06,36,36,0,1,1-12.65-60,12,12,0,0,0,14-18A35.68,35.68,0,0,1,92,72a36,36,0,1,1,65.88,20.08,12,12,0,0,0,14,18A36,36,0,1,1,184,180Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M240,144a56,56,0,0,1-84.81,48h-4.44l8.91,29.7A8,8,0,0,1,152,232H104a8,8,0,0,1-7.66-10.3l8.91-29.7h-4.44A56,56,0,1,1,72,88c.78,0,1.55,0,2.33,0a56,56,0,1,1,107.34,0c.77,0,1.55,0,2.33,0A56.06,56.06,0,0,1,240,144Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M232,144a48,48,0,0,1-88.07,26.44L160,224H96l16.07-53.56a48,48,0,1,1-23.9-71.65,48,48,0,1,1,79.66,0A48,48,0,0,1,232,144Z" opacity="0.2"/><path d="M184,88c-.78,0-1.56,0-2.33,0a56,56,0,1,0-107.34,0c-.78,0-1.55,0-2.33,0A56,56,0,1,0,96.54,194.35l-8.2,27.35A8,8,0,0,0,96,232h64a8,8,0,0,0,7.66-10.3l-8.2-27.35A56,56,0,1,0,184,88Zm0,96a40,40,0,0,1-33.4-18,8,8,0,0,0-14.33,6.71l13,43.26h-42.5l13-43.26A8,8,0,0,0,105.4,166a40,40,0,1,1-19.93-59.71,8,8,0,0,0,9.33-12,40,40,0,1,1,66.4,0,8,8,0,0,0,9.33,12A40,40,0,1,1,184,184Z"/>`,
    ],
  ]);

  @property({ type: String })
  size: string | number = "1em";

  @property({ type: String })
  weight: IconWeight = "regular";

  @property({ type: String })
  color: string = "regular";

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
      ${PhClub.weightsMap.get(this.weight)}
    </svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-club": PhClub;
  }
}
