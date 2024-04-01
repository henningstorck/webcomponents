/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-funnel-simple-x": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-funnel-simple-x": IconAttrs;
    }
  }
}

@customElement("ph-funnel-simple-x")
class PhFunnelSimpleX extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M192,140H64a4,4,0,0,1,0-8H192a4,4,0,0,1,0,8Zm40-56H24a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8ZM128,180H104a4,4,0,0,0,0,8h24a4,4,0,0,0,0-8Zm90.83-6.83a4,4,0,0,0-5.66,0L192,194.34l-21.17-21.17a4,4,0,0,0-5.66,5.66L186.34,200l-21.17,21.17a4,4,0,0,0,5.66,5.66L192,205.66l21.17,21.17a4,4,0,0,0,5.66-5.66L197.66,200l21.17-21.17A4,4,0,0,0,218.83,173.17Z"/>`,
    ],
    [
      "light",
      svg`<path d="M192,142H64a6,6,0,0,1,0-12H192a6,6,0,0,1,0,12Zm40-60H24a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12ZM128,178H104a6,6,0,0,0,0,12h24a6,6,0,0,0,0-12Zm92.24-6.24a6,6,0,0,0-8.48,0L192,191.51l-19.76-19.75a6,6,0,0,0-8.48,8.48L183.51,200l-19.75,19.76a6,6,0,1,0,8.48,8.48L192,208.49l19.76,19.75a6,6,0,0,0,8.48-8.48L200.49,200l19.75-19.76A6,6,0,0,0,220.24,171.76Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M192,144H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm40-64H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM128,176H104a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Zm93.66-5.66a8,8,0,0,0-11.32,0L192,188.69l-18.34-18.35a8,8,0,0,0-11.32,11.32L180.69,200l-18.35,18.34a8,8,0,0,0,11.32,11.32L192,211.31l18.34,18.35a8,8,0,0,0,11.32-11.32L203.31,200l18.35-18.34A8,8,0,0,0,221.66,170.34Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M192,148H64a12,12,0,0,1,0-24H192a12,12,0,0,1,0,24Zm40-72H24a12,12,0,0,0,0,24H232a12,12,0,0,0,0-24ZM128,172H104a12,12,0,0,0,0,24h24a12,12,0,0,0,0-24Zm96.49-4.49a12,12,0,0,0-17,0L192,183l-15.51-15.52a12,12,0,0,0-17,17L175,200l-15.52,15.51a12,12,0,0,0,17,17L192,217l15.51,15.52a12,12,0,0,0,17-17L209,200l15.52-15.51A12,12,0,0,0,224.49,167.51Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM72,128a8,8,0,0,1,8-8h96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,128Zm56,48H112a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm69.66,10.34a8,8,0,0,1-11.32,11.32L176,187.31l-10.34,10.35a8,8,0,0,1-11.32-11.32L164.69,176l-10.35-10.34a8,8,0,0,1,11.32-11.32L176,164.69l10.34-10.35a8,8,0,0,1,11.32,11.32L187.31,176ZM208,96H48a8,8,0,0,1,0-16H208a8,8,0,0,1,0,16Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M232,56V200a16,16,0,0,1-16,16h-8l-16-16-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z" opacity="0.2"/><path d="M192,144H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm40-64H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM128,176H104a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Zm93.66-5.66a8,8,0,0,0-11.32,0L192,188.69l-18.34-18.35a8,8,0,0,0-11.32,11.32L180.69,200l-18.35,18.34a8,8,0,0,0,11.32,11.32L192,211.31l18.34,18.35a8,8,0,0,0,11.32-11.32L203.31,200l18.35-18.34A8,8,0,0,0,221.66,170.34Z"/>`,
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
      ${PhFunnelSimpleX.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhFunnelSimpleX };
