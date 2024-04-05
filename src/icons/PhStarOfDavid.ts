/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-star-of-david": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-star-of-david": IconAttrs;
    }
  }
}

@customElement("ph-star-of-david")
class PhStarOfDavid extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M196.61,128l30.86-54A4,4,0,0,0,224,68H162.33L131.47,14a4,4,0,0,0-6.94,0L93.66,68H32a4,4,0,0,0-3.47,6l30.85,54L28.53,182A4,4,0,0,0,32,188H93.66l30.87,54a4,4,0,0,0,6.94,0l30.86-54H224a4,4,0,0,0,3.47-6Zm20.5-52L192,119.94,166.9,76Zm-29.72,52-29.7,52L98.3,180,68.59,128,98.3,76l59.39,0ZM128,24.06l25.12,44H102.87ZM38.89,76H89.08L64,119.94Zm0,103.92L64,136.06,89.08,180Zm89.11,52-25.13-44h50.25ZM166.9,180,192,136.06,217.11,180Z"/>`,
    ],
    [
      "light",
      svg`<path d="M198.91,128l30.3-53A6,6,0,0,0,224,66H163.49L133.21,13a6,6,0,0,0-10.42,0L92.5,66H32a6,6,0,0,0-5.21,9l30.28,53L26.79,181A6,6,0,0,0,32,190H92.5l30.29,53a6,6,0,0,0,10.42,0l30.28-53H224a6,6,0,0,0,5.21-9Zm14.75-50L192,115.91,170.34,78Zm-28.57,50-28.56,50-57.07,0L70.9,128,99.46,78l57.07,0ZM128,28.09,149.67,66H106.32ZM42.34,78h43.3L64,115.91Zm0,99.92L64,140.09,85.64,178ZM128,227.91,106.32,190h43.35ZM170.34,178,192,140.09,213.66,178Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M201.21,128,231,76A8,8,0,0,0,224,64H164.65L135,12a8,8,0,0,0-13.9,0L91.33,64H32a8,8,0,0,0-6.95,12l29.72,52L25.05,180a8,8,0,0,0,7,12H91.33l29.72,52a8,8,0,0,0,13.9,0l29.7-52H224A8,8,0,0,0,231,180Zm9-48L192,111.88,173.79,80Zm-27.42,48-27.42,48-54.75,0L73.2,128l27.42-48,54.75,0ZM128,32.12,146.22,64H109.77ZM45.78,80H82.19L64,111.88Zm0,95.92L64,144.12,82.19,176ZM128,223.88,109.77,192h36.45ZM173.79,176,192,144.12,210.21,176Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M205.82,128l28.6-50A12,12,0,0,0,224,60H167l-28.55-50A12,12,0,0,0,128,4h0a12,12,0,0,0-10.42,6.05L89,60H32A12,12,0,0,0,21.58,78l28.58,50L21.58,178A12,12,0,0,0,32,196H89l28.57,50a12,12,0,0,0,20.84,0L167,196h57a12,12,0,0,0,10.42-17.95Zm-2.5-44L192,103.81,180.68,84Zm-25.14,44L153,172h-50.1L77.81,128l25.13-44H153ZM128,40.18,139.33,60H116.66ZM52.68,84H75.29L64,103.82Zm0,87.92L64,152.18,75.29,172ZM128,215.82,116.66,196h22.67ZM180.68,172,192,152.19,203.32,172Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M201.21,128,231,76A8,8,0,0,0,224,64H164.65L135,12a8,8,0,0,0-13.9,0L91.33,64H32a8,8,0,0,0-6.95,12l29.72,52L25.05,180a8,8,0,0,0,7,12H91.33l29.72,52a8,8,0,0,0,13.9,0l29.7-52H224A8,8,0,0,0,231,180Zm-18.42,0-27.42,48-54.75,0L73.2,128l27.42-48,54.75,0Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M192,128l32,56H160l-32,56L96,184H32l32-56L32,72H96l32-56,32,56h64Z" opacity="0.2"/><path d="M201.21,128,231,76A8,8,0,0,0,224,64H164.65L135,12a8,8,0,0,0-13.9,0L91.33,64H32a8,8,0,0,0-6.95,12l29.72,52L25.05,180a8,8,0,0,0,7,12H91.33l29.72,52a8,8,0,0,0,13.9,0l29.7-52H224A8,8,0,0,0,231,180Zm9-48L192,111.88,173.79,80Zm-27.42,48-27.42,48-54.75,0L73.2,128l27.42-48,54.75,0ZM128,32.12,146.22,64H109.77ZM45.78,80H82.19L64,111.88Zm0,95.92L64,144.12,82.19,176ZM128,223.88,109.77,192h36.45ZM173.79,176,192,144.12,210.21,176Z"/>`,
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
      ${PhStarOfDavid.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhStarOfDavid };
