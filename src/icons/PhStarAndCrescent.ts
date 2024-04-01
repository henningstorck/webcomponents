/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-star-and-crescent": PhStarAndCrescent;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-star-and-crescent": PhStarAndCrescent;
    }
  }
}

@customElement("ph-star-and-crescent")
class PhStarAndCrescent extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M153.82,53.16a4,4,0,0,0,0-7.13A91.09,91.09,0,0,0,112,36a92,92,0,0,0,0,184,91.09,91.09,0,0,0,41.82-10,4,4,0,0,0,0-7.13,84,84,0,0,1,0-149.68ZM100,128a91.63,91.63,0,0,0,43.21,78A83.23,83.23,0,0,1,112,212a84,84,0,0,1,0-168,83.23,83.23,0,0,1,31.21,6A91.63,91.63,0,0,0,100,128Zm149.58-3.67-28.71-12.4-2.49-32.24a4,4,0,0,0-7.08-2.24l-20.19,24.46L161,94.45a4,4,0,0,0-4.41,5.91L172.82,128l-16.27,27.64a4,4,0,0,0,4.41,5.91l30.15-7.46,20.19,24.46a4,4,0,0,0,3.09,1.45,3.81,3.81,0,0,0,1.2-.19,4,4,0,0,0,2.79-3.5l2.49-32.24,28.71-12.4a4,4,0,0,0,0-7.34Zm-34.1,13.35a4,4,0,0,0-2.4,3.36l-1.92,24.77-15.49-18.76a4,4,0,0,0-3.08-1.45,4,4,0,0,0-1,.12l-23.36,5.78L180.91,130a4,4,0,0,0,0-4.06L168.27,104.5l23.36,5.78a4,4,0,0,0,4-1.33l15.49-18.76L213.08,115a4,4,0,0,0,2.4,3.36L237.9,128Z"/>`,
    ],
    [
      "light",
      svg`<path d="M154.73,201.06a82,82,0,0,1,0-146.12,6,6,0,0,0,0-10.69A93,93,0,0,0,112,34a94,94,0,0,0,0,188,93,93,0,0,0,42.73-10.25,6,6,0,0,0,0-10.69ZM112,210A82,82,0,1,1,138.81,50.47a94,94,0,0,0,0,155.06A81.4,81.4,0,0,1,112,210Zm138.38-87.51-27.61-11.91-2.4-31a6,6,0,0,0-10.61-3.36L190.37,99.67l-28.93-7.16a6,6,0,0,0-6.61,8.87L170.5,128l-15.67,26.62a6,6,0,0,0,6.61,8.87l28.93-7.16,19.39,23.49a6,6,0,0,0,10.61-3.36l2.4-31,27.61-11.91a6,6,0,0,0,0-11Zm-35.69,13.35a6,6,0,0,0-3.61,5l-1.53,19.83-12.33-14.94a6,6,0,0,0-4.63-2.18,5.92,5.92,0,0,0-1.44.18l-18.74,4.63L182.64,131a6,6,0,0,0,0-6.08l-10.23-17.37,18.74,4.63a6,6,0,0,0,6.07-2l12.33-14.94,1.53,19.83a6,6,0,0,0,3.61,5L232.86,128Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M155.64,199.28a80,80,0,0,1,0-142.56,8,8,0,0,0,0-14.25A94.93,94.93,0,0,0,112,32a96,96,0,0,0,0,192,94.93,94.93,0,0,0,43.64-10.47,8,8,0,0,0,0-14.25ZM112,208A80,80,0,1,1,134.4,51.16a96.08,96.08,0,0,0,0,153.68A79.82,79.82,0,0,1,112,208Zm139.17-87.35-26.5-11.43-2.31-29.84a8,8,0,0,0-14.14-4.47L189.63,97.42l-27.71-6.85a8,8,0,0,0-8.81,11.82L168.18,128l-15.07,25.61a8,8,0,0,0,8.81,11.82l27.71-6.85,18.59,22.51a8,8,0,0,0,14.14-4.47l2.31-29.84,26.5-11.43a8,8,0,0,0,0-14.7ZM213.89,134a8,8,0,0,0-4.8,6.73l-1.15,14.89-9.18-11.11a8,8,0,0,0-6.17-2.91,8.4,8.4,0,0,0-1.92.23l-14.12,3.5,7.81-13.27a8,8,0,0,0,0-8.12l-7.81-13.27,14.12,3.5a8,8,0,0,0,8.09-2.68l9.18-11.11,1.15,14.89a8,8,0,0,0,4.8,6.73l13.92,6Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M157.46,195.72a76,76,0,0,1,0-135.44,12,12,0,0,0,0-21.37,100,100,0,1,0,0,178.18,12,12,0,0,0,0-21.37ZM112,204a76,76,0,0,1,0-152,77.2,77.2,0,0,1,13.57,1.19,100.14,100.14,0,0,0,0,149.62A77.2,77.2,0,0,1,112,204Zm136.75-87L224.47,106.5l-2.12-27.42a12,12,0,0,0-21.22-6.72l-17,20.58-25.26-6.25a12,12,0,0,0-13.22,17.73L159.54,128l-13.88,23.58a12,12,0,0,0,13.22,17.73l25.26-6.25,17,20.58a12,12,0,0,0,9.26,4.36,11.88,11.88,0,0,0,3.62-.56,12,12,0,0,0,8.34-10.52l2.12-27.42L248.75,139a12,12,0,0,0,0-22Zm-40.44,13.35a12,12,0,0,0-7.21,10.09l-.39,5L197.84,142a12,12,0,0,0-9.25-4.36,11.76,11.76,0,0,0-2.88.35l-4.89,1.21,3-5.07a12,12,0,0,0,0-12.18l-3-5.07,4.89,1.21a12,12,0,0,0,12.13-4l2.87-3.48.39,5a12,12,0,0,0,7.21,10.09l5.4,2.33Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M160,206.4a8,8,0,0,1-4.36,7.13A94.93,94.93,0,0,1,112,224a96,96,0,0,1,0-192,94.93,94.93,0,0,1,43.64,10.47,8,8,0,0,1,0,14.25,80,80,0,0,0,0,142.56A8,8,0,0,1,160,206.4Zm91.17-85.75-26.5-11.43-2.31-29.84a8,8,0,0,0-14.14-4.47L189.63,97.42l-27.71-6.85a8,8,0,0,0-8.81,11.82L168.18,128l-15.07,25.61a8,8,0,0,0,8.81,11.82l27.71-6.85,18.59,22.51a8,8,0,0,0,14.14-4.47l2.31-29.84,26.5-11.43a8,8,0,0,0,0-14.7Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M152,206.4a88,88,0,1,1,0-156.8,88,88,0,0,0,0,156.8Zm65.06-91.75L214.39,80l-21.8,26.4L160,98.33,177.46,128,160,157.67l32.59-8.07,21.8,26.4,2.67-34.65L248,128Z" opacity="0.2"/><path d="M155.64,199.28a80,80,0,0,1,0-142.56,8,8,0,0,0,0-14.25A94.93,94.93,0,0,0,112,32a96,96,0,0,0,0,192,94.93,94.93,0,0,0,43.64-10.47,8,8,0,0,0,0-14.25ZM112,208A80,80,0,1,1,134.4,51.16a96.08,96.08,0,0,0,0,153.68A79.82,79.82,0,0,1,112,208Zm139.17-87.35-26.5-11.43-2.31-29.84a8,8,0,0,0-14.14-4.47L189.63,97.42l-27.71-6.85a8,8,0,0,0-8.81,11.82L168.18,128l-15.07,25.61a8,8,0,0,0,8.81,11.82l27.71-6.85,18.59,22.51a8,8,0,0,0,14.14-4.47l2.31-29.84,26.5-11.43a8,8,0,0,0,0-14.7ZM213.89,134a8,8,0,0,0-4.8,6.73l-1.15,14.89-9.18-11.11a8,8,0,0,0-6.17-2.91,8.4,8.4,0,0,0-1.92.23l-14.12,3.5,7.81-13.27a8,8,0,0,0,0-8.12l-7.81-13.27,14.12,3.5a8,8,0,0,0,8.09-2.68l9.18-11.11,1.15,14.89a8,8,0,0,0,4.8,6.73l13.92,6Z"/>`,
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
      ${PhStarAndCrescent.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhStarAndCrescent };
