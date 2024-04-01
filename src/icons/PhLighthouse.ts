/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-lighthouse": PhLighthouse;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-lighthouse": PhLighthouse;
    }
  }
}

@customElement("ph-lighthouse")
class PhLighthouse extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M208,84a4,4,0,0,0-4,4v20H185.23L180,55.6A4,4,0,0,0,178.66,53L135.78,14.87l-.1-.09a12,12,0,0,0-15.36,0l-.1.09L77.34,53A4,4,0,0,0,76,55.6L70.77,108H52V88a4,4,0,0,0-8,0v24a4,4,0,0,0,4,4H70l-9.92,98.86A12,12,0,0,0,72,228H184a12,12,0,0,0,11.94-13.16L186,116h22a4,4,0,0,0,4-4V88A4,4,0,0,0,208,84ZM125.48,20.89a4,4,0,0,1,5,0l35,31.11h-75ZM83.62,60h88.76l4.81,48H132V88a4,4,0,0,0-8,0v20H78.81ZM187,218.69a3.94,3.94,0,0,1-3,1.31H72a4,4,0,0,1-4-4.36L72.39,172H183.61L188,215.62A3.93,3.93,0,0,1,187,218.69ZM182.81,164H73.19L78,116H178Z"/>`,
    ],
    [
      "light",
      svg`<path d="M208,82a6,6,0,0,0-6,6v18H187L182,55.4a6,6,0,0,0-2-3.88L137.11,13.37l-.15-.12a14,14,0,0,0-17.92,0l-.15.12L76,51.52a6,6,0,0,0-2,3.88L69,106H54V88a6,6,0,0,0-12,0v24a6,6,0,0,0,6,6H67.75l-9.69,96.67A14,14,0,0,0,72,230H184a14,14,0,0,0,13.93-15.36L188.25,118H208a6,6,0,0,0,6-6V88A6,6,0,0,0,208,82ZM126.77,22.42a2,2,0,0,1,2.46,0l31,27.58H95.77ZM85.43,62h85.14L175,106H134V88a6,6,0,0,0-12,0v18H81Zm100,155.35A2,2,0,0,1,184,218H72a2,2,0,0,1-2-2.16L74.2,174H181.8L186,215.81A2,2,0,0,1,185.48,217.35ZM180.6,162H75.4l4.41-44h96.38Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M208,80a8,8,0,0,0-8,8v16H188.85L184,55.2A8,8,0,0,0,181.32,50L138.44,11.88l-.2-.17a16,16,0,0,0-20.48,0l-.2.17L74.68,50A8,8,0,0,0,72,55.2L67.15,104H56V88a8,8,0,0,0-16,0v24a8,8,0,0,0,8,8H65.54l-9.47,94.48A16,16,0,0,0,72,232H184a16,16,0,0,0,15.92-17.56L190.46,120H208a8,8,0,0,0,8-8V88A8,8,0,0,0,208,80ZM128,24l27,24H101ZM87.24,64h81.52l4,40H136V88a8,8,0,0,0-16,0v16H83.23ZM72,216l4-40H180l4,40Zm106.39-56H77.61l4-40h92.76Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M220,84a12,12,0,0,0-12,12v8H192.87l-4.93-49.2A12,12,0,0,0,184,47L141.1,8.89l-.3-.25a20,20,0,0,0-25.6,0l-.3.25L72,47a12,12,0,0,0-4,7.76L63.13,104H48V96a12,12,0,0,0-24,0v20a12,12,0,0,0,12,12H60.72l-8.63,86.1A20,20,0,0,0,72,236H184a20,20,0,0,0,19.9-21.95L195.28,128H220a12,12,0,0,0,12-12V96A12,12,0,0,0,220,84ZM128,29.36,144.46,44H111.54ZM90.86,68h74.28l3.61,36H140V96a12,12,0,0,0-24,0v8H87.25ZM76.42,212l3.21-32h96.74l3.21,32ZM174,156H82l2.8-28h86.32Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M208,80a8,8,0,0,0-8,8v16H188.85L184,55.2A8,8,0,0,0,181.31,50h0L138.44,11.88l-.2-.17a16,16,0,0,0-20.48,0l-.2.17L74.68,50v0A7.93,7.93,0,0,0,72,55.2L67.15,104H56V88a8,8,0,0,0-16,0v24a8,8,0,0,0,8,8H65.54l-9.47,94.48A16,16,0,0,0,72,232H184a16,16,0,0,0,15.92-17.56L190.46,120H208a8,8,0,0,0,8-8V88A8,8,0,0,0,208,80ZM87.24,64h81.52l4,40H136V88a8,8,0,0,0-16,0v16H83.23ZM72,216l4.81-48H179.19L184,216Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M181.61,112H74.39L80,56h96ZM192,215.24,187.23,168H68.77L64,215.24A8,8,0,0,0,72,224H184A8,8,0,0,0,192,215.24Z" opacity="0.2"/><path d="M208,80a8,8,0,0,0-8,8v16H188.85L184,55.2A8,8,0,0,0,181.32,50L138.44,11.88l-.2-.17a16,16,0,0,0-20.48,0l-.2.17L74.68,50A8,8,0,0,0,72,55.2L67.15,104H56V88a8,8,0,0,0-16,0v24a8,8,0,0,0,8,8H65.54l-9.47,94.48A16,16,0,0,0,72,232H184a16,16,0,0,0,15.92-17.56L190.46,120H208a8,8,0,0,0,8-8V88A8,8,0,0,0,208,80ZM128,24l27,24H101ZM87.24,64h81.52l4,40H136V88a8,8,0,0,0-16,0v16H83.23ZM72,216l4-40H180l4,40Zm106.39-56H77.61l4-40h92.76Z"/>`,
    ],
  ]);

  @property({ type: String })
  size: string | number = "1em";

  @property({ type: String })
  weight: IconWeight = "regular";

  @property({ type: String })
  color: string = "currentColor";

  @property({ type: Boolean })
  mirrored: boolean = false;

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
      ${PhLighthouse.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhLighthouse };
