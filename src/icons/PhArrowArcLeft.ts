/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-arrow-arc-left": PhArrowArcLeft;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-arrow-arc-left": PhArrowArcLeft;
    }
  }
}

@customElement("ph-arrow-arc-left")
class PhArrowArcLeft extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M228,184a4,4,0,0,1-8,0A92,92,0,0,0,63,119L33.7,148H88a4,4,0,0,1,0,8H24a4,4,0,0,1-4-4V88a4,4,0,0,1,8,0v54.39l29.3-29.11A100,100,0,0,1,228,184Z"/>`,
    ],
    [
      "light",
      svg`<path d="M230,184a6,6,0,0,1-12,0A90,90,0,0,0,64.36,120.36L38.55,146H88a6,6,0,0,1,0,12H24a6,6,0,0,1-6-6V88a6,6,0,0,1,12,0v49.58l25.89-25.72A102,102,0,0,1,230,184Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M232,184a8,8,0,0,1-16,0A88,88,0,0,0,65.78,121.78L43.4,144H88a8,8,0,0,1,0,16H24a8,8,0,0,1-8-8V88a8,8,0,0,1,16,0v44.77l22.48-22.33A104,104,0,0,1,232,184Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M236,184a12,12,0,0,1-24,0A84,84,0,0,0,68.6,124.6L53.11,140H88a12,12,0,0,1,0,24H24a12,12,0,0,1-12-12V88a12,12,0,0,1,24,0v35.16l15.66-15.55A108,108,0,0,1,236,184Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M232,184a8,8,0,0,1-16,0A88,88,0,0,0,67.47,120.16l26.19,26.18A8,8,0,0,1,88,160H24a8,8,0,0,1-8-8V88a8,8,0,0,1,13.66-5.66l26.48,26.48A104,104,0,0,1,232,184Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M88,152H24V88Z" opacity="0.2"/><path d="M201.54,110.46a104,104,0,0,0-145.4-1.63L29.66,82.34A8,8,0,0,0,16,88v64a8,8,0,0,0,8,8H88a8,8,0,0,0,5.66-13.66L67.47,120.16A88,88,0,0,1,216,184a8,8,0,0,0,16,0A103.33,103.33,0,0,0,201.54,110.46ZM32,144V107.31L68.69,144Z"/>`,
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
      ${PhArrowArcLeft.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhArrowArcLeft };
