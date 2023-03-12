/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { IconWeight } from "../types";

@customElement("ph-circle-dashed")
export default class PhCircleDashed extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M155.87,36.06a4,4,0,0,1-3.87,3,4.29,4.29,0,0,1-1-.13,92,92,0,0,0-46,0,4,4,0,0,1-2-7.74,100.09,100.09,0,0,1,50,0A4,4,0,0,1,155.87,36.06ZM56.65,57.94a100.18,100.18,0,0,0-25,43.29,4,4,0,0,0,7.71,2.14,92.06,92.06,0,0,1,23-39.82,4,4,0,1,0-5.7-5.61ZM39.36,152.62a4,4,0,0,0-7.71,2.14,100.08,100.08,0,0,0,25,43.31,4,4,0,1,0,5.71-5.61A91.91,91.91,0,0,1,39.36,152.62ZM151,217.09a92,92,0,0,1-46,0,4,4,0,0,0-2,7.75,100,100,0,0,0,50,0,4,4,0,1,0-2-7.74Zm70.58-67.25a4,4,0,0,0-4.92,2.79,92.12,92.12,0,0,1-23,39.82,4,4,0,1,0,5.7,5.61,100.18,100.18,0,0,0,25-43.29A4,4,0,0,0,221.58,149.84Zm-4.94-46.46a4,4,0,0,0,7.71-2.14,100.08,100.08,0,0,0-25-43.31,4,4,0,1,0-5.71,5.61A91.91,91.91,0,0,1,216.64,103.38Z"/>`,
    ],
    [
      "light",
      svg`<path d="M98.19,36.54a6,6,0,0,1,4.3-7.31,102.12,102.12,0,0,1,51,0,6,6,0,0,1-3,11.62,90,90,0,0,0-45,0A6,6,0,0,1,98.19,36.54Zm-43,20A102.07,102.07,0,0,0,29.7,100.7a6,6,0,0,0,4.19,7.38,5.88,5.88,0,0,0,1.6.22,6,6,0,0,0,5.78-4.4A90,90,0,0,1,63.78,65a6,6,0,1,0-8.56-8.41ZM41.28,152.09a6,6,0,1,0-11.56,3.2,102,102,0,0,0,25.49,44.18,6,6,0,0,0,8.55-8.41A90.11,90.11,0,0,1,41.28,152.09Zm109.21,63.06a90,90,0,0,1-45,0,6,6,0,1,0-3,11.62,102.16,102.16,0,0,0,51,0,6,6,0,0,0-3-11.62Zm71.62-67.23a6,6,0,0,0-7.38,4.18,90,90,0,0,1-22.51,39,6,6,0,1,0,8.56,8.41A102.12,102.12,0,0,0,226.3,155.3,6,6,0,0,0,222.11,147.92Zm-7.39-44a6,6,0,0,0,5.78,4.4,5.88,5.88,0,0,0,1.6-.22,6,6,0,0,0,4.18-7.38,102,102,0,0,0-25.49-44.18,6,6,0,0,0-8.55,8.41A90.05,90.05,0,0,1,214.72,103.91Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M96.26,37.05A8,8,0,0,1,102,27.29a104.11,104.11,0,0,1,52,0,8,8,0,0,1-2,15.75,8.15,8.15,0,0,1-2-.26,88.09,88.09,0,0,0-44,0A8,8,0,0,1,96.26,37.05ZM53.79,55.14a104.05,104.05,0,0,0-26,45,8,8,0,0,0,15.42,4.27,88,88,0,0,1,22-38.09A8,8,0,0,0,53.79,55.14ZM43.21,151.55a8,8,0,1,0-15.42,4.28,104.12,104.12,0,0,0,26,45,8,8,0,0,0,11.41-11.22A88.14,88.14,0,0,1,43.21,151.55ZM150,213.22a88,88,0,0,1-44,0,8,8,0,1,0-4,15.49,104.11,104.11,0,0,0,52,0,8,8,0,0,0-4-15.49ZM222.65,146a8,8,0,0,0-9.85,5.58,87.91,87.91,0,0,1-22,38.08,8,8,0,1,0,11.42,11.21,104,104,0,0,0,26-45A8,8,0,0,0,222.65,146Zm-9.86-41.54a8,8,0,0,0,15.42-4.28,104,104,0,0,0-26-45,8,8,0,1,0-11.41,11.22A88,88,0,0,1,212.79,104.45Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M92.38,38.05A12,12,0,0,1,101,23.42a108,108,0,0,1,54,0,12,12,0,1,1-6,23.23,84.11,84.11,0,0,0-42,0A12,12,0,0,1,92.38,38.05ZM50.94,52.34a108.1,108.1,0,0,0-27,46.76,12,12,0,0,0,8.37,14.77,12.2,12.2,0,0,0,3.2.43,12,12,0,0,0,11.56-8.8,84,84,0,0,1,21-36.35A12,12,0,1,0,50.94,52.34Zm-3.88,98.14a12,12,0,0,0-23.12,6.42,108,108,0,0,0,27,46.78A12,12,0,0,0,68,186.85,84,84,0,0,1,47.06,150.48ZM149,209.35a84,84,0,0,1-42,0,12,12,0,1,0-6,23.23,108,108,0,0,0,54,0,12,12,0,1,0-6-23.23Zm74.72-67.22A12,12,0,0,0,209,150.5a84,84,0,0,1-21,36.35,12,12,0,0,0,17.12,16.82,108.19,108.19,0,0,0,27-46.77A12,12,0,0,0,223.71,142.13Zm-14.77-36.61a12,12,0,0,0,23.12-6.42,108,108,0,0,0-27-46.78A12,12,0,1,0,188,69.15,84,84,0,0,1,208.94,105.52Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm54.59,45a8,8,0,0,1,11.29.7,88,88,0,0,1,17.6,30.47,8,8,0,0,1-15.18,5.08,71.87,71.87,0,0,0-14.4-25A8,8,0,0,1,182.59,69ZM73.41,187.05a8,8,0,0,1-11.29-.7,88,88,0,0,1-17.6-30.47A8,8,0,1,1,59.7,150.8a71.87,71.87,0,0,0,14.4,24.95A8,8,0,0,1,73.41,187.05Zm.69-106.8a71.87,71.87,0,0,0-14.4,25,8,8,0,1,1-15.18-5.08,88,88,0,0,1,17.6-30.47,8,8,0,1,1,12,10.6Zm71.49,134a87.8,87.8,0,0,1-35.18,0,8,8,0,0,1,3.18-15.68,72.08,72.08,0,0,0,28.82,0,8,8,0,0,1,3.18,15.68Zm6.25-163A8,8,0,0,1,144,57.61a7.89,7.89,0,0,1-1.6-.16,72.08,72.08,0,0,0-28.82,0,8,8,0,1,1-3.18-15.68,87.92,87.92,0,0,1,35.18,0A8,8,0,0,1,151.84,51.2Zm59.64,104.68a88,88,0,0,1-17.6,30.47,8,8,0,1,1-12-10.6,71.87,71.87,0,0,0,14.4-24.95,8,8,0,0,1,15.18,5.08Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"/><path d="M96.26,37A8,8,0,0,1,102,27.29a104.11,104.11,0,0,1,52,0,8,8,0,0,1-2,15.75,8.15,8.15,0,0,1-2-.26,88.09,88.09,0,0,0-44,0A8,8,0,0,1,96.26,37ZM53.79,55.14a104,104,0,0,0-26,45,8,8,0,1,0,15.42,4.26,87.91,87.91,0,0,1,22-38.08A8,8,0,0,0,53.79,55.14ZM43.21,151.55a8,8,0,1,0-15.42,4.28,104,104,0,0,0,26,45,8,8,0,1,0,11.41-11.21A88.14,88.14,0,0,1,43.21,151.55ZM150,213.22a88,88,0,0,1-44,0,8,8,0,1,0-4,15.49,104.11,104.11,0,0,0,52,0,8,8,0,0,0-4-15.49ZM222.65,146a8,8,0,0,0-9.85,5.57,87.88,87.88,0,0,1-22,38.09,8,8,0,1,0,11.42,11.21,104.05,104.05,0,0,0,26-45A8,8,0,0,0,222.65,146Zm-9.86-41.54a8,8,0,0,0,15.42-4.28,104,104,0,0,0-26-45,8,8,0,1,0-11.41,11.21A88.14,88.14,0,0,1,212.79,104.45Z"/>`,
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
      ${PhCircleDashed.weightsMap.get(this.weight)}
    </svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-circle-dashed": PhCircleDashed;
  }
}
