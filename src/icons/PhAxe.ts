/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-axe": PhAxe;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-axe": PhAxe;
    }
  }
}

@customElement("ph-axe")
class PhAxe extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M251.36,99a12,12,0,0,0-9.86-8.09A141.13,141.13,0,0,1,184,69.67L197.86,55.8A21,21,0,0,0,168.2,26.14L152,42.39a107.24,107.24,0,0,1-7.47-9.27,12,12,0,0,0-18.29-1.61L87.51,70.18a12,12,0,0,0,1.61,18.3A107.24,107.24,0,0,1,98.39,96L10.14,184.2A21,21,0,0,0,39.8,213.86L125.67,128a141,141,0,0,1,21.24,57.52,12,12,0,0,0,20.38,7l81.19-81.19A11.89,11.89,0,0,0,251.36,99Zm-77.5-67.2A13,13,0,1,1,192.2,50.14l-15,15a156.72,156.72,0,0,1-19.81-16.88ZM34.14,208.2A13,13,0,1,1,15.8,189.86l88.43-88.43a156.72,156.72,0,0,1,16.88,19.81ZM242.82,105.64l-81.18,81.18a3.86,3.86,0,0,1-4.08,1,4,4,0,0,1-2.72-3.34C146.3,120.51,99.07,85.69,93.72,81.93A4,4,0,0,1,92,79a3.9,3.9,0,0,1,1.14-3.15l38.68-38.68a3.92,3.92,0,0,1,2.8-1.16l.35,0a4,4,0,0,1,2.94,1.7c3.76,5.35,38.58,52.58,102.52,61.11a4,4,0,0,1,3.33,2.73A3.86,3.86,0,0,1,242.82,105.64Z"/>`,
    ],
    [
      "light",
      svg`<path d="M253.25,98.36a14,14,0,0,0-11.48-9.44,138.65,138.65,0,0,1-54.6-19.6l12.1-12.11a23,23,0,1,0-32.48-32.48L152,39.47c-3.21-3.73-5.19-6.46-5.92-7.5a14,14,0,0,0-21.35-1.88L86.09,68.77A14,14,0,0,0,88,90.12c1,.73,3.77,2.71,7.5,5.92L8.73,182.79A23,23,0,0,0,25,222a22.79,22.79,0,0,0,16.24-6.73l84.11-84.1a138.65,138.65,0,0,1,19.6,54.6,14,14,0,0,0,9.44,11.48,13.86,13.86,0,0,0,14.35-3.36l81.18-81.18A13.87,13.87,0,0,0,253.25,98.36Zm-78-65.15a11,11,0,0,1,15.52,15.52L177,62.49a153.67,153.67,0,0,1-16.76-14.26ZM32.73,206.79a11,11,0,0,1-15.52-15.52l87-87A153.67,153.67,0,0,1,118.49,121ZM241.41,104.22l-81.19,81.19a1.87,1.87,0,0,1-2,.48,2,2,0,0,1-1.38-1.71C148.17,119.4,100.3,84.11,94.87,80.3A2,2,0,0,1,94,78.82a1.94,1.94,0,0,1,.57-1.57l38.67-38.67a2,2,0,0,1,1.39-.58h.18a2,2,0,0,1,1.48.86c3.81,5.43,39.1,53.3,103.88,62a2,2,0,0,1,1.71,1.38A1.85,1.85,0,0,1,241.41,104.22Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M255.15,97.72A16,16,0,0,0,242,86.94a136.46,136.46,0,0,1-51.65-18l10.31-10.3a25,25,0,0,0-35.32-35.32l-13.2,13.21c-2.33-2.8-3.81-4.84-4.41-5.69a16,16,0,0,0-24.41-2.15L84.68,67.36a16,16,0,0,0,2.14,24.4c.86.6,2.9,2.08,5.7,4.41L7.31,181.37a25,25,0,0,0,35.32,35.32l82.3-82.31a136.63,136.63,0,0,1,18,51.65,16,16,0,0,0,10.77,13.12,16.21,16.21,0,0,0,5.15.85,15.88,15.88,0,0,0,11.26-4.69l81.18-81.19A15.86,15.86,0,0,0,255.15,97.72ZM176.69,34.63a9,9,0,1,1,12.68,12.68L176.82,59.86A152.5,152.5,0,0,1,163.1,48.21ZM31.31,205.37a9,9,0,1,1-12.68-12.68l85.58-85.58a150.89,150.89,0,0,1,11.65,13.71ZM158.8,183.92C150,118.29,101.52,82.52,96,78.67L134.66,40c3.86,5.5,39.63,54,105.25,62.78Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M254.93,96.43A20,20,0,0,0,238.56,83,122,122,0,0,1,198.7,70.54l3.92-3.92a32,32,0,0,0-45.26-45.26l-6.69,6.69a20,20,0,0,0-30.15-2.21L81.84,64.52a20,20,0,0,0,2.21,30.16L9.36,169.38a32,32,0,0,0,45.25,45.26l71.92-71.93A122,122,0,0,1,139,182.57a20,20,0,0,0,34,11.58L250.13,117A19.86,19.86,0,0,0,254.93,96.43Zm-80.6-58.1a8,8,0,1,1,11.32,11.32l-7.58,7.57a135.65,135.65,0,0,1-11.94-10.68ZM37.64,197.67a8,8,0,0,1-11.31-11.32l76.21-76.21a135.65,135.65,0,0,1,10.68,11.94Zm123.88-26c-9-48.5-39.27-78.44-59.38-93.47l32-32c15,20.11,45,50.34,93.45,59.38Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M255.15,97.72A16,16,0,0,0,242,86.94a136.46,136.46,0,0,1-51.65-18l10.31-10.3a25,25,0,0,0-35.32-35.32l-13.2,13.21c-2.33-2.8-3.81-4.84-4.41-5.69a16,16,0,0,0-24.41-2.15L84.68,67.36a16,16,0,0,0,2.14,24.4c.86.6,2.9,2.08,5.7,4.41L7.31,181.37a25,25,0,0,0,35.32,35.32l82.3-82.31a136.63,136.63,0,0,1,18,51.65,16,16,0,0,0,10.77,13.12,16.21,16.21,0,0,0,5.15.85,15.88,15.88,0,0,0,11.26-4.69l81.18-81.19A15.86,15.86,0,0,0,255.15,97.72ZM241,94.87ZM176.69,34.63a9,9,0,1,1,12.68,12.68L176.82,59.86A152.5,152.5,0,0,1,163.1,48.21ZM31.31,205.37a9,9,0,1,1-12.68-12.68l85.58-85.58a149.75,149.75,0,0,1,11.65,13.72Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M245.65,108.46l-81.19,81.19A8,8,0,0,1,150.87,185c-7.09-53.14-42.41-87.8-59.45-99.76A8,8,0,0,1,90.33,73L129,34.33a8,8,0,0,1,12.2,1.09c12,17,46.62,52.36,99.76,59.45A8,8,0,0,1,245.65,108.46Z" opacity="0.2"/><path d="M255.15,97.72A16,16,0,0,0,242,86.94a136.46,136.46,0,0,1-51.65-18l10.31-10.3a25,25,0,0,0-35.32-35.32l-13.2,13.21c-2.33-2.8-3.81-4.84-4.41-5.69a16,16,0,0,0-24.41-2.15L84.68,67.36a16,16,0,0,0,2.14,24.4c.86.6,2.9,2.08,5.7,4.41L7.31,181.37a25,25,0,0,0,35.32,35.32l82.3-82.31a136.63,136.63,0,0,1,18,51.65,16,16,0,0,0,10.77,13.12,16.21,16.21,0,0,0,5.15.85,15.88,15.88,0,0,0,11.26-4.69l81.18-81.19A15.86,15.86,0,0,0,255.15,97.72ZM176.69,34.63a9,9,0,1,1,12.68,12.68L176.82,59.86A152.5,152.5,0,0,1,163.1,48.21ZM31.31,205.37a9,9,0,1,1-12.68-12.68l85.58-85.58a150.89,150.89,0,0,1,11.65,13.71ZM158.8,183.92C150,118.29,101.52,82.52,96,78.67L134.66,40c3.86,5.5,39.63,54,105.25,62.78Z"/>`,
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
      ${PhAxe.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhAxe };
