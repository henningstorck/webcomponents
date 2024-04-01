/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-push-pin": PhPushPin;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-push-pin": PhPushPin;
    }
  }
}

@customElement("ph-push-pin")
class PhPushPin extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M232.49,84.2,171.8,23.51a12,12,0,0,0-17,0L99.45,79.07c-8.08-3-32.79-9.45-59,11.67a12,12,0,0,0-1,17.84l51.13,51.13L45.17,205.17a4,4,0,0,0,5.66,5.66l45.46-45.47,51.12,51.12A12,12,0,0,0,155.9,220c.28,0,.57,0,.85,0a12,12,0,0,0,8.73-4.74c19.83-26.36,16.51-47.18,11.71-58.57l55.3-55.49A12,12,0,0,0,232.49,84.2Zm-5.66,11.31h0L169.56,153a4,4,0,0,0-.75,4.61c10.43,20.85-1.62,42-9.73,52.83a4,4,0,0,1-6,.4L45.17,102.93a4,4,0,0,1,.33-6C58.44,86.53,70.86,83.74,80.44,83.74A43.9,43.9,0,0,1,98.6,87.38a4,4,0,0,0,4.62-.75l57.27-57.46a4,4,0,0,1,5.66,0l60.68,60.69A4,4,0,0,1,226.83,95.51Z"/>`,
    ],
    [
      "light",
      svg`<path d="M233.91,82.79,173.22,22.1a14,14,0,0,0-19.81,0L98.93,76.77c-9.52-3.25-34-8.34-59.71,12.41A14,14,0,0,0,38.1,110l49.71,49.71-44.05,44a6,6,0,1,0,8.48,8.48l44.05-44.05L146,217.89a14,14,0,0,0,9.9,4.11q.49,0,1,0a14,14,0,0,0,10.19-5.54c19.72-26.21,17.15-47.23,12.46-59.3l54.37-54.55A14,14,0,0,0,233.91,82.79ZM225.42,94.1h0l-57.27,57.46a6,6,0,0,0-1.11,6.92c9.94,19.88-1.71,40.32-9.54,50.72a2,2,0,0,1-3,.2L46.58,101.51a2,2,0,0,1,.18-3c12.5-10.09,24.5-12.76,33.7-12.76a42.13,42.13,0,0,1,17.25,3.41A6,6,0,0,0,104.64,88L161.9,30.59a2,2,0,0,1,2.83,0l60.69,60.68A2,2,0,0,1,225.42,94.1Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M235.32,81.37,174.63,20.69a16,16,0,0,0-22.63,0L98.37,74.49c-10.66-3.34-35-7.37-60.4,13.14a16,16,0,0,0-1.29,23.78L85,159.71,42.34,202.34a8,8,0,0,0,11.32,11.32L96.29,171l48.29,48.29A16,16,0,0,0,155.9,224c.38,0,.75,0,1.13,0a15.93,15.93,0,0,0,11.64-6.33c19.64-26.1,17.75-47.32,13.19-60L235.33,104A16,16,0,0,0,235.32,81.37ZM224,92.69h0l-57.27,57.46a8,8,0,0,0-1.49,9.22c9.46,18.93-1.8,38.59-9.34,48.62L48,100.08c12.08-9.74,23.64-12.31,32.48-12.31A40.13,40.13,0,0,1,96.81,91a8,8,0,0,0,9.25-1.51L163.32,32,224,92.68Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M238.15,78.54,177.46,17.86a20,20,0,0,0-28.3,0L97.2,70c-12.43-3.33-36.68-5.72-61.74,14.5a20,20,0,0,0-1.6,29.73l45.46,45.47-39.8,39.8a12,12,0,0,0,17,17l39.8-39.81,45.47,45.46A20,20,0,0,0,155.91,228c.46,0,.93,0,1.4-.05A20,20,0,0,0,171.87,220c4.69-6.23,11-16.13,14.44-28s3.45-22.88.16-33.4l51.7-51.87A20,20,0,0,0,238.15,78.54Zm-74.26,68.79a12,12,0,0,0-2.23,13.84c3.43,6.86,6.9,21-6.28,40.65L54.08,100.53c21.09-14.59,39.53-6.64,41-6a11.67,11.67,0,0,0,13.81-2.29l54.43-54.61,55,55Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M235.33,104l-53.47,53.65c4.56,12.67,6.45,33.89-13.19,60A15.93,15.93,0,0,1,157,224c-.38,0-.75,0-1.13,0a16,16,0,0,1-11.32-4.69L96.29,171,53.66,213.66a8,8,0,0,1-11.32-11.32L85,159.71l-48.3-48.3A16,16,0,0,1,38,87.63c25.42-20.51,49.75-16.48,60.4-13.14L152,20.7a16,16,0,0,1,22.63,0l60.69,60.68A16,16,0,0,1,235.33,104Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M229.66,98.34,172.39,155.8c11.46,22.93-1.72,45.86-10.11,57a8,8,0,0,1-12,.83L42.34,105.76A8,8,0,0,1,43,93.85c29.65-23.92,57.4-10,57.4-10l57.27-57.46a8,8,0,0,1,11.31,0L229.66,87A8,8,0,0,1,229.66,98.34Z" opacity="0.2"/><path d="M235.32,81.37,174.63,20.69a16,16,0,0,0-22.63,0L98.37,74.49c-10.66-3.34-35-7.37-60.4,13.14a16,16,0,0,0-1.29,23.78L85,159.71,42.34,202.34a8,8,0,0,0,11.32,11.32L96.29,171l48.29,48.29A16,16,0,0,0,155.9,224c.38,0,.75,0,1.13,0a15.93,15.93,0,0,0,11.64-6.33c19.64-26.1,17.75-47.32,13.19-60L235.33,104A16,16,0,0,0,235.32,81.37ZM224,92.69h0l-57.27,57.46a8,8,0,0,0-1.49,9.22c9.46,18.93-1.8,38.59-9.34,48.62L48,100.08c12.08-9.74,23.64-12.31,32.48-12.31A40.13,40.13,0,0,1,96.81,91a8,8,0,0,0,9.25-1.51L163.32,32,224,92.68Z"/>`,
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
      ${PhPushPin.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhPushPin };
