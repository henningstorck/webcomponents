/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-push-pin-simple-slash": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-push-pin-simple-slash": IconAttrs;
    }
  }
}

@customElement("ph-push-pin-simple-slash")
class PhPushPinSimpleSlash extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M87.25,40a4,4,0,0,1,4-4H192a4,4,0,0,1,0,8H180.77l19.58,111a4,4,0,0,1-3.24,4.63,3.33,3.33,0,0,1-.7.07,4,4,0,0,1-3.93-3.31L172.64,44H91.25A4,4,0,0,1,87.25,40ZM210.69,219a4,4,0,0,1-5.65-.27L169.87,180H132v60a4,4,0,0,1-8,0V180H40a4,4,0,0,1,0-8H52.64L70.52,70.72,45,42.69A4,4,0,0,1,51,37.31l160,176A4,4,0,0,1,210.69,219Zm-48.1-47L77.32,78.2,60.77,172Z"/>`,
    ],
    [
      "light",
      svg`<path d="M85.25,40a6,6,0,0,1,6-6H192a6,6,0,0,1,0,12h-8.85l19.17,108.64a6,6,0,0,1-4.86,7,5.41,5.41,0,0,1-1.05.1,6,6,0,0,1-5.9-5L171,46H91.25A6,6,0,0,1,85.25,40ZM212,220.44a6,6,0,0,1-8.48-.4L169,182H134v58a6,6,0,0,1-12,0V182H40a6,6,0,0,1,0-12H51L68.38,71.33,43.56,44A6,6,0,0,1,52.44,36l160,176A6,6,0,0,1,212,220.44Zm-54-50.44L78.58,82.56,63.15,170Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M83.25,40a8,8,0,0,1,8-8H192a8,8,0,0,1,0,16h-6.46l18.75,106.3a8,8,0,0,1-6.48,9.26,7.52,7.52,0,0,1-1.4.13,8,8,0,0,1-7.87-6.61L169.29,48h-78A8,8,0,0,1,83.25,40ZM213.38,221.92a8,8,0,0,1-11.3-.54L168.1,184H136v56a8,8,0,0,1-16,0V184H40a8,8,0,0,1,0-16h9.29L66.24,72,42.08,45.38A8,8,0,1,1,53.92,34.62l160,176A8,8,0,0,1,213.38,221.92ZM153.55,168,79.84,86.92,65.54,168Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M216.88,207.93l-160-176A12,12,0,1,0,39.12,48.07L62,73.19,45.93,164H40a12,12,0,0,0,0,24h76v52a12,12,0,0,0,24,0V188h26.33l32.79,36.07a12,12,0,0,0,17.76-16.14ZM70.3,164,82.37,95.64,144.51,164ZM90.06,40a12,12,0,0,1,12-12H192a12,12,0,0,1,0,24h-1.7l15.33,86.84a12,12,0,0,1-9.73,13.91,12.59,12.59,0,0,1-2.1.18A12,12,0,0,1,182,143L165.93,52H102.06A12,12,0,0,1,90.06,40Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M79.25,38.69a4,4,0,0,1,3-6.69H192a8,8,0,0,1,8,8.53A8.17,8.17,0,0,1,191.73,48h-6.19L206.7,167.91a4,4,0,0,1-6.9,3.39ZM213.92,210.62l-160-176A8,8,0,1,0,42.08,45.38L66.24,72,49.29,168H40a8,8,0,0,0,0,16h80v56a8,8,0,0,0,16,0V184h32.1l34,37.38a8,8,0,1,0,11.84-10.76Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M190.46,176H56L78.83,46.61A8,8,0,0,1,86.71,40H176l22.34,126.61A8,8,0,0,1,190.46,176Z" opacity="0.2"/><path d="M83.25,40a8,8,0,0,1,8-8H192a8,8,0,0,1,0,16h-6.46l18.75,106.3a8,8,0,0,1-6.48,9.26,7.52,7.52,0,0,1-1.4.13,8,8,0,0,1-7.87-6.61L169.29,48h-78A8,8,0,0,1,83.25,40ZM213.38,221.92a8,8,0,0,1-11.3-.54L168.1,184H136v56a8,8,0,0,1-16,0V184H40a8,8,0,0,1,0-16h9.29L66.24,72,42.08,45.38A8,8,0,1,1,53.92,34.62l160,176A8,8,0,0,1,213.38,221.92ZM153.55,168,79.84,86.92,65.54,168Z"/>`,
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
      ${PhPushPinSimpleSlash.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhPushPinSimpleSlash };
