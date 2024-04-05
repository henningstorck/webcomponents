/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-map-pin-plus": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-map-pin-plus": IconAttrs;
    }
  }
}

@customElement("ph-map-pin-plus")
class PhMapPinPlus extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M164,104a4,4,0,0,1-4,4H132v28a4,4,0,0,1-8,0V108H96a4,4,0,0,1,0-8h28V72a4,4,0,0,1,8,0v28h28A4,4,0,0,1,164,104Zm48,0c0,30.42-14.17,62.79-41,93.62a250,250,0,0,1-40.73,37.66,4,4,0,0,1-4.58,0A250,250,0,0,1,85,197.62C58.17,166.79,44,134.42,44,104a84,84,0,0,1,168,0Zm-8,0a76,76,0,0,0-152,0c0,35.9,21.15,67.8,38.9,88.23A254.62,254.62,0,0,0,128,227a254.62,254.62,0,0,0,37.1-34.81C182.85,171.8,204,139.9,204,104Z"/>`,
    ],
    [
      "light",
      svg`<path d="M166,104a6,6,0,0,1-6,6H134v26a6,6,0,0,1-12,0V110H96a6,6,0,0,1,0-12h26V72a6,6,0,0,1,12,0V98h26A6,6,0,0,1,166,104Zm48,0c0,30.91-14.34,63.74-41.47,94.94a252.32,252.32,0,0,1-41.09,38,6,6,0,0,1-6.88,0,252.32,252.32,0,0,1-41.09-38C56.34,167.74,42,134.91,42,104a86,86,0,0,1,172,0Zm-12,0a74,74,0,0,0-148,0c0,59.62,59,108.93,74,120.51C143,212.93,202,163.62,202,104Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M128,16a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Zm40-118a8,8,0,0,1-8,8H136v24a8,8,0,0,1-16,0V112H96a8,8,0,0,1,0-16h24V72a8,8,0,0,1,16,0V96h24A8,8,0,0,1,168,104Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M172,104a12,12,0,0,1-12,12H140v20a12,12,0,0,1-24,0V116H96a12,12,0,0,1,0-24h20V72a12,12,0,0,1,24,0V92h20A12,12,0,0,1,172,104Zm48,0c0,32.38-14.85,66.57-42.94,98.87a259,259,0,0,1-42.18,39,12,12,0,0,1-13.76,0C117.64,239.4,36,181.36,36,104a92,92,0,0,1,184,0Zm-24,0a68,68,0,0,0-136,0c0,33.31,20,63.37,36.7,82.71A249.35,249.35,0,0,0,128,216.89a249.35,249.35,0,0,0,31.3-30.18C176,167.37,196,137.31,196,104Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M128,16a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm32,96H136v24a8,8,0,0,1-16,0V112H96a8,8,0,0,1,0-16h24V72a8,8,0,0,1,16,0V96h24a8,8,0,0,1,0,16Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" opacity="0.2"/><path d="M128,16a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Zm40-118a8,8,0,0,1-8,8H136v24a8,8,0,0,1-16,0V112H96a8,8,0,0,1,0-16h24V72a8,8,0,0,1,16,0V96h24A8,8,0,0,1,168,104Z"/>`,
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
      ${PhMapPinPlus.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhMapPinPlus };
