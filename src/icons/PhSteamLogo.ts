/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-steam-logo": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-steam-logo": IconAttrs;
    }
  }
}

@customElement("ph-steam-logo")
class PhSteamLogo extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28ZM115.12,182.62l61.21-49.93a32,32,0,1,0-45-45L85.48,143.83,40.68,99a91.6,91.6,0,1,1-2.46,8.86l42.23,42.23a24,24,0,0,0,34.67,32.51Zm8.91-73.4A32,32,0,0,0,154.78,140L124,165.09c0-.36,0-.72,0-1.09a24,24,0,0,0-24-24c-.37,0-.73,0-1.09,0ZM156,132a24,24,0,1,1,24-24A24,24,0,0,1,156,132Zm-56,16a16,16,0,1,1-16,16A16,16,0,0,1,100,148Z"/>`,
    ],
    [
      "light",
      svg`<path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26ZM116.38,184.17l61.21-49.93a34,34,0,1,0-47.83-47.83L85.33,140.85,43,98.49a89.63,89.63,0,1,1-3.53,13.43l38.44,38.44a26,26,0,0,0,38.5,33.81Zm6.19-70a34.1,34.1,0,0,0,27.25,27.25l-24,19.58A26,26,0,0,0,103,138.18ZM156,130a22,22,0,1,1,22-22A22,22,0,0,1,156,130Zm-56,20a14,14,0,1,1-14,14A14,14,0,0,1,100,150Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM117.39,185.92l62-50.55a36,36,0,1,0-51.14-50.23l-43,52.73L45.28,98A88,88,0,1,1,40,128a89.56,89.56,0,0,1,.8-11.88l34.57,34.57a28,28,0,0,0,42,35.23Zm4.19-67.37a36.18,36.18,0,0,0,23.87,23.87l-18.26,14.89a28.11,28.11,0,0,0-20.5-20.5ZM156,128a20,20,0,1,1,20-20A20,20,0,0,1,156,128Zm-56,24a12,12,0,1,1-12,12A12,12,0,0,1,100,152Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm50.16,122.22a40,40,0,1,0-57.25-55.34L92.57,123.6,55.18,86.21a83.55,83.55,0,1,1-9.39,24.55l32.76,32.76a32,32,0,0,0,49.51,37.41ZM117,131.27A40.26,40.26,0,0,0,132.73,147L113.3,162l-.25.2a7.93,7.93,0,0,1-5,1.79,8,8,0,0,1-8-8,7.93,7.93,0,0,1,1.79-5.05l.2-.25ZM152,128a16,16,0,1,1,16-16A16,16,0,0,1,152,128Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M231.92,132.11c-2.09,54-45.83,97.72-99.81,99.81A104.06,104.06,0,0,1,25.6,109.76a4,4,0,0,1,6.77-2.08l43,43a28,28,0,0,0,42.42,34.92l61.1-49.84a36,36,0,1,0-50.71-50.65l-43,52.74L35,87.67a4,4,0,0,1-.76-4.6,104,104,0,0,1,197.7,49ZM121.58,118.55,90.77,156.33A11.83,11.83,0,0,0,88,163.19,12.19,12.19,0,0,0,99.85,176a11.84,11.84,0,0,0,7.78-2.74l0,0,37.78-30.81A36.18,36.18,0,0,1,121.58,118.55ZM175.9,110A20,20,0,1,0,158,127.9,20,20,0,0,0,175.9,110Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32Zm45.81,97.61-61.09,49.82a20,20,0,0,1-28.15-28.15l49.82-61.09a28,28,0,1,1,39.42,39.42Z" opacity="0.2"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM117.39,185.92l62-50.55a36,36,0,1,0-51.14-50.23l-43,52.73L45.28,98A88,88,0,1,1,40,128a89.56,89.56,0,0,1,.8-11.88l34.57,34.57a28,28,0,0,0,42,35.23Zm4.19-67.37a36.18,36.18,0,0,0,23.87,23.87l-18.26,14.89a28.11,28.11,0,0,0-20.5-20.5ZM156,128a20,20,0,1,1,20-20A20,20,0,0,1,156,128Zm-56,24a12,12,0,1,1-12,12A12,12,0,0,1,100,152Z"/>`,
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
      ${PhSteamLogo.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhSteamLogo };
