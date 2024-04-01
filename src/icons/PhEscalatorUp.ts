/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-escalator-up": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-escalator-up": IconAttrs;
    }
  }
}

@customElement("ph-escalator-up")
class PhEscalatorUp extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M224,44H168a4,4,0,0,0-2.94,1.29L70.25,148H32a12,12,0,0,0-12,12v40a12,12,0,0,0,12,12H88a4,4,0,0,0,2.94-1.29L185.75,108H224a12,12,0,0,0,12-12V56A12,12,0,0,0,224,44Zm4,52a4,4,0,0,1-4,4H184a4,4,0,0,0-2.94,1.29L86.25,204H32a4,4,0,0,1-4-4V160a4,4,0,0,1,4-4H72a4,4,0,0,0,2.94-1.29L169.75,52H224a4,4,0,0,1,4,4Zm-1.17,77.17a4,4,0,0,1-5.66,5.66L204,161.66V208a4,4,0,0,1-8,0V161.66l-17.17,17.17a4,4,0,0,1-5.66-5.66l24-24a4,4,0,0,1,5.66,0Z"/>`,
    ],
    [
      "light",
      svg`<path d="M224,42H168a6,6,0,0,0-4.41,1.93L69.37,146H32a14,14,0,0,0-14,14v40a14,14,0,0,0,14,14H88a6,6,0,0,0,4.41-1.93L186.63,110H224a14,14,0,0,0,14-14V56A14,14,0,0,0,224,42Zm2,54a2,2,0,0,1-2,2H184a6,6,0,0,0-4.41,1.93L85.37,202H32a2,2,0,0,1-2-2V160a2,2,0,0,1,2-2H72a6,6,0,0,0,4.41-1.93L170.63,54H224a2,2,0,0,1,2,2Zm2.24,75.76a6,6,0,1,1-8.48,8.48L206,166.49V208a6,6,0,0,1-12,0V166.49l-13.76,13.75a6,6,0,0,1-8.48-8.48l24-24a6,6,0,0,1,8.48,0Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M224,40H168a8,8,0,0,0-5.88,2.57L68.5,144H32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16H88a8,8,0,0,0,5.88-2.57L187.5,112H224a16,16,0,0,0,16-16V56A16,16,0,0,0,224,40Zm0,56H184a8,8,0,0,0-5.88,2.57L84.5,200H32V160H72a8,8,0,0,0,5.88-2.57L171.5,56H224Zm5.66,74.34a8,8,0,0,1-11.32,11.32L208,171.31V208a8,8,0,0,1-16,0V171.31l-10.34,10.35a8,8,0,0,1-11.32-11.32l24-24a8,8,0,0,1,11.32,0Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M224,36H168a12,12,0,0,0-8.82,3.86L66.75,140H32a20,20,0,0,0-20,20v40a20,20,0,0,0,20,20H88a12,12,0,0,0,8.82-3.86L189.25,116H224a20,20,0,0,0,20-20V56A20,20,0,0,0,224,36Zm-4,56H184a12,12,0,0,0-8.82,3.86L82.75,196H36V164H72a12,12,0,0,0,8.82-3.86L173.25,60H220Zm12.49,75.51a12,12,0,0,1-17,17L212,181v27a12,12,0,0,1-24,0V181l-3.51,3.52a12,12,0,0,1-17-17l24-24a12,12,0,0,1,17,0Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M240,56V96a16,16,0,0,1-16,16H187.5L93.88,213.43A8,8,0,0,1,88,216H32a16,16,0,0,1-16-16V160a16,16,0,0,1,16-16H68.5L162.12,42.57A8,8,0,0,1,168,40h56A16,16,0,0,1,240,56Zm-34.34,90.34a8,8,0,0,0-11.32,0l-24,24a8,8,0,0,0,11.32,11.32L192,171.31V208a8,8,0,0,0,16,0V171.31l10.34,10.35a8,8,0,0,0,11.32-11.32Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M232,56V96a8,8,0,0,1-8,8H184L88,208H32a8,8,0,0,1-8-8V160a8,8,0,0,1,8-8H72L168,48h56A8,8,0,0,1,232,56Z" opacity="0.2"/><path d="M224,40H168a8,8,0,0,0-5.88,2.57L68.5,144H32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16H88a8,8,0,0,0,5.88-2.57L187.5,112H224a16,16,0,0,0,16-16V56A16,16,0,0,0,224,40Zm0,56H184a8,8,0,0,0-5.88,2.57L84.5,200H32V160H72a8,8,0,0,0,5.88-2.57L171.5,56H224Zm5.66,74.34a8,8,0,0,1-11.32,11.32L208,171.31V208a8,8,0,0,1-16,0V171.31l-10.34,10.35a8,8,0,0,1-11.32-11.32l24-24a8,8,0,0,1,11.32,0Z"/>`,
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
      ${PhEscalatorUp.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhEscalatorUp };
