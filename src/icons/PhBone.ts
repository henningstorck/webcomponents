/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-bone": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-bone": IconAttrs;
    }
  }
}

@customElement("ph-bone")
class PhBone extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M228.6,63.46A31.83,31.83,0,0,0,204.1,52H204a32,32,0,1,0-59.17,17,4,4,0,0,1-.51,5L74,144.36a4,4,0,0,1-5,.51A32,32,0,1,0,51.9,204H52a32,32,0,1,0,59.16-17,4,4,0,0,1,.51-5L182,111.64a4,4,0,0,1,5-.51A32,32,0,0,0,228.6,63.46ZM222.1,99.8a24,24,0,0,1-30.8,4.55A12,12,0,0,0,176.37,106L106,176.37a12,12,0,0,0-1.63,14.93,24,24,0,1,1-44.09,9,4,4,0,0,0-1.12-3.45,4,4,0,0,0-2.83-1.17,4.32,4.32,0,0,0-.62.05,24,24,0,1,1,9-44.09A12,12,0,0,0,79.63,150L150,79.63a12,12,0,0,0,1.63-14.93,24,24,0,1,1,44.09-9,4,4,0,0,0,4.57,4.57A24,24,0,0,1,222.1,99.8Z"/>`,
    ],
    [
      "light",
      svg`<path d="M230.14,62.17A33.88,33.88,0,0,0,206,50a34,34,0,1,0-62.81,20,2,2,0,0,1-.23,2.54L72.56,143a2.06,2.06,0,0,1-2.55.23A34,34,0,1,0,50,206a34,34,0,1,0,62.81-20,2,2,0,0,1,.23-2.54l70.4-70.4a2,2,0,0,1,2.54-.23,34,34,0,0,0,44.15-50.65ZM220.6,98.48a22,22,0,0,1-28.24,4.17,14,14,0,0,0-17.4,1.92L104.57,175a14,14,0,0,0-1.92,17.4,22,22,0,1,1-40.41,8.26,6,6,0,0,0-5.93-6.93,7.28,7.28,0,0,0-.93.07,22,22,0,1,1,8.26-40.41A14,14,0,0,0,81,151.43L151.43,81a14,14,0,0,0,1.92-17.4,22,22,0,1,1,40.41-8.26,6,6,0,0,0,6.86,6.86,22,22,0,0,1,20,36.24Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M231.67,60.89a35.82,35.82,0,0,0-23.82-12.74,36,36,0,1,0-66.37,22.92.25.25,0,0,1,0,.08L71.17,141.51s0,0-.1,0a36,36,0,1,0-22.92,66.37,36,36,0,1,0,66.37-22.92.54.54,0,0,1,0-.08l70.35-70.36s0,0,.1,0a36,36,0,0,0,46.74-53.63ZM219.1,97.16a20,20,0,0,1-25.67,3.8,16,16,0,0,0-19.88,2.19l-70.4,70.4A16,16,0,0,0,101,193.43a20,20,0,1,1-36.75,7.5,8,8,0,0,0-7.91-9.24,8.5,8.5,0,0,0-1.23.1A20,20,0,1,1,62.57,155a16,16,0,0,0,19.88-2.19l70.4-70.4A16,16,0,0,0,155,62.57a20,20,0,1,1,36.75-7.5,8,8,0,0,0,9.14,9.14,20,20,0,0,1,18.17,33Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M234.74,58.31a39.89,39.89,0,0,0-23.35-13.7,40,40,0,1,0-74.86,25.87l-66,66.05a40,40,0,1,0-25.87,74.86,40,40,0,1,0,74.86-25.86l66.05-66.06a40,40,0,0,0,49.22-61.16ZM216.1,94.51a16,16,0,0,1-20.54,3,20,20,0,0,0-24.84,2.76l-70.4,70.4a20,20,0,0,0-2.75,24.84,16,16,0,1,1-29.41,6A12,12,0,0,0,56.3,187.7a11.61,11.61,0,0,0-1.85.14,16,16,0,1,1,6-29.4,20,20,0,0,0,24.83-2.76l70.4-70.4a20,20,0,0,0,2.76-24.84,16,16,0,1,1,29.4-6,12,12,0,0,0,13.71,13.71A16,16,0,0,1,216.1,94.51Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M231.12,107.72a35.91,35.91,0,0,1-46.19,6.8.14.14,0,0,0-.1,0l-70.35,70.36s0,0,0,.08a36,36,0,1,1-66.37,22.92,36,36,0,1,1,22.92-66.37.14.14,0,0,0,.1,0l70.35-70.36s0,0,0-.08a36,36,0,1,1,66.37-22.92,36,36,0,0,1,23.27,59.57Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M225.09,102.44a28,28,0,0,1-35.92,5.3,8,8,0,0,0-10,1.07l-70.38,70.38a8,8,0,0,0-1.07,10,28,28,0,1,1-51.42,10.51,28,28,0,1,1,10.51-51.42,8,8,0,0,0,10-1.07l70.38-70.38a8,8,0,0,0,1.07-10,28,28,0,1,1,51.42-10.51,28,28,0,0,1,25.41,46.12Z" opacity="0.2"/><path d="M231.67,60.89a35.82,35.82,0,0,0-23.82-12.74,36,36,0,1,0-66.37,22.92.25.25,0,0,1,0,.08L71.17,141.51s0,0-.1,0a36,36,0,1,0-22.92,66.37,36,36,0,1,0,66.37-22.92.54.54,0,0,1,0-.08l70.35-70.36s0,0,.1,0a36,36,0,0,0,46.74-53.63ZM219.1,97.16a20,20,0,0,1-25.67,3.8,16,16,0,0,0-19.88,2.19l-70.4,70.4A16,16,0,0,0,101,193.43a20,20,0,1,1-36.75,7.5,8,8,0,0,0-7.91-9.24,8.5,8.5,0,0,0-1.23.1A20,20,0,1,1,62.57,155a16,16,0,0,0,19.88-2.19l70.4-70.4A16,16,0,0,0,155,62.57a20,20,0,1,1,36.75-7.5,8,8,0,0,0,9.14,9.14,20,20,0,0,1,18.17,33Z"/>`,
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
      ${PhBone.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhBone };
