/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-biohazard": PhBiohazard;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-biohazard": PhBiohazard;
    }
  }
}

@customElement("ph-biohazard")
class PhBiohazard extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M183,108.08A60.22,60.22,0,0,0,178.06,99a56,56,0,0,0-24.21-74.73,4,4,0,1,0-3.7,7.09,48,48,0,0,1,22.37,60.49,59.91,59.91,0,0,0-89.05,0,48,48,0,0,1,22.38-60.5,4,4,0,0,0-3.7-7.1A56,56,0,0,0,77.93,99,60.85,60.85,0,0,0,73,108.08,56.07,56.07,0,0,0,20,164a4,4,0,0,0,8,0,48.06,48.06,0,0,1,42.08-47.62,60,60,0,0,0,45.75,74.38,48,48,0,0,1-65.67,13.7,4,4,0,1,0-4.32,6.73,56,56,0,0,0,78.69-19.3c1.15.07,2.3.11,3.47.11s2.32,0,3.47-.11a56,56,0,0,0,78.69,19.3,4,4,0,1,0-4.32-6.73,48,48,0,0,1-65.67-13.7,60,60,0,0,0,45.75-74.38A48.06,48.06,0,0,1,228,164a4,4,0,0,0,8,0A56.07,56.07,0,0,0,183,108.08Zm-8.75.21c-.79.08-1.56.19-2.34.3.5-.63,1-1.28,1.46-1.93C173.69,107.2,174,107.74,174.26,108.29ZM128,80a51.93,51.93,0,0,1,40.57,19.52,48,48,0,0,1-81.15,0A51.94,51.94,0,0,1,128,80Zm8.07,49.33A56.11,56.11,0,0,0,128,143.25a55.87,55.87,0,0,0-8.07-13.91,56.43,56.43,0,0,0,8.06.58A55.29,55.29,0,0,0,136.07,129.33Zm-52-20.74c-.77-.11-1.54-.22-2.32-.3q.42-.81.87-1.62C83.08,107.32,83.56,108,84.06,108.59ZM76,132a51.78,51.78,0,0,1,2.51-15.93,48,48,0,0,1,41.39,67.3A52.08,52.08,0,0,1,76,132Zm60.1,51.37a48,48,0,0,1,41.39-67.3,52,52,0,0,1-41.39,67.3Z"/>`,
    ],
    [
      "light",
      svg`<path d="M184.35,106.18a61.77,61.77,0,0,0-4-7.33,58,58,0,0,0-25.58-76.38,6,6,0,1,0-5.54,10.64,46,46,0,0,1,22.51,55,61.89,61.89,0,0,0-87.5,0,46,46,0,0,1,22.53-55,6,6,0,0,0-5.54-10.64A58,58,0,0,0,75.64,98.87a60.67,60.67,0,0,0-4,7.31A58.06,58.06,0,0,0,18,164a6,6,0,0,0,12,0,46.08,46.08,0,0,1,37.43-45.19,61.95,61.95,0,0,0,45,73.21,46,46,0,0,1-61.2,10.75,6,6,0,0,0-6.48,10.11,58,58,0,0,0,80.9-18.94c.77,0,1.55.06,2.34.06s1.57,0,2.34-.06a58,58,0,0,0,80.9,18.94,6,6,0,0,0-6.48-10.11A46,46,0,0,1,143.56,192a61.95,61.95,0,0,0,45-73.21A46.08,46.08,0,0,1,226,164a6,6,0,0,0,12,0A58.06,58.06,0,0,0,184.35,106.18ZM128,82a49.87,49.87,0,0,1,38.09,17.67,46,46,0,0,1-76.19,0A49.86,49.86,0,0,1,128,82Zm3.8,49.79a56.82,56.82,0,0,0-3.8,6.56,58.24,58.24,0,0,0-3.79-6.56c1.25.08,2.51.13,3.78.13S130.54,131.87,131.8,131.79ZM78,132a49.68,49.68,0,0,1,2-13.82A46.06,46.06,0,0,1,122,164a45.59,45.59,0,0,1-3.32,17.12A50.07,50.07,0,0,1,78,132Zm59.32,49.12A45.59,45.59,0,0,1,134,164a46.06,46.06,0,0,1,42-45.82,50,50,0,0,1-38.72,62.94Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M185.68,104.28q-1.4-2.88-3.06-5.6a60,60,0,0,0-26.92-78,8,8,0,0,0-7.4,14.19A44,44,0,0,1,170.72,84.4a63.85,63.85,0,0,0-85.46,0A44,44,0,0,1,107.7,34.87a8,8,0,1,0-7.4-14.19,60,60,0,0,0-26.93,78,62.59,62.59,0,0,0-3.05,5.58A60.07,60.07,0,0,0,16,164a8,8,0,0,0,16,0,44.09,44.09,0,0,1,32.89-42.58A63.94,63.94,0,0,0,109,193.11a44,44,0,0,1-56.65,8,8,8,0,1,0-8.62,13.47A60,60,0,0,0,126.74,196l1.26,0,1.26,0a60,60,0,0,0,83.05,18.59,8,8,0,1,0-8.62-13.47,44,44,0,0,1-56.65-8,63.94,63.94,0,0,0,44.07-71.69A44.09,44.09,0,0,1,224,164a8,8,0,0,0,16,0A60.07,60.07,0,0,0,185.68,104.28ZM128,84a47.91,47.91,0,0,1,35.56,15.79,44,44,0,0,1-71.13,0A47.89,47.89,0,0,1,128,84Zm.12,49.92-.12.2-.12-.2h.24ZM80,132a47.6,47.6,0,0,1,1.44-11.65,44,44,0,0,1,36,58.46A48.07,48.07,0,0,1,80,132Zm58.57,46.81a44,44,0,0,1,36-58.46,48,48,0,0,1-36,58.46Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M188.26,100.55c-.37-.71-.76-1.42-1.16-2.11a64,64,0,0,0-29.55-81.29,12,12,0,1,0-11.1,21.28A39.91,39.91,0,0,1,168,73.92c0,1-.05,2-.13,3a67.79,67.79,0,0,0-79.74,0c-.08-1-.13-2-.13-3a39.92,39.92,0,0,1,21.55-35.5A12,12,0,1,0,98.46,17.14,64,64,0,0,0,68.89,98.45c-.4.7-.78,1.39-1.15,2.1A64.08,64.08,0,0,0,12,164a12,12,0,0,0,24,0,40,40,0,0,1,24.18-36.73c-.11,1.56-.18,3.14-.18,4.73a68.12,68.12,0,0,0,41.63,62.68,40,40,0,0,1-47.16,3,12,12,0,1,0-12.94,20.21A63.95,63.95,0,0,0,128,201.24a63.95,63.95,0,0,0,86.47,16.69,12,12,0,1,0-12.94-20.21,40,40,0,0,1-47.16-3A68.12,68.12,0,0,0,196,132c0-1.59-.07-3.17-.18-4.73A40,40,0,0,1,220,164a12,12,0,0,0,24,0A64.08,64.08,0,0,0,188.26,100.55ZM128,88a43.85,43.85,0,0,1,30.23,12.07,39.93,39.93,0,0,1-60.46,0A43.81,43.81,0,0,1,128,88ZM84,132a44.35,44.35,0,0,1,.57-7.06,40,40,0,0,1,30.18,49A44.08,44.08,0,0,1,84,132Zm57.25,42a40,40,0,0,1,30.18-49,44,44,0,0,1-30.18,49Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M239.83,159.58a60.09,60.09,0,0,0-54.17-55.31,61.63,61.63,0,0,0-3-5.59,59.94,59.94,0,0,0-26.82-77.93l-.14-.08a8.1,8.1,0,0,0-1.14-.48h0a8,8,0,0,0-6.21,14.69l.07,0C149.6,35.57,168,45.73,168,68a40,40,0,0,1-2,12.53,63.83,63.83,0,0,0-76,0A40,40,0,0,1,88,68c0-22.35,18.53-32.51,19.65-33.1l0,0a8,8,0,0,0-7.33-14.22l-.15.08a60,60,0,0,0-26.85,78c-1.1,1.8-2.12,3.66-3,5.57a60.11,60.11,0,0,0-54.15,55.32,35.86,35.86,0,0,0-.14,4.87A8,8,0,0,0,32,164c0-1.36.07-2.71.19-4,.73-6.25,4.06-19.08,18.64-27.49a39.83,39.83,0,0,1,13.32-4.81c-.1,1.43-.16,2.88-.16,4.34a64.09,64.09,0,0,0,39,58.91,39.81,39.81,0,0,1-12.15,10.84c-19.07,11-36.88.36-38.39-.58l-.12-.08a8,8,0,0,0-8.71,13.42l.24.15A59.95,59.95,0,0,0,126.74,196c.42,0,.83,0,1.25,0s.84,0,1.27,0a60,60,0,0,0,82.89,18.69l.23-.15a8,8,0,0,0-8.71-13.42l-.12.08c-1.51.94-19.32,11.59-38.39.58A39.84,39.84,0,0,1,153,190.9,64.09,64.09,0,0,0,192,132c0-1.46-.07-2.9-.16-4.33a39.84,39.84,0,0,1,13.33,4.8c14.47,8.35,17.86,21.06,18.63,27.32.13,1.39.2,2.79.2,4.21a8,8,0,0,0,16,.46A36,36,0,0,0,239.83,159.58Zm-130.1,16.8A48.08,48.08,0,0,1,80,132c0-1.27.07-2.53.17-3.78l1,.25a40,40,0,0,1,28.54,47.91ZM128,134.11l-.11-.19h.22ZM128,108A39.91,39.91,0,0,1,98.07,94.51a47.84,47.84,0,0,1,59.84,0A39.88,39.88,0,0,1,128,108Zm18.29,68.37a39.9,39.9,0,0,1,29.55-48.13c.1,1.24.16,2.49.16,3.76A48.07,48.07,0,0,1,146.28,176.37Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M184,132a56,56,0,1,1-56-56A56,56,0,0,1,184,132Z" opacity="0.2"/><path d="M185.68,104.28q-1.4-2.88-3.06-5.6a60,60,0,0,0-26.92-78,8,8,0,0,0-7.4,14.19A44,44,0,0,1,170.72,84.4a63.85,63.85,0,0,0-85.46,0A44,44,0,0,1,107.7,34.87a8,8,0,1,0-7.4-14.19,60,60,0,0,0-26.93,78,62.59,62.59,0,0,0-3.05,5.58A60.07,60.07,0,0,0,16,164a8,8,0,0,0,16,0,44.09,44.09,0,0,1,32.89-42.58A63.94,63.94,0,0,0,109,193.11a44,44,0,0,1-56.65,8,8,8,0,1,0-8.62,13.47A60,60,0,0,0,126.74,196l1.26,0,1.26,0a60,60,0,0,0,83.05,18.59,8,8,0,1,0-8.62-13.47,44,44,0,0,1-56.65-8,63.94,63.94,0,0,0,44.07-71.69A44.09,44.09,0,0,1,224,164a8,8,0,0,0,16,0A60.07,60.07,0,0,0,185.68,104.28ZM128,84a47.91,47.91,0,0,1,35.56,15.79,44,44,0,0,1-71.13,0A47.89,47.89,0,0,1,128,84Zm.12,49.92-.12.2-.12-.2h.24ZM80,132a47.6,47.6,0,0,1,1.44-11.65,44,44,0,0,1,36,58.46A48.07,48.07,0,0,1,80,132Zm58.57,46.81a44,44,0,0,1,36-58.46,48,48,0,0,1-36,58.46Z"/>`,
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
      ${PhBiohazard.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhBiohazard };
