/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-asclepius": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-asclepius": IconAttrs;
    }
  }
}

@customElement("ph-asclepius")
class PhAsclepius extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M212,79v1a36,36,0,0,1-36,36H132v88h12a20,20,0,0,0,13.33-34.91,4,4,0,1,1,5.34-6A28,28,0,0,1,144,212H132v20a4,4,0,0,1-8,0V212H96a4,4,0,0,1,0-8h28V116H96a20,20,0,0,0,0,40,4,4,0,0,1,0,8,28,28,0,0,1,0-56h28V24a4,4,0,0,1,8,0v84h44a28,28,0,0,0,28-28V79a27,27,0,0,0-27-27H160a4,4,0,0,1,0-8h17a35,35,0,0,1,35,35ZM56,92H32a4,4,0,0,1-4-4V80A36,36,0,0,1,64,44H96a4,4,0,0,1,0,8H92v4A36,36,0,0,1,56,92ZM84,56V52H64A28,28,0,0,0,36,80v4H56A28,28,0,0,0,84,56Z"/>`,
    ],
    [
      "light",
      svg`<path d="M214,79v1a38,38,0,0,1-38,38H134v84h10a18,18,0,0,0,12-31.42,6,6,0,1,1,8-8.94A30,30,0,0,1,144,214H134v18a6,6,0,0,1-12,0V214H96a6,6,0,0,1,0-12h26V118H96a18,18,0,0,0,0,36,6,6,0,0,1,0,12,30,30,0,0,1,0-60h26V24a6,6,0,0,1,12,0v82h42a26,26,0,0,0,26-26V79a25,25,0,0,0-25-25H160a6,6,0,0,1,0-12h17a37,37,0,0,1,37,37ZM56,94H32a6,6,0,0,1-6-6V80A38,38,0,0,1,64,42H96a6,6,0,0,1,0,12H94v2A38,38,0,0,1,56,94ZM82,54H64A26,26,0,0,0,38,80v2H56A26,26,0,0,0,82,56Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M216,79v1a40,40,0,0,1-40,40H136v80h8a16,16,0,0,0,10.67-27.93,8,8,0,0,1,10.66-11.92A32,32,0,0,1,144,216h-8v16a8,8,0,0,1-16,0V216H96a8,8,0,0,1,0-16h24V120H96a16,16,0,0,0,0,32,8,8,0,0,1,0,16,32,32,0,0,1,0-64h24V24a8,8,0,0,1,16,0v80h40a24,24,0,0,0,24-24V79a23,23,0,0,0-23-23H160a8,8,0,0,1,0-16h17a39,39,0,0,1,39,39ZM56,96H32a8,8,0,0,1-8-8V80A40,40,0,0,1,64,40H96a8,8,0,0,1,0,16A40,40,0,0,1,56,96ZM80,56H64A24,24,0,0,0,40,80H56A24,24,0,0,0,80,56Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M91.82,60H92a12,12,0,0,0,0-24H60A44.05,44.05,0,0,0,16,80v8a12,12,0,0,0,12,12H48A44.06,44.06,0,0,0,91.82,60ZM48,76H40.4A20,20,0,0,1,60,60h7.6A20,20,0,0,1,48,76Zm176,3v1a44.05,44.05,0,0,1-44,44H140v72h8a12,12,0,0,0,12-12,11.87,11.87,0,0,0-4-8.95,12,12,0,1,1,16-17.88A36,36,0,0,1,148,220h-8v12a12,12,0,0,1-24,0V220H92a12,12,0,0,1,0-24h24V124H100a12,12,0,0,0-4,23.32A12,12,0,1,1,88,170,36,36,0,0,1,100,100h16V24a12,12,0,0,1,24,0v76h40a20,20,0,0,0,20-20V79a19.05,19.05,0,0,0-19-19H164a12,12,0,0,1,0-24h17a43.05,43.05,0,0,1,43,43Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M136,128v72h11.62A12.25,12.25,0,0,0,160,188.53a12,12,0,0,0-5.93-10.87,4.08,4.08,0,0,1-2.06-3.49v-8.79a4,4,0,0,1,5.25-3.81A28.06,28.06,0,0,1,176,187.71c.16,15.56-13,28.29-28.59,28.29H136v16a8,8,0,0,1-16,0V216H96a8,8,0,0,1-8-8.53A8.17,8.17,0,0,1,96.27,200H120V128H104.46c-8.6,0-16,6.6-16.44,15.19a16,16,0,0,0,12.87,16.51,3.94,3.94,0,0,1,3.11,3.89V172a4,4,0,0,1-4,4,36,36,0,0,1-36-36.87C64.47,119.48,81,104,100.68,104H120V24a8,8,0,0,1,16,0v80h32a16,16,0,0,0,16-16.81C183.56,78.6,176.14,72,167.54,72H156a4,4,0,0,1-4-4V44a4,4,0,0,1,4-4h15.22c24.62,0,45.2,20.15,44.77,44.76A44,44,0,0,1,172,128ZM92.66,72H100a4,4,0,0,0,4-4V44a4,4,0,0,0-4-4H64A40,40,0,0,0,24,80v8a8,8,0,0,0,8,8H56A40,40,0,0,0,92.66,72Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M88,48v8A32,32,0,0,1,56,88H32V80A32,32,0,0,1,64,48Z" opacity="0.2"/><path d="M216,79v1a40,40,0,0,1-40,40H136v80h8a16,16,0,0,0,10.67-27.93,8,8,0,0,1,10.66-11.92A32,32,0,0,1,144,216h-8v16a8,8,0,0,1-16,0V216H96a8,8,0,0,1,0-16h24V120H96a16,16,0,0,0,0,32,8,8,0,0,1,0,16,32,32,0,0,1,0-64h24V24a8,8,0,0,1,16,0v80h40a24,24,0,0,0,24-24V79a23,23,0,0,0-23-23H160a8,8,0,0,1,0-16h17a39,39,0,0,1,39,39ZM56,96H32a8,8,0,0,1-8-8V80A40,40,0,0,1,64,40H96a8,8,0,0,1,0,16A40,40,0,0,1,56,96ZM80,56H64A24,24,0,0,0,40,80H56A24,24,0,0,0,80,56Z"/>`,
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
      ${PhAsclepius.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhAsclepius };
