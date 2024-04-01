/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-chat-teardrop-slash": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-chat-teardrop-slash": IconAttrs;
    }
  }
}

@customElement("ph-chat-teardrop-slash")
class PhChatTeardropSlash extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M51,37.31A4,4,0,0,0,45,42.69L60.62,59.83A95.41,95.41,0,0,0,36,124v84a12,12,0,0,0,12,12h84a96.34,96.34,0,0,0,57.11-18.83L205,218.69a4,4,0,1,0,5.92-5.38ZM132,212H48a4,4,0,0,1-4-4V124A87.49,87.49,0,0,1,66,65.77L183.7,195.21A86.92,86.92,0,0,1,132,212Zm96-88a95.79,95.79,0,0,1-13.78,49.58,4,4,0,1,1-6.84-4.14A88,88,0,0,0,93.92,44.64a4,4,0,1,1-3.46-7.21A95,95,0,0,1,132,28,96.11,96.11,0,0,1,228,124Z"/>`,
    ],
    [
      "light",
      svg`<path d="M52.44,36A6,6,0,0,0,43.56,44l14.37,15.8A97.42,97.42,0,0,0,34,124v84a14,14,0,0,0,14,14h84a98.24,98.24,0,0,0,56.82-18.18L203.56,220a6,6,0,0,0,8.88-8.08ZM132,210H48a2,2,0,0,1-2-2V124A85.46,85.46,0,0,1,66.08,68.8L180.7,194.88A84.91,84.91,0,0,1,132,210Zm98-86a97.86,97.86,0,0,1-14.06,50.61,6,6,0,0,1-5.15,2.9,6,6,0,0,1-5.12-9.1,86,86,0,0,0-110.88-122,6,6,0,1,1-5.2-10.81A97.09,97.09,0,0,1,132,26,98.11,98.11,0,0,1,230,124Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M53.92,34.62A8,8,0,1,0,42.08,45.38l13.18,14.5A99.39,99.39,0,0,0,32,124v84a16,16,0,0,0,16,16h84a100.33,100.33,0,0,0,56.53-17.53l13.55,14.91a8,8,0,1,0,11.84-10.76ZM132,208H48V124A83.46,83.46,0,0,1,66.15,71.85L177.66,194.51A83,83,0,0,1,132,208Zm100-84a99.87,99.87,0,0,1-14.35,51.65,8,8,0,0,1-13.7-8.28A84,84,0,0,0,95.66,48.25a8,8,0,0,1-6.94-14.42A100,100,0,0,1,232,124Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M56.88,31.93A12,12,0,1,0,39.12,48.07L50,60a103.37,103.37,0,0,0-22,64v84a20,20,0,0,0,20,20h84a104.32,104.32,0,0,0,55.87-16.31l11.25,12.38a12,12,0,0,0,17.76-16.14ZM132,204H52V124A79.51,79.51,0,0,1,66.46,78.14l105,115.49A79.08,79.08,0,0,1,132,204Zm104-80a102.9,102.9,0,0,1-10.36,45.29A12,12,0,0,1,204,158.83,79.25,79.25,0,0,0,212,124,80.07,80.07,0,0,0,104.16,49a12,12,0,0,1-8.35-22.5A104.07,104.07,0,0,1,236,124Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M213.92,210.62a8,8,0,1,1-11.84,10.76l-13.57-14.92A99.4,99.4,0,0,1,132,224H48a16,16,0,0,1-16-16V124A99.54,99.54,0,0,1,55.29,59.92L42.08,45.38a8,8,0,0,1,.72-11.46,8.22,8.22,0,0,1,11.34.95Zm-5.57-29.91a4,4,0,0,0,6.24-.4A100,100,0,0,0,83.78,36.42a4,4,0,0,0-1,6.18Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M224,124h0a92,92,0,0,1-92,92H48a8,8,0,0,1-8-8V124a92,92,0,0,1,92-92h0A92,92,0,0,1,224,124Z" opacity="0.2"/><path d="M53.92,34.62A8,8,0,1,0,42.08,45.38l13.18,14.5A99.39,99.39,0,0,0,32,124v84a16,16,0,0,0,16,16h84a100.33,100.33,0,0,0,56.53-17.53l13.55,14.91a8,8,0,1,0,11.84-10.76ZM132,208H48V124A83.46,83.46,0,0,1,66.15,71.85L177.66,194.51A83,83,0,0,1,132,208Zm100-84a99.87,99.87,0,0,1-14.35,51.65,8,8,0,0,1-13.7-8.28A84,84,0,0,0,95.66,48.25a8,8,0,0,1-6.94-14.42A100,100,0,0,1,232,124Z"/>`,
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
      ${PhChatTeardropSlash.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }
}

export { PhChatTeardropSlash };
