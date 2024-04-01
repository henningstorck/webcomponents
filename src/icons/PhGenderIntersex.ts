/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-gender-intersex": PhGenderIntersex;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-gender-intersex": PhGenderIntersex;
    }
  }
}

@customElement("ph-gender-intersex")
class PhGenderIntersex extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M208,28H168a4,4,0,0,0,0,8h30.34L163.55,70.79A60,60,0,1,0,116,171.85V196H88a4,4,0,0,0,0,8h28v28a4,4,0,0,0,8,0V204h28a4,4,0,0,0,0-8H124V171.85A59.94,59.94,0,0,0,168.68,77L204,41.66V72a4,4,0,0,0,8,0V32A4,4,0,0,0,208,28ZM120,164a52,52,0,1,1,52-52A52.06,52.06,0,0,1,120,164Z"/>`,
    ],
    [
      "light",
      svg`<path d="M208,26H168a6,6,0,0,0,0,12h25.52l-30,29.94A62,62,0,1,0,114,173.7V194H88a6,6,0,0,0,0,12h26v26a6,6,0,0,0,12,0V206h26a6,6,0,0,0,0-12H126V173.7a62,62,0,0,0,45.28-96.5L202,46.48V72a6,6,0,0,0,12,0V32A6,6,0,0,0,208,26ZM120,162a50,50,0,1,1,50-50A50.06,50.06,0,0,1,120,162Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M208,24H168a8,8,0,0,0,0,16h20.69L163.54,65.15A64,64,0,1,0,112,175.48V192H88a8,8,0,0,0,0,16h24v24a8,8,0,0,0,16,0V208h24a8,8,0,0,0,0-16H128V175.48a63.92,63.92,0,0,0,45.84-98L200,51.31V72a8,8,0,0,0,16,0V32A8,8,0,0,0,208,24ZM120,160a48,48,0,1,1,48-48A48.05,48.05,0,0,1,120,160Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M208,20H168a12,12,0,0,0,0,24h11L163.36,59.67A68,68,0,1,0,108,178.92V192H88a12,12,0,0,0,0,24h20v16a12,12,0,0,0,24,0V216h20a12,12,0,0,0,0-24H132V178.92A67.93,67.93,0,0,0,178.9,78.08L196,61V72a12,12,0,0,0,24,0V32A12,12,0,0,0,208,20ZM120,156a44,44,0,1,1,44-44A44.05,44.05,0,0,1,120,156Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M147.91,113.72a28,28,0,1,1-25.63-25.63A28,28,0,0,1,147.91,113.72ZM216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40ZM188,56a8,8,0,0,0-8-8H152.27A8.17,8.17,0,0,0,144,55.47,8,8,0,0,0,152,64h8.69L144.92,79.77A44,44,0,1,0,112,159.26V176H92.27A8.17,8.17,0,0,0,84,183.47,8,8,0,0,0,92,192h20v15.73a8.18,8.18,0,0,0,7.47,8.25,8,8,0,0,0,8.53-8V192h19.73a8.17,8.17,0,0,0,8.25-7.47,8,8,0,0,0-8-8.53H128V159.26a44,44,0,0,0,28.24-68.18L172,75.31v8.42A8.18,8.18,0,0,0,179.47,92,8,8,0,0,0,188,84Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M176,112a56,56,0,1,1-56-56A56,56,0,0,1,176,112Z" opacity="0.2"/><path d="M208,24H168a8,8,0,0,0,0,16h20.69L163.54,65.15A64,64,0,1,0,112,175.48V192H88a8,8,0,0,0,0,16h24v24a8,8,0,0,0,16,0V208h24a8,8,0,0,0,0-16H128V175.48a63.92,63.92,0,0,0,45.84-98L200,51.31V72a8,8,0,0,0,16,0V32A8,8,0,0,0,208,24ZM120,160a48,48,0,1,1,48-48A48.05,48.05,0,0,1,120,160Z"/>`,
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
      ${PhGenderIntersex.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhGenderIntersex };
