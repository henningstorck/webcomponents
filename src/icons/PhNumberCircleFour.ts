/* GENERATED FILE */
import { html, svg, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { IconWeight } from '../types';

declare global {
  interface HTMLElementTagNameMap {
    "ph-number-circle-four": PhNumberCircleFour;
  }
}

@customElement('ph-number-circle-four')
class PhNumberCircleFour extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    ["thin", svg`<path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm36-76a4,4,0,0,1-4,4H148v28a4,4,0,0,1-8,0V148H96a4,4,0,0,1-3.79-5.26l24-72a4,4,0,1,1,7.58,2.52L101.55,140H140V112a4,4,0,0,1,8,0v28h12A4,4,0,0,1,164,144Z"/>`],
    ["light", svg`<path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm38-74a6,6,0,0,1-6,6H150v26a6,6,0,0,1-12,0V150H96a6,6,0,0,1-5.69-7.9l24-72a6,6,0,1,1,11.38,3.8L104.32,138H138V112a6,6,0,0,1,12,0v26h10A6,6,0,0,1,166,144Z"/>`],
    ["regular", svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-72a8,8,0,0,1-8,8h-8v24a8,8,0,0,1-16,0V152H96a8,8,0,0,1-7.59-10.53l24-72a8,8,0,0,1,15.18,5.06L107.1,136H136V112a8,8,0,0,1,16,0v24h8A8,8,0,0,1,168,144Z"/>`],
    ["bold", svg`<path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm44-68a12,12,0,0,1-12,12h-4v20a12,12,0,0,1-24,0V156H96a12,12,0,0,1-11.32-16l24-68a12,12,0,1,1,22.64,8L113,132h19V116a12,12,0,0,1,24,0v16h4A12,12,0,0,1,172,144Z"/>`],
    ["fill", svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm32,128h-8v24a8,8,0,0,1-16,0V152H96a8,8,0,0,1-7.59-10.53l24-72a8,8,0,0,1,15.18,5.06L107.1,136H136V112a8,8,0,0,1,16,0v24h8a8,8,0,0,1,0,16Z"/>`],
    ["duotone", svg`<path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-72a8,8,0,0,1-8,8h-8v24a8,8,0,0,1-16,0V152H96a8,8,0,0,1-7.59-10.53l24-72a8,8,0,0,1,15.18,5.06L107.1,136H136V112a8,8,0,0,1,16,0v24h8A8,8,0,0,1,168,144Z"/>`],
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
      ${PhNumberCircleFour.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhNumberCircleFour }
