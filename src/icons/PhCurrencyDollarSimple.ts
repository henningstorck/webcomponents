/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-currency-dollar-simple": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-currency-dollar-simple": IconAttrs;
    }
  }
}

@customElement("ph-currency-dollar-simple")
class PhCurrencyDollarSimple extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M196,168a44.05,44.05,0,0,1-44,44H132v20a4,4,0,0,1-8,0V212H104a44.05,44.05,0,0,1-44-44,4,4,0,0,1,8,0,36,36,0,0,0,36,36h48a36,36,0,0,0,0-72H112a44,44,0,0,1,0-88h12V24a4,4,0,0,1,8,0V44h12a44.05,44.05,0,0,1,44,44,4,4,0,0,1-8,0,36,36,0,0,0-36-36H112a36,36,0,0,0,0,72h40A44.05,44.05,0,0,1,196,168Z"/>`,
    ],
    [
      "light",
      svg`<path d="M198,168a46.06,46.06,0,0,1-46,46H134v18a6,6,0,0,1-12,0V214H104a46.06,46.06,0,0,1-46-46,6,6,0,0,1,12,0,34,34,0,0,0,34,34h48a34,34,0,0,0,0-68H112a46,46,0,0,1,0-92h10V24a6,6,0,0,1,12,0V42h10a46.06,46.06,0,0,1,46,46,6,6,0,0,1-12,0,34,34,0,0,0-34-34H112a34,34,0,0,0,0,68h40A46.06,46.06,0,0,1,198,168Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M200,168a48.05,48.05,0,0,1-48,48H136v16a8,8,0,0,1-16,0V216H104a48.05,48.05,0,0,1-48-48,8,8,0,0,1,16,0,32,32,0,0,0,32,32h48a32,32,0,0,0,0-64H112a48,48,0,0,1,0-96h8V24a8,8,0,0,1,16,0V40h8a48.05,48.05,0,0,1,48,48,8,8,0,0,1-16,0,32,32,0,0,0-32-32H112a32,32,0,0,0,0,64h40A48.05,48.05,0,0,1,200,168Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M204,168a52.06,52.06,0,0,1-52,52H140v12a12,12,0,0,1-24,0V220H104a52.06,52.06,0,0,1-52-52,12,12,0,0,1,24,0,28,28,0,0,0,28,28h48a28,28,0,0,0,0-56H112a52,52,0,0,1,0-104h4V24a12,12,0,0,1,24,0V36h4a52.06,52.06,0,0,1,52,52,12,12,0,0,1-24,0,28,28,0,0,0-28-28H112a28,28,0,0,0,0,56h40A52.06,52.06,0,0,1,204,168Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm16,160h-8v8a8,8,0,0,1-16,0v-8h-8a32,32,0,0,1-32-32,8,8,0,0,1,16,0,16,16,0,0,0,16,16h32a16,16,0,0,0,0-32H116a32,32,0,0,1,0-64h4V64a8,8,0,0,1,16,0v8h4a32,32,0,0,1,32,32,8,8,0,0,1-16,0,16,16,0,0,0-16-16H116a16,16,0,0,0,0,32h28a32,32,0,0,1,0,64Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M192,168a40,40,0,0,1-40,40H128V128h24A40,40,0,0,1,192,168ZM112,48a40,40,0,0,0,0,80h16V48Z" opacity="0.2"/><path d="M200,168a48.05,48.05,0,0,1-48,48H136v16a8,8,0,0,1-16,0V216H104a48.05,48.05,0,0,1-48-48,8,8,0,0,1,16,0,32,32,0,0,0,32,32h48a32,32,0,0,0,0-64H112a48,48,0,0,1,0-96h8V24a8,8,0,0,1,16,0V40h8a48.05,48.05,0,0,1,48,48,8,8,0,0,1-16,0,32,32,0,0,0-32-32H112a32,32,0,0,0,0,64h40A48.05,48.05,0,0,1,200,168Z"/>`,
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
      ${PhCurrencyDollarSimple.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhCurrencyDollarSimple };
