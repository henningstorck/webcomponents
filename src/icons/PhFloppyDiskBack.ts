/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-floppy-disk-back": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-floppy-disk-back": IconAttrs;
    }
  }
}

@customElement("ph-floppy-disk-back")
class PhFloppyDiskBack extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M208,36H83.31a12,12,0,0,0-8.48,3.51L39.52,74.83A11.9,11.9,0,0,0,36,83.31V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM84,44h88V80a4,4,0,0,1-4,4H88a4,4,0,0,1-4-4ZM212,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V83.31a4,4,0,0,1,1.17-2.82L76,49.66V80A12,12,0,0,0,88,92h80a12,12,0,0,0,12-12V44h28a4,4,0,0,1,4,4Zm-84-92a36,36,0,1,0,36,36A36,36,0,0,0,128,116Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,128,180Z"/>`,
    ],
    [
      "light",
      svg`<path d="M208,34H83.31a13.94,13.94,0,0,0-9.9,4.1L38.1,73.41a13.94,13.94,0,0,0-4.1,9.9V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM86,46h84V80a2,2,0,0,1-2,2H88a2,2,0,0,1-2-2ZM210,208a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V83.31a2,2,0,0,1,.59-1.41L74,54.48V80A14,14,0,0,0,88,94h80a14,14,0,0,0,14-14V46h26a2,2,0,0,1,2,2Zm-82-94a38,38,0,1,0,38,38A38,38,0,0,0,128,114Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,128,178Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M208,32H83.31A15.86,15.86,0,0,0,72,36.69L36.69,72A15.86,15.86,0,0,0,32,83.31V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM88,48h80V80H88ZM208,208H48V83.31l24-24V80A16,16,0,0,0,88,96h80a16,16,0,0,0,16-16V48h24Zm-80-96a40,40,0,1,0,40,40A40,40,0,0,0,128,112Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,176Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M208,28H83.31a19.86,19.86,0,0,0-14.14,5.86L33.86,69.17A19.86,19.86,0,0,0,28,83.31V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM92,52h72V72H92ZM204,204H52V85L68,69v7A20,20,0,0,0,88,96h80a20,20,0,0,0,20-20V52h16Zm-76-96a42,42,0,1,0,42,42A42,42,0,0,0,128,108Zm0,60a18,18,0,1,1,18-18A18,18,0,0,1,128,168Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M208,32H83.31A15.86,15.86,0,0,0,72,36.69L36.69,72A15.86,15.86,0,0,0,32,83.31V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM128,184a32,32,0,1,1,32-32A32,32,0,0,1,128,184ZM172,80a4,4,0,0,1-4,4H88a4,4,0,0,1-4-4V48h88Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M208,40H176V80a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V40.73a8,8,0,0,0-2.34,1.61L42.34,77.66A8,8,0,0,0,40,83.31V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48A8,8,0,0,0,208,40ZM128,184a32,32,0,1,1,32-32A32,32,0,0,1,128,184Z" opacity="0.2"/><path d="M208,32H83.31A15.86,15.86,0,0,0,72,36.69L36.69,72A15.86,15.86,0,0,0,32,83.31V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM88,48h80V80H88ZM208,208H48V83.31l24-24V80A16,16,0,0,0,88,96h80a16,16,0,0,0,16-16V48h24Zm-80-96a40,40,0,1,0,40,40A40,40,0,0,0,128,112Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,176Z"/>`,
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
      ${PhFloppyDiskBack.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhFloppyDiskBack };
