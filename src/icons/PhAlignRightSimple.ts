/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-align-right-simple": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-align-right-simple": IconAttrs;
    }
  }
}

@customElement("ph-align-right-simple")
class PhAlignRightSimple extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M228,56V200a4,4,0,0,1-8,0V56a4,4,0,0,1,8,0ZM196,96v64a12,12,0,0,1-12,12H32a12,12,0,0,1-12-12V96A12,12,0,0,1,32,84H184A12,12,0,0,1,196,96Zm-8,0a4,4,0,0,0-4-4H32a4,4,0,0,0-4,4v64a4,4,0,0,0,4,4H184a4,4,0,0,0,4-4Z"/>`,
    ],
    [
      "light",
      svg`<path d="M230,56V200a6,6,0,0,1-12,0V56a6,6,0,0,1,12,0ZM198,96v64a14,14,0,0,1-14,14H32a14,14,0,0,1-14-14V96A14,14,0,0,1,32,82H184A14,14,0,0,1,198,96Zm-12,0a2,2,0,0,0-2-2H32a2,2,0,0,0-2,2v64a2,2,0,0,0,2,2H184a2,2,0,0,0,2-2Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M232,56V200a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0ZM200,96v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H184A16,16,0,0,1,200,96Zm-16,0H32v64H184Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M236,56V200a12,12,0,0,1-24,0V56a12,12,0,0,1,24,0ZM196,96v64a20,20,0,0,1-20,20H32a20,20,0,0,1-20-20V96A20,20,0,0,1,32,76H176A20,20,0,0,1,196,96Zm-24,4H36v56H172Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M232,56V200a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0ZM184,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V96A16,16,0,0,0,184,80Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M192,96v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H184A8,8,0,0,1,192,96Z" opacity="0.2"/><path d="M232,56V200a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0ZM200,96v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H184A16,16,0,0,1,200,96Zm-16,0H32v64H184Z"/>`,
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
      ${PhAlignRightSimple.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhAlignRightSimple };
