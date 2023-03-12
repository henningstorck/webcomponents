/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { IconWeight } from "../types";

@customElement("ph-arrow-elbow-up-right")
export default class PhArrowElbowUpRight extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M210.83,82.83l-48,48a4,4,0,0,1-5.66-5.66L198.34,84H68V224a4,4,0,0,1-8,0V80a4,4,0,0,1,4-4H198.34L157.17,34.83a4,4,0,0,1,5.66-5.66l48,48A4,4,0,0,1,210.83,82.83Z"/>`,
    ],
    [
      "light",
      svg`<path d="M212.24,84.24l-48,48a6,6,0,0,1-8.48-8.48L193.51,86H70V224a6,6,0,0,1-12,0V80a6,6,0,0,1,6-6H193.51L155.76,36.24a6,6,0,0,1,8.48-8.48l48,48A6,6,0,0,1,212.24,84.24Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M213.66,85.66l-48,48a8,8,0,0,1-11.32-11.32L188.69,88H72V224a8,8,0,0,1-16,0V80a8,8,0,0,1,8-8H188.69L154.34,37.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,213.66,85.66Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M216.49,88.49l-48,48a12,12,0,0,1-17-17L179,92H76V224a12,12,0,0,1-24,0V80A12,12,0,0,1,64,68H179L151.51,40.49a12,12,0,1,1,17-17l48,48A12,12,0,0,1,216.49,88.49Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M213.66,85.66l-48,48A8,8,0,0,1,152,128V88H72V224a8,8,0,0,1-16,0V80a8,8,0,0,1,8-8h88V32a8,8,0,0,1,13.66-5.66l48,48A8,8,0,0,1,213.66,85.66Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M208,80l-48,48V32Z" opacity="0.2"/><path d="M213.66,74.34l-48-48A8,8,0,0,0,152,32V72H64a8,8,0,0,0-8,8V224a8,8,0,0,0,16,0V88h80v40a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,213.66,74.34ZM168,108.69V51.31L196.69,80Z"/>`,
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
      ${PhArrowElbowUpRight.weightsMap.get(this.weight)}
    </svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-arrow-elbow-up-right": PhArrowElbowUpRight;
  }
}
