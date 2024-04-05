/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-park": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-park": IconAttrs;
    }
  }
}

@customElement("ph-park")
class PhPark extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M232,196H196V164h28a4,4,0,0,0,3.88-5l-32-128a4,4,0,0,0-7.76,0l-32,128a4,4,0,0,0,3.88,5h28v32H116V172h12a4,4,0,0,0,0-8H116V140h12a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8H52v24H40a4,4,0,0,0,0,8H52v24H24a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8ZM192,48.49,218.88,156H165.12ZM60,140h48v24H60Zm0,32h48v24H60Zm56-80A24,24,0,1,0,92,68,24,24,0,0,0,116,92Zm0-40a16,16,0,1,1-16,16A16,16,0,0,1,116,52Z"/>`,
    ],
    [
      "light",
      svg`<path d="M232,194H198V166h26a6,6,0,0,0,5.82-7.46l-32-128a6,6,0,0,0-11.64,0l-32,128A6,6,0,0,0,160,166h26v28H118V174h10a6,6,0,0,0,0-12H118V142h10a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12H50v20H40a6,6,0,0,0,0,12H50v20H24a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12ZM192,56.74,216.32,154H167.68ZM62,142h44v20H62Zm0,32h44v20H62Zm54-80A26,26,0,1,0,90,68,26,26,0,0,0,116,94Zm0-40a14,14,0,1,1-14,14A14,14,0,0,1,116,54Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M232,192H200V168h24a8,8,0,0,0,7.76-9.94l-32-128a8,8,0,0,0-15.52,0l-32,128A8,8,0,0,0,160,168h24v24H120V176h8a8,8,0,0,0,0-16h-8V144h8a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16h8v16H40a8,8,0,0,0,0,16h8v16H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM192,65l21.75,87h-43.5ZM64,144h40v16H64Zm0,32h40v16H64Zm52-80A28,28,0,1,0,88,68,28,28,0,0,0,116,96Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,116,56Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M232,188H204V172h20a12,12,0,0,0,11.64-14.91l-32-128a12,12,0,0,0-23.28,0l-32,128A12,12,0,0,0,160,172h20v16H116V176a12,12,0,0,0,0-24V140a12,12,0,0,0,0-24H32a12,12,0,0,0,0,24v12a12,12,0,0,0,0,24v12H24a12,12,0,0,0,0,24H232a12,12,0,0,0,0-24ZM192,81.48,208.63,148H175.37ZM56,140H92v12H56Zm0,36H92v12H56Zm60-76A32,32,0,1,0,84,68,32,32,0,0,0,116,100Zm0-40a8,8,0,1,1-8,8A8,8,0,0,1,116,60Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M232,192H200V168h24a8,8,0,0,0,7.76-9.94l-32-128a8,8,0,0,0-15.52,0l-32,128A8,8,0,0,0,160,168h24v24H120V176h8a8,8,0,0,0,0-16h-8V144h8a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16h8v16H40a8,8,0,0,0,0,16h8v16H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm-128,0H64V176h40Zm0-32H64V144h40Zm12-64A28,28,0,1,0,88,68,28,28,0,0,0,116,96Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,116,56Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M224,160H160L192,32Z" opacity="0.2"/><path d="M232,192H200V168h24a8,8,0,0,0,7.76-9.94l-32-128a8,8,0,0,0-15.52,0l-32,128A8,8,0,0,0,160,168h24v24H120V176h8a8,8,0,0,0,0-16h-8V144h8a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16h8v16H40a8,8,0,0,0,0,16h8v16H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM192,65l21.75,87h-43.5ZM64,144h40v16H64Zm0,32h40v16H64Zm52-80A28,28,0,1,0,88,68,28,28,0,0,0,116,96Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,116,56Z"/>`,
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
      ${PhPark.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhPark };
