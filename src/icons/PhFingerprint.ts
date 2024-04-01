/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-fingerprint": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-fingerprint": IconAttrs;
    }
  }
}

@customElement("ph-fingerprint")
class PhFingerprint extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M68,128A130.71,130.71,0,0,1,54.27,186.7a4,4,0,0,1-3.58,2.22,3.91,3.91,0,0,1-1.78-.42,4,4,0,0,1-1.8-5.36A122.71,122.71,0,0,0,60,128,67.74,67.74,0,0,1,85.5,74.92a4,4,0,0,1,5,6.25A59.74,59.74,0,0,0,68,128Zm60-4a4,4,0,0,0-4,4,188.1,188.1,0,0,1-23.48,91,4,4,0,0,0,7,3.88A196.22,196.22,0,0,0,132,128,4,4,0,0,0,128,124Zm0-32a36,36,0,0,0-36,36,4,4,0,0,0,8,0,28,28,0,0,1,56,0,218,218,0,0,1-20.9,93.7,4,4,0,1,0,7.24,3.41A226,226,0,0,0,164,128,36,36,0,0,0,128,92Zm0-64A100.11,100.11,0,0,0,28,128a91.66,91.66,0,0,1-5.24,30.67,4,4,0,1,0,7.54,2.66A99.66,99.66,0,0,0,36,128a92,92,0,0,1,184,0,286.37,286.37,0,0,1-5.37,55.23,4,4,0,0,0,3.15,4.69,4.13,4.13,0,0,0,.78.08,4,4,0,0,0,3.92-3.23A294.25,294.25,0,0,0,228,128,100.11,100.11,0,0,0,128,28ZM93.6,156.09a4,4,0,0,0-4.71,3.12,155,155,0,0,1-17.66,46.64,4,4,0,0,0,6.93,4,163.13,163.13,0,0,0,18.57-49A4,4,0,0,0,93.6,156.09ZM128,60a68.79,68.79,0,0,0-8.5.53,4,4,0,0,0,1,7.93A62.57,62.57,0,0,1,128,68a60.07,60.07,0,0,1,60,60,256.15,256.15,0,0,1-1.95,31.5,4,4,0,0,0,3.47,4.47l.5,0a4,4,0,0,0,4-3.51A264.37,264.37,0,0,0,196,128,68.08,68.08,0,0,0,128,60Zm56.93,128.12a4,4,0,0,0-4.87,2.88c-1.49,5.78-3.21,11.58-5.1,17.23a4,4,0,1,0,7.58,2.54c2-5.83,3.73-11.81,5.27-17.77A4,4,0,0,0,184.94,188.13Z"/>`,
    ],
    [
      "light",
      svg`<path d="M70,128a132.68,132.68,0,0,1-14,59.58,6,6,0,0,1-5.38,3.33,6,6,0,0,1-5.36-8.67A120.74,120.74,0,0,0,58,128,69.72,69.72,0,0,1,84.25,73.36a6,6,0,0,1,7.51,9.37A57.73,57.73,0,0,0,70,128Zm58-6a6,6,0,0,0-6,6,186.07,186.07,0,0,1-23.23,90.07,6,6,0,0,0,10.5,5.82A198.14,198.14,0,0,0,134,128,6,6,0,0,0,128,122Zm0-32a38,38,0,0,0-38,38,6,6,0,0,0,12,0,26,26,0,0,1,52,0,216.06,216.06,0,0,1-20.71,92.85A6,6,0,1,0,144.16,226,227.94,227.94,0,0,0,166,128,38,38,0,0,0,128,90Zm0-64A102.11,102.11,0,0,0,26,128a90,90,0,0,1-5.12,30,6,6,0,1,0,11.31,4A101.83,101.83,0,0,0,38,128a90,90,0,0,1,180,0,284.7,284.7,0,0,1-5.33,54.84,6,6,0,0,0,4.72,7.05,6.8,6.8,0,0,0,1.17.11,6,6,0,0,0,5.88-4.84A295.92,295.92,0,0,0,230,128,102.12,102.12,0,0,0,128,26ZM94,154.13a6,6,0,0,0-7.07,4.69,152.82,152.82,0,0,1-17.44,46,6,6,0,0,0,10.4,6,164.77,164.77,0,0,0,18.8-49.65A6,6,0,0,0,94,154.13ZM128,58a70.76,70.76,0,0,0-8.75.54,6,6,0,1,0,1.49,11.91A58,58,0,0,1,186,128a252.27,252.27,0,0,1-1.94,31.26,6,6,0,0,0,5.21,6.69,6.59,6.59,0,0,0,.75,0,6,6,0,0,0,5.95-5.26A266.46,266.46,0,0,0,198,128,70.08,70.08,0,0,0,128,58ZM185.44,186.2a6,6,0,0,0-7.31,4.31c-1.47,5.74-3.18,11.49-5.06,17.09a6,6,0,0,0,11.38,3.82c2-5.88,3.75-11.9,5.3-17.92A6,6,0,0,0,185.44,186.2Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M72,128a134.63,134.63,0,0,1-14.16,60.47,8,8,0,1,1-14.32-7.12A118.8,118.8,0,0,0,56,128,71.73,71.73,0,0,1,83,71.8,8,8,0,1,1,93,84.29,55.76,55.76,0,0,0,72,128Zm56-8a8,8,0,0,0-8,8,184.12,184.12,0,0,1-23,89.1,8,8,0,0,0,14,7.76A200.19,200.19,0,0,0,136,128,8,8,0,0,0,128,120Zm0-32a40,40,0,0,0-40,40,8,8,0,0,0,16,0,24,24,0,0,1,48,0,214.09,214.09,0,0,1-20.51,92A8,8,0,1,0,146,226.83,230,230,0,0,0,168,128,40,40,0,0,0,128,88Zm0-64A104.11,104.11,0,0,0,24,128a87.76,87.76,0,0,1-5,29.33,8,8,0,0,0,15.09,5.33A103.9,103.9,0,0,0,40,128a88,88,0,0,1,176,0,282.24,282.24,0,0,1-5.29,54.45,8,8,0,0,0,6.3,9.4,8.22,8.22,0,0,0,1.55.15,8,8,0,0,0,7.84-6.45A298.37,298.37,0,0,0,232,128,104.12,104.12,0,0,0,128,24ZM94.4,152.17A8,8,0,0,0,85,158.42a151,151,0,0,1-17.21,45.44,8,8,0,0,0,13.86,8,166.67,166.67,0,0,0,19-50.25A8,8,0,0,0,94.4,152.17ZM128,56a72.85,72.85,0,0,0-9,.56,8,8,0,0,0,2,15.87A56.08,56.08,0,0,1,184,128a252.12,252.12,0,0,1-1.92,31A8,8,0,0,0,189,168a8.39,8.39,0,0,0,1,.06,8,8,0,0,0,7.92-7,266.48,266.48,0,0,0,2-33A72.08,72.08,0,0,0,128,56Zm57.93,128.25a8,8,0,0,0-9.75,5.75c-1.46,5.69-3.15,11.4-5,17a8,8,0,0,0,5,10.13,7.88,7.88,0,0,0,2.55.42,8,8,0,0,0,7.58-5.46c2-5.92,3.79-12,5.35-18.05A8,8,0,0,0,185.94,184.26Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M160,128a224.48,224.48,0,0,1-26.37,105.54,12,12,0,1,1-21.16-11.32A200.33,200.33,0,0,0,136,128a8,8,0,0,0-16,0,12,12,0,0,1-24,0,32,32,0,0,1,64,0ZM128,56a12,12,0,1,0,0,24,48.05,48.05,0,0,1,48,48c0,7.62-.36,15.32-1.07,22.87A12,12,0,0,0,185.74,164c.38,0,.76,0,1.14,0a12,12,0,0,0,11.93-10.87c.79-8.3,1.18-16.76,1.18-25.13A72.08,72.08,0,0,0,128,56ZM96,92.23A12,12,0,0,0,80,74.35,72.1,72.1,0,0,0,56,128a120.11,120.11,0,0,1-15.12,58.37,12,12,0,0,0,21,11.69A144.14,144.14,0,0,0,80,128,48.08,48.08,0,0,1,96,92.23Zm10.1,64.1a12,12,0,0,0-14.46,8.9,158.61,158.61,0,0,1-18.88,45.86,12,12,0,0,0,20.5,12.48A182.86,182.86,0,0,0,115,170.79,12,12,0,0,0,106.1,156.33Zm76.73,24.07A12,12,0,0,0,168.19,189a241.5,241.5,0,0,1-8,24.87,12,12,0,0,0,6.91,15.49,11.76,11.76,0,0,0,4.29.8,12,12,0,0,0,11.21-7.71,260.2,260.2,0,0,0,8.79-27.37A12,12,0,0,0,182.83,180.4ZM128,16A112.12,112.12,0,0,0,16,127.44c0,.19,0,.38,0,.57a79.81,79.81,0,0,1-5,27.82,12,12,0,1,0,22.5,8.35A103.59,103.59,0,0,0,40,128.58c0-.19,0-.38,0-.57a88,88,0,0,1,176-.5c0,.16,0,.33,0,.5a282.12,282.12,0,0,1-6.74,61.38,12,12,0,0,0,9.09,14.33A11.84,11.84,0,0,0,221,204a12,12,0,0,0,11.7-9.38A305.87,305.87,0,0,0,240,128.55c0-.18,0-.36,0-.54A112.13,112.13,0,0,0,128,16Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M126.42,24C70.73,24.85,25.21,70.09,24,125.81a103.53,103.53,0,0,0,13.52,53.54,4,4,0,0,0,7.1-.3,119.35,119.35,0,0,0,11.37-51A71.77,71.77,0,0,1,83,71.83a8,8,0,1,1,9.86,12.61A55.82,55.82,0,0,0,72,128.07a135.28,135.28,0,0,1-18.45,68.35,4,4,0,0,0,.61,4.85c2,2,4.09,4,6.25,5.82a4,4,0,0,0,6-1A151.18,151.18,0,0,0,85,158.49a8,8,0,1,1,15.68,3.19,167.33,167.33,0,0,1-21.07,53.64,4,4,0,0,0,1.6,5.63c2.47,1.25,5,2.41,7.57,3.47a4,4,0,0,0,5-1.61A183,183,0,0,0,120,128.28a8.16,8.16,0,0,1,7.44-8.21,8,8,0,0,1,8.56,8,198.94,198.94,0,0,1-25.21,97.16,4,4,0,0,0,2.95,5.92q4.55.63,9.21.86a4,4,0,0,0,3.67-2.1A214.88,214.88,0,0,0,152,128.8c.05-13.25-10.3-24.49-23.54-24.74A24,24,0,0,0,104,128a8.1,8.1,0,0,1-7.29,8,8,8,0,0,1-8.71-8,40,40,0,0,1,40.42-40c22,.23,39.68,19.17,39.57,41.16a231.37,231.37,0,0,1-20.52,94.57,4,4,0,0,0,4.62,5.51,103.49,103.49,0,0,0,10.26-3,4,4,0,0,0,2.35-2.22,243.76,243.76,0,0,0,11.48-34,8,8,0,1,1,15.5,4q-1.12,4.37-2.4,8.7a4,4,0,0,0,6.46,4.17A104,104,0,0,0,126.42,24ZM198,161.08a8,8,0,0,1-7.92,7,8.39,8.39,0,0,1-1-.06,8,8,0,0,1-6.95-8.93,252.57,252.57,0,0,0,1.92-31,56.08,56.08,0,0,0-56-56,56.78,56.78,0,0,0-7,.43,8,8,0,0,1-2-15.89,72.1,72.1,0,0,1,81,71.49A266.93,266.93,0,0,1,198,161.08Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"/><path d="M72,128a134.63,134.63,0,0,1-14.16,60.47,8,8,0,1,1-14.32-7.12A118.8,118.8,0,0,0,56,128,71.73,71.73,0,0,1,83,71.8,8,8,0,1,1,93,84.29,55.76,55.76,0,0,0,72,128Zm56-8a8,8,0,0,0-8,8,184.12,184.12,0,0,1-23,89.1,8,8,0,0,0,14,7.76A200.19,200.19,0,0,0,136,128,8,8,0,0,0,128,120Zm0-32a40,40,0,0,0-40,40,8,8,0,0,0,16,0,24,24,0,0,1,48,0,214.09,214.09,0,0,1-20.51,92A8,8,0,1,0,146,226.83,230,230,0,0,0,168,128,40,40,0,0,0,128,88Zm0-64A104.11,104.11,0,0,0,24,128a87.76,87.76,0,0,1-5,29.33,8,8,0,0,0,15.09,5.33A103.9,103.9,0,0,0,40,128a88,88,0,0,1,176,0,282.24,282.24,0,0,1-5.29,54.45,8,8,0,0,0,6.3,9.4,8.22,8.22,0,0,0,1.55.15,8,8,0,0,0,7.84-6.45A298.37,298.37,0,0,0,232,128,104.12,104.12,0,0,0,128,24ZM94.4,152.17A8,8,0,0,0,85,158.42a151,151,0,0,1-17.21,45.44,8,8,0,0,0,13.86,8,166.67,166.67,0,0,0,19-50.25A8,8,0,0,0,94.4,152.17ZM128,56a72.85,72.85,0,0,0-9,.56,8,8,0,0,0,2,15.87A56.08,56.08,0,0,1,184,128a252.12,252.12,0,0,1-1.92,31A8,8,0,0,0,189,168a8.39,8.39,0,0,0,1,.06,8,8,0,0,0,7.92-7,266.48,266.48,0,0,0,2-33A72.08,72.08,0,0,0,128,56Zm57.93,128.25a8,8,0,0,0-9.75,5.75c-1.46,5.69-3.15,11.4-5,17a8,8,0,0,0,5,10.13,7.88,7.88,0,0,0,2.55.42,8,8,0,0,0,7.58-5.46c2-5.92,3.79-12,5.35-18.05A8,8,0,0,0,185.94,184.26Z"/>`,
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
      ${PhFingerprint.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhFingerprint };
