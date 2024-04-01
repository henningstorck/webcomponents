/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-swatches": PhSwatches;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-swatches": PhSwatches;
    }
  }
}

@customElement("ph-swatches")
class PhSwatches extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M235.27,152.07,216.19,99.85a12,12,0,0,0-15.34-7.13l-74.3,26.92,13.27-75.83a12,12,0,0,0-9.68-13.9L75.47,20.19a11.75,11.75,0,0,0-8.89,2,11.9,11.9,0,0,0-4.94,7.77l-25,143.13A40,40,0,0,0,68.8,219.39,42.68,42.68,0,0,0,76,220H224a12,12,0,0,0,12-12V156.19A14,14,0,0,0,235.27,152.07Zm-31.7-51.83a4,4,0,0,1,5.1,2.36l19.09,52.21a3.9,3.9,0,0,1-.13,3,3.94,3.94,0,0,1-2.24,2L108.78,202.11a40,40,0,0,0,6-15.17L125,128.73ZM93.75,206.29a31.25,31.25,0,0,1-23.55,5.22,32,32,0,0,1-25.71-37.08l25-143.13a4,4,0,0,1,1.64-2.59A3.85,3.85,0,0,1,73.38,28a4,4,0,0,1,.69.06l54.67,9.73a4,4,0,0,1,3.2,4.64l-25,143.13h0A31.79,31.79,0,0,1,93.75,206.29ZM228,208a4,4,0,0,1-4,4H105l123-44.59ZM84,180a8,8,0,1,1-8-8A8,8,0,0,1,84,180Z"/>`,
    ],
    [
      "light",
      svg`<path d="M86,180a10,10,0,1,1-10-10A10,10,0,0,1,86,180Zm152-23.81V208a14,14,0,0,1-14,14H76a44.18,44.18,0,0,1-7.58-.65,42,42,0,0,1-33.81-48.64l25-143.13A13.94,13.94,0,0,1,75.82,18.22l54.67,9.72a14,14,0,0,1,11.3,16.21l-12.67,72.44,71-25.75a14,14,0,0,1,17.89,8.32l19.09,52.22A15.66,15.66,0,0,1,238,156.19Zm-133.07,29L130,42.08a2,2,0,0,0-1.58-2.32L73.72,30l-.34,0a1.84,1.84,0,0,0-1.07.35,2,2,0,0,0-.82,1.3l-25,143.13a30,30,0,0,0,24.09,34.76,29.25,29.25,0,0,0,22-4.89,29.81,29.81,0,0,0,12.33-19.44Zm8.25,13.17L224.71,158a2,2,0,0,0,1.11-1,1.86,1.86,0,0,0,.06-1.46l-19.09-52.21a2,2,0,0,0-2.53-1.17l-77.53,28.09-10,57.07A41.9,41.9,0,0,1,113.18,198.38ZM226,170.27,116.35,210H224a2,2,0,0,0,2-2Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M88,180a12,12,0,1,1-12-12A12,12,0,0,1,88,180Zm152-23.81V208a16,16,0,0,1-16,16H76a46.36,46.36,0,0,1-7.94-.68,44,44,0,0,1-35.43-50.95l25-143.13a15.94,15.94,0,0,1,18.47-13L130.84,26a16,16,0,0,1,12.92,18.52l-12.08,69L199.49,89a16,16,0,0,1,20.45,9.52L239,150.69A18.35,18.35,0,0,1,240,156.19ZM103,184.87,128,41.74,73.46,32l-25,143.1A28,28,0,0,0,70.9,207.57,27.29,27.29,0,0,0,91.46,203,27.84,27.84,0,0,0,103,184.87ZM116.78,195,224,156.11,204.92,104,128.5,131.7l-9.78,55.92A44.63,44.63,0,0,1,116.78,195ZM224,173.12,127.74,208H224Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M242.79,149.32,223.7,97.11A20,20,0,0,0,198.12,85.2l-61.31,22.22L147.7,45.18A20,20,0,0,0,131.55,22L76.87,12.31A19.94,19.94,0,0,0,53.76,28.55l-25,143.13A48,48,0,0,0,67.4,227.26a51.19,51.19,0,0,0,8.7.74H224a20,20,0,0,0,20-20V156.19A21.74,21.74,0,0,0,242.79,149.32ZM99,184.18a23.84,23.84,0,0,1-9.86,15.56,23.28,23.28,0,0,1-17.56,3.89,24,24,0,0,1-19.23-27.82L76.71,36.66,123.37,45,99,184.18Zm23.64,4.13,9.39-53.64,70.49-25.54,16.3,44.59-96.23,34.87C122.62,188.5,122.65,188.41,122.66,188.31ZM220,204H150.52L220,178.82ZM89.22,174.07l-1.4,8A12,12,0,0,1,76,192a12.35,12.35,0,0,1-2.08-.18,12,12,0,0,1-9.75-13.89l1.4-8a12,12,0,0,1,23.64,4.14Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M240,155.91a16,16,0,0,0-1-5.22L219.94,98.48A16,16,0,0,0,199.49,89l-67.81,24.57,12.08-69A16,16,0,0,0,130.84,26L76.17,16.25a15.94,15.94,0,0,0-18.47,13l-25,143.12A43.82,43.82,0,0,0,75.78,224H224a16,16,0,0,0,16-16ZM76,196a16,16,0,1,1,16-16A16,16,0,0,1,76,196Zm42.72-8.38,9.78-55.92L204.92,104,224,156.11,116.78,195A44.89,44.89,0,0,0,118.72,187.62ZM224,208H127.74L224,173.11Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M135.88,43.11l-25,143.14a35.71,35.71,0,0,1-41.34,29.2h0a36,36,0,0,1-28.95-41.71l25-143.13a8,8,0,0,1,9.19-6.49l54.67,9.73A8,8,0,0,1,135.88,43.11Z" opacity="0.2"/><path d="M88,180a12,12,0,1,1-12-12A12,12,0,0,1,88,180Zm152-23.81V208a16,16,0,0,1-16,16H76a46.36,46.36,0,0,1-7.94-.68,44,44,0,0,1-35.43-50.95l25-143.13a15.94,15.94,0,0,1,18.47-13L130.84,26a16,16,0,0,1,12.92,18.52l-12.08,69L199.49,89a16,16,0,0,1,20.45,9.52L239,150.69A18.35,18.35,0,0,1,240,156.19ZM103,184.87,128,41.74,73.46,32l-25,143.1A28,28,0,0,0,70.9,207.57,27.29,27.29,0,0,0,91.46,203,27.84,27.84,0,0,0,103,184.87ZM116.78,195,224,156.11,204.92,104,128.5,131.7l-9.78,55.92A44.63,44.63,0,0,1,116.78,195ZM224,173.12,127.74,208H224Z"/>`,
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
      ${PhSwatches.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhSwatches };
