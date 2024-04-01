/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-coins": PhCoins;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-coins": PhCoins;
    }
  }
}

@customElement("ph-coins")
class PhCoins extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M180,93.11V84c0-22.43-36.9-40-84-40S12,61.57,12,84v40c0,19.14,26.86,34.72,64,38.89V172c0,22.43,36.9,40,84,40s84-17.57,84-40V132C244,113.12,217.87,97.37,180,93.11ZM236,132c0,15.45-30.54,32-76,32a165.71,165.71,0,0,1-28-2.34v-1.39c28.61-6.31,48-20,48-36.27V101.17C212.22,105,236,117.93,236,132ZM108.19,155.59Q102.3,156,96,156c-5.47,0-10.72-.25-15.73-.69l-.27,0h0c-4.16-.38-8.16-.9-12-1.56V121.8A174.87,174.87,0,0,0,96,124a174.87,174.87,0,0,0,28-2.2v31.92a155,155,0,0,1-15.52,1.85ZM172,101.32V124c0,10.88-15.16,22.3-40,28.11V120.27C149.63,116.38,163.75,109.69,172,101.32ZM96,52c45.46,0,76,16.55,76,32s-30.54,32-76,32S20,99.45,20,84,50.54,52,96,52ZM20,124V101.32c8.25,8.37,22.37,15.06,40,19v31.84C35.16,146.3,20,134.88,20,124Zm64,48v-8.4c3.91.26,7.92.4,12,.4s8.06-.14,12-.39a123.93,123.93,0,0,0,16,4.63v31.87C99.16,194.3,84,182.88,84,172Zm48,29.72V169.77A174.48,174.48,0,0,0,160,172a174.87,174.87,0,0,0,28-2.2v31.92a173.07,173.07,0,0,1-56,0ZM236,172c0,10.88-15.16,22.3-40,28.11V168.27c17.63-3.89,31.75-10.58,40-19Z"/>`,
    ],
    [
      "light",
      svg`<path d="M224.56,103.81C213.43,97.75,198.47,93.39,182,91.34V84c0-12.12-9.58-23.1-27-30.93C139.16,45.93,118.2,42,96,42S52.84,45.93,37,53.07C19.58,60.9,10,71.88,10,84v40c0,12.12,9.58,23.1,27,30.93,10.49,4.72,23.21,8,37,9.73V172c0,12.12,9.58,23.1,27,30.93C116.84,210.07,137.8,214,160,214s43.16-3.93,59-11.07c17.39-7.83,27-18.81,27-30.93V132C246,121.35,238.39,111.34,224.56,103.81Zm-5.74,10.54C228.61,119.68,234,126,234,132c0,14.19-30.39,30-74,30a166.9,166.9,0,0,1-21.21-1.34A110.79,110.79,0,0,0,155,154.93c17.39-7.83,27-18.81,27-30.93V103.43C196.4,105.36,209.3,109.16,218.82,114.35ZM108.16,153.58c-3.92.27-8,.42-12.16.42-5.3,0-10.4-.24-15.28-.67a2.22,2.22,0,0,0-.37,0c-3.58-.33-7-.77-10.35-1.3V124.12A178,178,0,0,0,96,126a178,178,0,0,0,26-1.88V152c-4.34.69-8.91,1.22-13.69,1.56ZM170,105.89V124c0,9.54-13.75,19.8-36,25.51V121.85a115,115,0,0,0,21-6.92A66.2,66.2,0,0,0,170,105.89ZM96,54c43.61,0,74,15.81,74,30s-30.39,30-74,30S22,98.19,22,84,52.39,54,96,54ZM22,124V105.89a66.2,66.2,0,0,0,15,9,115,115,0,0,0,21,6.92v27.66C35.75,143.8,22,133.54,22,124Zm64,48v-6.28c3.3.18,6.63.28,10,.28q5.91,0,11.66-.37A123.17,123.17,0,0,0,122,169.84v27.67C99.75,191.8,86,181.54,86,172Zm48,28V172.1a177.84,177.84,0,0,0,26,1.9,178,178,0,0,0,26-1.88V200a170,170,0,0,1-52,0Zm64-2.49V169.85a115,115,0,0,0,21-6.92,66.2,66.2,0,0,0,15-9V172C234,181.54,220.25,191.8,198,197.51Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M184,89.57V84c0-25.08-37.83-44-88-44S8,58.92,8,84v40c0,20.89,26.25,37.49,64,42.46V172c0,25.08,37.83,44,88,44s88-18.92,88-44V132C248,111.3,222.58,94.68,184,89.57ZM232,132c0,13.22-30.79,28-72,28-3.73,0-7.43-.13-11.08-.37C170.49,151.77,184,139,184,124V105.74C213.87,110.19,232,122.27,232,132ZM72,150.25V126.46A183.74,183.74,0,0,0,96,128a183.74,183.74,0,0,0,24-1.54v23.79A163,163,0,0,1,96,152,163,163,0,0,1,72,150.25Zm96-40.32V124c0,8.39-12.41,17.4-32,22.87V123.5C148.91,120.37,159.84,115.71,168,109.93ZM96,56c41.21,0,72,14.78,72,28s-30.79,28-72,28S24,97.22,24,84,54.79,56,96,56ZM24,124V109.93c8.16,5.78,19.09,10.44,32,13.57v23.37C36.41,141.4,24,132.39,24,124Zm64,48v-4.17c2.63.1,5.29.17,8,.17,3.88,0,7.67-.13,11.39-.35A121.92,121.92,0,0,0,120,171.41v23.46C100.41,189.4,88,180.39,88,172Zm48,26.25V174.4a179.48,179.48,0,0,0,24,1.6,183.74,183.74,0,0,0,24-1.54v23.79a165.45,165.45,0,0,1-48,0Zm64-3.38V171.5c12.91-3.13,23.84-7.79,32-13.57V172C232,180.39,219.59,189.4,200,194.87Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M188,86.11V84c0-14.62-10.83-27.55-30.51-36.4C140.87,40.12,119,36,96,36S51.13,40.12,34.51,47.6C14.83,56.45,4,69.38,4,84v40c0,14.62,10.83,27.55,30.51,36.4A131.67,131.67,0,0,0,68,169.88V172c0,14.62,10.83,27.55,30.51,36.4C115.13,215.88,137,220,160,220s44.87-4.12,61.49-11.6C241.17,199.55,252,186.62,252,172V132C252,109.86,226.71,92.08,188,86.11ZM228,132c0,7.75-21.77,22.48-61.81,23.88C180.33,147.4,188,136.3,188,124V110.44C213.88,115.15,228,125.48,228,132ZM107.37,147.63c-3.63.24-7.42.37-11.37.37-5.08,0-9.89-.22-14.43-.61a10.94,10.94,0,0,0-1.14-.09c-1.51-.14-3-.3-4.43-.48V130.93A187,187,0,0,0,96,132a187,187,0,0,0,20-1.07v15.89c-2.49.3-5.07.56-7.75.75C108,147.58,107.66,147.6,107.37,147.63ZM164,117.14V124c0,4.78-8.28,12.21-24,17.54v-15a115.32,115.32,0,0,0,17.49-6.13Q160.93,118.86,164,117.14ZM96,60c44,0,68,15.85,68,24s-24,24-68,24S28,92.15,28,84,52,60,96,60ZM28,124v-6.86q3.08,1.71,6.51,3.26A115.32,115.32,0,0,0,52,126.53v15C36.28,136.21,28,128.78,28,124Zm64,48v0c1.33,0,2.66,0,4,0q5.44,0,10.77-.32,4.45,1.57,9.23,2.86v15C100.28,184.21,92,176.78,92,172Zm48,22.82V178.94A186.45,186.45,0,0,0,160,180a187,187,0,0,0,20-1.07v15.89a170.08,170.08,0,0,1-40,0Zm64-5.28v-15a115.32,115.32,0,0,0,17.49-6.13q3.44-1.54,6.51-3.26V172C228,176.78,219.72,184.21,204,189.54Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M184,89.57V84c0-25.08-37.83-44-88-44S8,58.92,8,84v40c0,20.89,26.25,37.49,64,42.46V172c0,25.08,37.83,44,88,44s88-18.92,88-44V132C248,111.3,222.58,94.68,184,89.57ZM56,146.87C36.41,141.4,24,132.39,24,124V109.93c8.16,5.78,19.09,10.44,32,13.57Zm80-23.37c12.91-3.13,23.84-7.79,32-13.57V124c0,8.39-12.41,17.4-32,22.87Zm-16,71.37C100.41,189.4,88,180.39,88,172v-4.17c2.63.1,5.29.17,8,.17,3.88,0,7.67-.13,11.39-.35A121.92,121.92,0,0,0,120,171.41Zm0-44.62A163,163,0,0,1,96,152a163,163,0,0,1-24-1.75V126.46A183.74,183.74,0,0,0,96,128a183.74,183.74,0,0,0,24-1.54Zm64,48a165.45,165.45,0,0,1-48,0V174.4a179.48,179.48,0,0,0,24,1.6,183.74,183.74,0,0,0,24-1.54ZM232,172c0,8.39-12.41,17.4-32,22.87V171.5c12.91-3.13,23.84-7.79,32-13.57Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M240,132c0,19.88-35.82,36-80,36-19.6,0-37.56-3.17-51.47-8.44h0C146.76,156.85,176,142,176,124V96.72h0C212.52,100.06,240,114.58,240,132ZM176,84c0-19.88-35.82-36-80-36S16,64.12,16,84s35.82,36,80,36S176,103.88,176,84Z" opacity="0.2"/><path d="M184,89.57V84c0-25.08-37.83-44-88-44S8,58.92,8,84v40c0,20.89,26.25,37.49,64,42.46V172c0,25.08,37.83,44,88,44s88-18.92,88-44V132C248,111.3,222.58,94.68,184,89.57ZM232,132c0,13.22-30.79,28-72,28-3.73,0-7.43-.13-11.08-.37C170.49,151.77,184,139,184,124V105.74C213.87,110.19,232,122.27,232,132ZM72,150.25V126.46A183.74,183.74,0,0,0,96,128a183.74,183.74,0,0,0,24-1.54v23.79A163,163,0,0,1,96,152,163,163,0,0,1,72,150.25Zm96-40.32V124c0,8.39-12.41,17.4-32,22.87V123.5C148.91,120.37,159.84,115.71,168,109.93ZM96,56c41.21,0,72,14.78,72,28s-30.79,28-72,28S24,97.22,24,84,54.79,56,96,56ZM24,124V109.93c8.16,5.78,19.09,10.44,32,13.57v23.37C36.41,141.4,24,132.39,24,124Zm64,48v-4.17c2.63.1,5.29.17,8,.17,3.88,0,7.67-.13,11.39-.35A121.92,121.92,0,0,0,120,171.41v23.46C100.41,189.4,88,180.39,88,172Zm48,26.25V174.4a179.48,179.48,0,0,0,24,1.6,183.74,183.74,0,0,0,24-1.54v23.79a165.45,165.45,0,0,1-48,0Zm64-3.38V171.5c12.91-3.13,23.84-7.79,32-13.57V172C232,180.39,219.59,189.4,200,194.87Z"/>`,
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
      ${PhCoins.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhCoins };
