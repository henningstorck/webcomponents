/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-avocado": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-avocado": IconAttrs;
    }
  }
}

@customElement("ph-avocado")
class PhAvocado extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M128,116a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,116Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,196Zm79.22-64L177.43,47.8A52,52,0,0,0,79,46.66h0L49.45,130.17A84,84,0,1,0,207.22,132ZM128,236A76.06,76.06,0,0,1,57,132.92L86.5,49.33a44,44,0,0,1,83.35,1.05l29.82,84.28A76,76,0,0,1,128,236Z"/>`,
    ],
    [
      "light",
      svg`<path d="M128,114a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,114Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,194Zm81.1-62.68L179.3,47.11A54,54,0,0,0,77.08,46h0L47.56,129.52a86,86,0,1,0,161.54,1.8ZM128,234A74.05,74.05,0,0,1,58.8,133.72c0-.05,0-.09.05-.13L88.39,50h0a42,42,0,0,1,79.53.92s0,.08.05.13l29.82,84.28A74.06,74.06,0,0,1,128,234Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M128,112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,112Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,192Zm83-61.34L181.2,46.47a56,56,0,0,0-106-1.14h0l-29.51,83.5A88,88,0,1,0,211,130.66ZM128,232a72.05,72.05,0,0,1-67.33-97.57,1.34,1.34,0,0,1,.07-.18L90.28,50.66h0a40,40,0,0,1,75.74.88l.06.18L195.9,136A72.05,72.05,0,0,1,128,232Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M128,108a52,52,0,1,0,52,52A52.06,52.06,0,0,0,128,108Zm0,80a28,28,0,1,1,28-28A28,28,0,0,1,128,188Zm86.76-58.68L185,45.17A60,60,0,0,0,71.42,44h0l-29.5,83.46a92,92,0,1,0,172.84,1.86ZM128,228a68.05,68.05,0,0,1-63.59-92.15c0-.09.07-.18.1-.26L94.05,52h0a36,36,0,0,1,68.17.78l.09.27,29.82,84.28A68,68,0,0,1,128,228Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M211,130.66,181.2,46.47a56,56,0,0,0-106-1.14h0l-29.51,83.5A88,88,0,1,0,211,130.66ZM128,200a40,40,0,1,1,40-40A40,40,0,0,1,128,200Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M203.45,133.33,173.63,49.05a48,48,0,0,0-90.9-1L53.19,131.59a80,80,0,1,0,150.26,1.74ZM128,200a40,40,0,1,1,40-40A40,40,0,0,1,128,200Z" opacity="0.2"/><path d="M128,112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,112Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,192Zm83-61.34L181.2,46.47a56,56,0,0,0-106-1.14h0l-29.51,83.5A88,88,0,1,0,211,130.66ZM128,232a72.05,72.05,0,0,1-67.33-97.57,1.34,1.34,0,0,1,.07-.18L90.28,50.66h0a40,40,0,0,1,75.74.88l.06.18L195.9,136A72.05,72.05,0,0,1,128,232Z"/>`,
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
      ${PhAvocado.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhAvocado };
