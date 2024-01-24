/* GENERATED FILE */
import { html, svg, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { IconWeight } from '../types';

declare global {
  interface HTMLElementTagNameMap {
    "ph-fan": PhFan;
  }
}

@customElement('ph-fan')
class PhFan extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    ["thin", svg`<path d="M229.12,136a56,56,0,0,0-86-31.56,28.25,28.25,0,0,0-4.56-2.39l17.27-68.94a4,4,0,0,0-1.72-4.34A56,56,0,1,0,100,126.62c0,.46,0,.92,0,1.38a27.39,27.39,0,0,0,.26,3.76L31.91,151.28A4,4,0,0,0,29,154.94a56,56,0,0,0,41.45,56.62,56.46,56.46,0,0,0,14.59,1.93,56.07,56.07,0,0,0,55.73-60.59,27.93,27.93,0,0,0,4.33-2.77l51.09,49.44A4,4,0,0,0,199,200.7a4.06,4.06,0,0,0,1.84-.45A56,56,0,0,0,229.12,136ZM128,148a20,20,0,1,1,20-20A20,20,0,0,1,128,148ZM76,76a48,48,0,0,1,71.4-41.92l-16.55,66.06c-.94-.09-1.89-.14-2.85-.14a28.06,28.06,0,0,0-26.34,18.49A47.82,47.82,0,0,1,76,76Zm33,123a48,48,0,0,1-72-40.87l65.5-18.7A28,28,0,0,0,128,156a28.81,28.81,0,0,0,4.94-.44A47.81,47.81,0,0,1,109,199ZM216.6,174.54a47.93,47.93,0,0,1-17,17.22l-49-47.37a27.91,27.91,0,0,0-1.3-34.44,48,48,0,0,1,67.22,64.59Z"/>`],
    ["light", svg`<path d="M231.06,135.52a58,58,0,0,0-88-33.42c-.69-.41-1.41-.8-2.14-1.15l16.86-67.32a6,6,0,0,0-2.58-6.51A58,58,0,1,0,98,127.86V128c0,.77,0,1.54.1,2.3L31.37,149.36A6,6,0,0,0,27,154.85,58,58,0,1,0,142.88,154c.7-.4,1.39-.83,2.06-1.29L194.81,201a6,6,0,0,0,6.94,1,58,58,0,0,0,29.31-66.51ZM110,128a18,18,0,1,1,18,18A18,18,0,0,1,110,128ZM78,76a46,46,0,0,1,67.08-40.9L129.32,98q-.66,0-1.32,0a30,30,0,0,0-27.33,17.66A45.84,45.84,0,0,1,78,76Zm30,121.3a46,46,0,0,1-69-37.64l62.39-17.82A30,30,0,0,0,128,158a29.29,29.29,0,0,0,3-.15A45.85,45.85,0,0,1,108,197.3Zm106.9-23.76a45.91,45.91,0,0,1-15,15.7l-46.63-45.12a29.91,29.91,0,0,0-.93-33.62,46,46,0,0,1,62.52,63Z"/>`],
    ["regular", svg`<path d="M233,135a60,60,0,0,0-89.62-35.45l16.39-65.44a8,8,0,0,0-3.45-8.68A60,60,0,1,0,95.69,128.91L30.82,147.44a8,8,0,0,0-5.8,7.32,60,60,0,0,0,44.42,60.66,60.52,60.52,0,0,0,15.62,2.07,60.07,60.07,0,0,0,59.88-62l48.48,46.92a8,8,0,0,0,9.25,1.35A60,60,0,0,0,233,135Zm-121-7a16,16,0,1,1,16,16A16,16,0,0,1,112,128ZM80,76a44,44,0,0,1,62.75-39.82L127.77,96A32,32,0,0,0,99.85,112.8,43.85,43.85,0,0,1,80,76Zm27,119.57a44,44,0,0,1-65.86-34.43l59.31-16.94A32,32,0,0,0,128,160l.91,0A43.82,43.82,0,0,1,107,195.57Zm106.17-23a43.92,43.92,0,0,1-13,14.14l-44.32-42.89a31.91,31.91,0,0,0-.59-32.57,44,44,0,0,1,57.91,61.32Z"/>`],
    ["bold", svg`<path d="M236.85,134a64,64,0,0,0-87.43-42.11l14.22-56.77a12,12,0,0,0-5.17-13A64,64,0,0,0,86,127.52L29.72,143.59a12,12,0,0,0-8.69,11,64,64,0,0,0,127.56,10l42,40.7a12,12,0,0,0,13.86,2A64,64,0,0,0,236.85,134ZM116,128a12,12,0,1,1,12,12A12,12,0,0,1,116,128Zm8-92a40,40,0,0,1,14,2.53L124.6,92.17a36,36,0,0,0-25.85,14.88A40,40,0,0,1,124,36ZM105,192.1A40,40,0,0,1,45.5,164l53.18-15.19a36,36,0,0,0,25.8,15A39.84,39.84,0,0,1,105,192.1Zm104.7-21.56a39.92,39.92,0,0,1-9.21,10.89L160.73,143a35.9,35.9,0,0,0,.05-29.83,40,40,0,0,1,48.89,57.4Z"/>`],
    ["fill", svg`<path d="M233,135a60,60,0,0,0-89.62-35.45l16.39-65.44a8,8,0,0,0-3.45-8.68A60,60,0,1,0,95.69,128.91L30.82,147.44a8,8,0,0,0-5.8,7.32,60,60,0,0,0,44.42,60.66,60.52,60.52,0,0,0,15.62,2.07,60.07,60.07,0,0,0,59.88-62l48.48,46.92a8,8,0,0,0,9.25,1.35A60,60,0,0,0,233,135ZM130.44,147.85a20,20,0,1,1,17.41-22.29A20,20,0,0,1,130.44,147.85Z"/>`],
    ["duotone", svg`<path d="M136.5,150.45A52,52,0,1,1,33,155.13l71.91-20.54h0A24,24,0,0,0,128,152a23.75,23.75,0,0,0,8.5-1.56Zm-32.19-26.31h0a24,24,0,0,1,29.52-19.42h0L152,32.17a52,52,0,1,0-47.69,92ZM201,105.5a52,52,0,0,0-57.84,3.91h0a24,24,0,0,1,2.06,35.26h0l53.74,52a52,52,0,0,0,2-91.2Z" opacity="0.2"/><path d="M233,135a60,60,0,0,0-89.62-35.45l16.39-65.44a8,8,0,0,0-3.45-8.68A60,60,0,1,0,95.69,128.91L30.82,147.44a8,8,0,0,0-5.8,7.32,60,60,0,0,0,44.42,60.66,60.52,60.52,0,0,0,15.62,2.07,60.07,60.07,0,0,0,59.88-62l48.48,46.92a8,8,0,0,0,9.25,1.35A60,60,0,0,0,233,135Zm-121-7a16,16,0,1,1,16,16A16,16,0,0,1,112,128ZM80,76a44,44,0,0,1,62.75-39.82L127.77,96A32,32,0,0,0,99.85,112.8,43.85,43.85,0,0,1,80,76Zm27,119.57a44,44,0,0,1-65.86-34.43l59.31-16.94A32,32,0,0,0,128,160l.91,0A43.82,43.82,0,0,1,107,195.57Zm106.17-23a43.92,43.92,0,0,1-13,14.14l-44.32-42.89a31.91,31.91,0,0,0-.59-32.57,44,44,0,0,1,57.91,61.32Z"/>`],
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
      ${PhFan.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhFan }
