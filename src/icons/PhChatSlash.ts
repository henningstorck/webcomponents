/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-chat-slash": PhChatSlash;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-chat-slash": PhChatSlash;
    }
  }
}

@customElement("ph-chat-slash")
class PhChatSlash extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M51,37.31A4,4,0,0,0,45,42.69L53.5,52H40A12,12,0,0,0,28,64V224a11.89,11.89,0,0,0,6.93,10.88A12.09,12.09,0,0,0,40,236a12,12,0,0,0,7.74-2.87L81.49,204H191.68L205,218.69a4,4,0,0,0,3,1.31,4,4,0,0,0,3-6.69ZM80,196a4,4,0,0,0-2.61,1L42.57,227A4,4,0,0,1,36,224V64a4,4,0,0,1,4-4H60.78L184.41,196ZM228,64V186a4,4,0,0,1-8,0V64a4,4,0,0,0-4-4H105.79a4,4,0,0,1,0-8H216A12,12,0,0,1,228,64Z"/>`,
    ],
    [
      "light",
      svg`<path d="M52.44,36A6,6,0,0,0,43.56,44L49,50H40A14,14,0,0,0,26,64V224a13.86,13.86,0,0,0,8.09,12.69,13.89,13.89,0,0,0,15-2L82.23,206H190.8l12.76,14a6,6,0,1,0,8.88-8.07ZM80,194a6,6,0,0,0-3.92,1.46l-34.79,30A2,2,0,0,1,38,224V64a2,2,0,0,1,2-2H59.89l120,132ZM230,64V186a6,6,0,0,1-12,0V64a2,2,0,0,0-2-2H105.79a6,6,0,0,1,0-12H216A14,14,0,0,1,230,64Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M53.92,34.62A8,8,0,1,0,42.08,45.38L44.46,48H40A16,16,0,0,0,24,64V224a15.85,15.85,0,0,0,9.24,14.5A16.13,16.13,0,0,0,40,240a15.94,15.94,0,0,0,10.26-3.78l.08-.07L83,208H189.92l12.16,13.38a8,8,0,1,0,11.84-10.76ZM80,192a8,8,0,0,0-5.23,1.95L40,224V64H59L175.37,192ZM232,64V186a8,8,0,0,1-16,0V64H105.79a8,8,0,0,1,0-16H216A16,16,0,0,1,232,64Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M56.88,31.93A12,12,0,0,0,36.8,44.28,20,20,0,0,0,20,64V224A19.82,19.82,0,0,0,31.56,242.1a20.14,20.14,0,0,0,8.49,1.9,19.91,19.91,0,0,0,12.82-4.72l.12-.11L84.47,212H188.15l11,12.07a12,12,0,0,0,17.76-16.15ZM80,188a11.93,11.93,0,0,0-7.84,2.92L44,215.23V68H57.24L166.33,188ZM236,64V174.12a12,12,0,0,1-24,0V68H116.6a12,12,0,0,1,0-24H216A20,20,0,0,1,236,64Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M213.92,210.61a8,8,0,1,1-11.84,10.76L189.92,208H83l-32.6,28.16-.08.07A15.94,15.94,0,0,1,40,240a16.13,16.13,0,0,1-6.8-1.52A15.85,15.85,0,0,1,24,224V64A16,16,0,0,1,40,48h4.46l-2.38-2.62A8,8,0,1,1,53.92,34.62ZM216,48H96.75a4,4,0,0,0-3,6.69L225,199.06a4,4,0,0,0,7-2.69V64A16,16,0,0,0,216,48Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M224,64V192a8,8,0,0,1-8,8H80L45.15,230.11A8,8,0,0,1,32,224V64a8,8,0,0,1,8-8H216A8,8,0,0,1,224,64Z" opacity="0.2"/><path d="M53.92,34.62A8,8,0,1,0,42.08,45.38L44.46,48H40A16,16,0,0,0,24,64V224a15.85,15.85,0,0,0,9.24,14.5A16.13,16.13,0,0,0,40,240a15.94,15.94,0,0,0,10.26-3.78l.08-.07L83,208H189.92l12.16,13.38a8,8,0,1,0,11.84-10.76ZM80,192a8,8,0,0,0-5.23,1.95L40,224V64H59L175.37,192ZM232,64V186a8,8,0,0,1-16,0V64H105.79a8,8,0,0,1,0-16H216A16,16,0,0,1,232,64Z"/>`,
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
      ${PhChatSlash.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhChatSlash };
