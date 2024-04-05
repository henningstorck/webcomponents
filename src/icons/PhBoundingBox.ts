/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-bounding-box": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-bounding-box": IconAttrs;
    }
  }
}

@customElement("ph-bounding-box")
class PhBoundingBox extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M208,92a12,12,0,0,0,12-12V48a12,12,0,0,0-12-12H176a12,12,0,0,0-12,12V60H92V48A12,12,0,0,0,80,36H48A12,12,0,0,0,36,48V80A12,12,0,0,0,48,92H60v72H48a12,12,0,0,0-12,12v32a12,12,0,0,0,12,12H80a12,12,0,0,0,12-12V196h72v12a12,12,0,0,0,12,12h32a12,12,0,0,0,12-12V176a12,12,0,0,0-12-12H196V92ZM172,48a4,4,0,0,1,4-4h32a4,4,0,0,1,4,4V80a4,4,0,0,1-4,4H176a4,4,0,0,1-4-4ZM44,80V48a4,4,0,0,1,4-4H80a4,4,0,0,1,4,4V80a4,4,0,0,1-4,4H48A4,4,0,0,1,44,80ZM84,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V176a4,4,0,0,1,4-4H80a4,4,0,0,1,4,4Zm128-32v32a4,4,0,0,1-4,4H176a4,4,0,0,1-4-4V176a4,4,0,0,1,4-4h32A4,4,0,0,1,212,176Zm-24-12H176a12,12,0,0,0-12,12v12H92V176a12,12,0,0,0-12-12H68V92H80A12,12,0,0,0,92,80V68h72V80a12,12,0,0,0,12,12h12Z"/>`,
    ],
    [
      "light",
      svg`<path d="M208,94a14,14,0,0,0,14-14V48a14,14,0,0,0-14-14H176a14,14,0,0,0-14,14V58H94V48A14,14,0,0,0,80,34H48A14,14,0,0,0,34,48V80A14,14,0,0,0,48,94H58v68H48a14,14,0,0,0-14,14v32a14,14,0,0,0,14,14H80a14,14,0,0,0,14-14V198h68v10a14,14,0,0,0,14,14h32a14,14,0,0,0,14-14V176a14,14,0,0,0-14-14H198V94ZM174,48a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2V80a2,2,0,0,1-2,2H176a2,2,0,0,1-2-2ZM46,80V48a2,2,0,0,1,2-2H80a2,2,0,0,1,2,2V80a2,2,0,0,1-2,2H48A2,2,0,0,1,46,80ZM82,208a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V176a2,2,0,0,1,2-2H80a2,2,0,0,1,2,2Zm128-32v32a2,2,0,0,1-2,2H176a2,2,0,0,1-2-2V176a2,2,0,0,1,2-2h32A2,2,0,0,1,210,176Zm-24-14H176a14,14,0,0,0-14,14v10H94V176a14,14,0,0,0-14-14H70V94H80A14,14,0,0,0,94,80V70h68V80a14,14,0,0,0,14,14h10Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M208,96a16,16,0,0,0,16-16V48a16,16,0,0,0-16-16H176a16,16,0,0,0-16,16v8H96V48A16,16,0,0,0,80,32H48A16,16,0,0,0,32,48V80A16,16,0,0,0,48,96h8v64H48a16,16,0,0,0-16,16v32a16,16,0,0,0,16,16H80a16,16,0,0,0,16-16v-8h64v8a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V176a16,16,0,0,0-16-16h-8V96ZM176,48h32V80H176ZM48,48H80V63.9a.51.51,0,0,0,0,.2V80H48ZM80,208H48V176H80v15.9a.51.51,0,0,0,0,.2V208Zm128,0H176V176h32Zm-24-48h-8a16,16,0,0,0-16,16v8H96v-8a16,16,0,0,0-16-16H72V96h8A16,16,0,0,0,96,80V72h64v8a16,16,0,0,0,16,16h8Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M208,100a20,20,0,0,0,20-20V48a20,20,0,0,0-20-20H176a20,20,0,0,0-20,20v4H100V48A20,20,0,0,0,80,28H48A20,20,0,0,0,28,48V80a20,20,0,0,0,20,20h4v56H48a20,20,0,0,0-20,20v32a20,20,0,0,0,20,20H80a20,20,0,0,0,20-20v-4h56v4a20,20,0,0,0,20,20h32a20,20,0,0,0,20-20V176a20,20,0,0,0-20-20h-4V100ZM180,52h24V76H180ZM52,52H76V76H52ZM76,204H52V180H76Zm128,0H180V180h24Zm-24-48h-4a20,20,0,0,0-20,20v4H100v-4a20,20,0,0,0-20-20H76V100h4a20,20,0,0,0,20-20V76h56v4a20,20,0,0,0,20,20h4Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M208,96a16,16,0,0,0,16-16V48a16,16,0,0,0-16-16H176a16,16,0,0,0-16,16v8H96V48A16,16,0,0,0,80,32H48A16,16,0,0,0,32,48V80A16,16,0,0,0,48,96h8v64H48a16,16,0,0,0-16,16v32a16,16,0,0,0,16,16H80a16,16,0,0,0,16-16v-8h64v8a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V176a16,16,0,0,0-16-16h-8V96Zm-24,64h-8a16,16,0,0,0-16,16v8H96v-8a16,16,0,0,0-16-16H72V96h8A16,16,0,0,0,96,80V72h64v8a16,16,0,0,0,16,16h8Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M216,48V80a8,8,0,0,1-8,8H176a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h32A8,8,0,0,1,216,48ZM80,40H48a8,8,0,0,0-8,8V80a8,8,0,0,0,8,8H80a8,8,0,0,0,8-8V48A8,8,0,0,0,80,40ZM208,168H176a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V176A8,8,0,0,0,208,168ZM80,168H48a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8H80a8,8,0,0,0,8-8V176A8,8,0,0,0,80,168Z" opacity="0.2"/><path d="M208,96a16,16,0,0,0,16-16V48a16,16,0,0,0-16-16H176a16,16,0,0,0-16,16v8H96V48A16,16,0,0,0,80,32H48A16,16,0,0,0,32,48V80A16,16,0,0,0,48,96h8v64H48a16,16,0,0,0-16,16v32a16,16,0,0,0,16,16H80a16,16,0,0,0,16-16v-8h64v8a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V176a16,16,0,0,0-16-16h-8V96ZM176,48h32V80H176ZM48,48H80V63.9a.51.51,0,0,0,0,.2V80H48ZM80,208H48V176H80v15.9a.51.51,0,0,0,0,.2V208Zm128,0H176V176h32Zm-24-48h-8a16,16,0,0,0-16,16v8H96v-8a16,16,0,0,0-16-16H72V96h8A16,16,0,0,0,96,80V72h64v8a16,16,0,0,0,16,16h8Z"/>`,
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
      ${PhBoundingBox.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhBoundingBox };
