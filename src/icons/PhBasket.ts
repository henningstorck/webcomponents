/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-basket": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-basket": IconAttrs;
    }
  }
}

@customElement("ph-basket")
class PhBasket extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M132,120v56a4,4,0,0,1-8,0V120a4,4,0,0,1,8,0Zm49.2-4a4,4,0,0,0-4.38,3.58l-5.6,56A4,4,0,0,0,174.8,180l.41,0a4,4,0,0,0,4-3.6l5.6-56A4,4,0,0,0,181.2,116ZM74.8,116a4,4,0,0,0-3.58,4.38l5.6,56a4,4,0,0,0,4,3.6l.41,0a4,4,0,0,0,3.58-4.38l-5.6-56A4,4,0,0,0,74.8,116ZM236,88.53,220.89,201.59A12,12,0,0,1,209,212H47a12,12,0,0,1-11.89-10.41L20,88.53A4,4,0,0,1,21,85.37,4,4,0,0,1,24,84H70.18L125,21.37a4,4,0,0,1,6,0L185.82,84H232a4,4,0,0,1,3,1.37A4,4,0,0,1,236,88.53ZM80.82,84h94.36L128,30.07Zm146.61,8H28.57L43,200.53A4,4,0,0,0,47,204H209a4,4,0,0,0,4-3.47Z"/>`,
    ],
    [
      "light",
      svg`<path d="M134,120v56a6,6,0,0,1-12,0V120a6,6,0,0,1,12,0Zm40.83-.6-5.6,56A6,6,0,0,0,174.6,182l.61,0a6,6,0,0,0,6-5.4l5.6-56a6,6,0,0,0-11.94-1.2Zm-93.66,0a6,6,0,0,0-11.94,1.2l5.6,56a6,6,0,0,0,6,5.4l.61,0a6,6,0,0,0,5.37-6.57ZM238,88.79,222.87,201.85A14,14,0,0,1,209,214H47a14,14,0,0,1-13.87-12.15L18.05,88.79A6,6,0,0,1,24,82H69.28l54.2-61.95a6,6,0,0,1,9,0l54.2,62H232A6,6,0,0,1,238,88.79ZM85.22,82h85.56L128,33.11ZM225.15,94H30.85L45,200.26A2,2,0,0,0,47,202H209a2,2,0,0,0,2-1.74Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M136,120v56a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm36.84-.8-5.6,56A8,8,0,0,0,174.4,184a7.32,7.32,0,0,0,.81,0,8,8,0,0,0,7.95-7.2l5.6-56a8,8,0,0,0-15.92-1.6Zm-89.68,0a8,8,0,0,0-15.92,1.6l5.6,56a8,8,0,0,0,8,7.2,7.32,7.32,0,0,0,.81,0,8,8,0,0,0,7.16-8.76ZM239.93,89.06,224.86,202.12A16.06,16.06,0,0,1,209,216H47a16.06,16.06,0,0,1-15.86-13.88L16.07,89.06A8,8,0,0,1,24,80H68.37L122,18.73a8,8,0,0,1,12,0L187.63,80H232a8,8,0,0,1,7.93,9.06ZM89.63,80h76.74L128,36.15ZM222.86,96H33.14L47,200H209Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M140,128v40a12,12,0,0,1-24,0V128a12,12,0,0,1,24,0Zm28.06-1.19-4,40a12,12,0,0,0,10.75,13.13c.4,0,.81.06,1.2.06a12,12,0,0,0,11.93-10.81l4-40a12,12,0,0,0-23.88-2.38Zm-80.12,0a12,12,0,0,0-23.88,2.38l4,40A12,12,0,0,0,80,180c.39,0,.8,0,1.2-.06a12,12,0,0,0,10.75-13.13Zm156-37.22-15.07,113A20.06,20.06,0,0,1,209,220H47a20.06,20.06,0,0,1-19.82-17.36l-15.07-113A12,12,0,0,1,24,76H66.55L119,16.1a12,12,0,0,1,18.06,0L189.45,76H232a12,12,0,0,1,11.89,13.59ZM98.45,76h59.1L128,42.22Zm119.84,24H37.71l12.8,96h155Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M238,82.73A8,8,0,0,0,232,80H187.63L134,18.73a8,8,0,0,0-12,0L68.37,80H24a8,8,0,0,0-7.93,9.06L31.14,202.12A16.06,16.06,0,0,0,47,216H209a16.06,16.06,0,0,0,15.86-13.88L239.93,89.06A8,8,0,0,0,238,82.73ZM81.6,184a7.32,7.32,0,0,1-.81,0,8,8,0,0,1-8-7.2l-5.6-56a8,8,0,0,1,15.92-1.6l5.6,56A8,8,0,0,1,81.6,184Zm54.4-8a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0ZM89.63,80,128,36.15,166.37,80Zm99.13,40.8-5.6,56a8,8,0,0,1-7.95,7.2,7.32,7.32,0,0,1-.81,0,8,8,0,0,1-7.16-8.76l5.6-56a8,8,0,0,1,15.92,1.6Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M232,88,216.93,201.06A8,8,0,0,1,209,208H47a8,8,0,0,1-7.93-6.94L24,88Z" opacity="0.2"/><path d="M136,120v56a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm36.84-.8-5.6,56A8,8,0,0,0,174.4,184a7.32,7.32,0,0,0,.81,0,8,8,0,0,0,7.95-7.2l5.6-56a8,8,0,0,0-15.92-1.6Zm-89.68,0a8,8,0,0,0-15.92,1.6l5.6,56a8,8,0,0,0,8,7.2,7.32,7.32,0,0,0,.81,0,8,8,0,0,0,7.16-8.76ZM239.93,89.06,224.86,202.12A16.06,16.06,0,0,1,209,216H47a16.06,16.06,0,0,1-15.86-13.88L16.07,89.06A8,8,0,0,1,24,80H68.37L122,18.73a8,8,0,0,1,12,0L187.63,80H232a8,8,0,0,1,7.93,9.06ZM89.63,80h76.74L128,36.15ZM222.86,96H33.14L47,200H209Z"/>`,
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
      ${PhBasket.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhBasket };
