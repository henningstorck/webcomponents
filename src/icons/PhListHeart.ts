/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-list-heart": PhListHeart;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-list-heart": PhListHeart;
    }
  }
}

@customElement("ph-list-heart")
class PhListHeart extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm4,68h64a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8Zm80,56H40a4,4,0,0,0,0,8h80a4,4,0,0,0,0-8Zm124-44c0,14.51-8.56,29-25.44,43.07a143.52,143.52,0,0,1-24.77,16.51,4,4,0,0,1-3.58,0,143.52,143.52,0,0,1-24.77-16.51C148.56,173,140,158.51,140,144a28,28,0,0,1,52-14.41A28,28,0,0,1,244,144Zm-8,0a20,20,0,0,0-40,0,4,4,0,0,1-8,0,20,20,0,0,0-40,0c0,25.8,35.54,46.83,44,51.47C200.46,190.83,236,169.8,236,144Z"/>`,
    ],
    [
      "light",
      svg`<path d="M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64Zm6,70h64a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12Zm80,52H40a6,6,0,0,0,0,12h80a6,6,0,0,0,0-12Zm126-42c0,35.3-49.22,60.32-51.32,61.37a6,6,0,0,1-5.36,0C187.22,204.32,138,179.3,138,144a30,30,0,0,1,54-18,30,30,0,0,1,54,18Zm-12,0a18,18,0,0,0-36,0,6,6,0,0,1-12,0,18,18,0,0,0-36,0c0,14.15,11.78,27,21.67,35.25A138.82,138.82,0,0,0,192,193.19a138,138,0,0,0,20.33-13.94C222.22,171,234,158.15,234,144Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72h64a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm80,48H40a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16Zm128-40c0,36.52-50.28,62.08-52.42,63.16a8,8,0,0,1-7.16,0C186.28,206.08,136,180.52,136,144a32,32,0,0,1,56-21.14A32,32,0,0,1,248,144Zm-16,0a16,16,0,0,0-32,0,8,8,0,0,1-16,0,16,16,0,0,0-32,0c0,20.18,26.21,39.14,40,46.93C205.79,183.15,232,164.19,232,144Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M124,192a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24h72A12,12,0,0,1,124,192ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24Zm0,64H96a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24Zm212,4c0,17-9.53,33.56-28.32,49.22a151.47,151.47,0,0,1-26.31,17.51,12,12,0,0,1-10.74,0,151.47,151.47,0,0,1-26.31-17.51C141.53,177.56,132,161,132,144a36,36,0,0,1,60-26.81A36,36,0,0,1,252,144Zm-24,0a12,12,0,0,0-24,0,12,12,0,0,1-24,0,12,12,0,0,0-24,0c0,17.23,22.85,34.43,36,42.29C205.14,178.44,228,161.23,228,144Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM104,184H64a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16ZM56,128a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H64A8,8,0,0,1,56,128Zm105.79,57.58a4,4,0,0,1-3.58,0C156.65,184.8,120,166.17,120,140a22,22,0,0,1,40-12.64A22,22,0,0,1,200,140C200,166.17,163.35,184.8,161.79,185.58ZM192,88H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M240,144c0,32-48,56-48,56s-48-24-48-56a24,24,0,0,1,48,0,24,24,0,0,1,48,0Z" opacity="0.2"/><path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72h64a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm80,48H40a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16Zm128-40c0,36.52-50.28,62.08-52.42,63.16a8,8,0,0,1-7.16,0C186.28,206.08,136,180.52,136,144a32,32,0,0,1,56-21.14A32,32,0,0,1,248,144Zm-16,0a16,16,0,0,0-32,0,8,8,0,0,1-16,0,16,16,0,0,0-32,0c0,20.18,26.21,39.14,40,46.93C205.79,183.15,232,164.19,232,144Z"/>`,
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
      ${PhListHeart.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhListHeart };
