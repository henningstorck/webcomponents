/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-thermometer-hot": PhThermometerHot;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-thermometer-hot": PhThermometerHot;
    }
  }
}

@customElement("ph-thermometer-hot")
class PhThermometerHot extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M124,156.29V48a4,4,0,0,0-8,0V156.29a28,28,0,1,0,8,0ZM120,204a20,20,0,1,1,20-20A20,20,0,0,1,120,204Zm36-68V48a36,36,0,0,0-72,0v88a60,60,0,1,0,72,0ZM120,236a52,52,0,0,1-29.71-94.68A4,4,0,0,0,92,138V48a28,28,0,0,1,56,0v90a4,4,0,0,0,1.71,3.28A52,52,0,0,1,120,236ZM180.65,78.59a4,4,0,0,1,1.17-5.54c13.24-8.63,23.07-4.43,31.75-.73,8.15,3.48,14.58,6.22,24.25-.07a4,4,0,1,1,4.36,6.7C236.43,82.7,231.32,84,226.67,84c-6.06,0-11.33-2.25-16.24-4.34-8.15-3.47-14.58-6.22-24.25.07A4,4,0,0,1,180.65,78.59Zm62.7,26.82a4,4,0,0,1-1.17,5.54c-5.75,3.75-10.86,5.07-15.51,5.07-6.06,0-11.33-2.25-16.24-4.34-8.15-3.47-14.58-6.22-24.25.07a4,4,0,1,1-4.36-6.7c13.24-8.63,23.07-4.43,31.75-.73,8.15,3.48,14.58,6.22,24.25-.07A4,4,0,0,1,243.35,105.41Z"/>`,
    ],
    [
      "light",
      svg`<path d="M126,154.6V48a6,6,0,0,0-12,0V154.6a30,30,0,1,0,12,0ZM120,202a18,18,0,1,1,18-18A18,18,0,0,1,120,202Zm38-67V48a38,38,0,0,0-76,0v87a62,62,0,1,0,76,0Zm-38,99a50,50,0,0,1-28.57-91A6,6,0,0,0,94,138V48a26,26,0,0,1,52,0v90a6,6,0,0,0,2.57,4.92A50,50,0,0,1,120,234ZM179,79.68a6,6,0,0,1,1.75-8.3c14.14-9.21,24.95-4.61,33.63-.9,7.9,3.37,13.6,5.8,22.37.09a6,6,0,1,1,6.55,10.05c-6.12,4-11.62,5.39-16.59,5.39-6.51,0-12.11-2.39-17-4.49-7.89-3.37-13.59-5.8-22.37-.09A6,6,0,0,1,179,79.68ZM245,104.32a6,6,0,0,1-1.76,8.3c-6.12,4-11.62,5.39-16.59,5.39-6.51,0-12.11-2.39-17-4.49-7.89-3.37-13.59-5.8-22.37-.09a6,6,0,0,1-6.55-10.05c14.14-9.21,24.95-4.6,33.63-.9,7.9,3.37,13.6,5.8,22.37.09A6,6,0,0,1,245,104.32Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M128,153V48a8,8,0,0,0-16,0V153a32,32,0,1,0,16,0Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,120,200Zm40-66V48a40,40,0,0,0-80,0v86a64,64,0,1,0,80,0Zm-40,98a48,48,0,0,1-27.42-87.4A8,8,0,0,0,96,138V48a24,24,0,0,1,48,0v90a8,8,0,0,0,3.42,6.56A48,48,0,0,1,120,232ZM177.3,80.77a8,8,0,0,1,2.33-11.07c15-9.79,26.87-4.75,35.51-1.06C223,72,227.76,74,235.63,68.89a8,8,0,0,1,8.74,13.41C237.88,86.53,232,88,226.69,88c-7,0-12.92-2.54-17.83-4.63C201,80,196.24,78,188.37,83.11A8,8,0,0,1,177.3,80.77Zm69.4,22.46a8,8,0,0,1-2.33,11.07C237.88,118.53,232,120,226.69,120c-7,0-12.92-2.54-17.83-4.63-7.87-3.36-12.62-5.38-20.49-.25a8,8,0,0,1-8.74-13.41c15-9.79,26.87-4.75,35.51-1.06,7.87,3.36,12.62,5.39,20.49.25A8,8,0,0,1,246.7,103.23Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M160,56A52,52,0,0,0,56,56v94.69a64,64,0,1,0,104,0ZM108,228a40,40,0,0,1-30.91-65.39A12,12,0,0,0,80,154.78V56a28,28,0,0,1,56,0v98.77a12,12,0,0,0,2.77,7.68A40,40,0,0,1,108,228Zm24-40a24,24,0,1,1-36-20.78V56a12,12,0,0,1,24,0V167.22A24,24,0,0,1,132,188ZM173.94,83a12,12,0,0,1,3.51-16.6c16.82-11,30.32-5.2,39.26-1.39,8.09,3.46,10.93,4.37,16.74.58a12,12,0,0,1,13.1,20.11C239.28,90.38,232.64,92,226.71,92c-7.79,0-14.34-2.8-19.42-5-8.09-3.46-10.93-4.37-16.74-.58A12,12,0,0,1,173.94,83Zm76.11,26.1a12,12,0,0,1-3.5,16.6c-7.27,4.73-13.91,6.35-19.84,6.35-7.79,0-14.34-2.8-19.42-5-8.09-3.46-10.93-4.37-16.74-.58a12,12,0,1,1-13.1-20.11c16.82-11,30.32-5.2,39.26-1.39,8.09,3.46,10.93,4.37,16.74.58A12,12,0,0,1,250.05,109.05Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M152,146.08V40a32,32,0,0,0-64,0V146.08a56,56,0,1,0,64,0ZM136,56H104V40a16,16,0,0,1,32,0Zm41.3,24.77a8,8,0,0,1,2.33-11.07c15-9.79,26.87-4.75,35.51-1.06C223,72,227.76,74,235.63,68.89a8,8,0,0,1,8.74,13.41C237.88,86.53,232,88,226.69,88c-7,0-12.92-2.54-17.83-4.63C201,80,196.24,78,188.37,83.11A8,8,0,0,1,177.3,80.77Zm69.4,22.46a8,8,0,0,1-2.33,11.07C237.88,118.53,232,120,226.69,120c-7,0-12.92-2.54-17.83-4.63-7.87-3.36-12.62-5.38-20.49-.25a8,8,0,0,1-8.74-13.41c15-9.79,26.87-4.75,35.51-1.06,7.87,3.36,12.62,5.39,20.49.25A8,8,0,0,1,246.7,103.23Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M152,138V48a32,32,0,0,0-64,0v90a56,56,0,1,0,64,0Zm-32,70a24,24,0,1,1,24-24A24,24,0,0,1,120,208Z" opacity="0.2"/><path d="M128,153V48a8,8,0,0,0-16,0V153a32,32,0,1,0,16,0Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,120,200Zm40-66V48a40,40,0,0,0-80,0v86a64,64,0,1,0,80,0Zm-40,98a48,48,0,0,1-27.42-87.4A8,8,0,0,0,96,138V48a24,24,0,0,1,48,0v90a8,8,0,0,0,3.42,6.56A48,48,0,0,1,120,232ZM177.3,80.77a8,8,0,0,1,2.33-11.07c15-9.79,26.87-4.75,35.51-1.06C223,72,227.76,74,235.63,68.89a8,8,0,0,1,8.74,13.41C237.88,86.53,232,88,226.69,88c-7,0-12.92-2.54-17.83-4.63C201,80,196.24,78,188.37,83.11A8,8,0,0,1,177.3,80.77Zm69.4,22.46a8,8,0,0,1-2.33,11.07C237.88,118.53,232,120,226.69,120c-7,0-12.92-2.54-17.83-4.63-7.87-3.36-12.62-5.38-20.49-.25a8,8,0,0,1-8.74-13.41c15-9.79,26.87-4.75,35.51-1.06,7.87,3.36,12.62,5.39,20.49.25A8,8,0,0,1,246.7,103.23Z"/>`,
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
      ${PhThermometerHot.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhThermometerHot };
