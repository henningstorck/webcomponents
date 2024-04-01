/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-rows-plus-top": PhRowsPlusTop;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-rows-plus-top": PhRowsPlusTop;
    }
  }
}

@customElement("ph-rows-plus-top")
class PhRowsPlusTop extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M208,164H48a12,12,0,0,0-12,12v24a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V176A12,12,0,0,0,208,164Zm4,36a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V176a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4ZM208,92H48a12,12,0,0,0-12,12v24a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V104A12,12,0,0,0,208,92Zm4,36a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V104a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4ZM100,40a4,4,0,0,1,4-4h20V16a4,4,0,0,1,8,0V36h20a4,4,0,0,1,0,8H132V64a4,4,0,0,1-8,0V44H104A4,4,0,0,1,100,40Z"/>`,
    ],
    [
      "light",
      svg`<path d="M208,162H48a14,14,0,0,0-14,14v24a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V176A14,14,0,0,0,208,162Zm2,38a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V176a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM208,90H48a14,14,0,0,0-14,14v24a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V104A14,14,0,0,0,208,90Zm2,38a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V104a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM98,40a6,6,0,0,1,6-6h18V16a6,6,0,0,1,12,0V34h18a6,6,0,0,1,0,12H134V64a6,6,0,0,1-12,0V46H104A6,6,0,0,1,98,40Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M208,160H48a16,16,0,0,0-16,16v24a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V176A16,16,0,0,0,208,160Zm0,40H48V176H208v24Zm0-112H48a16,16,0,0,0-16,16v24a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V104A16,16,0,0,0,208,88Zm0,40H48V104H208v24ZM96,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H136V64a8,8,0,0,1-16,0V48H104A8,8,0,0,1,96,40Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M208,156H48a20,20,0,0,0-20,20v24a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V176A20,20,0,0,0,208,156Zm-4,40H52V180H204Zm4-116H48a20,20,0,0,0-20,20v24a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V100A20,20,0,0,0,208,80Zm-4,40H52V104H204ZM96,36a12,12,0,0,1,12-12h8V16a12,12,0,0,1,24,0v8h8a12,12,0,0,1,0,24h-8v8a12,12,0,0,1-24,0V48h-8A12,12,0,0,1,96,36Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M224,176v24a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V176a16,16,0,0,1,16-16H208A16,16,0,0,1,224,176ZM208,88H48a16,16,0,0,0-16,16v24a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V104A16,16,0,0,0,208,88ZM104,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H136V16a8,8,0,0,0-16,0V32H104a8,8,0,0,0,0,16Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M216,176v24a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V176a8,8,0,0,1,8-8H208A8,8,0,0,1,216,176Zm-8-80H48a8,8,0,0,0-8,8v24a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V104A8,8,0,0,0,208,96Z" opacity="0.2"/><path d="M208,160H48a16,16,0,0,0-16,16v24a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V176A16,16,0,0,0,208,160Zm0,40H48V176H208v24Zm0-112H48a16,16,0,0,0-16,16v24a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V104A16,16,0,0,0,208,88Zm0,40H48V104H208v24ZM96,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H136V64a8,8,0,0,1-16,0V48H104A8,8,0,0,1,96,40Z"/>`,
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
      ${PhRowsPlusTop.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhRowsPlusTop };
