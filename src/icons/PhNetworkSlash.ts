/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-network-slash": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-network-slash": IconAttrs;
    }
  }
}

@customElement("ph-network-slash")
class PhNetworkSlash extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M100,54V40a12,12,0,0,1,12-12h32a12,12,0,0,1,12,12V72a12,12,0,0,1-12,12H127.61a4,4,0,0,1,0-8H144a4,4,0,0,0,4-4V40a4,4,0,0,0-4-4H112a4,4,0,0,0-4,4V54a4,4,0,0,1-8,0ZM211,213.31a4,4,0,1,1-5.92,5.38L119,124H68v40H80a12,12,0,0,1,12,12v32a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V176a12,12,0,0,1,12-12H60V124H24a4,4,0,0,1,0-8h87.68L45,42.69A4,4,0,0,1,51,37.31ZM80,172H48a4,4,0,0,0-4,4v32a4,4,0,0,0,4,4H80a4,4,0,0,0,4-4V176A4,4,0,0,0,80,172Zm152-56H164a4,4,0,0,0,0,8h24v26.83a4,4,0,1,0,8,0V124h36a4,4,0,0,0,0-8Z"/>`,
    ],
    [
      "light",
      svg`<path d="M98,54V40a14,14,0,0,1,14-14h32a14,14,0,0,1,14,14V72a14,14,0,0,1-14,14H127.61a6,6,0,0,1,0-12H144a2,2,0,0,0,2-2V40a2,2,0,0,0-2-2H112a2,2,0,0,0-2,2V54a6,6,0,0,1-12,0ZM212.44,212a6,6,0,0,1-8.88,8.08l-85.49-94H70v36H80a14,14,0,0,1,14,14v32a14,14,0,0,1-14,14H48a14,14,0,0,1-14-14V176a14,14,0,0,1,14-14H58V126H24a6,6,0,0,1,0-12h83.16L43.56,44A6,6,0,0,1,52.44,36ZM80,174H48a2,2,0,0,0-2,2v32a2,2,0,0,0,2,2H80a2,2,0,0,0,2-2V176A2,2,0,0,0,80,174Zm152-60H164a6,6,0,0,0,0,12h22v24.83a6,6,0,1,0,12,0V126h34a6,6,0,0,0,0-12Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M96,54V40a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V72a16,16,0,0,1-16,16H127.61a8,8,0,0,1,0-16H144V40H112V54a8,8,0,0,1-16,0ZM213.92,210.62a8,8,0,1,1-11.84,10.76L117.19,128H72v32h8a16,16,0,0,1,16,16v32a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V176a16,16,0,0,1,16-16h8V128H24a8,8,0,0,1,0-16h78.64L42.08,45.38A8,8,0,1,1,53.92,34.62ZM80,176H48v32H80Zm152-64H164a8,8,0,0,0,0,16h20v22.83a8,8,0,1,0,16,0V128h32a8,8,0,0,0,0-16Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M56.88,31.93A12,12,0,1,0,39.12,48.07L93.6,108H24a12,12,0,0,0,0,24H52v24H48a20,20,0,0,0-20,20v32a20,20,0,0,0,20,20H80a20,20,0,0,0,20-20V176a20,20,0,0,0-20-20H76V132h39.42l83.7,92.07a12,12,0,0,0,17.76-16.14ZM76,204H52V180H76ZM92,42.14V40a20,20,0,0,1,20-20h32a20,20,0,0,1,20,20V72a20,20,0,0,1-20,20h-5.58a12,12,0,1,1,0-24H140V44H115.86A12,12,0,0,1,92,42.14ZM244,120a12,12,0,0,1-12,12H204v6.94a12,12,0,0,1-24,0V132h-5.21a12,12,0,1,1,0-24H232A12,12,0,0,1,244,120Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M98.08,59.41A8,8,0,0,1,96,54V40a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V72a16,16,0,0,1-16,16H127.61a8,8,0,0,1-5.92-2.62ZM53.92,34.62A8,8,0,1,0,42.08,45.38L102.64,112H24a8,8,0,0,0,0,16H56v32H48a16,16,0,0,0-16,16v32a16,16,0,0,0,16,16H80a16,16,0,0,0,16-16V176a16,16,0,0,0-16-16H72V128h45.19l84.89,93.38a8,8,0,1,0,11.84-10.76ZM232,112H164a8,8,0,0,0,0,16h20v22.83a8,8,0,1,0,16,0V128h32a8,8,0,0,0,0-16Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M88,176v32a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V176a8,8,0,0,1,8-8H80A8,8,0,0,1,88,176ZM144,32H112a8,8,0,0,0-8,8V72a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V40A8,8,0,0,0,144,32Z" opacity="0.2"/><path d="M96,54V40a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V72a16,16,0,0,1-16,16H127.61a8,8,0,0,1,0-16H144V40H112V54a8,8,0,0,1-16,0ZM213.92,210.62a8,8,0,1,1-11.84,10.76L117.19,128H72v32h8a16,16,0,0,1,16,16v32a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V176a16,16,0,0,1,16-16h8V128H24a8,8,0,0,1,0-16h78.64L42.08,45.38A8,8,0,1,1,53.92,34.62ZM80,176H48v32H80Zm152-64H164a8,8,0,0,0,0,16h20v22.83a8,8,0,1,0,16,0V128h32a8,8,0,0,0,0-16Z"/>`,
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
      ${PhNetworkSlash.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhNetworkSlash };
