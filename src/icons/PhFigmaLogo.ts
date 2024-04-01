/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-figma-logo": PhFigmaLogo;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-figma-logo": PhFigmaLogo;
    }
  }
}

@customElement("ph-figma-logo")
class PhFigmaLogo extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M184.46,96A36,36,0,0,0,168,28H96A36,36,0,0,0,79.54,96a36,36,0,0,0,1.56,64.76A40,40,0,1,0,140,196V150.59A36,36,0,1,0,184.46,96ZM196,64a28,28,0,0,1-28,28H140V36h28A28,28,0,0,1,196,64Zm-56,36h5.41a36.41,36.41,0,0,0-5.41,5.41ZM68,64A28,28,0,0,1,96,36h36V92H96A28,28,0,0,1,68,64Zm64,132a32,32,0,1,1-32-32h32Zm0-40H96a28,28,0,0,1,0-56h36Zm36,0a28,28,0,1,1,28-28A28,28,0,0,1,168,156Z"/>`,
    ],
    [
      "light",
      svg`<path d="M188.45,96A38,38,0,0,0,168,26H96A38,38,0,0,0,75.55,96,38,38,0,0,0,77,160.89,42,42,0,1,0,142,196V155.68A38,38,0,1,0,188.45,96ZM194,64a26,26,0,0,1-26,26H142V38h26A26,26,0,0,1,194,64ZM70,64A26,26,0,0,1,96,38h34V90H96A26,26,0,0,1,70,64Zm26,90a26,26,0,0,1,0-52h34v52H96Zm34,42a30,30,0,1,1-30-30h30Zm38-42a26,26,0,1,1,26-26A26,26,0,0,1,168,154Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M192,96a40,40,0,0,0-24-72H96A40,40,0,0,0,72,96a40,40,0,0,0,1.37,65A44,44,0,1,0,144,196V160a40,40,0,1,0,48-64Zm0-32a24,24,0,0,1-24,24H144V40h24A24,24,0,0,1,192,64ZM72,64A24,24,0,0,1,96,40h32V88H96A24,24,0,0,1,72,64Zm24,88a24,24,0,0,1,0-48h32v48H96Zm32,44a28,28,0,1,1-28-28h28Zm40-44a24,24,0,1,1,24-24A24,24,0,0,1,168,152Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M198.15,96A44,44,0,0,0,168,20H96A44,44,0,0,0,65.85,96a43.9,43.9,0,0,0,1.23,65.12A48,48,0,1,0,148,196V167.17A44,44,0,0,0,198.15,96ZM188,64a20,20,0,0,1-20,20H148V44h20A20,20,0,0,1,188,64ZM76,64A20,20,0,0,1,96,44h28V84H96A20,20,0,0,1,76,64Zm20,84a20,20,0,0,1,0-40h28v40H96Zm28,48a24,24,0,1,1-24-24h24Zm44-48a20,20,0,1,1,20-20A20,20,0,0,1,168,148Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M192,96a40,40,0,0,0-24-72H96A40,40,0,0,0,72,96a40,40,0,0,0,1.37,65A44,44,0,1,0,144,196V160a40,40,0,1,0,48-64Zm-64,56H96a24,24,0,0,1,0-48h32Zm40-64H144V40h24a24,24,0,0,1,0,48Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M200,128a32,32,0,1,1-32-32A32,32,0,0,1,200,128ZM96,96h40V32H96a32,32,0,0,0,0,64ZM64,196a36,36,0,0,0,72,0V160H100A36,36,0,0,0,64,196Z" opacity="0.2"/><path d="M192,96a40,40,0,0,0-24-72H96A40,40,0,0,0,72,96a40,40,0,0,0,1.37,65A44,44,0,1,0,144,196V160a40,40,0,1,0,48-64Zm0-32a24,24,0,0,1-24,24H144V40h24A24,24,0,0,1,192,64ZM72,64A24,24,0,0,1,96,40h32V88H96A24,24,0,0,1,72,64Zm24,88a24,24,0,0,1,0-48h32v48H96Zm32,44a28,28,0,1,1-28-28h28Zm40-44a24,24,0,1,1,24-24A24,24,0,0,1,168,152Z"/>`,
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
      ${PhFigmaLogo.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhFigmaLogo };
