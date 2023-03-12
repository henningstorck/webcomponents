/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { IconWeight } from "../types";

@customElement("ph-toolbox")
export default class PhToolbox extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M224,68H172V56a20,20,0,0,0-20-20H104A20,20,0,0,0,84,56V68H32A12,12,0,0,0,20,80V192a12,12,0,0,0,12,12H224a12,12,0,0,0,12-12V80A12,12,0,0,0,224,68ZM92,56a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12V68H92ZM32,76H224a4,4,0,0,1,4,4v36H188V104a4,4,0,0,0-8,0v12H76V104a4,4,0,0,0-8,0v12H28V80A4,4,0,0,1,32,76ZM224,196H32a4,4,0,0,1-4-4V124H68v12a4,4,0,0,0,8,0V124H180v12a4,4,0,0,0,8,0V124h40v68A4,4,0,0,1,224,196Z"/>`,
    ],
    [
      "light",
      svg`<path d="M224,66H174V56a22,22,0,0,0-22-22H104A22,22,0,0,0,82,56V66H32A14,14,0,0,0,18,80V192a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V80A14,14,0,0,0,224,66ZM94,56a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V66H94ZM32,78H224a2,2,0,0,1,2,2v34H190V104a6,6,0,0,0-12,0v10H78V104a6,6,0,0,0-12,0v10H30V80A2,2,0,0,1,32,78ZM224,194H32a2,2,0,0,1-2-2V126H66v10a6,6,0,0,0,12,0V126H178v10a6,6,0,0,0,12,0V126h36v66A2,2,0,0,1,224,194Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M224,64H176V56a24,24,0,0,0-24-24H104A24,24,0,0,0,80,56v8H32A16,16,0,0,0,16,80V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V80A16,16,0,0,0,224,64ZM96,56a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM224,80v32H192v-8a8,8,0,0,0-16,0v8H80v-8a8,8,0,0,0-16,0v8H32V80Zm0,112H32V128H64v8a8,8,0,0,0,16,0v-8h96v8a8,8,0,0,0,16,0v-8h32v64Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M224,64H180V56a28,28,0,0,0-28-28H104A28,28,0,0,0,76,56v8H32A20,20,0,0,0,12,84V192a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V84A20,20,0,0,0,224,64ZM100,56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4v8H100ZM220,88v32H196v-4a12,12,0,0,0-24,0v4H84v-4a12,12,0,0,0-24,0v4H36V88ZM36,188V144H60v4a12,12,0,0,0,24,0v-4h88v4a12,12,0,0,0,24,0v-4h24v44Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M224,64H176V56a24,24,0,0,0-24-24H104A24,24,0,0,0,80,56v8H32A16,16,0,0,0,16,80v28a4,4,0,0,0,4,4H64V96.27A8.17,8.17,0,0,1,71.47,88,8,8,0,0,1,80,96v16h96V96.27A8.17,8.17,0,0,1,183.47,88,8,8,0,0,1,192,96v16h44a4,4,0,0,0,4-4V80A16,16,0,0,0,224,64Zm-64,0H96V56a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Zm80,68v60a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V132a4,4,0,0,1,4-4H64v16a8,8,0,0,0,8.53,8A8.17,8.17,0,0,0,80,143.73V128h96v16a8,8,0,0,0,8.53,8,8.17,8.17,0,0,0,7.47-8.25V128h44A4,4,0,0,1,240,132Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M232,120v72a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V120Z" opacity="0.2"/><path d="M224,64H176V56a24,24,0,0,0-24-24H104A24,24,0,0,0,80,56v8H32A16,16,0,0,0,16,80V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V80A16,16,0,0,0,224,64ZM96,56a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM32,80H224v32H192v-8a8,8,0,0,0-16,0v8H80v-8a8,8,0,0,0-16,0v8H32ZM224,192H32V128H64v8a8,8,0,0,0,16,0v-8h96v8a8,8,0,0,0,16,0v-8h32v64Z"/>`,
    ],
  ]);

  @property({ type: String })
  size: string | number = "1em";

  @property({ type: String })
  weight: IconWeight = "regular";

  @property({ type: String })
  color: string = "regular";

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
      ${PhToolbox.weightsMap.get(this.weight)}
    </svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-toolbox": PhToolbox;
  }
}
