/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-heart-straight-break": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-heart-straight-break": IconAttrs;
    }
  }
}

@customElement("ph-heart-straight-break")
class PhHeartStraightBreak extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M220.21,59.8a54.06,54.06,0,0,0-76.34,0L128,75,112.18,59.8a54,54,0,0,0-76.4,76.35l89.37,90.66a4,4,0,0,0,5.7,0l89.36-90.64A54.07,54.07,0,0,0,220.21,59.8Zm-5.68,70.74L128,218.3,41.45,130.52a46,46,0,0,1,65.13-65l15.65,15.07-13,12.52A4,4,0,0,0,108,96a4,4,0,0,0,1.17,2.86L138.35,128l-13.18,13.17a4,4,0,1,0,5.66,5.66l16-16a4,4,0,0,0,0-5.66L117.71,96l31.77-30.58a46,46,0,1,1,65.05,65.08Z"/>`,
    ],
    [
      "light",
      svg`<path d="M221.62,58.38a56.06,56.06,0,0,0-79.16,0L128,72.24l-14.44-13.9a56,56,0,0,0-79.2,79.21l89.37,90.66a6,6,0,0,0,8.55,0l89.33-90.63A56.06,56.06,0,0,0,221.62,58.38Zm-8.51,70.75L128,215.45,42.89,129.1a44,44,0,0,1,62.23-62.24l.08.08,14.16,13.64L107.85,91.66a6,6,0,0,0-.08,8.56L135.53,128l-11.76,11.76a6,6,0,1,0,8.49,8.48l16-16a6,6,0,0,0,0-8.49L120.58,96.06l30.24-29.12a.3.3,0,0,0,.08-.08,44,44,0,1,1,62.21,62.27Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M223,57a58.1,58.1,0,0,0-82-.06L128,69.47,115,56.91a58,58,0,0,0-82,82.05l89.37,90.66a8,8,0,0,0,11.4,0L223,139A58.09,58.09,0,0,0,223,57Zm-11.36,70.76L128,212.6,44.29,127.68a42,42,0,1,1,59.41-59.4l.1.1,12.67,12.19-10,9.65a8,8,0,0,0-.11,11.42L132.69,128l-10.35,10.35a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0,0-11.31L123.42,96.09,152.2,68.38l.11-.1a42,42,0,1,1,59.37,59.44Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M225.84,54.16a62,62,0,0,0-87.6-.08L128,63.94l-10.24-9.86a62,62,0,0,0-87.66,87.7l89.35,90.64a12,12,0,0,0,17.1,0l89.29-90.58a62,62,0,0,0,0-87.68Zm-17,70.77-80.81,82-80.87-82a38,38,0,1,1,53.74-53.74l.16.16,9.67,9.31-7,6.76a12,12,0,0,0-.17,17.13L127,128l-7.52,7.51a12,12,0,1,0,17,17l16-16a12,12,0,0,0,0-17L129.13,96.16,155,71.29l.16-.16a38,38,0,1,1,53.68,53.8Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M113.29,55.31A58,58,0,0,0,32.93,139l89.37,90.66a8,8,0,0,0,11.4,0L223,139a58,58,0,0,0-82-82.1h0l-24.4,23L143,106.32a8,8,0,0,1,0,11.32l-20.69,20.69A8,8,0,1,1,111,127l15-15L99.5,85.42a8,8,0,0,1,.22-11.53l13.55-12.78a4,4,0,0,0,0-5.8Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M217.36,133.36,128,224,38.64,133.36a50,50,0,0,1,70.72-70.72L128,80l18.64-17.36a50,50,0,1,1,70.72,70.72Z" opacity="0.2"/><path d="M223,57a58.1,58.1,0,0,0-82-.06L128,69.47,115,56.91a58,58,0,0,0-82,82.05l89.37,90.66a8,8,0,0,0,11.4,0L223,139A58.09,58.09,0,0,0,223,57Zm-11.36,70.76L128,212.6,44.29,127.68a42,42,0,1,1,59.41-59.4l.1.1,12.67,12.19-10,9.65a8,8,0,0,0-.11,11.42L132.69,128l-10.35,10.35a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0,0-11.31L123.42,96.09,152.2,68.38l.11-.1a42,42,0,1,1,59.37,59.44Z"/>`,
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
      ${PhHeartStraightBreak.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhHeartStraightBreak };
