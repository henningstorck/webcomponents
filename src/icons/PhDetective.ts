/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-detective": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-detective": IconAttrs;
    }
  }
}

@customElement("ph-detective")
class PhDetective extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M248,116H218L169.35,49a12,12,0,0,0-19-.51L137.45,63.38l-.1.12a12,12,0,0,1-18.7,0l-.1-.12L105.66,48.44a12,12,0,0,0-19,.51L38,116H8a4,4,0,0,0,0,8H248a4,4,0,0,0,0-8ZM93.13,53.65A4,4,0,0,1,96.26,52a4,4,0,0,1,3.2,1.5l.1.12,12.89,14.94A19.86,19.86,0,0,0,128,76h0a19.86,19.86,0,0,0,15.55-7.44l12.89-14.94.1-.12a4.06,4.06,0,0,1,3.2-1.5,4,4,0,0,1,3.13,1.65L208.15,116H47.85ZM180,148a32,32,0,0,0-32,32H108a32,32,0,1,0-1,8h42a32,32,0,1,0,31-40ZM76,204a24,24,0,1,1,24-24A24,24,0,0,1,76,204Zm104,0a24,24,0,1,1,24-24A24,24,0,0,1,180,204Z"/>`,
    ],
    [
      "light",
      svg`<path d="M248,114H219.06L171,47.77a14,14,0,0,0-22.16-.61L135.93,62.08a1.15,1.15,0,0,0-.14.17,10,10,0,0,1-15.58,0,1.15,1.15,0,0,0-.14-.17L107.2,47.16A14,14,0,0,0,85,47.77L36.94,114H8a6,6,0,0,0,0,12H248a6,6,0,0,0,0-12ZM94.75,54.82a2,2,0,0,1,3.15-.07l.15.17,12.86,14.92A21.88,21.88,0,0,0,128,78h0a21.88,21.88,0,0,0,17.09-8.16L158,54.92l.15-.17a2,2,0,0,1,3.15.07l43,59.18H51.77ZM180,146a34,34,0,0,0-33.94,32H109.94a34,34,0,1,0-1.44,12h39A34,34,0,1,0,180,146ZM76,202a22,22,0,1,1,22-22A22,22,0,0,1,76,202Zm104,0a22,22,0,1,1,22-22A22,22,0,0,1,180,202Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M248,112H220.08l-47.5-65.41a16,16,0,0,0-25.31-.72l-12.85,14.9-.2.23a7.95,7.95,0,0,1-12.44,0l-.2-.23-12.85-14.9a16,16,0,0,0-25.31.72L35.92,112H8a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16ZM96.34,56l.19.23,12.85,14.89a24,24,0,0,0,37.24,0l12.85-14.89c.06-.08.1-.15.17-.23l40.66,56H55.69ZM180,144a36,36,0,0,0-35.77,32H111.77a36,36,0,1,0-1.83,16h36.12A36,36,0,1,0,180,144ZM76,200a20,20,0,1,1,20-20A20,20,0,0,1,76,200Zm104,0a20,20,0,1,1,20-20A20,20,0,0,1,180,200Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M244,104H219.21L175.82,44.24a20,20,0,0,0-31.61-.94L131.39,58.16c-.1.11-.2.23-.29.35a4,4,0,0,1-6.2,0c-.09-.12-.19-.24-.29-.35L111.79,43.3a20,20,0,0,0-31.61.94L36.79,104H12a12,12,0,0,0,0,24H244a12,12,0,0,0,0-24ZM96.62,62.45l9.69,11.24a28,28,0,0,0,43.38,0l9.69-11.24L189.55,104H66.45ZM180,140a40.07,40.07,0,0,0-38.16,28H114.16a40,40,0,1,0,0,24h27.68A40,40,0,1,0,180,140ZM76,196a16,16,0,1,1,16-16A16,16,0,0,1,76,196Zm104,0a16,16,0,1,1,16-16A16,16,0,0,1,180,196Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M256,120a8,8,0,0,1-8,8H8a8,8,0,0,1,0-16H35.92l47.5-65.41a16,16,0,0,1,25.31-.72l12.85,14.9.2.23a7.95,7.95,0,0,0,12.44,0l.2-.23,12.85-14.9a16,16,0,0,1,25.31.72L220.08,112H248A8,8,0,0,1,256,120Zm-76,24a36,36,0,0,0-35.77,32H111.77a36,36,0,1,0-1.83,16h36.12A36,36,0,1,0,180,144Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M104,180a28,28,0,1,1-28-28A28,28,0,0,1,104,180Zm76-28a28,28,0,1,0,28,28A28,28,0,0,0,180,152ZM166.11,51.29a8,8,0,0,0-12.7-.29L140.47,66a16,16,0,0,1-24.94,0L102.59,51a8,8,0,0,0-12.7.29L40,120H216Z" opacity="0.2"/><path d="M248,112H220.08l-47.5-65.41a16,16,0,0,0-25.31-.72l-12.85,14.9-.2.23a7.95,7.95,0,0,1-12.44,0l-.2-.23-12.85-14.9a16,16,0,0,0-25.31.72L35.92,112H8a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16ZM96.34,56l.19.24,12.85,14.89a24,24,0,0,0,37.24,0l12.85-14.89c.06-.08.1-.16.17-.24l40.66,56H55.69ZM180,144a36,36,0,0,0-35.77,32H111.77a36,36,0,1,0-1.83,16h36.12A36,36,0,1,0,180,144ZM76,200a20,20,0,1,1,20-20A20,20,0,0,1,76,200Zm104,0a20,20,0,1,1,20-20A20,20,0,0,1,180,200Z"/>`,
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
      ${PhDetective.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhDetective };
