/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-metronome": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-metronome": IconAttrs;
    }
  }
}

@customElement("ph-metronome")
class PhMetronome extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M182.63,113.85,211,82.69A4,4,0,1,0,205,77.31L179.82,105l-19.3-60.68A12,12,0,0,0,149.08,36H106.92a12,12,0,0,0-11.44,8.36l-50.9,160A12,12,0,0,0,56,220H200a12,12,0,0,0,11.43-15.64ZM190.19,164H137l39.37-43.31ZM103.1,46.79A4,4,0,0,1,106.92,44h42.16a4,4,0,0,1,3.82,2.79l20.71,65.09L126.23,164H65.81ZM203.22,210.36A4,4,0,0,1,200,212H56a4,4,0,0,1-3.81-5.21L63.27,172H192.73l11.07,34.79A4,4,0,0,1,203.22,210.36Z"/>`,
    ],
    [
      "light",
      svg`<path d="M213.33,203.75l-28.45-89.41L212.43,84A6,6,0,0,0,203.55,76l-22.87,25.17L162.42,43.75A13.94,13.94,0,0,0,149.08,34H106.92a13.94,13.94,0,0,0-13.34,9.75l-50.91,160A14,14,0,0,0,56,222H200a14,14,0,0,0,13.34-18.25ZM187.45,162H141.56l34-37.39ZM105,47.39A2,2,0,0,1,106.92,46h42.16A2,2,0,0,1,151,47.39l20.36,64-46,50.61H68.55ZM201.6,209.18A1.94,1.94,0,0,1,200,210H56a2,2,0,0,1-1.9-2.61L64.73,174H191.27l10.62,33.39A1.94,1.94,0,0,1,201.6,209.18Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M187.14,114.84l26.78-29.46a8,8,0,0,0-11.84-10.76l-20.55,22.6-17.2-54.07A15.94,15.94,0,0,0,149.08,32H106.91A15.94,15.94,0,0,0,91.66,43.15l-50.91,160A16,16,0,0,0,56,224H200a16,16,0,0,0,15.25-20.85ZM184.72,160H146.08l28.62-31.48ZM106.91,48h42.17l20,62.9L124.46,160H71.27ZM56,208l10.18-32H189.81L200,208Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M219.05,201.94l-27.4-86.12,25.23-27.75a12,12,0,0,0-17.76-16.14L183.24,89.39l-15.1-47.45A19.93,19.93,0,0,0,149.08,28H106.91A19.93,19.93,0,0,0,87.85,41.94l-50.91,160A20,20,0,0,0,56,228H200a20,20,0,0,0,19.06-26.06ZM179.25,156H155.12L173,136.34ZM109.83,52h36.33l18.42,57.91L122.69,156H76.74ZM61.47,204l7.63-24H186.89l7.63,24Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M187.14,114.84l26.78-29.46a8,8,0,0,0-11.84-10.76l-20.55,22.6-17.2-54.07A15.94,15.94,0,0,0,149.08,32H106.91A15.94,15.94,0,0,0,91.66,43.15l-50.91,160A16,16,0,0,0,56,224H200a16,16,0,0,0,15.25-20.85ZM71.27,160,106.91,48h42.17l20,62.9L124.46,160Zm74.81,0,28.62-31.48,10,31.48Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M200,216H56a8,8,0,0,1-7.63-10.43l12-37.57H195.66l12,37.57A8,8,0,0,1,200,216Z" opacity="0.2"/><path d="M187.14,114.84l26.78-29.46a8,8,0,0,0-11.84-10.76l-20.55,22.6-17.2-54.07A15.94,15.94,0,0,0,149.08,32H106.91A15.94,15.94,0,0,0,91.66,43.15l-50.91,160A16,16,0,0,0,56,224H200a16,16,0,0,0,15.25-20.85ZM184.72,160H146.08l28.62-31.48ZM106.91,48h42.17l20,62.9L124.46,160H71.27ZM56,208l10.18-32H189.81L200,208Z"/>`,
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
      ${PhMetronome.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhMetronome };
