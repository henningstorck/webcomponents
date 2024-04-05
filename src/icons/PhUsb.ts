/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-usb": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-usb": IconAttrs;
    }
  }
}

@customElement("ph-usb")
class PhUsb extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M250.22,124.67l-48-32A4,4,0,0,0,196,96v28H68V72a4,4,0,0,1,4-4h36.29a28,28,0,1,0,0-8H72A12,12,0,0,0,60,72v52H8a4,4,0,0,0,0,8H60v52a12,12,0,0,0,12,12h36v12a12,12,0,0,0,12,12h32a12,12,0,0,0,12-12V176a12,12,0,0,0-12-12H120a12,12,0,0,0-12,12v12H72a4,4,0,0,1-4-4V132H196v28a4,4,0,0,0,2.11,3.53,4,4,0,0,0,4.11-.2l48-32a4,4,0,0,0,0-6.66ZM136,44a20,20,0,1,1-20,20A20,20,0,0,1,136,44ZM116,176a4,4,0,0,1,4-4h32a4,4,0,0,1,4,4v32a4,4,0,0,1-4,4H120a4,4,0,0,1-4-4Zm88-23.47V103.47L240.79,128Z"/>`,
    ],
    [
      "light",
      svg`<path d="M251.33,123l-48-32A6,6,0,0,0,194,96v26H70V72a2,2,0,0,1,2-2h34.6a30,30,0,1,0,0-12H72A14,14,0,0,0,58,72v50H8a6,6,0,0,0,0,12H58v50a14,14,0,0,0,14,14h34v10a14,14,0,0,0,14,14h32a14,14,0,0,0,14-14V176a14,14,0,0,0-14-14H120a14,14,0,0,0-14,14v10H72a2,2,0,0,1-2-2V134H194v26a6,6,0,0,0,9.33,5l48-32a6,6,0,0,0,0-10ZM136,46a18,18,0,1,1-18,18A18,18,0,0,1,136,46ZM118,176a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2v32a2,2,0,0,1-2,2H120a2,2,0,0,1-2-2Zm88-27.21V107.21L237.18,128Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M252.44,121.34l-48-32A8,8,0,0,0,192,96v24H72V72h33a32,32,0,1,0,0-16H72A16,16,0,0,0,56,72v48H8a8,8,0,0,0,0,16H56v48a16,16,0,0,0,16,16h32v8a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V176a16,16,0,0,0-16-16H120a16,16,0,0,0-16,16v8H72V136H192v24a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM136,48a16,16,0,1,1-16,16A16,16,0,0,1,136,48ZM120,176h32v32H120Zm88-30.95V111l25.58,17Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M251.2,118.4l-48-36A12,12,0,0,0,184,92v24H76V76H98.06a36,36,0,1,0,0-24H72A20,20,0,0,0,52,72v44H12a12,12,0,0,0,0,24H52v44a20,20,0,0,0,20,20H96v4a20,20,0,0,0,20,20h32a20,20,0,0,0,20-20V176a20,20,0,0,0-20-20H116a20,20,0,0,0-20,20v4H76V140H184v24a12,12,0,0,0,19.2,9.6l48-36a12,12,0,0,0,0-19.2ZM132,52a12,12,0,1,1-12,12A12,12,0,0,1,132,52ZM120,180h24v24H120Zm88-40V116l16,12Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M252,128a4,4,0,0,1-1.78,3.33l-48,32A4,4,0,0,1,196,160V136H72v48h36v-8a12,12,0,0,1,12-12h32a12,12,0,0,1,12,12v32a12,12,0,0,1-12,12H120a12,12,0,0,1-12-12v-8H72a16,16,0,0,1-16-16V136H8a8,8,0,0,1,0-16H56V72A16,16,0,0,1,72,56h37.17a28,28,0,1,1,0,16H72v48H196V96a4,4,0,0,1,6.22-3.33l48,32A4,4,0,0,1,252,128Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M160,64a24,24,0,1,1-24-24A24,24,0,0,1,160,64Zm40,32v64l48-32Zm-48,72H120a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V176A8,8,0,0,0,152,168Z" opacity="0.2"/><path d="M252.44,121.34l-48-32A8,8,0,0,0,192,96v24H72V72h33a32,32,0,1,0,0-16H72A16,16,0,0,0,56,72v48H8a8,8,0,0,0,0,16H56v48a16,16,0,0,0,16,16h32v8a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V176a16,16,0,0,0-16-16H120a16,16,0,0,0-16,16v8H72V136H192v24a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM136,48a16,16,0,1,1-16,16A16,16,0,0,1,136,48ZM120,176h32v32H120Zm88-30.95V111l25.58,17Z"/>`,
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
      ${PhUsb.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhUsb };
