/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-egg": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-egg": IconAttrs;
    }
  }
}

@customElement("ph-egg")
class PhEgg extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M128,20C92.87,20,44,86.52,44,152a84,84,0,0,0,168,0C212,86.52,163.13,20,128,20Zm0,208a76.08,76.08,0,0,1-76-76c0-28.46,10-59.73,27.33-85.78C94.81,43,113.91,28,128,28s33.19,15,48.67,38.22C194,92.27,204,123.54,204,152A76.08,76.08,0,0,1,128,228Z"/>`,
    ],
    [
      "light",
      svg`<path d="M185,60.67C167.18,34,145.87,18,128,18S88.82,34,71,60.67C52.57,88.32,42,121.61,42,152a86,86,0,0,0,172,0C214,121.61,203.43,88.32,185,60.67ZM128,226a74.09,74.09,0,0,1-74-74c0-28.08,9.84-58.94,27-84.67C96.11,44.65,114.56,30,128,30s31.89,14.65,47,37.33c17.15,25.73,27,56.59,27,84.67A74.09,74.09,0,0,1,128,226Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M186.66,59.56C168.47,32.29,146.54,16,128,16S87.53,32.29,69.34,59.56C50.7,87.54,40,121.23,40,152a88,88,0,0,0,176,0C216,121.23,205.3,87.54,186.66,59.56ZM128,224a72.08,72.08,0,0,1-72-72c0-27.69,9.72-58.15,26.66-83.56C97.19,46.64,115.41,32,128,32s30.81,14.64,45.34,36.44C190.28,93.85,200,124.31,200,152A72.08,72.08,0,0,1,128,224Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M190,57.34C171.06,29,147.88,12,128,12S84.94,29,66,57.34C46.94,86,36,120.46,36,152a92,92,0,0,0,184,0C220,120.46,209.06,86,190,57.34ZM128,220a68.07,68.07,0,0,1-68-68c0-61.12,46.19-116,68-116s68,54.88,68,116A68.07,68.07,0,0,1,128,220Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M216,152a88,88,0,0,1-176,0c0-30.77,10.7-64.46,29.34-92.44C87.53,32.29,109.46,16,128,16s40.47,16.29,58.66,43.56C205.3,87.54,216,121.23,216,152Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z" opacity="0.2"/><path d="M186.66,59.56C168.47,32.29,146.54,16,128,16S87.53,32.29,69.34,59.56C50.7,87.54,40,121.23,40,152a88,88,0,0,0,176,0C216,121.23,205.3,87.54,186.66,59.56ZM128,224a72.08,72.08,0,0,1-72-72c0-27.69,9.72-58.15,26.66-83.56C97.19,46.64,115.41,32,128,32s30.81,14.64,45.34,36.44C190.28,93.85,200,124.31,200,152A72.08,72.08,0,0,1,128,224Z"/>`,
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
      ${PhEgg.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhEgg };
