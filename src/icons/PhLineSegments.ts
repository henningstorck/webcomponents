/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-line-segments": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-line-segments": IconAttrs;
    }
  }
}

@customElement("ph-line-segments")
class PhLineSegments extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M235.81,36.19a28,28,0,0,0-39.6,0h0a28,28,0,0,0,0,39.6,26.62,26.62,0,0,0,3.14,2.71l-29.73,55.21a28.08,28.08,0,0,0-26.38,3.87l-24.82-24.82A28,28,0,0,0,76.2,76.19h0a28,28,0,0,0,3.14,42.31L49.6,173.72a28,28,0,0,0-29.41,6.49h0a28,28,0,1,0,39.6,0,28.63,28.63,0,0,0-3.14-2.71l29.73-55.21a28,28,0,0,0,26.38-3.87l24.82,24.82a28,28,0,1,0,39.09-5.74L206.4,82.28a28,28,0,0,0,29.41-46.09Zm-181.68,178a20,20,0,1,1,0-28.28A20,20,0,0,1,54.13,214.15Zm27.72-104a20,20,0,1,1,28.29,0h0A20,20,0,0,1,81.85,110.14Zm92.3,64a20,20,0,1,1,0-28.29A20,20,0,0,1,174.15,174.15Zm56-104a20,20,0,1,1,0-28.29A20,20,0,0,1,230.15,70.14Z"/>`,
    ],
    [
      "light",
      svg`<path d="M237.23,34.77a30.06,30.06,0,0,0-42.44,0h0a30.06,30.06,0,0,0,0,42.44c.65.64,1.32,1.24,2,1.81l-28.14,52.26A30.11,30.11,0,0,0,143.46,135L121,112.54A30,30,0,0,0,74.78,74.78h0a30,30,0,0,0,0,42.43,26.28,26.28,0,0,0,2,1.82L48.64,171.29a30,30,0,0,0-29.87,7.5h0a30,30,0,1,0,42.44,0c-.65-.64-1.32-1.24-2-1.81l28.14-52.26A30.07,30.07,0,0,0,112.54,121L135,143.46a30,30,0,1,0,46.25-4.67,26.28,26.28,0,0,0-2-1.82l28.14-52.26a30,30,0,0,0,29.87-49.94Zm-184.51,178a18,18,0,1,1,0-25.46A18,18,0,0,1,52.72,212.74Zm30.55-104a18,18,0,1,1,25.46,0A18,18,0,0,1,83.27,108.73Zm89.46,64a18,18,0,1,1,0-25.46A18,18,0,0,1,172.73,172.73Zm56-104a18,18,0,1,1,0-25.46A18,18,0,0,1,228.74,68.72Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M238.64,33.36a32,32,0,0,0-45.26,0h0a32,32,0,0,0,0,45.26c.29.29.6.57.9.85l-26.63,49.46a32.19,32.19,0,0,0-23.9,3.5l-20.18-20.18a32,32,0,0,0-50.2-38.89h0a32,32,0,0,0,0,45.26c.29.29.59.57.89.85L47.63,168.94a32,32,0,0,0-30.27,8.44h0a32,32,0,1,0,45.26,0c-.29-.29-.6-.57-.9-.85l26.63-49.46A32.4,32.4,0,0,0,96,128a32,32,0,0,0,16.25-4.41l20.18,20.18a32,32,0,1,0,50.2-6.38c-.29-.29-.59-.57-.89-.85l26.63-49.46A32.33,32.33,0,0,0,216,88a32,32,0,0,0,22.63-54.62ZM51.3,211.33a16,16,0,0,1-22.63-22.64h0A16,16,0,1,1,51.3,211.33Zm33.38-104a16,16,0,0,1,0-22.63h0a16,16,0,1,1,0,22.63Zm86.64,64a16,16,0,0,1-22.63-22.63h0a16,16,0,0,1,22.63,22.63Zm56-104A16,16,0,1,1,204.7,44.67h0a16,16,0,0,1,22.63,22.64Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M241.47,30.53a36,36,0,0,0-50.92,0h0a36.06,36.06,0,0,0-1.2,49.66l-23.83,44.26a36.08,36.08,0,0,0-21,3.07l-16-16a36,36,0,0,0-57.94-41h0a36,36,0,0,0-1.2,49.66L45.5,164.45a36,36,0,0,0-31,10.1h0a36,36,0,1,0,52.12,1.26l23.83-44.26A35.21,35.21,0,0,0,96,132a36.07,36.07,0,0,0,15.51-3.5l16,16a36,36,0,1,0,59.14-8.68L210.5,91.55A36.32,36.32,0,0,0,216,92a36,36,0,0,0,25.46-61.45Zm-154,57a12,12,0,0,1,17,17h0a12,12,0,0,1-17-17Zm-39,121a12,12,0,1,1,0-17A12,12,0,0,1,48.47,208.5Zm120-40a12,12,0,1,1,0-17A12,12,0,0,1,168.49,168.49Zm56-104a12,12,0,1,1,0-17A12,12,0,0,1,224.5,64.48Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M235.81,75.79A27.91,27.91,0,0,1,216,84a28.49,28.49,0,0,1-5.67-.58l-30.57,56.77,0,0a28,28,0,1,1-44.43,6.49l-26.06-26.06A28.07,28.07,0,0,1,96,124a28.41,28.41,0,0,1-5.67-.58L59.76,180.18l0,0a28,28,0,1,1-39.6,0h0a28,28,0,0,1,25.47-7.61l30.57-56.77,0,0a28.05,28.05,0,0,1,0-39.61h0a28,28,0,0,1,44.43,33.12l26.06,26.06a28.1,28.1,0,0,1,19-2.77l30.57-56.77,0,0a28,28,0,0,1,0-39.6h0a28,28,0,0,1,39.6,39.6Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M57,183A24,24,0,1,1,23,183,24,24,0,0,1,57,183ZM79,79A24,24,0,1,0,113,79,24,24,0,0,0,79,79Zm64,64A24,24,0,1,0,177,143,24,24,0,0,0,143,143ZM233,39A24,24,0,1,0,233,73,24,24,0,0,0,233,39Z" opacity="0.2"/><path d="M238.64,33.36a32,32,0,0,0-45.26,0h0a32,32,0,0,0,0,45.26c.29.29.6.57.9.85l-26.63,49.46a32.19,32.19,0,0,0-23.9,3.5l-20.18-20.18a32,32,0,0,0-50.2-38.89h0a32,32,0,0,0,0,45.26c.29.29.59.57.89.85L47.63,168.94a32,32,0,0,0-30.27,8.44h0a32,32,0,1,0,45.26,0c-.29-.29-.6-.57-.9-.85l26.63-49.46A32.4,32.4,0,0,0,96,128a32,32,0,0,0,16.25-4.41l20.18,20.18a32,32,0,1,0,50.2-6.38c-.29-.29-.59-.57-.89-.85l26.63-49.46A32.33,32.33,0,0,0,216,88a32,32,0,0,0,22.63-54.62ZM51.3,211.33a16,16,0,0,1-22.63-22.64h0A16,16,0,1,1,51.3,211.33Zm33.38-104a16,16,0,0,1,0-22.63h0a16,16,0,1,1,0,22.63Zm86.64,64a16,16,0,0,1-22.63-22.63h0a16,16,0,0,1,22.63,22.63Zm56-104A16,16,0,1,1,204.7,44.67h0a16,16,0,0,1,22.63,22.64Z"/>`,
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
      ${PhLineSegments.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhLineSegments };
