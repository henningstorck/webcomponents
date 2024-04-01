/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-warning-octagon": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-warning-octagon": IconAttrs;
    }
  }
}

@customElement("ph-warning-octagon")
class PhWarningOctagon extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M124,136V80a4,4,0,0,1,8,0v56a4,4,0,0,1-8,0ZM228,91.55v72.9a12,12,0,0,1-3.51,8.49l-51.55,51.55a12,12,0,0,1-8.49,3.51H91.55a12,12,0,0,1-8.49-3.51L31.51,172.94A12,12,0,0,1,28,164.45V91.55a12,12,0,0,1,3.51-8.49L83.06,31.51A12,12,0,0,1,91.55,28h72.9a12,12,0,0,1,8.49,3.51l51.55,51.55A12,12,0,0,1,228,91.55Zm-8,0a4,4,0,0,0-1.17-2.83L167.28,37.17A4.06,4.06,0,0,0,164.45,36H91.55a4.06,4.06,0,0,0-2.83,1.17L37.17,88.72A4,4,0,0,0,36,91.55v72.9a4,4,0,0,0,1.17,2.83l51.55,51.55A4.06,4.06,0,0,0,91.55,220h72.9a4.06,4.06,0,0,0,2.83-1.17l51.55-51.55a4,4,0,0,0,1.17-2.83ZM128,164a8,8,0,1,0,8,8A8,8,0,0,0,128,164Z"/>`,
    ],
    [
      "light",
      svg`<path d="M122,136V80a6,6,0,0,1,12,0v56a6,6,0,0,1-12,0ZM230,91.55v72.9a13.92,13.92,0,0,1-4.1,9.9L174.35,225.9a13.92,13.92,0,0,1-9.9,4.1H91.55a13.92,13.92,0,0,1-9.9-4.1L30.1,174.35a13.92,13.92,0,0,1-4.1-9.9V91.55a13.92,13.92,0,0,1,4.1-9.9L81.65,30.1a13.92,13.92,0,0,1,9.9-4.1h72.9a13.92,13.92,0,0,1,9.9,4.1L225.9,81.65A13.92,13.92,0,0,1,230,91.55Zm-12,0a2,2,0,0,0-.59-1.42L165.87,38.59a2,2,0,0,0-1.42-.59H91.55a2,2,0,0,0-1.41.59L38.58,90.13A2,2,0,0,0,38,91.55v72.9a2,2,0,0,0,.59,1.42l51.54,51.54a2,2,0,0,0,1.42.59h72.9a2,2,0,0,0,1.41-.59l51.56-51.54a2,2,0,0,0,.58-1.42ZM128,162a10,10,0,1,0,10,10A10,10,0,0,0,128,162Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M120,136V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0ZM232,91.55v72.9a15.86,15.86,0,0,1-4.69,11.31l-51.55,51.55A15.86,15.86,0,0,1,164.45,232H91.55a15.86,15.86,0,0,1-11.31-4.69L28.69,175.76A15.86,15.86,0,0,1,24,164.45V91.55a15.86,15.86,0,0,1,4.69-11.31L80.24,28.69A15.86,15.86,0,0,1,91.55,24h72.9a15.86,15.86,0,0,1,11.31,4.69l51.55,51.55A15.86,15.86,0,0,1,232,91.55Zm-16,0L164.45,40H91.55L40,91.55v72.9L91.55,216h72.9L216,164.45ZM128,160a12,12,0,1,0,12,12A12,12,0,0,0,128,160Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M116,132V80a12,12,0,0,1,24,0v52a12,12,0,0,1-24,0ZM236,91.55v72.9a19.86,19.86,0,0,1-5.86,14.14l-51.55,51.55A19.85,19.85,0,0,1,164.45,236H91.55a19.85,19.85,0,0,1-14.14-5.86L25.86,178.59A19.86,19.86,0,0,1,20,164.45V91.55a19.86,19.86,0,0,1,5.86-14.14L77.41,25.86A19.85,19.85,0,0,1,91.55,20h72.9a19.85,19.85,0,0,1,14.14,5.86l51.55,51.55A19.86,19.86,0,0,1,236,91.55Zm-24,1.66L162.79,44H93.21L44,93.21v69.58L93.21,212h69.58L212,162.79ZM128,156a16,16,0,1,0,16,16A16,16,0,0,0,128,156Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M227.31,80.23,175.77,28.69A16.13,16.13,0,0,0,164.45,24H91.55a16.13,16.13,0,0,0-11.32,4.69L28.69,80.23A16.13,16.13,0,0,0,24,91.55v72.9a16.13,16.13,0,0,0,4.69,11.32l51.54,51.54A16.13,16.13,0,0,0,91.55,232h72.9a16.13,16.13,0,0,0,11.32-4.69l51.54-51.54A16.13,16.13,0,0,0,232,164.45V91.55A16.13,16.13,0,0,0,227.31,80.23ZM120,80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M224,91.55v72.9a8,8,0,0,1-2.34,5.66l-51.55,51.55a8,8,0,0,1-5.66,2.34H91.55a8,8,0,0,1-5.66-2.34L34.34,170.11A8,8,0,0,1,32,164.45V91.55a8,8,0,0,1,2.34-5.66L85.89,34.34A8,8,0,0,1,91.55,32h72.9a8,8,0,0,1,5.66,2.34l51.55,51.55A8,8,0,0,1,224,91.55Z" opacity="0.2"/><path d="M120,136V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0ZM232,91.55v72.9a15.86,15.86,0,0,1-4.69,11.31l-51.55,51.55A15.86,15.86,0,0,1,164.45,232H91.55a15.86,15.86,0,0,1-11.31-4.69L28.69,175.76A15.86,15.86,0,0,1,24,164.45V91.55a15.86,15.86,0,0,1,4.69-11.31L80.24,28.69A15.86,15.86,0,0,1,91.55,24h72.9a15.86,15.86,0,0,1,11.31,4.69l51.55,51.55A15.86,15.86,0,0,1,232,91.55Zm-16,0L164.45,40H91.55L40,91.55v72.9L91.55,216h72.9L216,164.45ZM128,160a12,12,0,1,0,12,12A12,12,0,0,0,128,160Z"/>`,
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
      ${PhWarningOctagon.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhWarningOctagon };
