/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-cloud-lightning": PhCloudLightning;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-cloud-lightning": PhCloudLightning;
    }
  }
}

@customElement("ph-cloud-lightning")
class PhCloudLightning extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M156,20A72.19,72.19,0,0,0,87.51,69.39,48,48,0,1,0,76,164h44.94l-20.37,33.94A4,4,0,0,0,104,204h32.94l-20.37,33.94a4,4,0,0,0,6.86,4.12l24-40A4,4,0,0,0,144,196H111.06l19.2-32H156a72,72,0,0,0,0-144Zm0,136H76a40,40,0,1,1,9.43-78.88A71.63,71.63,0,0,0,84,87.77a4,4,0,0,0,8,.46A64.06,64.06,0,1,1,156,156Z"/>`,
    ],
    [
      "light",
      svg`<path d="M156,18A74.21,74.21,0,0,0,86.11,67.3a6.18,6.18,0,0,0-1.83-.62A50.83,50.83,0,0,0,76,66a50,50,0,0,0,0,100h41.4L98.85,196.91A6,6,0,0,0,104,206h29.4l-18.55,30.91a6,6,0,0,0,10.3,6.18l24-40A6,6,0,0,0,144,194H114.6l16.8-28H156a74,74,0,0,0,0-148Zm0,136H76a38,38,0,1,1,6.31-75.48,6.82,6.82,0,0,0,.79.08A72.86,72.86,0,0,0,82,87.65a6,6,0,0,0,12,.7A62.06,62.06,0,1,1,156,154Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M156,16A76.2,76.2,0,0,0,84.92,64.76,53.26,53.26,0,0,0,76,64a52,52,0,0,0,0,104h37.87L97.14,195.88A8,8,0,0,0,104,208h25.87l-16.73,27.88a8,8,0,0,0,13.72,8.24l24-40A8,8,0,0,0,144,192H118.13l14.4-24H156a76,76,0,0,0,0-152Zm0,136H76a36,36,0,0,1,0-72,38.11,38.11,0,0,1,4.78.31q-.56,3.57-.77,7.23a8,8,0,0,0,16,.92A60.06,60.06,0,1,1,156,152Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M156,12A80.22,80.22,0,0,0,82.39,60.36,56.76,56.76,0,0,0,76,60a56,56,0,0,0,0,112h30.81l-13.1,21.82A12,12,0,0,0,104,212h18.81l-13.1,21.82a12,12,0,1,0,20.58,12.35l24-40A12,12,0,0,0,144,188H125.19l9.6-16H156a80,80,0,0,0,0-160Zm0,136H76a32,32,0,0,1,0-64h.28c-.11,1.1-.2,2.2-.26,3.3a12,12,0,1,0,24,1.39A56.06,56.06,0,1,1,156,148Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M156,168H132.53l-14.4,24H144a8,8,0,0,1,6.86,12.12l-24,40a8,8,0,0,1-13.72-8.24L129.87,208H104a8,8,0,0,1-6.86-12.12L113.87,168h-37C48.12,168,24.2,145.07,24,116.36A52.09,52.09,0,0,1,61.35,66.1a4,4,0,0,1,5,4.78A92.48,92.48,0,0,0,64,87.39,8.14,8.14,0,0,0,71.41,96l.6,0a8.18,8.18,0,0,0,8.08-7.72A76,76,0,1,1,156,168Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M224,92a68,68,0,0,1-68,68H76A44,44,0,1,1,90.2,74.34v.11A68.06,68.06,0,0,1,224,92Z" opacity="0.2"/><path d="M156,16A76.2,76.2,0,0,0,84.92,64.76,53.26,53.26,0,0,0,76,64a52,52,0,0,0,0,104h37.87L97.14,195.88A8,8,0,0,0,104,208h25.87l-16.73,27.88a8,8,0,0,0,13.72,8.24l24-40A8,8,0,0,0,144,192H118.13l14.4-24H156a76,76,0,0,0,0-152Zm0,136H76a36,36,0,0,1,0-72,38.11,38.11,0,0,1,4.78.31q-.56,3.57-.77,7.23a8,8,0,0,0,16,.92A60.06,60.06,0,1,1,156,152Z"/>`,
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
      ${PhCloudLightning.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhCloudLightning };
