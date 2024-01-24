/* GENERATED FILE */
import { html, svg, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { IconWeight } from '../types';

declare global {
  interface HTMLElementTagNameMap {
    "ph-cursor-text": PhCursorText;
  }
}

@customElement('ph-cursor-text')
class PhCursorText extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    ["thin", svg`<path d="M180,208a4,4,0,0,1-4,4H160a36,36,0,0,1-32-19.54A36,36,0,0,1,96,212H80a4,4,0,0,1,0-8H96a28,28,0,0,0,28-28V132H104a4,4,0,0,1,0-8h20V80A28,28,0,0,0,96,52H80a4,4,0,0,1,0-8H96a36,36,0,0,1,32,19.54A36,36,0,0,1,160,44h16a4,4,0,0,1,0,8H160a28,28,0,0,0-28,28v44h20a4,4,0,0,1,0,8H132v44a28,28,0,0,0,28,28h16A4,4,0,0,1,180,208Z"/>`],
    ["light", svg`<path d="M182,208a6,6,0,0,1-6,6H160a38,38,0,0,1-32-17.55A38,38,0,0,1,96,214H80a6,6,0,0,1,0-12H96a26,26,0,0,0,26-26V134H104a6,6,0,0,1,0-12h18V80A26,26,0,0,0,96,54H80a6,6,0,0,1,0-12H96a38,38,0,0,1,32,17.55A38,38,0,0,1,160,42h16a6,6,0,0,1,0,12H160a26,26,0,0,0-26,26v42h18a6,6,0,0,1,0,12H134v42a26,26,0,0,0,26,26h16A6,6,0,0,1,182,208Z"/>`],
    ["regular", svg`<path d="M184,208a8,8,0,0,1-8,8H160a40,40,0,0,1-32-16,40,40,0,0,1-32,16H80a8,8,0,0,1,0-16H96a24,24,0,0,0,24-24V136H104a8,8,0,0,1,0-16h16V80A24,24,0,0,0,96,56H80a8,8,0,0,1,0-16H96a40,40,0,0,1,32,16,40,40,0,0,1,32-16h16a8,8,0,0,1,0,16H160a24,24,0,0,0-24,24v40h16a8,8,0,0,1,0,16H136v40a24,24,0,0,0,24,24h16A8,8,0,0,1,184,208Z"/>`],
    ["bold", svg`<path d="M188,208a12,12,0,0,1-12,12H160a43.86,43.86,0,0,1-32-13.85A43.86,43.86,0,0,1,96,220H80a12,12,0,0,1,0-24H96a20,20,0,0,0,20-20V140H104a12,12,0,0,1,0-24h12V80A20,20,0,0,0,96,60H80a12,12,0,0,1,0-24H96a43.86,43.86,0,0,1,32,13.85A43.86,43.86,0,0,1,160,36h16a12,12,0,0,1,0,24H160a20,20,0,0,0-20,20v36h12a12,12,0,0,1,0,24H140v36a20,20,0,0,0,20,20h16A12,12,0,0,1,188,208Z"/>`],
    ["fill", svg`<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-64,88a8,8,0,0,1,0,16h-8v24a16,16,0,0,0,16,16h8a8,8,0,0,1,0,16h-8a31.92,31.92,0,0,1-24-10.87A31.92,31.92,0,0,1,104,192H96a8,8,0,0,1,0-16h8a16,16,0,0,0,16-16V136h-8a8,8,0,0,1,0-16h8V96a16,16,0,0,0-16-16H96a8,8,0,0,1,0-16h8a31.92,31.92,0,0,1,24,10.87A31.92,31.92,0,0,1,152,64h8a8,8,0,0,1,0,16h-8a16,16,0,0,0-16,16v24Z"/>`],
    ["duotone", svg`<path d="M176,48V208H80V48Z" opacity="0.2"/><path d="M184,208a8,8,0,0,1-8,8H160a40,40,0,0,1-32-16,40,40,0,0,1-32,16H80a8,8,0,0,1,0-16H96a24,24,0,0,0,24-24V136H104a8,8,0,0,1,0-16h16V80A24,24,0,0,0,96,56H80a8,8,0,0,1,0-16H96a40,40,0,0,1,32,16,40,40,0,0,1,32-16h16a8,8,0,0,1,0,16H160a24,24,0,0,0-24,24v40h16a8,8,0,0,1,0,16H136v40a24,24,0,0,0,24,24h16A8,8,0,0,1,184,208Z"/>`],
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
      ${PhCursorText.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhCursorText }
