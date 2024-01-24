/* GENERATED FILE */
import { html, svg, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { IconWeight } from '../types';

declare global {
  interface HTMLElementTagNameMap {
    "ph-gauge": PhGauge;
  }
}

@customElement('ph-gauge')
class PhGauge extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    ["thin", svg`<path d="M204.23,83.5A107.37,107.37,0,0,0,127.62,52C68.28,52.21,20,101.16,20,161.13V184a12,12,0,0,0,12,12H224a12,12,0,0,0,12-12V160A107.25,107.25,0,0,0,204.23,83.5ZM228,184a4,4,0,0,1-4,4H111.85l59.38-81.65a4,4,0,1,0-6.46-4.7L102,188H32a4,4,0,0,1-4-4V161.13A103.42,103.42,0,0,1,28.84,148H56a4,4,0,0,0,0-8H30.21C39.59,95.66,77.84,61.93,124,60.09V88a4,4,0,0,0,8,0V60.08A100.08,100.08,0,0,1,226,140H200a4,4,0,0,0,0,8h27.29a101.6,101.6,0,0,1,.71,12Z"/>`],
    ["light", svg`<path d="M205.65,82.08A109.26,109.26,0,0,0,128,50h-.39C67.17,50.21,18,100.06,18,161.13V184a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V160A109.3,109.3,0,0,0,205.65,82.08ZM226,184a2,2,0,0,1-2,2H115.78l57.07-78.47a6,6,0,0,0-9.7-7.06L100.94,186H32a2,2,0,0,1-2-2V161.13A102.36,102.36,0,0,1,30.62,150H56a6,6,0,0,0,0-12H32.71C42.6,96.4,78.53,64.86,122,62.19V88a6,6,0,0,0,12,0V62.19A98.05,98.05,0,0,1,223.53,138H200a6,6,0,0,0,0,12h25.5c.33,3.3.5,6.64.5,10Z"/>`],
    ["regular", svg`<path d="M207.06,80.67A111.24,111.24,0,0,0,128,48h-.4C66.07,48.21,16,99,16,161.13V184a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V160A111.25,111.25,0,0,0,207.06,80.67ZM224,184H119.71l54.76-75.3a8,8,0,0,0-12.94-9.42L99.92,184H32V161.13c0-3.08.15-6.12.43-9.13H56a8,8,0,0,0,0-16H35.27c10.32-38.86,44-68.24,84.73-71.66V88a8,8,0,0,0,16,0V64.33A96.14,96.14,0,0,1,221,136H200a8,8,0,0,0,0,16h23.67c.21,2.65.33,5.31.33,8Z"/>`],
    ["bold", svg`<path d="M209.88,77.83A115.19,115.19,0,0,0,128,44h-.41C63.85,44.22,12,96.76,12,161.13V184a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V160A115.25,115.25,0,0,0,209.88,77.83ZM220,180H127.32l46.44-65A12,12,0,1,0,154.24,101L97.82,180H36V161.13c0-1.72,0-3.43.14-5.13H56a12,12,0,0,0,0-24H40.62c10.91-33.39,40-58.52,75.38-63.21V88a12,12,0,0,0,24,0V68.8A92,92,0,0,1,215.66,132H200a12,12,0,0,0,0,24h19.9c.06,1.33.1,2.66.1,4Z"/>`],
    ["fill", svg`<path d="M240,160v24a16,16,0,0,1-16,16H115.93a4,4,0,0,1-3.24-6.35L174.27,109a8.21,8.21,0,0,0-1.37-11.3,8,8,0,0,0-11.37,1.61l-72,99.06A4,4,0,0,1,86.25,200H32a16,16,0,0,1-16-16V161.13c0-1.79,0-3.57.13-5.33a4,4,0,0,1,4-3.8H48a8,8,0,0,0,8-8.53A8.17,8.17,0,0,0,47.73,136H23.92a4,4,0,0,1-3.87-5c12-43.84,49.66-77.13,95.52-82.28a4,4,0,0,1,4.43,4V80a8,8,0,0,0,8.53,8A8.17,8.17,0,0,0,136,79.73V52.67a4,4,0,0,1,4.43-4A112.18,112.18,0,0,1,236.23,131a4,4,0,0,1-3.88,5H208.27a8.17,8.17,0,0,0-8.25,7.47,8,8,0,0,0,8,8.53h27.92a4,4,0,0,1,4,3.86C240,157.23,240,158.61,240,160Z"/>`],
    ["duotone", svg`<path d="M232,160v24a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V161.13C24,103.65,70.15,56.2,127.63,56A104,104,0,0,1,232,160Z" opacity="0.2"/><path d="M207.06,80.67A111.24,111.24,0,0,0,128,48h-.4C66.07,48.21,16,99,16,161.13V184a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V160A111.25,111.25,0,0,0,207.06,80.67ZM224,184H119.71l54.76-75.3a8,8,0,0,0-12.94-9.42L99.92,184H32V161.13c0-3.08.15-6.12.43-9.13H56a8,8,0,0,0,0-16H35.27c10.32-38.86,44-68.24,84.73-71.66V88a8,8,0,0,0,16,0V64.33A96.14,96.14,0,0,1,221,136H200a8,8,0,0,0,0,16h23.67c.21,2.65.33,5.31.33,8Z"/>`],
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
      ${PhGauge.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhGauge }
