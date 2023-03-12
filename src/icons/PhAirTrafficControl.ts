/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { IconWeight } from "../types";

@customElement("ph-air-traffic-control")
export default class PhAirTrafficControl extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M225.83,65.11A12,12,0,0,0,216,60H132V20h20a4,4,0,0,0,0-8H104a4,4,0,0,0,0,8h20V60H40A12,12,0,0,0,28.72,76.1l26.19,72A12,12,0,0,0,66.18,156H100v68a4,4,0,0,0,8,0V156h40v68a4,4,0,0,0,8,0V156h33.82a12,12,0,0,0,11.27-7.9l26.19-72A12,12,0,0,0,225.83,65.11ZM107.34,148,92.79,68h70.42l-14.55,80Zm-44.92-2.63-26.18-72A4,4,0,0,1,40,68H84.66L99.2,148h-33A4,4,0,0,1,62.42,145.37Zm157.34-72-26.18,72a4,4,0,0,1-3.76,2.63h-33l14.55-80H216a4,4,0,0,1,3.76,5.37Z"/>`,
    ],
    [
      "light",
      svg`<path d="M227.47,64A14,14,0,0,0,216,58H134V22h18a6,6,0,0,0,0-12H104a6,6,0,0,0,0,12h18V58H40A14,14,0,0,0,26.84,76.78l26.19,72A14,14,0,0,0,66.18,158H98v66a6,6,0,0,0,12,0V158h36v66a6,6,0,0,0,12,0V158h31.82A14,14,0,0,0,203,148.78l26.19-72A14,14,0,0,0,227.47,64ZM109,146,95.19,70h65.62L147,146ZM64.3,144.68l-26.18-72a2,2,0,0,1,.24-1.83A1.94,1.94,0,0,1,40,70H83l13.82,76H66.18A2,2,0,0,1,64.3,144.68Zm153.58-72-26.18,72a2,2,0,0,1-1.88,1.32H159.19L173,70h43a1.94,1.94,0,0,1,1.64.85A2,2,0,0,1,217.88,72.68Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M229.11,62.82A16,16,0,0,0,216,56H136V24h16a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16h16V56H40A16,16,0,0,0,25,77.47l26.19,72a16,16,0,0,0,15,10.53H96v64a8,8,0,0,0,16,0V160h32v64a8,8,0,0,0,16,0V160h29.82a16,16,0,0,0,15-10.53l26.19-72A16,16,0,0,0,229.11,62.82ZM110.68,144,97.58,72h60.84l-13.1,72ZM40,72H81.32l13.09,72H66.18Zm149.82,72H161.59l13.09-72H216Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M232.38,60.52A20,20,0,0,0,216,52H140V28h12a12,12,0,0,0,0-24H104a12,12,0,0,0,0,24h12V52H40A20,20,0,0,0,21.2,78.83l26.19,72A20.06,20.06,0,0,0,66.18,164H92v60a12,12,0,0,0,24,0V164h24v60a12,12,0,0,0,24,0V164h25.82a20.06,20.06,0,0,0,18.79-13.17l26.19-72A20,20,0,0,0,232.38,60.52ZM114,140,102.38,76h51.24L142,140ZM45.71,76H78l11.64,64H69ZM187,140H166.38L178,76h32.27Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M229.11,62.82A16,16,0,0,0,216,56H136V24h16a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16h16V56H40A16,16,0,0,0,25,77.47l26.19,72a16,16,0,0,0,15,10.53H189.82a16,16,0,0,0,15-10.53l26.19-72A16,16,0,0,0,229.11,62.82ZM102.52,143.87a7.87,7.87,0,0,1-1.44.13,8,8,0,0,1-7.86-6.57L83,81.43a8,8,0,0,1,15.75-2.86l10.18,56A8,8,0,0,1,102.52,143.87ZM173,81.43l-10.19,56a8,8,0,0,1-7.86,6.57,7.87,7.87,0,0,1-1.44-.13,8,8,0,0,1-6.44-9.3l10.18-56A8,8,0,0,1,173,81.43ZM160,180v44a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V180a4,4,0,0,1,4-4h56A4,4,0,0,1,160,180Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M223.51,74.73l-26.18,72a8,8,0,0,1-7.52,5.27H66.19a8,8,0,0,1-7.52-5.27l-26.18-72A8,8,0,0,1,40,64H216A8,8,0,0,1,223.51,74.73Z" opacity="0.2"/><path d="M229.11,62.82A16,16,0,0,0,216,56H136V24h16a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16h16V56H40A16,16,0,0,0,25,77.47l26.19,72a16,16,0,0,0,15,10.53H96v64a8,8,0,0,0,16,0V160h32v64a8,8,0,0,0,16,0V160h29.82a16,16,0,0,0,15-10.53l26.19-72A16,16,0,0,0,229.11,62.82ZM110.68,144,97.58,72h60.84l-13.1,72ZM40,72H81.32l13.09,72H66.18Zm149.82,72H161.59l13.09-72H216Z"/>`,
    ],
  ]);

  @property({ type: String })
  size: string | number = "1em";

  @property({ type: String })
  weight: IconWeight = "regular";

  @property({ type: String })
  color: string = "regular";

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
      ${PhAirTrafficControl.weightsMap.get(this.weight)}
    </svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-air-traffic-control": PhAirTrafficControl;
  }
}
