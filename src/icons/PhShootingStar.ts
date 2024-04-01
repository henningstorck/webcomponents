/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-shooting-star": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-shooting-star": IconAttrs;
    }
  }
}

@customElement("ph-shooting-star")
class PhShootingStar extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M235.55,71.3a9.44,9.44,0,0,0-8.28-6.51L187.9,61.68,172.75,25.77a9.51,9.51,0,0,0-17.49,0L140.1,61.68l-39.36,3.11a9.39,9.39,0,0,0-5.4,16.53l30,25.28-9.14,37.79a9.24,9.24,0,0,0,3.58,9.75,9.52,9.52,0,0,0,10.56.48L164,134.32l33.72,20.3a9.52,9.52,0,0,0,10.56-.48,9.24,9.24,0,0,0,3.58-9.75l-9.15-37.79,29.95-25.28A9.34,9.34,0,0,0,235.55,71.3Zm-8.05,3.91-31.84,26.87a4,4,0,0,0-1.31,4l9.73,40.19a1.28,1.28,0,0,1-.53,1.42,1.5,1.5,0,0,1-1.71.07l-35.77-21.53a4,4,0,0,0-4.13,0l-35.78,21.53a1.48,1.48,0,0,1-1.7-.07,1.3,1.3,0,0,1-.54-1.42l9.73-40.19a4,4,0,0,0-1.31-4L100.51,75.21a1.29,1.29,0,0,1-.44-1.46,1.4,1.4,0,0,1,1.3-1l41.79-3.3A4,4,0,0,0,146.53,67l16.1-38.15a1.51,1.51,0,0,1,2.75,0L181.48,67a4,4,0,0,0,3.37,2.43l41.79,3.3a1.39,1.39,0,0,1,1.29,1A1.27,1.27,0,0,1,227.5,75.21ZM85.28,120.38,26.83,178.83a4,4,0,0,1-5.66-5.66l58.45-58.45a4,4,0,0,1,5.66,5.66Zm10.81,55.53a4,4,0,0,1,0,5.65L42.83,234.83a4,4,0,0,1-5.66-5.66l53.27-53.26A4,4,0,0,1,96.09,175.91Zm73-1a4,4,0,0,1,0,5.66l-54.28,54.28a4,4,0,0,1-5.66-5.66l54.29-54.28A4,4,0,0,1,169.11,174.89Z"/>`,
    ],
    [
      "light",
      svg`<path d="M237.45,70.69a11.42,11.42,0,0,0-10-7.9l-38.16-3L174.59,25a11.51,11.51,0,0,0-21.18,0L138.73,59.78l-38.15,3a11.39,11.39,0,0,0-6.53,20.06l29,24.48-8.86,36.59a11.35,11.35,0,0,0,4.34,11.83,11.51,11.51,0,0,0,12.78.58L164,136.66l32.69,19.67a11.5,11.5,0,0,0,12.77-.58,11.33,11.33,0,0,0,4.34-11.83L205,107.33l29-24.48A11.32,11.32,0,0,0,237.45,70.69Zm-43.08,29.87a6,6,0,0,0-2,6l9.41,38.86L167.1,124.52a6,6,0,0,0-6.19,0l-34.72,20.89,9.41-38.86a6,6,0,0,0-2-6L102.94,74.65l40.37-3.19a6,6,0,0,0,5.06-3.65l15.63-37,15.63,37a6,6,0,0,0,5.06,3.65l40.37,3.19ZM86.69,121.79,28.24,180.24a6,6,0,0,1-8.48-8.48l58.45-58.45a6,6,0,0,1,8.48,8.48Zm10.82,52.7a6,6,0,0,1,0,8.49L44.24,236.24a6,6,0,0,1-8.48-8.48L89,174.49A6,6,0,0,1,97.51,174.49Zm73-1a6,6,0,0,1,0,8.48l-54.29,54.28a6,6,0,0,1-8.48-8.48L162,173.48A6,6,0,0,1,170.53,173.48Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M239.35,70.08a13.41,13.41,0,0,0-11.77-9.28l-36.94-2.92L176.43,24.22a13.51,13.51,0,0,0-24.86,0L137.36,57.88,100.42,60.8a13.39,13.39,0,0,0-7.66,23.58l28.06,23.68-8.56,35.39a13.32,13.32,0,0,0,5.1,13.91,13.51,13.51,0,0,0,15,.69L164,139l31.65,19.06a13.54,13.54,0,0,0,15-.69,13.34,13.34,0,0,0,5.09-13.91l-8.56-35.39,28.06-23.68A13.32,13.32,0,0,0,239.35,70.08ZM193.08,99a8,8,0,0,0-2.61,8l8.28,34.21L168.13,122.8a8,8,0,0,0-8.25,0l-30.62,18.43L137.54,107a8,8,0,0,0-2.62-8L108,76.26l35.52-2.81a8,8,0,0,0,6.74-4.87L164,35.91l13.79,32.67a8,8,0,0,0,6.74,4.87l35.53,2.81Zm-105,24.18L29.66,181.66a8,8,0,0,1-11.32-11.32l58.45-58.45a8,8,0,0,1,11.32,11.32Zm10.81,49.87a8,8,0,0,1,0,11.31L45.66,237.66a8,8,0,0,1-11.32-11.32l53.27-53.26A8,8,0,0,1,98.92,173.08Zm73-1a8,8,0,0,1,0,11.32l-54.28,54.28a8,8,0,0,1-11.32-11.32l54.29-54.28A8,8,0,0,1,171.94,172.06Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M243.16,68.85a17.4,17.4,0,0,0-15.26-12l-34.52-2.72L180.12,22.66a17.52,17.52,0,0,0-32.24,0L134.62,54.09l-34.51,2.72a17.39,17.39,0,0,0-9.93,30.62l26.17,22.1-8,33a17.46,17.46,0,0,0,26,19L164,143.66l29.59,17.81a17.46,17.46,0,0,0,26-19l-8-33,26.17-22.1A17.3,17.3,0,0,0,243.16,68.85ZM190.5,96a12,12,0,0,0-3.92,12l6,24.91-22.41-13.5a12.06,12.06,0,0,0-12.38,0l-22.41,13.5,6-24.91a12,12,0,0,0-3.93-12L118,79.48l25.83-2a12,12,0,0,0,10.11-7.3L164,46.2l10.11,23.94a12,12,0,0,0,10.11,7.3l25.82,2Zm-158,88.52a12,12,0,0,1-17-17l51.76-51.75a12,12,0,0,1,17,17Zm63.59-8.57a12,12,0,0,1,0,17l-47.59,47.6a12,12,0,0,1-17-17l47.6-47.59A12,12,0,0,1,96.08,175.92Zm62.44,9.56a12,12,0,0,1,0,17l-38,38a12,12,0,0,1-17-17l38-38A12,12,0,0,1,158.52,185.48Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M235.24,84.38l-28.06,23.68,8.56,35.39a13.34,13.34,0,0,1-5.09,13.91,13.54,13.54,0,0,1-15,.69L164,139l-31.65,19.06a13.51,13.51,0,0,1-15-.69,13.32,13.32,0,0,1-5.1-13.91l8.56-35.39L92.76,84.38a13.39,13.39,0,0,1,7.66-23.58l36.94-2.92,14.21-33.66a13.51,13.51,0,0,1,24.86,0l14.21,33.66,36.94,2.92a13.39,13.39,0,0,1,7.66,23.58ZM88.11,111.89a8,8,0,0,0-11.32,0L18.34,170.34a8,8,0,0,0,11.32,11.32l58.45-58.45A8,8,0,0,0,88.11,111.89Zm-.5,61.19L34.34,226.34a8,8,0,0,0,11.32,11.32l53.26-53.27a8,8,0,0,0-11.31-11.31Zm73-1-54.29,54.28a8,8,0,0,0,11.32,11.32l54.28-54.28a8,8,0,0,0-11.31-11.32Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M230.08,78.26l-31.84,26.88L208,145.33a5.46,5.46,0,0,1-8.19,5.86L164,129.66l-35.78,21.53a5.46,5.46,0,0,1-8.19-5.86l9.73-40.19L97.92,78.26a5.38,5.38,0,0,1,3.13-9.48l41.79-3.31,16.1-38.14a5.51,5.51,0,0,1,10.12,0l16.1,38.14L227,68.78A5.38,5.38,0,0,1,230.08,78.26Z" opacity="0.2"/><path d="M239.35,70.08a13.41,13.41,0,0,0-11.77-9.28l-36.94-2.92L176.43,24.22a13.51,13.51,0,0,0-24.86,0L137.36,57.88,100.42,60.8a13.39,13.39,0,0,0-7.66,23.58l28.06,23.68-8.56,35.39a13.32,13.32,0,0,0,5.1,13.91,13.51,13.51,0,0,0,15,.69L164,139l31.65,19.06a13.54,13.54,0,0,0,15-.69,13.34,13.34,0,0,0,5.09-13.91l-8.56-35.39,28.06-23.68A13.32,13.32,0,0,0,239.35,70.08ZM193.08,99a8,8,0,0,0-2.61,8l8.28,34.21L168.13,122.8a8,8,0,0,0-8.25,0l-30.62,18.43L137.54,107a8,8,0,0,0-2.62-8L108,76.26l35.52-2.81a8,8,0,0,0,6.74-4.87L164,35.91l13.79,32.67a8,8,0,0,0,6.74,4.87l35.53,2.81Zm-105,24.18L29.66,181.66a8,8,0,0,1-11.32-11.32l58.45-58.45a8,8,0,0,1,11.32,11.32Zm10.81,49.87a8,8,0,0,1,0,11.31L45.66,237.66a8,8,0,0,1-11.32-11.32l53.27-53.26A8,8,0,0,1,98.92,173.08Zm73-1a8,8,0,0,1,0,11.32l-54.28,54.28a8,8,0,0,1-11.32-11.32l54.29-54.28A8,8,0,0,1,171.94,172.06Z"/>`,
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
      ${PhShootingStar.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhShootingStar };
