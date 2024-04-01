/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-hoodie": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-hoodie": IconAttrs;
    }
  }
}

@customElement("ph-hoodie")
class PhHoodie extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M234,122.75,179.71,41.34a12,12,0,0,0-10-5.34H86.27a12,12,0,0,0-10,5.34L22,122.75a12,12,0,0,0-1.6,9.82l21.44,78.59A12,12,0,0,0,53.43,220H80a12,12,0,0,0,12-12V188h72v20a12,12,0,0,0,12,12h26.57a12,12,0,0,0,11.57-8.84l21.44-78.59A12,12,0,0,0,234,122.75ZM80,180a4,4,0,0,1-4-4V62l32,18.86V136a4,4,0,0,0,8,0V85.57l10,5.88a4,4,0,0,0,4.06,0l10-5.88V128a4,4,0,0,0,8,0V80.85L180,62V176a4,4,0,0,1-4,4ZM82.94,45.78A4,4,0,0,1,86.27,44h83.46a4,4,0,0,1,3.33,1.78l5.27,7.91L128,83.36,77.67,53.69ZM84,208a4,4,0,0,1-4,4H53.43a4,4,0,0,1-3.85-2.95L28.14,130.46a4,4,0,0,1,.53-3.27L68,68.2V176a12,12,0,0,0,12,12h4Zm143.86-77.54-21.44,78.59a4,4,0,0,1-3.85,2.95H176a4,4,0,0,1-4-4V188h4a12,12,0,0,0,12-12V68.2l39.33,59A4,4,0,0,1,227.86,130.46Z"/>`,
    ],
    [
      "light",
      svg`<path d="M235.65,121.64,181.38,40.23A14,14,0,0,0,169.73,34H86.27a14,14,0,0,0-11.65,6.23L20.35,121.64a14,14,0,0,0-1.86,11.45l21.44,78.59A14,14,0,0,0,53.43,222H80a14,14,0,0,0,14-14V190h68v18a14,14,0,0,0,14,14h26.57a14,14,0,0,0,13.5-10.32l21.44-78.59A14,14,0,0,0,235.65,121.64ZM80,178a2,2,0,0,1-2-2V65.49L106,82v54a6,6,0,0,0,12,0V89.07l7,4.1a6,6,0,0,0,6.1,0l6.95-4.1V128a6,6,0,0,0,12,0V82l28-16.51V176a2,2,0,0,1-2,2ZM86.27,46h83.46a2,2,0,0,1,1.66.89l4.1,6.15L128,81,80.51,53l4.1-6.15A2,2,0,0,1,86.27,46ZM82,208a2,2,0,0,1-2,2H53.43a2,2,0,0,1-1.92-1.47l-21.44-78.6a2,2,0,0,1,.27-1.63L66,74.8V176a14,14,0,0,0,14,14h2Zm143.93-78.07-21.44,78.6a2,2,0,0,1-1.92,1.47H176a2,2,0,0,1-2-2V190h2a14,14,0,0,0,14-14V74.8l35.66,53.5A2,2,0,0,1,225.93,129.93Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M237.31,120.53,183,39.12A16,16,0,0,0,169.73,32H86.27A16,16,0,0,0,73,39.12L18.69,120.53a16,16,0,0,0-2.13,13.09L38,212.21A16,16,0,0,0,53.43,224H80a16,16,0,0,0,16-16V192h64v16a16,16,0,0,0,16,16h26.57A16,16,0,0,0,218,212.21l21.44-78.59A16,16,0,0,0,237.31,120.53ZM80,176V69l24,14.15V136a8,8,0,0,0,16,0V92.57l3.94,2.32a8,8,0,0,0,8.12,0L136,92.57V128a8,8,0,0,0,16,0V83.14L176,69V176ZM169.73,48l2.92,4.39L128,78.71,83.35,52.39,86.27,48ZM80,208H53.43L32,129.41l32-48V176a16,16,0,0,0,16,16Zm122.57,0H176V192a16,16,0,0,0,16-16V81.41l32,48Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M244.64,118.31l-54.27-81.4A20,20,0,0,0,173.73,28H82.27a20,20,0,0,0-16.64,8.91l-54.27,81.4a20,20,0,0,0-2.65,16.36l21.43,78.59A20,20,0,0,0,49.43,228H76a20,20,0,0,0,20-20V196h64v12a20,20,0,0,0,20,20h26.57a20,20,0,0,0,19.29-14.74l21.43-78.59A20,20,0,0,0,244.64,118.31ZM84,172V70.64l12,7.5V136a12,12,0,0,0,24,0V93.15l1.64,1a12,12,0,0,0,12.72,0l1.64-1V128a12,12,0,0,0,24,0V78.14l12-7.5V172ZM128,69.85,99.46,52h57.08ZM52.49,204,32.34,130.11,60,88.62V176a20,20,0,0,0,12,18.32V204Zm151,0H184v-9.68A20,20,0,0,0,196,176V88.62l27.66,41.49Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M237.31,120.53,183,39.12A16,16,0,0,0,169.73,32H86.27A16,16,0,0,0,73,39.12L18.69,120.53a16,16,0,0,0-2.13,13.09L38,212.21A16,16,0,0,0,53.43,224H80a16,16,0,0,0,16-16V192h64v16a16,16,0,0,0,16,16h26.57A16,16,0,0,0,218,212.21l21.44-78.59A16,16,0,0,0,237.31,120.53ZM80,208H53.43L32,129.41l32-48V176a16,16,0,0,0,16,16Zm40-72a8,8,0,0,1-16,0V97.14a8,8,0,1,1,16,0Zm32-8a8,8,0,0,1-16,0V97.14a8,8,0,1,1,16,0ZM128,78.71,83.35,52.39,86.27,48h83.46l2.92,4.39ZM202.57,208H176V192a16,16,0,0,0,16-16V81.41l32,48Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M231.72,131.51,210.28,210.1a8,8,0,0,1-7.71,5.9H176a8,8,0,0,1-8-8V184H88v24a8,8,0,0,1-8,8H53.43a8,8,0,0,1-7.71-5.9L24.28,131.51A8,8,0,0,1,25.34,125L72,55l56,33,56-33,46.66,70A8,8,0,0,1,231.72,131.51Z" opacity="0.2"/><path d="M237.31,120.53,183,39.12A16,16,0,0,0,169.73,32H86.27A16,16,0,0,0,73,39.12L18.69,120.53a16,16,0,0,0-2.13,13.09L38,212.21A16,16,0,0,0,53.43,224H80a16,16,0,0,0,16-16V192h64v16a16,16,0,0,0,16,16h26.57A16,16,0,0,0,218,212.21l21.44-78.59A16,16,0,0,0,237.31,120.53ZM80,176V69l24,14.15V136a8,8,0,0,0,16,0V92.57l3.94,2.32a8,8,0,0,0,8.12,0L136,92.57V128a8,8,0,0,0,16,0V83.14L176,69V176ZM169.73,48l2.92,4.39L128,78.71,83.35,52.39,86.27,48ZM80,208H53.43L32,129.41l32-48V176a16,16,0,0,0,16,16Zm122.57,0H176V192a16,16,0,0,0,16-16V81.41l32,48Z"/>`,
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
      ${PhHoodie.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhHoodie };
