/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-text-h-three": PhTextHThree;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-text-h-three": PhTextHThree;
    }
  }
}

@customElement("ph-text-h-three")
class PhTextHThree extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M244,180a32,32,0,0,1-54.86,22.4,4,4,0,0,1,5.72-5.6A24,24,0,1,0,212,156a4,4,0,0,1-3.28-6.29L232.32,116H192a4,4,0,0,1,0-8h48a4,4,0,0,1,3.28,6.29L219.12,148.8A32.06,32.06,0,0,1,244,180ZM144,52a4,4,0,0,0-4,4v56H44V56a4,4,0,0,0-8,0V176a4,4,0,0,0,8,0V120h96v56a4,4,0,0,0,8,0V56A4,4,0,0,0,144,52Z"/>`,
    ],
    [
      "light",
      svg`<path d="M246,180a34,34,0,0,1-58.29,23.79,6,6,0,0,1,8.58-8.39A22,22,0,1,0,212,158a6,6,0,0,1-4.92-9.44L228.48,118H192a6,6,0,0,1,0-12h48a6,6,0,0,1,4.91,9.44l-22.52,32.18A34.06,34.06,0,0,1,246,180ZM144,50a6,6,0,0,0-6,6v54H46V56a6,6,0,0,0-12,0V176a6,6,0,0,0,12,0V122h92v54a6,6,0,0,0,12,0V56A6,6,0,0,0,144,50Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm73.52,90.63,21-30A8,8,0,0,0,240,104H192a8,8,0,0,0,0,16h32.63l-19.18,27.41A8,8,0,0,0,212,160a20,20,0,1,1-14.29,34,8,8,0,1,0-11.42,11.19A36,36,0,0,0,248,180,36.07,36.07,0,0,0,225.52,146.63Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M252,180a40,40,0,0,1-68.57,28,12,12,0,1,1,17.14-16.79A16,16,0,1,0,212,164a12,12,0,0,1-9.83-18.88L217,124H192a12,12,0,0,1,0-24h48a12,12,0,0,1,9.83,18.88l-18.34,26.2A40,40,0,0,1,252,180ZM144,44a12,12,0,0,0-12,12v48H52V56a12,12,0,0,0-24,0V176a12,12,0,0,0,24,0V128h80v48a12,12,0,0,0,24,0V56A12,12,0,0,0,144,44Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM128,160a8,8,0,0,1-16,0V128H72v32a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0v32h40V80a8,8,0,0,1,16,0Zm40,24a32,32,0,0,1-21.34-8.15,8,8,0,1,1,10.68-11.92A16,16,0,1,0,168,136a8,8,0,0,1-6.4-12.8L176,104H152a8,8,0,0,1,0-16h40a8,8,0,0,1,6.4,12.8l-16.71,22.28A32,32,0,0,1,168,184Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M240,72V192a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56H224A16,16,0,0,1,240,72Z" opacity="0.2"/><path d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm73.52,90.63,21-30A8,8,0,0,0,240,104H192a8,8,0,0,0,0,16h32.63l-19.18,27.41A8,8,0,0,0,212,160a20,20,0,1,1-14.29,34,8,8,0,1,0-11.42,11.19A36,36,0,0,0,248,180,36.07,36.07,0,0,0,225.52,146.63Z"/>`,
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
      ${PhTextHThree.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhTextHThree };
