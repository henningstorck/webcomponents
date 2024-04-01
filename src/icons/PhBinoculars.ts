/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-binoculars": PhBinoculars;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-binoculars": PhBinoculars;
    }
  }
}

@customElement("ph-binoculars")
class PhBinoculars extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M231.22,148.09,189.6,53.41a3.94,3.94,0,0,0-.83-1.22,28,28,0,0,0-39.6,0A4,4,0,0,0,148,55V84H108V55a4,4,0,0,0-1.17-2.83,28,28,0,0,0-39.6,0,3.94,3.94,0,0,0-.83,1.22L24.78,148.09A44,44,0,1,0,108,168V92h40v76a44,44,0,1,0,83.22-19.91ZM64,204a36,36,0,1,1,36-36A36,36,0,0,1,64,204Zm0-80a43.78,43.78,0,0,0-22.66,6.3L73.4,57.35a20,20,0,0,1,26.6-.59v86A44,44,0,0,0,64,124Zm92-67.23a20,20,0,0,1,26.6.59l32.06,72.94A43.92,43.92,0,0,0,156,142.74ZM192,204a36,36,0,1,1,36-36A36,36,0,0,1,192,204Z"/>`,
    ],
    [
      "light",
      svg`<path d="M233,147.24,191.43,52.6a6,6,0,0,0-1.25-1.83,30,30,0,0,0-42.42,0A6,6,0,0,0,146,55V82H110V55a6,6,0,0,0-1.76-4.25,30,30,0,0,0-42.42,0,6,6,0,0,0-1.25,1.83L23,147.24A46,46,0,1,0,110,168V94h36v74a46,46,0,1,0,87-20.76ZM64,202a34,34,0,1,1,34-34A34,34,0,0,1,64,202Zm0-80a45.77,45.77,0,0,0-18.55,3.92L75.06,58.54A18,18,0,0,1,98,57.71V137A45.89,45.89,0,0,0,64,122Zm94-64.28a18,18,0,0,1,22.94.83l29.61,67.37A45.9,45.9,0,0,0,158,137ZM192,202a34,34,0,1,1,34-34A34,34,0,0,1,192,202Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M237.2,151.87v0a47.1,47.1,0,0,0-2.35-5.45L193.26,51.8a7.82,7.82,0,0,0-1.66-2.44,32,32,0,0,0-45.26,0A8,8,0,0,0,144,55V80H112V55a8,8,0,0,0-2.34-5.66,32,32,0,0,0-45.26,0,7.82,7.82,0,0,0-1.66,2.44L21.15,146.4a47.1,47.1,0,0,0-2.35,5.45v0A48,48,0,1,0,112,168V96h32v72a48,48,0,1,0,93.2-16.13ZM76.71,59.75a16,16,0,0,1,19.29-1v73.51a47.9,47.9,0,0,0-46.79-9.92ZM64,200a32,32,0,1,1,32-32A32,32,0,0,1,64,200ZM160,58.74a16,16,0,0,1,19.29,1l27.5,62.58A47.9,47.9,0,0,0,160,132.25ZM192,200a32,32,0,1,1,32-32A32,32,0,0,1,192,200Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M241,150.65s0,0,0-.05a51.33,51.33,0,0,0-2.53-5.9L196.93,50.18a12,12,0,0,0-2.5-3.65,36,36,0,0,0-50.92,0A12,12,0,0,0,140,55V76H116V55a12,12,0,0,0-3.51-8.48,36,36,0,0,0-50.92,0,12,12,0,0,0-2.5,3.65L17.53,144.7A51.33,51.33,0,0,0,15,150.6s0,0,0,.05A52,52,0,1,0,116,168V100h24v68a52,52,0,1,0,101-17.35ZM80,62.28a12,12,0,0,1,12-1.22v63.15a51.9,51.9,0,0,0-35.9-7.62ZM64,196a28,28,0,1,1,28-28A28,28,0,0,1,64,196ZM164,61.06a12.06,12.06,0,0,1,12,1.22l23.87,54.31a51.9,51.9,0,0,0-35.9,7.62ZM192,196a28,28,0,1,1,28-28A28,28,0,0,1,192,196Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M237.22,151.9l0-.1a1.42,1.42,0,0,0-.07-.22,48.46,48.46,0,0,0-2.31-5.3L193.27,51.8a8,8,0,0,0-1.67-2.44,32,32,0,0,0-45.26,0A8,8,0,0,0,144,55V80H112V55a8,8,0,0,0-2.34-5.66,32,32,0,0,0-45.26,0,8,8,0,0,0-1.67,2.44L21.2,146.28a48.46,48.46,0,0,0-2.31,5.3,1.72,1.72,0,0,0-.07.21s0,.08,0,.11a48,48,0,0,0,90.32,32.51,47.49,47.49,0,0,0,2.9-16.59V96h32v71.83a47.49,47.49,0,0,0,2.9,16.59,48,48,0,0,0,90.32-32.51Zm-143.15,27a32,32,0,0,1-60.2-21.71l1.81-4.13A32,32,0,0,1,96,167.88V168h0A32,32,0,0,1,94.07,178.94ZM203,198.07A32,32,0,0,1,160,168h0v-.11a32,32,0,0,1,60.32-14.78l1.81,4.13A32,32,0,0,1,203,198.07Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M104,168a40,40,0,1,1-40-40A40,40,0,0,1,104,168Zm88-40a40,40,0,1,0,40,40A40,40,0,0,0,192,128Z" opacity="0.2"/><path d="M237.2,151.87v0a47.1,47.1,0,0,0-2.35-5.45L193.26,51.8a7.82,7.82,0,0,0-1.66-2.44,32,32,0,0,0-45.26,0A8,8,0,0,0,144,55V80H112V55a8,8,0,0,0-2.34-5.66,32,32,0,0,0-45.26,0,7.82,7.82,0,0,0-1.66,2.44L21.15,146.4a47.1,47.1,0,0,0-2.35,5.45v0A48,48,0,1,0,112,168V96h32v72a48,48,0,1,0,93.2-16.13ZM76.71,59.75a16,16,0,0,1,19.29-1v73.51a47.9,47.9,0,0,0-46.79-9.92ZM64,200a32,32,0,1,1,32-32A32,32,0,0,1,64,200ZM160,58.74a16,16,0,0,1,19.29,1l27.5,62.58A47.9,47.9,0,0,0,160,132.25ZM192,200a32,32,0,1,1,32-32A32,32,0,0,1,192,200Z"/>`,
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
      ${PhBinoculars.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhBinoculars };
