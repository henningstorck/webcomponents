/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-smiley": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-smiley": IconAttrs;
    }
  }
}

@customElement("ph-smiley")
class PhSmiley extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M171.46,154c-9.55,16.52-25.39,26-43.46,26s-33.91-9.48-43.46-26a4,4,0,0,1,6.92-4c8.21,14.19,21.19,22,36.54,22s28.33-7.81,36.54-22a4,4,0,1,1,6.92,4ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128ZM92,116a8,8,0,1,0-8-8A8,8,0,0,0,92,116Zm72-16a8,8,0,1,0,8,8A8,8,0,0,0,164,100Z"/>`,
    ],
    [
      "light",
      svg`<path d="M173.19,155c-9.92,17.16-26.39,27-45.19,27s-35.27-9.84-45.19-27a6,6,0,0,1,10.38-6c7.84,13.54,20.2,21,34.81,21s27-7.46,34.81-21a6,6,0,1,1,10.38,6ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128ZM92,118a10,10,0,1,0-10-10A10,10,0,0,0,92,118Zm72-20a10,10,0,1,0,10,10A10,10,0,0,0,164,98Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Zm-1.07,48c-10.29,17.79-27.4,28-46.93,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.07-20a8,8,0,0,1,13.86,8Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M178.39,158c-11,19.06-29.39,30-50.39,30s-39.36-10.93-50.39-30a12,12,0,0,1,20.78-12c3.89,6.73,12.91,18,29.61,18s25.72-11.28,29.61-18a12,12,0,1,1,20.78,12ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128ZM92,124a16,16,0,1,0-16-16A16,16,0,0,0,92,124Zm72-32a16,16,0,1,0,16,16A16,16,0,0,0,164,92Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96Zm82.92,60c-10.29,17.79-27.39,28-46.92,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.08-20a8,8,0,1,1,13.84,8ZM164,120a12,12,0,1,1,12-12A12,12,0,0,1,164,120Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Zm-1.08,48c-10.29,17.79-27.39,28-46.92,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.08-20a8,8,0,1,1,13.84,8Z"/>`,
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
      ${PhSmiley.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhSmiley };
