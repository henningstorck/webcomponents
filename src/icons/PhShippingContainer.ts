/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-shipping-container": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-shipping-container": IconAttrs;
    }
  }
}

@customElement("ph-shipping-container")
class PhShippingContainer extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M235.3,74.5,129.1,44.15a4.09,4.09,0,0,0-1.67-.11L22.3,59.06A12.06,12.06,0,0,0,12,70.94V185.06a12.06,12.06,0,0,0,10.3,11.88l105.13,15a3.64,3.64,0,0,0,.57,0,4.11,4.11,0,0,0,1.1-.15L235.3,181.5A12,12,0,0,0,244,170V86A12,12,0,0,0,235.3,74.5ZM96,124H76V59.47l48-6.86V203.39l-48-6.86V132H96a4,4,0,0,0,0-8ZM20,185.06V70.94a4,4,0,0,1,3.43-4L68,60.61V124H48a4,4,0,0,0,0,8H68v63.39L23.43,189A4,4,0,0,1,20,185.06ZM236,170a4,4,0,0,1-2.9,3.84L132,202.7V53.3L233.1,82.19A4,4,0,0,1,236,86Z"/>`,
    ],
    [
      "light",
      svg`<path d="M235.85,72.57,129.65,42.23a6,6,0,0,0-2.5-.17L22,57.08A14.07,14.07,0,0,0,10,70.94V185.06a14.07,14.07,0,0,0,12,13.86l105.13,15a6.07,6.07,0,0,0,.85.06,6.14,6.14,0,0,0,1.65-.23l106.2-30.34A14.06,14.06,0,0,0,246,170V86A14.06,14.06,0,0,0,235.85,72.57ZM96,122H78V61.2l44-6.28V201.08L78,194.8V134H96a6,6,0,0,0,0-12ZM22,185.06V70.94a2,2,0,0,1,1.72-2l42.28-6V122H48a6,6,0,0,0,0,12H66v59.08l-42.28-6A2,2,0,0,1,22,185.06ZM234,170a2,2,0,0,1-1.45,1.92L134,200.05V56l98.55,28.16A2,2,0,0,1,234,86Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M236.4,70.65,130.2,40.31a8,8,0,0,0-3.33-.23L21.74,55.1A16.08,16.08,0,0,0,8,70.94V185.06A16.08,16.08,0,0,0,21.74,200.9l105.13,15A8.47,8.47,0,0,0,128,216a7.85,7.85,0,0,0,2.2-.31l106.2-30.34A16.07,16.07,0,0,0,248,170V86A16.07,16.07,0,0,0,236.4,70.65ZM96,120H80V62.94l40-5.72V198.78l-40-5.72V136H96a8,8,0,0,0,0-16ZM24,70.94l40-5.72V120H48a8,8,0,0,0,0,16H64v54.78l-40-5.72ZM136,197.39V58.61L232,86V170Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M237.5,66.8,131.3,36.46a12.07,12.07,0,0,0-5-.34l-105.13,15A20.1,20.1,0,0,0,4,70.94V185.06a20.1,20.1,0,0,0,17.17,19.8l105.13,15a12.15,12.15,0,0,0,1.7.12,12,12,0,0,0,3.3-.46L237.5,189.2A20.09,20.09,0,0,0,252,170V86A20.08,20.08,0,0,0,237.5,66.8ZM92,116H84V66.41l32-4.57V194.16l-32-4.57V140h8a12,12,0,0,0,0-24ZM28,74.41l32-4.57V116H52a12,12,0,0,0,0,24h8v46.16l-32-4.57ZM228,167l-88,25.14V63.91l88,25.14Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M236.4,70.65,130.2,40.31a8,8,0,0,0-3.33-.23L21.74,55.1A16.08,16.08,0,0,0,8,70.94V185.06A16.08,16.08,0,0,0,21.74,200.9l105.13,15A8.47,8.47,0,0,0,128,216a7.85,7.85,0,0,0,2.2-.31l106.2-30.34A16.07,16.07,0,0,0,248,170V86A16.07,16.07,0,0,0,236.4,70.65ZM64,120H48a8,8,0,0,0,0,16H64v54.78l-40-5.72V70.94l40-5.72Zm56,78.78-40-5.72V136H96a8,8,0,0,0,0-16H80V62.94l40-5.72Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M240,86V170a8,8,0,0,1-5.8,7.69L128,208V48L234.2,78.34A8,8,0,0,1,240,86Z" opacity="0.2"/><path d="M236.4,70.65,130.2,40.31a8,8,0,0,0-3.33-.23L21.74,55.1A16.08,16.08,0,0,0,8,70.94V185.06A16.08,16.08,0,0,0,21.74,200.9l105.13,15A8.47,8.47,0,0,0,128,216a7.85,7.85,0,0,0,2.2-.31l106.2-30.34A16.07,16.07,0,0,0,248,170V86A16.07,16.07,0,0,0,236.4,70.65ZM96,120H80V62.94l40-5.72V198.78l-40-5.72V136H96a8,8,0,0,0,0-16ZM24,70.94l40-5.72V120H48a8,8,0,0,0,0,16H64v54.78l-40-5.72ZM136,197.39V58.61L232,86V170Z"/>`,
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
      ${PhShippingContainer.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhShippingContainer };
