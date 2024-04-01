/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-bird": PhBird;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-bird": PhBird;
    }
  }
}

@customElement("ph-bird")
class PhBird extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M172,68a8,8,0,1,1-8-8A8,8,0,0,1,172,68Zm64,12a4,4,0,0,1-1.78,3.33L212,98.14V120A100.11,100.11,0,0,1,112,220H24a12,12,0,0,1-9.37-19.5L100,98.08V76.89c0-31.22,25-56.74,55.72-56.89H156a55.94,55.94,0,0,1,53.79,40.39l24.43,16.28A4,4,0,0,1,236,80Zm-11.21,0L204.11,66.22a4.08,4.08,0,0,1-1.65-2.33A48,48,0,0,0,156,28h-.24C129.43,28.13,108,50.06,108,76.89V99.52a4,4,0,0,1-.93,2.56L20.84,205.56A4,4,0,0,0,24,212H52.79l72.14-86.56a4,4,0,0,1,6.14,5.12L63.21,212H112a92.1,92.1,0,0,0,92-92V96a4,4,0,0,1,1.78-3.33Z"/>`,
    ],
    [
      "light",
      svg`<path d="M174,68a10,10,0,1,1-10-10A10,10,0,0,1,174,68Zm64,12a6,6,0,0,1-2.67,5L214,99.21V120A102.12,102.12,0,0,1,112,222H24a14,14,0,0,1-10.93-22.75l.07-.09L98,97.35V76.89C98,44.57,123.89,18.15,155.72,18H156a58,58,0,0,1,55.51,41.13L235.33,75A6,6,0,0,1,238,80Zm-16.82,0L203,67.88a6,6,0,0,1-2.48-3.48A46,46,0,0,0,156,30h-.23C130.53,30.12,110,51.16,110,76.89V99.52a6,6,0,0,1-1.39,3.85L22.43,206.78A2,2,0,0,0,24,210H51.86l71.53-85.84a6,6,0,0,1,9.22,7.68L67.48,210H112a90.1,90.1,0,0,0,90-90V96a6,6,0,0,1,2.67-5Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M176,68a12,12,0,1,1-12-12A12,12,0,0,1,176,68Zm64,12a8,8,0,0,1-3.56,6.66L216,100.28V120A104.11,104.11,0,0,1,112,224H24a16,16,0,0,1-12.49-26l.1-.12L96,96.63V76.89C96,43.47,122.79,16.16,155.71,16H156a60,60,0,0,1,57.21,41.86l23.23,15.48A8,8,0,0,1,240,80Zm-22.42,0L201.9,69.54a8,8,0,0,1-3.31-4.64A44,44,0,0,0,156,32h-.22C131.64,32.12,112,52.25,112,76.89V99.52a8,8,0,0,1-1.85,5.13L24,208h26.9l70.94-85.12a8,8,0,1,1,12.29,10.24L71.75,208H112a88.1,88.1,0,0,0,88-88V96a8,8,0,0,1,3.56-6.66Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M176,72a16,16,0,1,1-16-16A16,16,0,0,1,176,72Zm68,8a12,12,0,0,1-5.34,10L220,102.42V120A108.12,108.12,0,0,1,112,228H24A20,20,0,0,1,8.41,195.5l.15-.18L92,95.18V76.89C92,41.28,120.57,12.17,155.69,12H156a63.94,63.94,0,0,1,60.58,43.29L238.66,70A12,12,0,0,1,244,80Zm-33.63,0-10.69-7.13a12,12,0,0,1-5-7A40,40,0,0,0,156,36h-.19c-21.95.11-39.8,18.45-39.8,40.89V99.52a12,12,0,0,1-2.79,7.69L32.57,204H53.05l69.74-83.68a12,12,0,1,1,18.43,15.36L84.29,204H112a84.09,84.09,0,0,0,84-84V96a12,12,0,0,1,5.35-10Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M236.44,73.34,213.21,57.86A60,60,0,0,0,156,16h-.29C122.79,16.16,96,43.47,96,76.89V96.63L11.63,197.88l-.1.12A16,16,0,0,0,24,224h88A104.11,104.11,0,0,0,216,120V100.28l20.44-13.62a8,8,0,0,0,0-13.32ZM126.15,133.12l-60,72a8,8,0,1,1-12.29-10.24l60-72a8,8,0,1,1,12.29,10.24ZM164,80a12,12,0,1,1,12-12A12,12,0,0,1,164,80Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M232,80,208,96v24a96,96,0,0,1-96,96H24a8,8,0,0,1-6.25-13L104,99.52V76.89c0-28.77,23-52.75,51.74-52.89a52,52,0,0,1,50.59,38.89Z" opacity="0.2"/><path d="M176,68a12,12,0,1,1-12-12A12,12,0,0,1,176,68Zm64,12a8,8,0,0,1-3.56,6.66L216,100.28V120A104.11,104.11,0,0,1,112,224H24a16,16,0,0,1-12.49-26l.1-.12L96,96.63V76.89C96,43.47,122.79,16.16,155.71,16H156a60,60,0,0,1,57.21,41.86l23.23,15.48A8,8,0,0,1,240,80Zm-22.42,0L201.9,69.54a8,8,0,0,1-3.31-4.64A44,44,0,0,0,156,32h-.22C131.64,32.12,112,52.25,112,76.89V99.52a8,8,0,0,1-1.85,5.13L24,208h26.9l70.94-85.12a8,8,0,1,1,12.29,10.24L71.75,208H112a88.1,88.1,0,0,0,88-88V96a8,8,0,0,1,3.56-6.66Z"/>`,
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
      ${PhBird.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhBird };
