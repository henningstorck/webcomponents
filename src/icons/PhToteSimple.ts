/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-tote-simple": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-tote-simple": IconAttrs;
    }
  }
}

@customElement("ph-tote-simple")
class PhToteSimple extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M233,72.06A12.11,12.11,0,0,0,223.92,68H172V64a44,44,0,0,0-88,0v4H32.08A12.11,12.11,0,0,0,23,72.06a12,12,0,0,0-2.94,9.35l14.26,120a12,12,0,0,0,12,10.59H209.67a12,12,0,0,0,12-10.59l14.26-120A12,12,0,0,0,233,72.06ZM92,64a36,36,0,0,1,72,0v4H92ZM228,80.46l-14.25,120a4,4,0,0,1-4.05,3.54H46.33a4,4,0,0,1-4-3.54L28,80.46a3.9,3.9,0,0,1,1-3.09A4.08,4.08,0,0,1,32.08,76H223.92A4.08,4.08,0,0,1,227,77.37,3.9,3.9,0,0,1,228,80.46Z"/>`,
    ],
    [
      "light",
      svg`<path d="M234.47,70.73A14.09,14.09,0,0,0,223.92,66H174V64a46,46,0,0,0-92,0v2H32.08a14,14,0,0,0-14,15.64l14.25,120a14.06,14.06,0,0,0,14,12.36H209.67a14.06,14.06,0,0,0,14-12.36l14.25-120A14,14,0,0,0,234.47,70.73ZM94,64a34,34,0,0,1,68,0v2H94ZM211.73,200.23a2,2,0,0,1-2.06,1.77H46.33a2,2,0,0,1-2.06-1.77L30,80.23a1.92,1.92,0,0,1,.49-1.53,2.07,2.07,0,0,1,1.58-.7H223.92a2.07,2.07,0,0,1,1.58.7,1.92,1.92,0,0,1,.49,1.53Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M236,69.4A16.13,16.13,0,0,0,223.92,64H176a48,48,0,0,0-96,0H32.08a16.13,16.13,0,0,0-12,5.4,16,16,0,0,0-3.92,12.48l14.26,120a16,16,0,0,0,16,14.12H209.67a16,16,0,0,0,16-14.12l14.26-120A16,16,0,0,0,236,69.4ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm81.76,168a.13.13,0,0,1-.09,0H46.25L32.08,80H224Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M239,66.75a20.12,20.12,0,0,0-15-6.75H179.83A52,52,0,0,0,76.17,60H32.08A20,20,0,0,0,12.14,82.35l14.25,120A20.06,20.06,0,0,0,46.33,220H209.67a20.06,20.06,0,0,0,19.94-17.65l14.25-120A20,20,0,0,0,239,66.75ZM128,36a28,28,0,0,1,27.71,24H100.29A28,28,0,0,1,128,36Zm78.19,160H49.81L36.5,84h183Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M236,69.4A16.13,16.13,0,0,0,223.92,64H176a48,48,0,0,0-96,0H32.08a16.13,16.13,0,0,0-12,5.4,16,16,0,0,0-3.92,12.48l14.26,120a16,16,0,0,0,16,14.12H209.67a16,16,0,0,0,16-14.12l14.26-120A16,16,0,0,0,236,69.4ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M231.94,80.93l-14.25,120a8.06,8.06,0,0,1-8,7.07H46.33a8.06,8.06,0,0,1-8-7.07l-14.25-120a8,8,0,0,1,8-8.93H223.92A8,8,0,0,1,231.94,80.93Z" opacity="0.2"/><path d="M236,69.4A16.13,16.13,0,0,0,223.92,64H176a48,48,0,0,0-96,0H32.08a16.13,16.13,0,0,0-12,5.4,16,16,0,0,0-3.92,12.48l14.26,120a16,16,0,0,0,16,14.12H209.67a16,16,0,0,0,16-14.12l14.26-120A16,16,0,0,0,236,69.4ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm81.76,168a.13.13,0,0,1-.09,0H46.25L32.08,80H224Z"/>`,
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
      ${PhToteSimple.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhToteSimple };
