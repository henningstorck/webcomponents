/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { IconWeight } from "../types";

@customElement("ph-rss")
export default class PhRss extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M96.08,159.92A67.52,67.52,0,0,1,116,208a4,4,0,0,1-8,0,60,60,0,0,0-60-60,4,4,0,0,1,0-8A67.52,67.52,0,0,1,96.08,159.92ZM48,92a4,4,0,0,0,0,8A108,108,0,0,1,156,208a4,4,0,0,0,8,0A116,116,0,0,0,48,92Zm116,0A162.92,162.92,0,0,0,48,44a4,4,0,0,0,0,8A155,155,0,0,1,158.31,97.69,155,155,0,0,1,204,208a4,4,0,0,0,8,0A162.92,162.92,0,0,0,164,92ZM52,196a8,8,0,1,0,8,8A8,8,0,0,0,52,196Z"/>`,
    ],
    [
      "light",
      svg`<path d="M97.5,158.5A69.54,69.54,0,0,1,118,208a6,6,0,0,1-12,0,58,58,0,0,0-58-58,6,6,0,0,1,0-12A69.54,69.54,0,0,1,97.5,158.5ZM48,90a6,6,0,0,0,0,12A106,106,0,0,1,154,208a6,6,0,0,0,12,0A118,118,0,0,0,48,90Zm117.38.62A164.92,164.92,0,0,0,48,42a6,6,0,0,0,0,12A153,153,0,0,1,156.89,99.11,153,153,0,0,1,202,208a6,6,0,0,0,12,0A164.92,164.92,0,0,0,165.38,90.62ZM52,194a10,10,0,1,0,10,10A10,10,0,0,0,52,194Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M98.91,157.09A71.53,71.53,0,0,1,120,208a8,8,0,0,1-16,0,56,56,0,0,0-56-56,8,8,0,0,1,0-16A71.53,71.53,0,0,1,98.91,157.09ZM48,88a8,8,0,0,0,0,16A104,104,0,0,1,152,208a8,8,0,0,0,16,0A120,120,0,0,0,48,88Zm118.79,1.21A166.9,166.9,0,0,0,48,40a8,8,0,0,0,0,16,151,151,0,0,1,107.48,44.52A151,151,0,0,1,200,208a8,8,0,0,0,16,0A166.9,166.9,0,0,0,166.79,89.21ZM52,192a12,12,0,1,0,12,12A12,12,0,0,0,52,192Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M101.74,154.26A75.53,75.53,0,0,1,124,208a12,12,0,0,1-24,0,52,52,0,0,0-52-52,12,12,0,0,1,0-24A75.51,75.51,0,0,1,101.74,154.26ZM48,84a12,12,0,0,0,0,24A100,100,0,0,1,148,208a12,12,0,0,0,24,0A124,124,0,0,0,48,84Zm121.62,2.38A170.85,170.85,0,0,0,48,36a12,12,0,0,0,0,24,147,147,0,0,1,104.65,43.35A147,147,0,0,1,196,208a12,12,0,0,0,24,0A170.85,170.85,0,0,0,169.62,86.38ZM52,188a16,16,0,1,0,16,16A16,16,0,0,0,52,188Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM76,192a12,12,0,1,1,12-12A12,12,0,0,1,76,192Zm44,0a8,8,0,0,1-8-8,40,40,0,0,0-40-40,8,8,0,0,1,0-16,56.06,56.06,0,0,1,56,56A8,8,0,0,1,120,192Zm32,0a8,8,0,0,1-8-8,72.08,72.08,0,0,0-72-72,8,8,0,0,1,0-16,88.1,88.1,0,0,1,88,88A8,8,0,0,1,152,192Zm32,0a8,8,0,0,1-8-8A104.11,104.11,0,0,0,72,80a8,8,0,0,1,0-16A120.13,120.13,0,0,1,192,184,8,8,0,0,1,184,192Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M208,208H48V48A160,160,0,0,1,208,208Z" opacity="0.2"/><path d="M98.91,157.09A71.53,71.53,0,0,1,120,208a8,8,0,0,1-16,0,56,56,0,0,0-56-56,8,8,0,0,1,0-16A71.53,71.53,0,0,1,98.91,157.09ZM48,88a8,8,0,0,0,0,16A104,104,0,0,1,152,208a8,8,0,0,0,16,0A120,120,0,0,0,48,88Zm118.79,1.21A166.89,166.89,0,0,0,48,40a8,8,0,0,0,0,16,151,151,0,0,1,107.48,44.52A151,151,0,0,1,200,208a8,8,0,0,0,16,0A166.9,166.9,0,0,0,166.79,89.21ZM52,192a12,12,0,1,0,12,12A12,12,0,0,0,52,192Z"/>`,
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
      ${PhRss.weightsMap.get(this.weight)}
    </svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-rss": PhRss;
  }
}
