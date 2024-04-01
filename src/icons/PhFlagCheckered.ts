/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-flag-checkered": PhFlagCheckered;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-flag-checkered": PhFlagCheckered;
    }
  }
}

@customElement("ph-flag-checkered")
class PhFlagCheckered extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M225.66,52.44a4,4,0,0,0-4.28.61c-30,26-56,13.08-83.61-.56-28.7-14.2-58.38-28.88-92.39.56a4,4,0,0,0-1.38,3V224a4,4,0,0,0,8,0V177.87c29.41-24.39,55.08-11.69,82.23,1.74,28.7,14.19,58.38,28.88,92.39-.56a4,4,0,0,0,1.38-3v-120A4,4,0,0,0,225.66,52.44ZM220,64.32V114.2c-16.91,14-32.58,15.79-48,12.2V74.67C187.24,77.9,203.09,76.37,220,64.32Zm-56,8.23v51.54c-8.7-3-17.39-7.25-26.23-11.62-9.76-4.84-19.64-9.72-29.77-12.91V48c8.7,3,17.39,7.25,26.23,11.62C144,64.49,153.87,69.37,164,72.55ZM100,45.73V97.44c-15.24-3.23-31.09-1.69-48,10.37V57.93C68.91,43.9,84.58,42.15,100,45.73ZM52,167.78V117.9c16.91-14,32.58-15.79,48-12.2v51.72A64.48,64.48,0,0,0,86.64,156C75.52,156,64,159.2,52,167.78Zm56-8.23V108c8.71,3,17.39,7.25,26.23,11.62,9.76,4.83,19.64,9.71,29.77,12.89v51.54c-8.71-3-17.39-7.25-26.23-11.62C128,167.61,118.13,162.73,108,159.55Zm64,26.82V134.65a64.48,64.48,0,0,0,13.36,1.47c11.12,0,22.61-3.27,34.64-11.85v49.9C203.09,188.19,187.42,190,172,186.37Z"/>`,
    ],
    [
      "light",
      svg`<path d="M226.49,50.5a6,6,0,0,0-6.42.92c-29,25.11-53.28,13.08-81.41-.84-27.92-13.82-59.57-29.49-94.59.84A6,6,0,0,0,42,56V224a6,6,0,0,0,12,0V178.78c28.08-22.79,51.88-11,79.34,2.59,27.92,13.82,59.58,29.48,94.59-.85A6,6,0,0,0,230,176V56A6,6,0,0,0,226.49,50.5ZM218,68v45.2c-15.53,12.6-29.75,14.65-44,11.65V76.88C188,79.33,202.64,77.78,218,68Zm-56,5.87v47.4c-7.6-2.85-15.31-6.66-23.34-10.64-9.16-4.53-18.71-9.26-28.66-12.5V50.71a255.17,255.17,0,0,1,23.34,10.63C142.5,65.87,152.05,70.59,162,73.83ZM98,47.13V95c-14-2.45-28.64-.89-44,8.93V58.75C69.53,46.15,83.75,44.13,98,47.13ZM86.63,154C76.13,154,65.24,156.79,54,164V118.79c15.53-12.61,29.75-14.65,44-11.65v47.93A66.32,66.32,0,0,0,86.63,154ZM110,158.11V110.72c7.6,2.84,15.31,6.66,23.34,10.63,9.16,4.53,18.71,9.26,28.66,12.5v47.39c-7.6-2.85-15.31-6.66-23.34-10.63C129.5,166.07,120,161.35,110,158.11Zm64,26.7V136.89a66.32,66.32,0,0,0,11.37,1c10.5,0,21.39-2.78,32.63-10v45.24C202.47,185.79,188.25,187.81,174,184.81Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M227.32,48.75A8,8,0,0,0,218.76,50c-28,24.22-51.72,12.48-79.21-1.13C111.07,34.76,78.78,18.79,42.76,50A8,8,0,0,0,40,56V224a8,8,0,0,0,16,0V179.77c26.79-21.16,49.87-9.75,76.45,3.41,28.49,14.09,60.77,30.06,96.79-1.13a8,8,0,0,0,2.76-6V56A8,8,0,0,0,227.32,48.75ZM216,71.6v40.65c-14,11.06-27,13.22-40,10.88V79.34A60.05,60.05,0,0,0,216,71.6Zm-56,3.76v43c-6.66-2.67-13.43-6-20.45-9.48-8.82-4.37-18-8.91-27.55-12.18v-43c6.66,2.66,13.43,6,20.45,9.48C141.27,67.55,150.46,72.09,160,75.36ZM96,48.91V92.69a60.06,60.06,0,0,0-40,7.75V59.78C70,48.72,83,46.57,96,48.91ZM86.58,152A60.06,60.06,0,0,0,56,160.43V119.78c14-11.06,27-13.22,40-10.88v43.8A65.61,65.61,0,0,0,86.58,152ZM112,156.67v-43c6.66,2.66,13.43,6,20.45,9.48,8.82,4.37,18,8.9,27.55,12.17v43c-6.66-2.67-13.43-6-20.45-9.48C130.73,164.47,121.54,159.94,112,156.67Zm64,26.45v-43.8a65.61,65.61,0,0,0,9.42.72A60.11,60.11,0,0,0,216,131.57v40.68C202,183.31,189,185.46,176,183.12Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M229,45a12,12,0,0,0-12.85,1.84c-24.71,21.41-44.53,13.31-74.82-1.68C113.19,31.27,78.17,13.94,40.14,46.88A12,12,0,0,0,36,56V224a12,12,0,0,0,24,0V181.71c22.84-17.13,42.1-9.11,70.68,5,16.23,8,34.74,17.2,54.8,17.2,14.72,0,30.28-4.94,46.38-18.88A12,12,0,0,0,236,176V56A12,12,0,0,0,229,45ZM185.48,83.91A63,63,0,0,0,212,78.08v32.15c-11,8.26-21.2,10.67-32,9.37V83.66C181.81,83.81,183.64,83.91,185.48,83.91ZM156,78.08v34.09c-4.64-2-9.5-4.4-14.68-7A255.21,255.21,0,0,0,116,93.83V59.75c4.64,2,9.5,4.4,14.68,7A252.91,252.91,0,0,0,156,78.08ZM92,52.32V88.24a63.33,63.33,0,0,0-32,5.61V61.68C71,53.42,81.2,51,92,52.32ZM86.52,148A63,63,0,0,0,60,153.86V121.7c11-8.25,21.2-10.66,32-9.36v35.94C90.19,148.13,88.36,148,86.52,148ZM116,153.86V119.77c4.64,2,9.5,4.4,14.68,7A252.91,252.91,0,0,0,156,138.1v34.09c-4.64-2.05-9.5-4.4-14.68-7A250.66,250.66,0,0,0,116,153.86Zm64,25.76V143.68c1.81.14,3.64.24,5.48.24A62.85,62.85,0,0,0,212,138.07v32.19C201,178.52,190.8,180.92,180,179.62Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M227.32,48.75A8,8,0,0,0,218.76,50c-28,24.22-51.72,12.48-79.21-1.13C111.07,34.76,78.78,18.79,42.76,50h0A8,8,0,0,0,40,56V224a8,8,0,0,0,16,0V179.77c26.79-21.16,49.87-9.75,76.45,3.41,16.4,8.11,34.06,16.85,53,16.85,13.93,0,28.54-4.75,43.82-18a8,8,0,0,0,2.76-6V56A8,8,0,0,0,227.32,48.75ZM56,160.44V109.88c16.85-11.28,32.64-11.59,48-7.34v51.74C88.87,150.47,72.87,150.71,56,160.44ZM104,50.87c9.25,2.83,18.61,7.45,28.45,12.32,11.26,5.57,23.11,11.43,35.55,14.56v51.74c15.35,4.25,31.14,3.94,48-7.35v50.11c-16.87,13.32-32.27,13.72-48,8.91V129.49c-21.62-6-42.38-21-64-26.95Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M224,56v60c-19.89,17.23-38.23,18.39-56,13.48v-60C185.76,74.39,204.11,73.23,224,56ZM104,102.52v-60C86.24,37.61,67.89,38.77,48,56v60c19.89-17.22,38.23-18.39,56-13.48v60c21.62,6,42.38,21,64,27v-60c-21.62-6-42.38-21-64-27Z" opacity="0.2"/><path d="M227.32,48.75A8,8,0,0,0,218.76,50c-28,24.22-51.72,12.48-79.21-1.13C111.07,34.76,78.78,18.79,42.76,50A8,8,0,0,0,40,56V224a8,8,0,0,0,16,0V179.77c26.79-21.16,49.87-9.75,76.45,3.41,28.49,14.09,60.77,30.06,96.79-1.13a8,8,0,0,0,2.76-6V56A8,8,0,0,0,227.32,48.75ZM216,71.6v40.65c-14,11.06-27,13.22-40,10.88V79.34A60.05,60.05,0,0,0,216,71.6Zm-56,3.76v43c-6.66-2.67-13.43-6-20.45-9.48-8.82-4.37-18-8.91-27.55-12.18v-43c6.66,2.66,13.43,6,20.45,9.48C141.27,67.55,150.46,72.09,160,75.36ZM96,48.91V92.69a60.06,60.06,0,0,0-40,7.75V59.78C70,48.72,83,46.57,96,48.91ZM86.58,152A60.06,60.06,0,0,0,56,160.43V119.78c14-11.06,27-13.22,40-10.88v43.8A65.61,65.61,0,0,0,86.58,152ZM112,156.67v-43c6.66,2.66,13.43,6,20.45,9.48,8.82,4.37,18,8.9,27.55,12.17v43c-6.66-2.67-13.43-6-20.45-9.48C130.73,164.47,121.54,159.94,112,156.67Zm64,26.45v-43.8a65.61,65.61,0,0,0,9.42.72A60.11,60.11,0,0,0,216,131.57v40.68C202,183.31,189,185.46,176,183.12Z"/>`,
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
      ${PhFlagCheckered.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhFlagCheckered };
