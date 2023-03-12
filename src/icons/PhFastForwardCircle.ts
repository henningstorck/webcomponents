/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { IconWeight } from "../types";

@customElement("ph-fast-forward-circle")
export default class PhFastForwardCircle extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm6.22-95.33-48-32A4,4,0,0,0,80,96v64a4,4,0,0,0,2.11,3.53,4,4,0,0,0,4.11-.2l48-32a4,4,0,0,0,0-6.66ZM88,152.53V103.47L124.79,128Zm102.22-27.86-48-32A4,4,0,0,0,136,96v64a4,4,0,0,0,2.11,3.53,4,4,0,0,0,4.11-.2l48-32a4,4,0,0,0,0-6.66ZM144,152.53V103.47L180.79,128Z"/>`,
    ],
    [
      "light",
      svg`<path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm63.33-95-48-32A6,6,0,0,0,134,96v26.12L87.33,91A6,6,0,0,0,78,96v64a6,6,0,0,0,9.33,5L134,133.88V160a6,6,0,0,0,9.33,5l48-32a6,6,0,0,0,0-10ZM90,148.79V107.21L121.18,128Zm56,0V107.21L177.18,128Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm4.44-94.66-48-32A8,8,0,0,0,72,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM88,145.05V111l25.58,17Zm108.44-23.71-48-32A8,8,0,0,0,136,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM152,145.05V111l25.58,17Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm64-84a12,12,0,0,1-4.63,9.47l-36,28A12,12,0,0,1,132,156V136.92c-.21.19-.41.38-.63.55l-36,28A12,12,0,0,1,76,156V100a12,12,0,0,1,19.37-9.47l36,28c.22.17.42.36.63.55V100a12,12,0,0,1,19.37-9.47l36,28A12,12,0,0,1,192,128Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm60.59,110.55-40,28A8,8,0,0,1,136,156V128a8,8,0,0,1-3.41,6.55l-40,28A8,8,0,0,1,80,156V100a8,8,0,0,1,12.59-6.55l40,28A8,8,0,0,1,136,128V100a8,8,0,0,1,12.59-6.55l40,28a8,8,0,0,1,0,13.1Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32ZM80,160V96l48,32Zm64,0V96l48,32Z" opacity="0.2"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm4.44-94.66-48-32A8,8,0,0,0,72,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM88,145.05V111l25.58,17Zm108.44-23.71-48-32A8,8,0,0,0,136,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM152,145.05V111l25.58,17Z"/>`,
    ],
  ]);

  @property({ type: String })
  size: string | number = "1em";

  @property({ type: String })
  weight: IconWeight = "regular";

  @property({ type: String })
  color: string = "regular";

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
      ${PhFastForwardCircle.weightsMap.get(this.weight)}
    </svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-fast-forward-circle": PhFastForwardCircle;
  }
}
