/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-dice-six": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-dice-six": IconAttrs;
    }
  }
}

@customElement("ph-dice-six")
class PhDiceSix extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M192,36H64A28,28,0,0,0,36,64V192a28,28,0,0,0,28,28H192a28,28,0,0,0,28-28V64A28,28,0,0,0,192,36Zm20,156a20,20,0,0,1-20,20H64a20,20,0,0,1-20-20V64A20,20,0,0,1,64,44H192a20,20,0,0,1,20,20ZM100,84a8,8,0,1,1-8-8A8,8,0,0,1,100,84Zm72,0a8,8,0,1,1-8-8A8,8,0,0,1,172,84Zm-72,44a8,8,0,1,1-8-8A8,8,0,0,1,100,128Zm72,0a8,8,0,1,1-8-8A8,8,0,0,1,172,128Zm-72,44a8,8,0,1,1-8-8A8,8,0,0,1,100,172Zm72,0a8,8,0,1,1-8-8A8,8,0,0,1,172,172Z"/>`,
    ],
    [
      "light",
      svg`<path d="M192,34H64A30,30,0,0,0,34,64V192a30,30,0,0,0,30,30H192a30,30,0,0,0,30-30V64A30,30,0,0,0,192,34Zm18,158a18,18,0,0,1-18,18H64a18,18,0,0,1-18-18V64A18,18,0,0,1,64,46H192a18,18,0,0,1,18,18ZM102,84A10,10,0,1,1,92,74,10,10,0,0,1,102,84Zm72,0a10,10,0,1,1-10-10A10,10,0,0,1,174,84Zm-72,44a10,10,0,1,1-10-10A10,10,0,0,1,102,128Zm72,0a10,10,0,1,1-10-10A10,10,0,0,1,174,128Zm-72,44a10,10,0,1,1-10-10A10,10,0,0,1,102,172Zm72,0a10,10,0,1,1-10-10A10,10,0,0,1,174,172Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M192,32H64A32,32,0,0,0,32,64V192a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V64A32,32,0,0,0,192,32Zm16,160a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64A16,16,0,0,1,64,48H192a16,16,0,0,1,16,16ZM104,84A12,12,0,1,1,92,72,12,12,0,0,1,104,84Zm72,0a12,12,0,1,1-12-12A12,12,0,0,1,176,84Zm-72,44a12,12,0,1,1-12-12A12,12,0,0,1,104,128Zm72,0a12,12,0,1,1-12-12A12,12,0,0,1,176,128Zm-72,44a12,12,0,1,1-12-12A12,12,0,0,1,104,172Zm72,0a12,12,0,1,1-12-12A12,12,0,0,1,176,172Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M192,28H64A36,36,0,0,0,28,64V192a36,36,0,0,0,36,36H192a36,36,0,0,0,36-36V64A36,36,0,0,0,192,28Zm12,164a12,12,0,0,1-12,12H64a12,12,0,0,1-12-12V64A12,12,0,0,1,64,52H192a12,12,0,0,1,12,12ZM112,84A16,16,0,1,1,96,68,16,16,0,0,1,112,84Zm64,0a16,16,0,1,1-16-16A16,16,0,0,1,176,84Zm-64,44a16,16,0,1,1-16-16A16,16,0,0,1,112,128Zm64,0a16,16,0,1,1-16-16A16,16,0,0,1,176,128Zm-64,44a16,16,0,1,1-16-16A16,16,0,0,1,112,172Zm64,0a16,16,0,1,1-16-16A16,16,0,0,1,176,172Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M192,32H64A32,32,0,0,0,32,64V192a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V64A32,32,0,0,0,192,32ZM92,184a12,12,0,1,1,12-12A12,12,0,0,1,92,184Zm0-44a12,12,0,1,1,12-12A12,12,0,0,1,92,140Zm0-44a12,12,0,1,1,12-12A12,12,0,0,1,92,96Zm72,88a12,12,0,1,1,12-12A12,12,0,0,1,164,184Zm0-44a12,12,0,1,1,12-12A12,12,0,0,1,164,140Zm0-44a12,12,0,1,1,12-12A12,12,0,0,1,164,96Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M216,64V192a24,24,0,0,1-24,24H64a24,24,0,0,1-24-24V64A24,24,0,0,1,64,40H192A24,24,0,0,1,216,64Z" opacity="0.2"/><path d="M192,32H64A32,32,0,0,0,32,64V192a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V64A32,32,0,0,0,192,32Zm16,160a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64A16,16,0,0,1,64,48H192a16,16,0,0,1,16,16ZM104,84A12,12,0,1,1,92,72,12,12,0,0,1,104,84Zm72,0a12,12,0,1,1-12-12A12,12,0,0,1,176,84Zm-72,44a12,12,0,1,1-12-12A12,12,0,0,1,104,128Zm72,0a12,12,0,1,1-12-12A12,12,0,0,1,176,128Zm-72,44a12,12,0,1,1-12-12A12,12,0,0,1,104,172Zm72,0a12,12,0,1,1-12-12A12,12,0,0,1,176,172Z"/>`,
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
      ${PhDiceSix.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhDiceSix };
