/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-chat-teardrop-text": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-chat-teardrop-text": IconAttrs;
    }
  }
}

@customElement("ph-chat-teardrop-text")
class PhChatTeardropText extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M168,112a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h68A4,4,0,0,1,168,112Zm-4,28H96a4,4,0,0,0,0,8h68a4,4,0,0,0,0-8Zm64-16a96.11,96.11,0,0,1-96,96H48a12,12,0,0,1-12-12V124a96,96,0,0,1,192,0Zm-8,0a88,88,0,0,0-176,0v84a4,4,0,0,0,4,4h84A88.1,88.1,0,0,0,220,124Z"/>`,
    ],
    [
      "light",
      svg`<path d="M170,112a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h68A6,6,0,0,1,170,112Zm-6,26H96a6,6,0,0,0,0,12h68a6,6,0,0,0,0-12Zm66-14a98.11,98.11,0,0,1-98,98H48a14,14,0,0,1-14-14V124a98,98,0,0,1,196,0Zm-12,0a86,86,0,0,0-172,0v84a2,2,0,0,0,2,2h84A86.1,86.1,0,0,0,218,124Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M172,112a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h68A8,8,0,0,1,172,112Zm-8,24H96a8,8,0,0,0,0,16h68a8,8,0,0,0,0-16Zm68-12A100.11,100.11,0,0,1,132,224H48a16,16,0,0,1-16-16V124a100,100,0,0,1,200,0Zm-16,0a84,84,0,0,0-168,0v84h84A84.09,84.09,0,0,0,216,124Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M176,108a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h68A12,12,0,0,1,176,108Zm-12,28H96a12,12,0,0,0,0,24h68a12,12,0,0,0,0-24Zm72-12A104.11,104.11,0,0,1,132,228H48a20,20,0,0,1-20-20V124a104,104,0,0,1,208,0Zm-24,0a80,80,0,0,0-160,0v80h80A80.09,80.09,0,0,0,212,124Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M132,24A100.11,100.11,0,0,0,32,124v84a16,16,0,0,0,16,16h84a100,100,0,0,0,0-200Zm32,128H96a8,8,0,0,1,0-16h68a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h68a8,8,0,0,1,0,16Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M224,124h0a92,92,0,0,1-92,92H48a8,8,0,0,1-8-8V124a92,92,0,0,1,92-92h0A92,92,0,0,1,224,124Z" opacity="0.2"/><path d="M172,112a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h68A8,8,0,0,1,172,112Zm-8,24H96a8,8,0,0,0,0,16h68a8,8,0,0,0,0-16Zm68-12A100.11,100.11,0,0,1,132,224H48a16,16,0,0,1-16-16V124a100,100,0,0,1,200,0Zm-16,0a84,84,0,0,0-168,0v84h84A84.09,84.09,0,0,0,216,124Z"/>`,
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
      ${PhChatTeardropText.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhChatTeardropText };
