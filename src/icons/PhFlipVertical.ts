/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-flip-vertical": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-flip-vertical": IconAttrs;
    }
  }
}

@customElement("ph-flip-vertical")
class PhFlipVertical extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M56,116H216a12,12,0,0,0,4.6-23.09l-160-64A12,12,0,0,0,44,40v64A12,12,0,0,0,56,116ZM52,40a4,4,0,0,1,4-4,4,4,0,0,1,1.57.32l.07,0,159.91,64A4,4,0,0,1,216,108H56a4,4,0,0,1-4-4ZM227.74,149.61A11.75,11.75,0,0,0,216,140H56a12,12,0,0,0-12,12v64a12,12,0,0,0,12,12,11.8,11.8,0,0,0,4.59-.93l160-64,.08,0A11.75,11.75,0,0,0,227.74,149.61Zm-10.17,6.06-160,64A4,4,0,0,1,52,216V152a4,4,0,0,1,4-4H216a4,4,0,0,1,1.59,7.67Z"/>`,
    ],
    [
      "light",
      svg`<path d="M56,118H216a14,14,0,0,0,5.46-26.9l-.11,0-159.95-64A14,14,0,0,0,42,40v64A14,14,0,0,0,56,118ZM54,40a2,2,0,0,1,2-2,2,2,0,0,1,.79.16l.11.05,159.92,64A2,2,0,0,1,216,106H56a2,2,0,0,1-2-2Zm162,98H56a14,14,0,0,0-14,14v64a14,14,0,0,0,19.39,12.92l160-64,.11-.05A14,14,0,0,0,216,138Zm.82,15.83-159.92,64-.11.05A2,2,0,0,1,54,216V152a2,2,0,0,1,2-2H216a2,2,0,0,1,.82,3.83Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M56,120H216a16,16,0,0,0,6.23-30.74l-.14-.06-159.93-64A16,16,0,0,0,40,40v64A16,16,0,0,0,56,120Zm0-80,.15.06L216,104H56l0-64Zm160,96H56a16,16,0,0,0-16,16v64a16,16,0,0,0,22.15,14.78l159.93-64,.14-.06A16,16,0,0,0,216,136ZM56.15,215.93,56,216V152H216Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M56,120H216a20,20,0,0,0,7.79-38.42l-.46-.19L63.51,21.47A20,20,0,0,0,36,40v60A20,20,0,0,0,56,120Zm4-74.21L193.91,96H60ZM216,136H56a20,20,0,0,0-20,20v60a20,20,0,0,0,27.51,18.54l159.81-59.92.46-.19A20,20,0,0,0,216,136ZM60,210.22V160H193.91Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M56,120H216a16,16,0,0,0,6.23-30.74l-.14-.06-159.93-64A16,16,0,0,0,40,40v64A16,16,0,0,0,56,120Zm0-80,.15.06L216,104H56l0-64ZM231.67,148.82a15.85,15.85,0,0,1-9.45,17.92l-.14.06-159.93,64A16,16,0,0,1,40,216V152a16,16,0,0,1,16-16H216A15.85,15.85,0,0,1,231.67,148.82Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M219.11,159.37l-160,64A8,8,0,0,1,48,216V152a8,8,0,0,1,8-8H216C224.71,144,227.14,156,219.11,159.37Z" opacity="0.2"/><path d="M56,120H216a16,16,0,0,0,6.23-30.74l-.14-.06-159.93-64A16,16,0,0,0,40,40v64A16,16,0,0,0,56,120Zm0-80,.15.06L216,104H56l0-64Zm160,96H56a16,16,0,0,0-16,16v64a16,16,0,0,0,22.15,14.78l159.93-64,.14-.06A16,16,0,0,0,216,136ZM56.15,215.93,56,216V152H216Z"/>`,
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
      ${PhFlipVertical.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhFlipVertical };
