/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-gps": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-gps": IconAttrs;
    }
  }
}

@customElement("ph-gps")
class PhGps extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M240,124H211.9A84.11,84.11,0,0,0,132,44.1V16a4,4,0,0,0-8,0V44.1A84.11,84.11,0,0,0,44.1,124H16a4,4,0,0,0,0,8H44.1A84.11,84.11,0,0,0,124,211.9V240a4,4,0,0,0,8,0V211.9A84.11,84.11,0,0,0,211.9,132H240a4,4,0,0,0,0-8ZM128,204a76,76,0,1,1,76-76A76.08,76.08,0,0,1,128,204Z"/>`,
    ],
    [
      "light",
      svg`<path d="M240,122H213.77A86.12,86.12,0,0,0,134,42.23V16a6,6,0,0,0-12,0V42.23A86.12,86.12,0,0,0,42.23,122H16a6,6,0,0,0,0,12H42.23A86.12,86.12,0,0,0,122,213.77V240a6,6,0,0,0,12,0V213.77A86.12,86.12,0,0,0,213.77,134H240a6,6,0,0,0,0-12ZM128,202a74,74,0,1,1,74-74A74.09,74.09,0,0,1,128,202Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M240,120H215.63A88.13,88.13,0,0,0,136,40.37V16a8,8,0,0,0-16,0V40.37A88.13,88.13,0,0,0,40.37,120H16a8,8,0,0,0,0,16H40.37A88.13,88.13,0,0,0,120,215.63V240a8,8,0,0,0,16,0V215.63A88.13,88.13,0,0,0,215.63,136H240a8,8,0,0,0,0-16ZM128,200a72,72,0,1,1,72-72A72.08,72.08,0,0,1,128,200Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M240,116H219.22A92.21,92.21,0,0,0,140,36.78V16a12,12,0,0,0-24,0V36.78A92.21,92.21,0,0,0,36.78,116H16a12,12,0,0,0,0,24H36.78A92.21,92.21,0,0,0,116,219.22V240a12,12,0,0,0,24,0V219.22A92.21,92.21,0,0,0,219.22,140H240a12,12,0,0,0,0-24ZM128,196a68,68,0,1,1,68-68A68.07,68.07,0,0,1,128,196Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M248,128a8,8,0,0,1-8,8H215.63A88.13,88.13,0,0,1,136,215.63V240a8,8,0,0,1-16,0V215.63A88.13,88.13,0,0,1,40.37,136H16a8,8,0,0,1,0-16H40.37A88.13,88.13,0,0,1,120,40.37V16a8,8,0,0,1,16,0V40.37A88.13,88.13,0,0,1,215.63,120H240A8,8,0,0,1,248,128Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M208,128a80,80,0,1,1-80-80A80,80,0,0,1,208,128Z" opacity="0.2"/><path d="M240,120H215.63A88.13,88.13,0,0,0,136,40.37V16a8,8,0,0,0-16,0V40.37A88.13,88.13,0,0,0,40.37,120H16a8,8,0,0,0,0,16H40.37A88.13,88.13,0,0,0,120,215.63V240a8,8,0,0,0,16,0V215.63A88.13,88.13,0,0,0,215.63,136H240a8,8,0,0,0,0-16ZM128,200a72,72,0,1,1,72-72A72.08,72.08,0,0,1,128,200Z"/>`,
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
      ${PhGps.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhGps };
