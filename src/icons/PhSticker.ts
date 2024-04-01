/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-sticker": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-sticker": IconAttrs;
    }
  }
}

@customElement("ph-sticker")
class PhSticker extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M168,36H88A52.06,52.06,0,0,0,36,88v80a52.06,52.06,0,0,0,52,52h48a3.83,3.83,0,0,0,1.26-.21c25.46-8.48,74.05-57.07,82.53-82.53A3.83,3.83,0,0,0,220,136V88A52.06,52.06,0,0,0,168,36ZM44,168V88A44.05,44.05,0,0,1,88,44h80a44.05,44.05,0,0,1,44,44v44H184a52.06,52.06,0,0,0-52,52v28H88A44.05,44.05,0,0,1,44,168Zm96,42V184a44.05,44.05,0,0,1,44-44h26C198.9,162.23,162.23,198.9,140,210Z"/>`,
    ],
    [
      "light",
      svg`<path d="M168,34H88A54.06,54.06,0,0,0,34,88v80a54.06,54.06,0,0,0,54,54h48a5.86,5.86,0,0,0,1.9-.31c25.84-8.61,75.18-57.95,83.79-83.79A5.86,5.86,0,0,0,222,136V88A54.06,54.06,0,0,0,168,34ZM46,168V88A42,42,0,0,1,88,46h80a42,42,0,0,1,42,42v42H184a54.06,54.06,0,0,0-54,54v26H88A42,42,0,0,1,46,168Zm96,38.67V184a42,42,0,0,1,42-42h22.67C194.84,163.1,163.1,194.84,142,206.67Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M168,32H88A56.06,56.06,0,0,0,32,88v80a56.06,56.06,0,0,0,56,56h48a8.07,8.07,0,0,0,2.53-.41c26.23-8.75,76.31-58.83,85.06-85.06A8.07,8.07,0,0,0,224,136V88A56.06,56.06,0,0,0,168,32ZM48,168V88A40,40,0,0,1,88,48h80a40,40,0,0,1,40,40v40H184a56.06,56.06,0,0,0-56,56v24H88A40,40,0,0,1,48,168Zm96,35.14V184a40,40,0,0,1,40-40h19.14C191,163.5,163.5,191,144,203.14Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M168,28H88A60.07,60.07,0,0,0,28,88v80a60.07,60.07,0,0,0,60,60h48a11.9,11.9,0,0,0,3.79-.62c27.63-9.21,78.38-60,87.59-87.59A11.9,11.9,0,0,0,228,136V88A60.07,60.07,0,0,0,168,28ZM52,168V88A36,36,0,0,1,88,52h80a36,36,0,0,1,36,36v36H184a60.07,60.07,0,0,0-60,60v20H88A36,36,0,0,1,52,168Zm96,27.63V184a36,36,0,0,1,36-36h11.63C184,164.11,164.11,184,148,195.63Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M168,32H88A56.06,56.06,0,0,0,32,88v80a56.06,56.06,0,0,0,56,56h48a8.07,8.07,0,0,0,2.53-.41c26.23-8.75,76.31-58.83,85.06-85.06A8.07,8.07,0,0,0,224,136V88A56.06,56.06,0,0,0,168,32ZM136,207.42V176a40,40,0,0,1,40-40h31.42C198.16,157.55,157.55,198.16,136,207.42Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M216,136c-8,24-56,72-80,80V184a48,48,0,0,1,48-48Z" opacity="0.2"/><path d="M168,32H88A56.06,56.06,0,0,0,32,88v80a56.06,56.06,0,0,0,56,56h48a8.07,8.07,0,0,0,2.53-.41c26.23-8.75,76.31-58.83,85.06-85.06A8.07,8.07,0,0,0,224,136V88A56.06,56.06,0,0,0,168,32ZM48,168V88A40,40,0,0,1,88,48h80a40,40,0,0,1,40,40v40H184a56.06,56.06,0,0,0-56,56v24H88A40,40,0,0,1,48,168Zm96,35.14V184a40,40,0,0,1,40-40h19.14C191,163.5,163.5,191,144,203.14Z"/>`,
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
      ${PhSticker.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhSticker };
