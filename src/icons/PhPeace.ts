/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-peace": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-peace": IconAttrs;
    }
  }
}

@customElement("ph-peace")
class PhPeace extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm92,100a91.44,91.44,0,0,1-14.44,49.43L132,125.92V36.09A92.11,92.11,0,0,1,220,128ZM124,36.09v89.83L50.44,177.43A92,92,0,0,1,124,36.09ZM55,184l69-48.29v84.23A91.94,91.94,0,0,1,55,184Zm77,35.94V135.68L201,184A91.94,91.94,0,0,1,132,219.91Z"/>`,
    ],
    [
      "light",
      svg`<path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm90,102a89.44,89.44,0,0,1-13,46.58l-71-49.7V38.2A90.12,90.12,0,0,1,218,128ZM122,38.2v86.68l-71,49.7A90,90,0,0,1,122,38.2ZM57.92,184.4,122,139.53V217.8A89.93,89.93,0,0,1,57.92,184.4ZM134,217.8V139.53l64.08,44.87A89.93,89.93,0,0,1,134,217.8Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104a87.48,87.48,0,0,1-11.64,43.7L136,123.84V40.37A88.11,88.11,0,0,1,216,128ZM120,40.37v83.47L51.64,171.7A88,88,0,0,1,120,40.37ZM60.84,184.79,120,143.37v72.26A87.85,87.85,0,0,1,60.84,184.79ZM136,215.63V143.37l59.16,41.42A87.85,87.85,0,0,1,136,215.63Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm84,108a83.43,83.43,0,0,1-9,37.84l-63-44.09V44.87A84.12,84.12,0,0,1,212,128ZM116,44.87v76.88L53,165.84a83.93,83.93,0,0,1,63-121ZM66.83,185.48,116,151.05v60.08A83.86,83.86,0,0,1,66.83,185.48ZM140,211.13V151.05l49.17,34.43A83.86,83.86,0,0,1,140,211.13Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M136,143.37l46,32.2a71.86,71.86,0,0,1-46,24ZM56,128a71.61,71.61,0,0,0,8.81,34.48L120,123.84V56.46A72.08,72.08,0,0,0,56,128Zm64,71.54V143.37l-46,32.2A71.86,71.86,0,0,0,120,199.54ZM136,56.46v67.38l55.19,38.64A72,72,0,0,0,136,56.46ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104a87.48,87.48,0,0,1-11.64,43.7L136,123.84V40.37A88.11,88.11,0,0,1,216,128ZM120,40.37v83.47L51.64,171.7A88,88,0,0,1,120,40.37ZM60.84,184.79,120,143.37v72.26A87.85,87.85,0,0,1,60.84,184.79ZM136,215.63V143.37l59.16,41.42A87.85,87.85,0,0,1,136,215.63Z"/>`,
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
      ${PhPeace.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhPeace };
