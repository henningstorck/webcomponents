/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-currency-krw": PhCurrencyKrw;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-currency-krw": PhCurrencyKrw;
    }
  }
}

@customElement("ph-currency-krw")
class PhCurrencyKrw extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M240,132H211.94l23.77-58.49a4,4,0,1,0-7.42-3l-25,61.51H156.69l-25-61.51a4,4,0,0,0-7.42,0L99.31,132H52.69l-25-61.51a4,4,0,0,0-7.42,3L44.06,132H16a4,4,0,0,0,0,8H47.31l25,61.51a4,4,0,0,0,7.42,0l25-61.51h46.62l25,61.51a4,4,0,0,0,7.42,0l25-61.51H240a4,4,0,0,0,0-8ZM76,189.37,55.94,140H96.06ZM107.94,132,128,82.63,148.06,132ZM180,189.37,159.94,140h40.12Z"/>`,
    ],
    [
      "light",
      svg`<path d="M240,130H214.91l22.65-55.74a6,6,0,0,0-11.12-4.52L202,130H158L133.56,69.74a6,6,0,0,0-11.12,0L98,130H54L29.56,69.74a6,6,0,1,0-11.12,4.52L41.09,130H16a6,6,0,0,0,0,12H46l24.48,60.26a6,6,0,0,0,11.12,0L106,142H150l24.48,60.26a6,6,0,0,0,11.12,0L210,142h30a6,6,0,0,0,0-12ZM76,184.06,58.91,142H93.09ZM110.91,130,128,87.94,145.09,130ZM180,184.06,162.91,142h34.18Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M240,128H217.89l21.52-53a8,8,0,1,0-14.82-6l-24,59H159.38l-24-59a8,8,0,0,0-14.82,0l-24,59H55.38l-24-59a8,8,0,0,0-14.82,6l21.52,53H16a8,8,0,0,0,0,16H44.61l24,59a8,8,0,0,0,14.82,0l24-59h41.24l24,59a8,8,0,0,0,14.82,0l24-59H240a8,8,0,0,0,0-16ZM76,178.75,61.88,144H90.12ZM113.88,128,128,93.26,142.12,128ZM180,178.75,165.88,144h28.24Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M240,124H223.83l19.29-47.48a12,12,0,0,0-22.24-9l-23,56.51H162.08l-23-56.51a12,12,0,0,0-22.24,0L93.92,124H58.08l-23-56.51a12,12,0,0,0-22.24,9L32.17,124H16a12,12,0,0,0,0,24H41.92l23,56.52a12,12,0,0,0,22.24,0l23-56.52h35.84l23,56.52a12,12,0,0,0,22.24,0l23-56.52H240a12,12,0,0,0,0-24ZM76,168.12,67.83,148H84.17ZM119.83,124,128,103.89,136.17,124ZM180,168.12,171.83,148h16.34Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm72,120H181.42l-14,35a8,8,0,0,1-14.86,0L128,117.54,103.43,179a8,8,0,0,1-14.86,0l-14-35H56a8,8,0,0,1,0-16H68.18L56.57,99A8,8,0,1,1,71.43,93L96,154.46,120.57,93a8,8,0,0,1,14.86,0L160,154.46,184.57,93A8,8,0,1,1,199.43,99l-11.61,29H200a8,8,0,0,1,0,16Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M50,136h52L76,200Zm52,0h52L128,72Zm52,0,26,64,26-64Z" opacity="0.2"/><path d="M240,128H217.89l21.52-53a8,8,0,1,0-14.82-6l-24,59H159.38l-24-59a8,8,0,0,0-14.82,0l-24,59H55.38l-24-59a8,8,0,0,0-14.82,6l21.52,53H16a8,8,0,0,0,0,16H44.61l24,59a8,8,0,0,0,14.82,0l24-59h41.24l24,59a8,8,0,0,0,14.82,0l24-59H240a8,8,0,0,0,0-16ZM76,178.75,61.88,144H90.12ZM113.88,128,128,93.26,142.12,128ZM180,178.75,165.88,144h28.24Z"/>`,
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
      ${PhCurrencyKrw.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhCurrencyKrw };
