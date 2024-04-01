/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-hourglass-high": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-hourglass-high": IconAttrs;
    }
  }
}

@customElement("ph-hourglass-high")
class PhHourglassHigh extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M184,28H72A12,12,0,0,0,60,40V76a12,12,0,0,0,4.8,9.6L121.33,128,64.8,170.4A12,12,0,0,0,60,180v36a12,12,0,0,0,12,12H184a12,12,0,0,0,12-12V180.36a12.05,12.05,0,0,0-4.76-9.57L134.63,128l56.61-42.79A12.05,12.05,0,0,0,196,75.64V40A12,12,0,0,0,184,28ZM72,36H184a4,4,0,0,1,4,4V60H68V40A4,4,0,0,1,72,36ZM188,180.36V216a4,4,0,0,1-4,4H72a4,4,0,0,1-4-4V180a4,4,0,0,1,1.6-3.2L128,133l58.42,44.16A4,4,0,0,1,188,180.36ZM186.41,78.83,128,123,69.6,79.2A4,4,0,0,1,68,76V68H188v7.64A4,4,0,0,1,186.41,78.83Z"/>`,
    ],
    [
      "light",
      svg`<path d="M184,26H72A14,14,0,0,0,58,40V76a14.06,14.06,0,0,0,5.6,11.2L118,128,63.6,168.8A14.06,14.06,0,0,0,58,180v36a14,14,0,0,0,14,14H184a14,14,0,0,0,14-14V180.36a14.08,14.08,0,0,0-5.56-11.17L138,128l54.49-41.19A14.08,14.08,0,0,0,198,75.64V40A14,14,0,0,0,184,26ZM72,38H184a2,2,0,0,1,2,2V58H70V40A2,2,0,0,1,72,38ZM186,180.36V216a2,2,0,0,1-2,2H72a2,2,0,0,1-2-2V180a2,2,0,0,1,.8-1.6L128,135.51l57.22,43.25A2,2,0,0,1,186,180.36Zm-.79-103.12L128,120.49,70.8,77.6A2,2,0,0,1,70,76V70H186v5.64A2,2,0,0,1,185.21,77.24Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M184,24H72A16,16,0,0,0,56,40V76a16.07,16.07,0,0,0,6.4,12.8L114.67,128,62.4,167.2A16.07,16.07,0,0,0,56,180v36a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V180.36a16.09,16.09,0,0,0-6.35-12.77L141.27,128l52.38-39.6A16.05,16.05,0,0,0,200,75.64V40A16,16,0,0,0,184,24Zm0,16V56H72V40Zm0,176H72V180l56-42,56,42.35Zm-56-98L72,76V72H184v3.64Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M184,20H72A20,20,0,0,0,52,40V76a20.1,20.1,0,0,0,8,16l48,36L60,164a20.1,20.1,0,0,0-8,16v36a20,20,0,0,0,20,20H184a20,20,0,0,0,20-20V180.36a20.13,20.13,0,0,0-7.94-16L147.9,128l48.16-36.4a20.13,20.13,0,0,0,7.94-16V40A20,20,0,0,0,184,20Zm-4,24V60H76V44Zm-52,69L89.33,84h77Zm52,99H76V182l52-39,52,39.33Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M200,75.64V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V76a16.07,16.07,0,0,0,6.4,12.8L114.67,128,62.4,167.2A16.07,16.07,0,0,0,56,180v36a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V180.36a16.09,16.09,0,0,0-6.35-12.77L141.27,128l52.38-39.59A16.09,16.09,0,0,0,200,75.64ZM184,40V64H72V40Zm0,176H72V180l56-42,56,42.35Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M192,64V75.64A8,8,0,0,1,188.82,82L128,128,67.2,82.4A8,8,0,0,1,64,76V64Z" opacity="0.2"/><path d="M184,24H72A16,16,0,0,0,56,40V76a16.07,16.07,0,0,0,6.4,12.8L114.67,128,62.4,167.2A16.07,16.07,0,0,0,56,180v36a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V180.36a16.09,16.09,0,0,0-6.35-12.77L141.27,128l52.38-39.59A16.09,16.09,0,0,0,200,75.64V40A16,16,0,0,0,184,24Zm0,16V56H72V40Zm0,176H72V180l56-42,56,42.35Zm-56-98L72,76V72H184v3.64Z"/>`,
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
      ${PhHourglassHigh.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhHourglassHigh };
