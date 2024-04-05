/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-user-square": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-user-square": IconAttrs;
    }
  }
}

@customElement("ph-user-square")
class PhUserSquare extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM63,212a68,68,0,0,1,130,0Zm149-4a4,4,0,0,1-4,4h-6.66a76,76,0,0,0-52.75-53.13,44,44,0,1,0-41.18,0A76,76,0,0,0,54.66,212H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Zm-84-52a36,36,0,1,1,36-36A36,36,0,0,1,128,156Z"/>`,
    ],
    [
      "light",
      svg`<path d="M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM94,120a34,34,0,1,1,34,34A34,34,0,0,1,94,120ZM65.77,210a66.43,66.43,0,0,1,20.77-29.36,66,66,0,0,1,82.92,0A66.43,66.43,0,0,1,190.23,210ZM210,208a2,2,0,0,1-2,2h-5.17a77.85,77.85,0,0,0-49.38-51.71,46,46,0,1,0-50.9,0A77.85,77.85,0,0,0,53.17,210H48a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120ZM68.67,208A64.36,64.36,0,0,1,87.8,182.2a64,64,0,0,1,80.4,0A64.36,64.36,0,0,1,187.33,208ZM208,208h-3.67a79.9,79.9,0,0,0-46.68-50.29,48,48,0,1,0-59.3,0A79.9,79.9,0,0,0,51.67,208H48V48H208V208Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,24V196.24a83.63,83.63,0,0,0-39.08-39.67,52,52,0,1,0-73.84,0A83.63,83.63,0,0,0,52,196.24V52ZM100,120a28,28,0,1,1,28,28A28,28,0,0,1,100,120Zm28,52a59.34,59.34,0,0,1,37.69,13.31A60.45,60.45,0,0,1,181.06,204H74.94a60.45,60.45,0,0,1,15.37-18.69A59.34,59.34,0,0,1,128,172Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M172,120a44,44,0,1,1-44-44A44,44,0,0,1,172,120Zm52-72V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM208,208V48H48V208h3.67a80.58,80.58,0,0,1,26.07-38.25q3.08-2.48,6.36-4.62a4,4,0,0,1,4.81.33,59.82,59.82,0,0,0,78.18,0,4,4,0,0,1,4.81-.33q3.28,2.15,6.36,4.62A80.58,80.58,0,0,1,204.33,208H208Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M208,40H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48A8,8,0,0,0,208,40ZM57.78,216A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,70.22,56Z" opacity="0.2"/><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120ZM68.67,208A64.45,64.45,0,0,1,87.8,182.2a64,64,0,0,1,80.4,0A64.45,64.45,0,0,1,187.33,208ZM208,208h-3.67a79.87,79.87,0,0,0-46.69-50.29,48,48,0,1,0-59.28,0A79.87,79.87,0,0,0,51.67,208H48V48H208V208Z"/>`,
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
      ${PhUserSquare.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhUserSquare };
