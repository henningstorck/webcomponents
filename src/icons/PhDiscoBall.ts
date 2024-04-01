/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-disco-ball": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-disco-ball": IconAttrs;
    }
  }
}

@customElement("ph-disco-ball")
class PhDiscoBall extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M116,68.1V16a4,4,0,0,0-8,0V68.1a84,84,0,1,0,8,0ZM187.89,148h-40c-1-37.34-15.73-60.22-25.35-71.25A76.12,76.12,0,0,1,187.89,148ZM112,226.68C105,220,85.26,197.61,84.06,156h55.88C138.74,197.61,119,220,112,226.68ZM84.06,148c1.2-41.61,21-64,27.94-70.68,7,6.64,26.74,29.07,27.94,70.68Zm17.36-71.25c-9.62,11-24.35,33.91-25.35,71.25h-40A76.12,76.12,0,0,1,101.42,76.75ZM36.11,156h40c1,37.34,15.73,60.22,25.35,71.25A76.12,76.12,0,0,1,36.11,156Zm86.47,71.25c9.62-11,24.35-33.91,25.35-71.25h40A76.12,76.12,0,0,1,122.58,227.25ZM252,88a4,4,0,0,1-4,4H236v12a4,4,0,0,1-8,0V92H216a4,4,0,0,1,0-8h12V72a4,4,0,0,1,8,0V84h12A4,4,0,0,1,252,88ZM212,40a4,4,0,0,1-4,4H188V64a4,4,0,0,1-8,0V44H160a4,4,0,0,1,0-8h20V16a4,4,0,0,1,8,0V36h20A4,4,0,0,1,212,40Z"/>`,
    ],
    [
      "light",
      svg`<path d="M118,66.23V16a6,6,0,0,0-12,0V66.23a86,86,0,1,0,12,0ZM185.74,146H149.87c-1.3-32.59-13-54.15-22.36-66.35A74.15,74.15,0,0,1,185.74,146Zm-99.6,12h51.72c-1.63,37.69-18.33,58.46-25.86,66C104.46,216.45,87.77,195.67,86.14,158Zm0-12c1.63-37.69,18.33-58.46,25.86-66,7.54,7.51,24.23,28.29,25.86,66ZM96.49,79.65C87.11,91.85,75.43,113.41,74.13,146H38.26A74.15,74.15,0,0,1,96.49,79.65ZM38.26,158H74.13c1.3,32.59,13,54.15,22.36,66.35A74.15,74.15,0,0,1,38.26,158Zm89.25,66.35c9.38-12.2,21.06-33.76,22.36-66.35h35.87A74.15,74.15,0,0,1,127.51,224.35ZM254,88a6,6,0,0,1-6,6H238v10a6,6,0,0,1-12,0V94H216a6,6,0,0,1,0-12h10V72a6,6,0,0,1,12,0V82h10A6,6,0,0,1,254,88ZM208,46H190V64a6,6,0,0,1-12,0V46H160a6,6,0,0,1,0-12h18V16a6,6,0,0,1,12,0V34h18a6,6,0,0,1,0,12Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M120,64.37V16a8,8,0,0,0-16,0V64.37a88,88,0,1,0,16,0ZM183.54,144H151.77c-1.51-28.36-10.79-48.36-19.44-61.06A72.16,72.16,0,0,1,183.54,144Zm-95.3,16h47.52c-2,33.52-16.13,52.95-23.76,61.08C104.36,212.93,90.23,193.51,88.24,160Zm0-16c2-33.52,16.13-52.95,23.76-61.08,7.64,8.15,21.77,27.57,23.76,61.08Zm3.43-61.06C83,95.64,73.74,115.64,72.23,144H40.46A72.16,72.16,0,0,1,91.67,82.94ZM40.46,160H72.23c1.51,28.36,10.79,48.36,19.44,61.06A72.16,72.16,0,0,1,40.46,160Zm91.87,61.06c8.65-12.7,17.93-32.7,19.44-61.06h31.77A72.16,72.16,0,0,1,132.33,221.06ZM256,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,256,88ZM152,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H192V64a8,8,0,0,1-16,0V48H160A8,8,0,0,1,152,40Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M124,60.78V16a12,12,0,0,0-24,0V60.78a92,92,0,1,0,24,0ZM178.92,140h-23.4c-1.64-20.74-7.36-37-13.81-49.15A68.23,68.23,0,0,1,178.92,140ZM112,215c-7-8.62-17-25.09-19.45-51h38.9C129,189.9,119,206.37,112,215ZM92.55,140C95,114.1,105,97.63,112,89c7,8.62,17,25.09,19.45,51ZM82.29,90.85C75.84,103,70.12,119.26,68.48,140H45.08A68.23,68.23,0,0,1,82.29,90.85ZM45.08,164h23.4c1.64,20.74,7.36,37,13.81,49.15A68.23,68.23,0,0,1,45.08,164Zm96.63,49.15c6.45-12.15,12.17-28.41,13.81-49.15h23.4A68.23,68.23,0,0,1,141.71,213.15ZM256,88a12,12,0,0,1-12,12h-4v4a12,12,0,0,1-24,0v-4h-4a12,12,0,0,1,0-24h4V72a12,12,0,0,1,24,0v4h4A12,12,0,0,1,256,88ZM148,36a12,12,0,0,1,12-12h8V16a12,12,0,0,1,24,0v8h8a12,12,0,0,1,0,24h-8v8a12,12,0,0,1-24,0V48h-8A12,12,0,0,1,148,36Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M120,64.37V16a8,8,0,0,0-16,0V64.37a88,88,0,1,0,16,0ZM183.54,144H151.77c-1.51-28.36-10.79-48.36-19.44-61.06A72.16,72.16,0,0,1,183.54,144Zm-47.78,16c-2,33.52-16.13,52.95-23.76,61.08-7.64-8.15-21.77-27.57-23.76-61.08ZM91.67,82.94C83,95.64,73.74,115.64,72.23,144H40.46A72.16,72.16,0,0,1,91.67,82.94ZM40.46,160H72.23c1.51,28.36,10.79,48.36,19.44,61.06A72.16,72.16,0,0,1,40.46,160ZM256,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,256,88ZM152,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H192V64a8,8,0,0,1-16,0V48H160A8,8,0,0,1,152,40Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M192,152a80,80,0,0,1-80,80s32-24,32-80ZM112,72S80,96,80,152h64C144,96,112,72,112,72Z" opacity="0.2"/><path d="M120,64.37V16a8,8,0,0,0-16,0V64.37a88,88,0,1,0,16,0ZM183.54,144H151.77c-1.51-28.36-10.79-48.36-19.44-61.06A72.16,72.16,0,0,1,183.54,144Zm-95.3,16h47.52c-2,33.52-16.13,52.95-23.76,61.08C104.36,212.93,90.23,193.51,88.24,160Zm0-16c2-33.52,16.13-52.95,23.76-61.08,7.64,8.15,21.77,27.57,23.76,61.08Zm3.43-61.06C83,95.64,73.74,115.64,72.23,144H40.46A72.16,72.16,0,0,1,91.67,82.94ZM40.46,160H72.23c1.51,28.36,10.79,48.36,19.44,61.06A72.16,72.16,0,0,1,40.46,160Zm91.87,61.06c8.65-12.7,17.93-32.7,19.44-61.06h31.77A72.16,72.16,0,0,1,132.33,221.06ZM256,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,256,88ZM152,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H192V64a8,8,0,0,1-16,0V48H160A8,8,0,0,1,152,40Z"/>`,
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
      ${PhDiscoBall.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhDiscoBall };
