/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-currency-ngn": PhCurrencyNgn;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-currency-ngn": PhCurrencyNgn;
    }
  }
}

@customElement("ph-currency-ngn")
class PhCurrencyNgn extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M216,140H196V116h20a4,4,0,0,0,0-8H196V46a4,4,0,0,0-8,0v62H117.46L67.15,43.54A4,4,0,0,0,60,46v62H40a4,4,0,0,0,0,8H60v24H40a4,4,0,0,0,0,8H60v62a4,4,0,0,0,8,0V148h70.54l50.31,64.46A4,4,0,0,0,192,214a3.9,3.9,0,0,0,1.3-.22A4,4,0,0,0,196,210V148h20a4,4,0,0,0,0-8Zm-28-24v24H142.44l-18.73-24ZM68,57.63,107.32,108H68ZM68,140V116h45.56l18.73,24Zm120,58.37L148.68,148H188Z"/>`,
    ],
    [
      "light",
      svg`<path d="M216,138H198V118h18a6,6,0,0,0,0-12H198V46a6,6,0,0,0-12,0v60H118.44L68.73,42.31A6,6,0,0,0,58,46v60H40a6,6,0,0,0,0,12H58v20H40a6,6,0,0,0,0,12H58v60a6,6,0,0,0,12,0V150h67.56l49.71,63.69A6,6,0,0,0,198,210V150h18a6,6,0,0,0,0-12Zm-30-20v20H143.42l-15.61-20ZM70,63.44,103.22,106H70ZM70,138V118h42.58l15.61,20Zm116,54.56L152.78,150H186Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M216,136H200V120h16a8,8,0,0,0,0-16H200V46a8,8,0,0,0-16,0v58H119.42L70.31,41.08A8,8,0,0,0,56,46v58H40a8,8,0,0,0,0,16H56v16H40a8,8,0,0,0,0,16H56v58a8,8,0,0,0,16,0V152h64.58l49.11,62.92A8,8,0,0,0,192,218a7.8,7.8,0,0,0,2.6-.44A8,8,0,0,0,200,210V152h16a8,8,0,0,0,0-16Zm-32-16v16H144.39L131.9,120ZM72,69.25,99.12,104H72ZM72,136V120h39.61l12.49,16Zm112,50.75L156.88,152H184Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M216,116H204V46a12,12,0,0,0-24,0v70H133.86L73.46,38.62A12,12,0,0,0,52,46v70H40a12,12,0,0,0,0,24H52v70a12,12,0,0,0,24,0V140h46.14l60.4,77.38A12,12,0,0,0,204,210V140h12a12,12,0,0,0,0-24ZM76,116V80.88L103.41,116Zm104,59.12L152.59,140H180Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M143.55,136H160v23ZM96,120h16.45L96,97Zm136,8A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-32,0a8,8,0,0,0-8-8H176V72a8,8,0,0,0-16,0v48H132.12L94.51,67.35A8,8,0,0,0,80,72v48H64a8,8,0,0,0,0,16H80v48a8,8,0,0,0,16,0V136h27.88l37.61,52.65A8,8,0,0,0,168,192a7.91,7.91,0,0,0,2.44-.38A8,8,0,0,0,176,184V136h16A8,8,0,0,0,200,128Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M192,112v98l-51.51-66H64V46l51.51,66Z" opacity="0.2"/><path d="M216,136H200V120h16a8,8,0,0,0,0-16H200V46a8,8,0,0,0-16,0v58H119.42L70.31,41.08A8,8,0,0,0,56,46v58H40a8,8,0,0,0,0,16H56v16H40a8,8,0,0,0,0,16H56v58a8,8,0,0,0,16,0V152h64.58l49.11,62.92A8,8,0,0,0,192,218a7.8,7.8,0,0,0,2.6-.44A8,8,0,0,0,200,210V152h16a8,8,0,0,0,0-16Zm-32-16v16H144.39L131.9,120ZM72,69.25,99.12,104H72ZM72,136V120h39.61l12.49,16Zm112,50.75L156.88,152H184Z"/>`,
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
      ${PhCurrencyNgn.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhCurrencyNgn };
