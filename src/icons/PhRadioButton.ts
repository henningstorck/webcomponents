/* GENERATED FILE */
import { html, svg, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { IconWeight } from '../types';

declare global {
  interface HTMLElementTagNameMap {
    "ph-radio-button": PhRadioButton;
  }
}

@customElement('ph-radio-button')
class PhRadioButton extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    ["thin", svg`<path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm0-152a60,60,0,1,0,60,60A60.07,60.07,0,0,0,128,68Zm0,112a52,52,0,1,1,52-52A52.06,52.06,0,0,1,128,180Z"/>`],
    ["light", svg`<path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm0-152a62,62,0,1,0,62,62A62.07,62.07,0,0,0,128,66Zm0,112a50,50,0,1,1,50-50A50.06,50.06,0,0,1,128,178Z"/>`],
    ["regular", svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm0-152a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64Zm0,112a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176Z"/>`],
    ["bold", svg`<path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm0-148a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64Zm0,104a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"/>`],
    ["fill", svg`<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Z"/>`],
    ["duotone", svg`<path d="M184,128a56,56,0,1,1-56-56A56,56,0,0,1,184,128Z" opacity="0.2"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm0-152a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64Zm0,112a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176Z"/>`],
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
      ${PhRadioButton.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhRadioButton }
