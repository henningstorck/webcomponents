/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-crane": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-crane": IconAttrs;
    }
  }
}

@customElement("ph-crane")
class PhCrane extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M226.06,20.57a4,4,0,0,0-3.94-.1L103,84H32A12,12,0,0,0,20,96V200a12,12,0,0,0,12,12h88a12,12,0,0,0,12-12V168a4.05,4.05,0,0,0-.17-1.15L108.77,90,220,30.67V160a4,4,0,0,1-4,4H200a4,4,0,0,1-4-4v-8a4,4,0,0,0-8,0v8a12,12,0,0,0,12,12h16a12,12,0,0,0,12-12V24A4,4,0,0,0,226.06,20.57ZM101,92l21.6,72H60V92ZM32,92H52v72H28V96A4,4,0,0,1,32,92Zm88,112H32a4,4,0,0,1-4-4V172h96v28A4,4,0,0,1,120,204Z"/>`,
    ],
    [
      "light",
      svg`<path d="M227.09,18.86a6,6,0,0,0-5.91-.15L102.5,82H32A14,14,0,0,0,18,96V200a14,14,0,0,0,14,14h88a14,14,0,0,0,14-14V168a6.28,6.28,0,0,0-.25-1.72L111.16,91,218,34V160a2,2,0,0,1-2,2H200a2,2,0,0,1-2-2v-8a6,6,0,0,0-12,0v8a14,14,0,0,0,14,14h16a14,14,0,0,0,14-14V24A6,6,0,0,0,227.09,18.86ZM99.54,94l20.4,68H62V94ZM32,94H50v68H30V96A2,2,0,0,1,32,94Zm88,108H32a2,2,0,0,1-2-2V174h92v26A2,2,0,0,1,120,202Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M228.12,17.14a8,8,0,0,0-7.88-.2L102,80H32A16,16,0,0,0,16,96V200a16,16,0,0,0,16,16h88a16,16,0,0,0,16-16V168a7.81,7.81,0,0,0-.34-2.3L113.54,92,216,37.33V160H200v-8a8,8,0,0,0-16,0v8a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V24A8,8,0,0,0,228.12,17.14ZM98.05,96l19.2,64H64V96ZM48,96v64H32V96ZM32,200h0V176h88v24Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M230.17,13.71a12,12,0,0,0-11.82-.3L101,76H32A20,20,0,0,0,12,96V200a20,20,0,0,0,20,20h88a20,20,0,0,0,20-20V168a11.86,11.86,0,0,0-.51-3.45L118.32,94,212,44V156H200v-4a12,12,0,0,0-24,0v8a20,20,0,0,0,20,20h20a20,20,0,0,0,20-20V24A12,12,0,0,0,230.17,13.71ZM95.07,100l16.8,56H76V100ZM52,100v56H36V100ZM36,196V180h80v16Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M228.12,17.14a8,8,0,0,0-7.88-.2L102,80H32A16,16,0,0,0,16,96V200a16,16,0,0,0,16,16h88a16,16,0,0,0,16-16V168a7.31,7.31,0,0,0-.08-1.05l0-.24a9.6,9.6,0,0,0-.22-1,.09.09,0,0,0,0-.05v0a.64.64,0,0,1,0-.07L113.54,92,216,37.33V160H200v-8a8,8,0,0,0-16,0v8a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V24A8,8,0,0,0,228.12,17.14ZM48,96v64H32V96ZM32,200h0V176h88v24Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M128,168H56V88h48Z" opacity="0.2"/><path d="M228.12,17.14a8,8,0,0,0-7.88-.2L102,80H32A16,16,0,0,0,16,96V200a16,16,0,0,0,16,16h88a16,16,0,0,0,16-16V168a7.81,7.81,0,0,0-.34-2.3L113.54,92,216,37.33V160H200v-8a8,8,0,0,0-16,0v8a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V24A8,8,0,0,0,228.12,17.14ZM98.05,96l19.2,64H64V96ZM48,96v64H32V96ZM32,200h0V176h88v24Z"/>`,
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
      ${PhCrane.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhCrane };
