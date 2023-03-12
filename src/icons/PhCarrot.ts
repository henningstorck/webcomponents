/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { IconWeight } from "../types";

@customElement("ph-carrot")
export default class PhCarrot extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M232,68H193.66l33.17-33.17a4,4,0,1,0-5.66-5.66L188,62.34V24a4,4,0,0,0-8,0V64a60,60,0,0,0-78.39,5.54l0,0h0c-17.12,16.79-34.51,45.72-51.7,86-11.93,28-19.61,52-20.59,55.09A12.05,12.05,0,0,0,40,228a12,12,0,0,0,5.36-1.28c3.12-1,27.13-8.65,55.09-20.59,40.29-17.2,69.24-34.61,86-51.71A60,60,0,0,0,192,76h40a4,4,0,0,0,0-8Zm-51.26,80.79c-9.76,10-23.42,19.39-38.37,27.91l-27.54-27.53a4,4,0,0,0-5.65,5.65l25.9,25.91C92.61,203.55,43.34,219,42.64,219.18a4.45,4.45,0,0,0-.71.3,4,4,0,0,1-5.41-5.41,4.45,4.45,0,0,0,.3-.71c.29-1,29.72-95,67.62-135.27l36.74,36.73a4,4,0,0,0,5.65,0,4,4,0,0,0,0-5.65L110.18,72.52a52,52,0,0,1,70.56,76.27Z"/>`,
    ],
    [
      "light",
      svg`<path d="M232,66H198.48l29.76-29.76a6,6,0,1,0-8.48-8.48L190,57.52V24a6,6,0,0,0-12,0V60.15a62,62,0,0,0-77.8,8l0,0h0C60.17,107.4,30.05,201.45,27.38,210a14,14,0,0,0,18.67,18.67c8.5-2.67,102.62-32.81,141.79-72.77a62,62,0,0,0,8-77.84H232a6,6,0,0,0,0-12Zm-52.69,81.41C170,157,157,166,142.69,174.24l-26.46-26.47a6,6,0,1,0-8.49,8.49l24,24c-41.69,22-89,36.82-89.73,37a6.57,6.57,0,0,0-1.06.44,2,2,0,0,1-2.7-2.7A6.57,6.57,0,0,0,38.7,214C39,213,67.55,121.72,104.48,81l35.27,35.26a6,6,0,1,0,8.48-8.48l-35.1-35.1a50,50,0,0,1,66.18,74.74Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M232,64H203.31l26.35-26.34a8,8,0,0,0-11.32-11.32L192,52.69V24a8,8,0,0,0-16,0V56.57a64,64,0,0,0-77.2,10.12l0,0,0,0,0,0c-40.1,39.39-70.25,133.08-73.19,142.45a16,16,0,0,0,21.26,21.26c9.37-2.94,103.18-33.13,142.47-73.21A64,64,0,0,0,199.43,80H232a8,8,0,0,0,0-16Zm-54.12,82c-8.94,9.12-21.25,17.8-34.85,25.73l-25.38-25.39a8,8,0,0,0-11.32,11.32l22.09,22.09c-40.87,21.19-86.32,35.42-87,35.63A7.93,7.93,0,0,0,40,216a7.93,7.93,0,0,0,.59-1.41c.29-.93,28-89.58,64-130.67l33.77,33.77a8,8,0,0,0,11.32-11.32L116.18,72.88A48,48,0,0,1,177.88,146Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M232,60H213l19.51-19.51a12,12,0,1,0-17-17L196,43V24a12,12,0,0,0-24,0V50A68,68,0,0,0,96,63.87l0,0h0l0,0C55.45,103.68,25.18,197,21.78,207.77A20,20,0,0,0,40,236a20.12,20.12,0,0,0,8.24-1.78c7.64-2.42,56.79-18.34,98.91-41.82l.54-.3c17.1-9.57,33-20.39,44.44-32A68,68,0,0,0,206,84h26a12,12,0,0,0,0-24Zm-56.89,83.12-.09.09c-8.11,8.28-19.11,16.2-31.33,23.52l-23.21-23.21a12,12,0,1,0-17,17l18.22,18.22c-30.29,15.17-62.13,26.42-75.26,30.82,6.77-20.22,29.79-84.8,58.34-119.74l30.7,30.7a12,12,0,1,0,17-17L122.54,73.58a44,44,0,0,1,52.57,69.54Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M232,80H199.44a64,64,0,0,1-10.19,77.26c-8.52,8.69-19.61,16.92-31.85,24.51a4,4,0,0,1-4.91-.59l-34.84-34.84a8,8,0,0,0-11.49.18,8.23,8.23,0,0,0,.41,11.38l29.88,29.88a4,4,0,0,1-1,6.39C95.74,214.79,53,228.54,46.78,230.48a16,16,0,0,1-21.26-21.26c2.73-8.71,29-90.27,64.86-133.35a4,4,0,0,1,5.9-.26l42.05,42.06a8,8,0,0,0,11.71-.43,8.19,8.19,0,0,0-.6-11.1L108.08,64.78a4,4,0,0,1,.63-6.18,64,64,0,0,1,67.28-2V24a8,8,0,0,1,8.54-8A8.18,8.18,0,0,1,192,24.28V52.69l26.34-26.35a8,8,0,0,1,11.32,11.32L203.31,64h28.41A8.18,8.18,0,0,1,240,71.47,8,8,0,0,1,232,80Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M183.6,151.6C144,192,43.81,223,43.81,223A8,8,0,0,1,33,212.19S64,112,104.4,72.4a56,56,0,0,1,79.2,79.2Z" opacity="0.2"/><path d="M232,64H203.31l26.35-26.34a8,8,0,0,0-11.32-11.32L192,52.69V24a8,8,0,0,0-16,0V56.57a64,64,0,0,0-77.2,10.12l0,0,0,0,0,0c-40.1,39.39-70.25,133.08-73.19,142.45a16,16,0,0,0,21.26,21.26c9.37-2.94,103.18-33.13,142.47-73.21A64,64,0,0,0,199.43,80H232a8,8,0,0,0,0-16Zm-54.12,82c-8.94,9.12-21.25,17.8-34.85,25.73l-25.38-25.39a8,8,0,0,0-11.32,11.32l22.09,22.09c-40.87,21.19-86.32,35.42-87,35.63A7.93,7.93,0,0,0,40,216a7.93,7.93,0,0,0,.59-1.41c.29-.93,28-89.58,64-130.67l33.77,33.77a8,8,0,0,0,11.32-11.32L116.18,72.88A48,48,0,0,1,177.88,146Z"/>`,
    ],
  ]);

  @property({ type: String })
  size: string | number = "1em";

  @property({ type: String })
  weight: IconWeight = "regular";

  @property({ type: String })
  color: string = "regular";

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
      ${PhCarrot.weightsMap.get(this.weight)}
    </svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-carrot": PhCarrot;
  }
}
