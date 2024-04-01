/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-tag-chevron": PhTagChevron;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-tag-chevron": PhTagChevron;
    }
  }
}

@customElement("ph-tag-chevron")
class PhTagChevron extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M243.33,125.78,197.7,57.34a12,12,0,0,0-10-5.34H32a4,4,0,0,0-3.33,6.22L75.19,128,28.67,197.78A4,4,0,0,0,32,204H187.72a12,12,0,0,0,10-5.34l45.63-68.44A4,4,0,0,0,243.33,125.78Zm-52.28,68.44a4,4,0,0,1-3.33,1.78H39.47l43.86-65.78a4,4,0,0,0,0-4.44L39.47,60H187.72a4,4,0,0,1,3.33,1.78L235.19,128Z"/>`,
    ],
    [
      "light",
      svg`<path d="M245,124.67,199.37,56.23A14,14,0,0,0,187.72,50H32a6,6,0,0,0-5,9.33L72.79,128,27,196.67A6,6,0,0,0,32,206H187.72a14,14,0,0,0,11.65-6.23L245,131.33A6,6,0,0,0,245,124.67Zm-55.61,68.44a2,2,0,0,1-1.66.89H43.21L85,131.33a6,6,0,0,0,0-6.66L43.21,62H187.72a2,2,0,0,1,1.66.89L232.79,128Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M246.66,123.56,201,55.12A16,16,0,0,0,187.72,48H32a8,8,0,0,0-6.66,12.44L70.39,128l-45,67.56A8,8,0,0,0,32,208H187.72A16,16,0,0,0,201,200.88l45.63-68.44A8,8,0,0,0,246.66,123.56ZM187.72,192H47l39.71-59.56a8,8,0,0,0,0-8.88L47,64H187.72l42.67,64Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M250,121.34,204.36,52.91A20,20,0,0,0,187.72,44H32A12,12,0,0,0,22,62.66L65.58,128,22,193.34A12,12,0,0,0,32,212H187.72a20,20,0,0,0,16.64-8.91L250,134.66A12,12,0,0,0,250,121.34ZM185.58,188H54.42L90,134.66a12,12,0,0,0,0-13.32L54.42,68H185.58l40,60Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M246.66,132.44,201,200.88A16,16,0,0,1,187.72,208H32a8,8,0,0,1-6.66-12.44L70.39,128l-45-67.56A8,8,0,0,1,32,48H187.72A16,16,0,0,1,201,55.12l45.63,68.44A8,8,0,0,1,246.66,132.44Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M240,128l-45.62,68.44a8,8,0,0,1-6.66,3.56H32l48-72L32,56H187.72a8,8,0,0,1,6.66,3.56Z" opacity="0.2"/><path d="M246.66,123.56,201,55.12A16,16,0,0,0,187.72,48H32a8,8,0,0,0-6.66,12.44L70.39,128l-45,67.56A8,8,0,0,0,32,208H187.72A16,16,0,0,0,201,200.88l45.63-68.44A8,8,0,0,0,246.66,123.56ZM187.72,192H47l39.71-59.56a8,8,0,0,0,0-8.88L47,64H187.72l42.67,64Z"/>`,
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
      ${PhTagChevron.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhTagChevron };
