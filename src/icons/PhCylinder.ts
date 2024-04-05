/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-cylinder": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-cylinder": IconAttrs;
    }
  }
}

@customElement("ph-cylinder")
class PhCylinder extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M128,20C89.87,20,60,37.57,60,60V196c0,22.43,29.87,40,68,40s68-17.57,68-40V60C196,37.57,166.13,20,128,20Zm0,8c32.52,0,60,14.65,60,32s-27.48,32-60,32S68,77.35,68,60,95.48,28,128,28Zm60,168c0,17.35-27.48,32-60,32s-60-14.65-60-32V79.11C79.35,91.65,101.71,100,128,100s48.65-8.35,60-20.89Z"/>`,
    ],
    [
      "light",
      svg`<path d="M128,18C88.75,18,58,36.45,58,60V196c0,23.55,30.75,42,70,42s70-18.45,70-42V60C198,36.45,167.25,18,128,18Zm0,12c31.44,0,58,13.74,58,30s-26.56,30-58,30S70,76.26,70,60,96.56,30,128,30Zm0,196c-31.44,0-58-13.74-58-30V83.81C82.48,94.87,103.59,102,128,102s45.52-7.13,58-18.19V196C186,212.26,159.44,226,128,226Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M128,16C87.63,16,56,35.33,56,60V196c0,24.67,31.63,44,72,44s72-19.33,72-44V60C200,35.33,168.37,16,128,16Zm0,16c26.49,0,56,11.5,56,28s-29.51,28-56,28S72,76.5,72,60,101.51,32,128,32Zm0,192c-29.83,0-56-13.08-56-28V88c13.1,9.85,33.14,16,56,16s42.9-6.2,56-16V196C184,210.92,157.83,224,128,224Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M179.14,24.08C165.28,16.29,147.12,12,128,12S90.72,16.29,76.86,24.08C60.83,33.1,52,45.86,52,60V196c0,14.14,8.83,26.9,24.86,35.92C90.72,239.71,108.88,244,128,244s37.28-4.29,51.14-12.08c16-9,24.86-21.78,24.86-35.92V60C204,45.86,195.17,33.1,179.14,24.08ZM88.63,45c10.17-5.72,24.52-9,39.37-9s29.2,3.28,39.37,9c8,4.52,12.63,10,12.63,15s-4.6,10.48-12.63,15c-10.17,5.72-24.52,9-39.37,9s-29.2-3.28-39.37-9C80.6,70.48,76,65,76,60S80.6,49.52,88.63,45Zm78.74,166c-10.17,5.72-24.52,9-39.37,9s-29.2-3.28-39.37-9C80.6,206.48,76,201,76,196V95.4l.86.52C90.72,103.71,108.88,108,128,108s37.28-4.29,51.14-12.08l.86-.52V196C180,201,175.4,206.48,167.37,211Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M128,16C87.63,16,56,35.33,56,60V196c0,24.67,31.63,44,72,44s72-19.33,72-44V60C200,35.33,168.37,16,128,16Zm0,208c-29.83,0-56-13.08-56-28V77.43C82.92,88.5,103.9,96,128,96s45.08-7.5,56-18.57V196C184,210.92,157.83,224,128,224Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M192,60c0,19.88-28.65,36-64,36S64,79.88,64,60s28.65-36,64-36S192,40.12,192,60Z" opacity="0.2"/><path d="M128,16C87.63,16,56,35.33,56,60V196c0,24.67,31.63,44,72,44s72-19.33,72-44V60C200,35.33,168.37,16,128,16Zm0,16c26.49,0,56,11.5,56,28s-29.51,28-56,28S72,76.5,72,60,101.51,32,128,32Zm0,192c-29.83,0-56-13.08-56-28V88c13.1,9.85,33.14,16,56,16s42.9-6.2,56-16V196C184,210.92,157.83,224,128,224Z"/>`,
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
      ${PhCylinder.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhCylinder };
