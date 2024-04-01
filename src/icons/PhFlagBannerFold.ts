/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-flag-banner-fold": PhFlagBannerFold;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-flag-banner-fold": PhFlagBannerFold;
    }
  }
}

@customElement("ph-flag-banner-fold")
class PhFlagBannerFold extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M235.36,45.83A4,4,0,0,0,232,44H152a4,4,0,0,0-3.64,2.34L138.52,68H28a4,4,0,0,0-3,6.69L62.59,116,25,157.31A4,4,0,0,0,28,164h73.09a4,4,0,0,0,3.64-2.35L114.58,140h71.21l-37.43,82.34a4,4,0,0,0,2,5.3A4.07,4.07,0,0,0,152,228a4,4,0,0,0,3.64-2.35l80-176A4,4,0,0,0,235.36,45.83ZM98.52,156H37L71,118.69a4,4,0,0,0,0-5.38L37,76h97.84Zm90.9-24H118.21l36.37-80h71.21Z"/>`,
    ],
    [
      "light",
      svg`<path d="M237,44.75A6,6,0,0,0,232,42H152a6,6,0,0,0-5.46,3.52L137.23,66H28a6,6,0,0,0-4.44,10l36.33,40L23.56,156A6,6,0,0,0,28,166h73.09a6,6,0,0,0,5.46-3.52L115.86,142h66.82l-36.14,79.52a6,6,0,0,0,3,7.94A5.9,5.9,0,0,0,152,230a6,6,0,0,0,5.46-3.52l80-176A6,6,0,0,0,237,44.75ZM97.23,154H41.56l30.88-34a6,6,0,0,0,0-8.08L41.56,78h90.21Zm90.91-24H121.32l34.54-76h66.82Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M238.73,43.67A8,8,0,0,0,232,40H152a8,8,0,0,0-7.28,4.69L135.94,64H28a8,8,0,0,0-5.92,13.38L57.19,116,22.08,154.62A8,8,0,0,0,28,168h73.09a8,8,0,0,0,7.28-4.69L117.15,144h62.43l-34.86,76.69a8,8,0,1,0,14.56,6.62l80-176A8,8,0,0,0,238.73,43.67ZM95.94,152H46.08l27.84-30.62a8,8,0,0,0,0-10.76L46.08,80h82.59Zm90.91-24H124.42l32.73-72h62.43Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M242.09,41.5A12,12,0,0,0,232,36H152a12,12,0,0,0-10.92,7l-7.72,17H28a12,12,0,0,0-8.88,20.07L51.78,116,19.12,151.93A12,12,0,0,0,28,172h73.09A12,12,0,0,0,112,165l7.71-17h53.63l-32.28,71A12,12,0,1,0,162.92,229l80-176A12,12,0,0,0,242.09,41.5ZM55.13,148l21.75-23.93a12,12,0,0,0,0-16.14L55.13,84h67.32L93.36,148Zm129.14-24H130.64l29.09-64h53.63Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M131.79,69.65l-43.63,96A4,4,0,0,1,84.52,168H28.23a8.2,8.2,0,0,1-6.58-3.13,8,8,0,0,1,.43-10.25L57.19,116,22.08,77.38a8,8,0,0,1-.43-10.26A8.22,8.22,0,0,1,28.23,64h99.92A4,4,0,0,1,131.79,69.65ZM237.56,42.24A8.3,8.3,0,0,0,231.77,40H168a8,8,0,0,0-7.28,4.69l-42.57,93.65a4,4,0,0,0,3.64,5.66h57.79l-34.86,76.69a8,8,0,1,0,14.56,6.62l80-176A8,8,0,0,0,237.56,42.24Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M141.09,72l-40,88H28l40-44L28,72Z" opacity="0.2"/><path d="M238.73,43.67A8,8,0,0,0,232,40H152a8,8,0,0,0-7.28,4.69L135.94,64H28a8,8,0,0,0-5.92,13.38L57.19,116,22.08,154.62A8,8,0,0,0,28,168h73.09a8,8,0,0,0,7.28-4.69L117.15,144h62.43l-34.86,76.69a8,8,0,1,0,14.56,6.62l80-176A8,8,0,0,0,238.73,43.67ZM95.94,152H46.08l27.84-30.62a8,8,0,0,0,0-10.76L46.08,80h82.59Zm90.91-24H124.42l32.73-72h62.43Z"/>`,
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
      ${PhFlagBannerFold.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhFlagBannerFold };
