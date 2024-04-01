/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-hamburger": PhHamburger;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-hamburger": PhHamburger;
    }
  }
}

@customElement("ph-hamburger")
class PhHamburger extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M48.07,100H207.93a12,12,0,0,0,11.8-14.55c-3.39-16-14.56-30.68-31.46-41.23S150.11,28,128,28,84.49,33.76,67.73,44.22,39.66,69.41,36.27,85.45A12,12,0,0,0,48.07,100Zm-4-12.89C50.26,58,86.33,36,128,36s77.74,22,83.91,51.11a4,4,0,0,1-.82,3.39,4,4,0,0,1-3.16,1.5H48.07a4,4,0,0,1-3.16-1.5A4,4,0,0,1,44.09,87.11Zm186.54,69.13-42.56,15.48-38.58-15.43a4,4,0,0,0-3,0L108,171.69l-38.51-15.4a4,4,0,0,0-2.86,0l-44,16A4,4,0,0,0,24,180a4.08,4.08,0,0,0,1.37-.24L44,173v11a36,36,0,0,0,36,36h96a36,36,0,0,0,36-36V171.53l21.37-7.77a4,4,0,0,0-2.74-7.52ZM204,184a28,28,0,0,1-28,28H80a28,28,0,0,1-28-28V170.07l15.93-5.79,38.58,15.43a4,4,0,0,0,3,0L148,164.31l38.51,15.4a4,4,0,0,0,2.86,0L204,174.44ZM20,128a4,4,0,0,1,4-4H232a4,4,0,0,1,0,8H24A4,4,0,0,1,20,128Z"/>`,
    ],
    [
      "light",
      svg`<path d="M48.07,102H207.93a14,14,0,0,0,13.76-17C214.45,50.83,175.05,26,128,26S41.55,50.83,34.31,85a14,14,0,0,0,13.76,17Zm-2-14.48C52,59.29,87.25,38,128,38S204,59.29,210,87.52a2,2,0,0,1-2,2.48H48.07a2,2,0,0,1-2-2.48ZM230,154.36,188.1,169.58l-37.87-15.15a6,6,0,0,0-4.46,0L108,169.54,70.23,154.43a6,6,0,0,0-4.28-.07l-44,16A6,6,0,0,0,24,182a6.11,6.11,0,0,0,2.05-.36l16-5.8V184a38,38,0,0,0,38,38h96a38,38,0,0,0,38-38V172.93l20.05-7.29a6,6,0,0,0-4.1-11.28ZM202,184a26,26,0,0,1-26,26H80a26,26,0,0,1-26-26V171.48l13.9-5.06,37.87,15.15a6,6,0,0,0,4.46,0L148,166.46l37.77,15.11a6,6,0,0,0,4.28.07L202,177.29ZM18,128a6,6,0,0,1,6-6H232a6,6,0,0,1,0,12H24A6,6,0,0,1,18,128Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M48.07,104H207.93a16,16,0,0,0,15.72-19.38C216.22,49.5,176,24,128,24S39.78,49.5,32.35,84.62A16,16,0,0,0,48.07,104ZM128,40c39.82,0,74.21,20.61,79.93,48H48.07L48,87.93C53.79,60.61,88.18,40,128,40ZM229.26,152.48l-41.13,15L151,152.57a8,8,0,0,0-5.94,0l-37,14.81L71,152.57a8,8,0,0,0-5.7-.09l-44,16a8,8,0,0,0,5.47,15L40,178.69V184a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40v-9.67l18.73-6.81a8,8,0,1,0-5.47-15ZM200,184a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V172.88l11.87-4.32L105,183.43a8,8,0,0,0,5.94,0l37-14.81,37,14.81a8,8,0,0,0,5.7.09l9.27-3.37ZM16,128a8,8,0,0,1,8-8H232a8,8,0,0,1,0,16H24A8,8,0,0,1,16,128Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M227.9,152.72l-39.7,14.44-35.74-14.3a12,12,0,0,0-8.92,0L108,167.08,72.46,152.86a12,12,0,0,0-8.56-.14l-44,16a12,12,0,0,0,8.2,22.56l8.12-2.95A44.06,44.06,0,0,0,80,228h96a44.05,44.05,0,0,0,44-44v-2.87l16.1-5.85a12,12,0,0,0-8.2-22.56ZM176,204H80a20,20,0,0,1-20-20v-4.32l7.8-2.84,35.74,14.3a12,12,0,0,0,8.92,0L148,176.92l35.54,14.22a12,12,0,0,0,8.56.14l2.89-1.06A20,20,0,0,1,176,204ZM12,128a12,12,0,0,1,12-12H232a12,12,0,0,1,0,24H24A12,12,0,0,1,12,128Zm36.2-24H207.8a20.36,20.36,0,0,0,16.38-8.29,19.59,19.59,0,0,0,2.88-17.65C216.12,43.88,175.39,20,128,20S39.89,43.87,28.94,78.05A19.56,19.56,0,0,0,31.82,95.7,20.32,20.32,0,0,0,48.2,104ZM128,44c33.7,0,63.61,14.85,74,36H54C64.4,58.85,94.31,44,128,44Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M35.58,98.06a16,16,0,0,1-3.23-13.44C39.78,49.5,80,24,128,24s88.22,25.5,95.65,60.62A16,16,0,0,1,207.93,104H48.07A16,16,0,0,1,35.58,98.06Zm193.68,54.42-41.13,15L151,152.57a8,8,0,0,0-5.94,0l-37,14.81L71,152.57a8,8,0,0,0-5.7-.09l-44,16a8,8,0,0,0,5.47,15L40,178.69V184a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40v-9.67l18.73-6.81a8,8,0,1,0-5.47-15ZM24,136H232a8,8,0,0,0,0-16H24a8,8,0,0,0,0,16Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M188,176l20-7.27V184a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V167.27L68,160l40,16,40-16Zm27.82-89.72C209.32,55.55,172.48,32,128,32S46.68,55.55,40.18,86.28A8,8,0,0,0,48.07,96H207.93A8,8,0,0,0,215.82,86.28Z" opacity="0.2"/><path d="M48.07,104H207.93a16,16,0,0,0,15.72-19.38C216.22,49.5,176,24,128,24S39.78,49.5,32.35,84.62A16,16,0,0,0,48.07,104ZM128,40c39.82,0,74.21,20.61,79.93,48H48.07L48,87.93C53.79,60.61,88.18,40,128,40ZM229.26,152.48l-41.13,15L151,152.57a8,8,0,0,0-5.94,0l-37,14.81L71,152.57a8,8,0,0,0-5.7-.09l-44,16a8,8,0,0,0,5.47,15L40,178.69V184a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40v-9.67l18.73-6.81a8,8,0,1,0-5.47-15ZM200,184a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V172.88l11.87-4.32L105,183.43a8,8,0,0,0,5.94,0l37-14.81,37,14.81a8,8,0,0,0,5.7.09l9.27-3.37ZM16,128a8,8,0,0,1,8-8H232a8,8,0,0,1,0,16H24A8,8,0,0,1,16,128Z"/>`,
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
      ${PhHamburger.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhHamburger };
