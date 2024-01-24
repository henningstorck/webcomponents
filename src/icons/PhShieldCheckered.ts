/* GENERATED FILE */
import { html, svg, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { IconWeight } from '../types';

declare global {
  interface HTMLElementTagNameMap {
    "ph-shield-checkered": PhShieldCheckered;
  }
}

@customElement('ph-shield-checkered')
class PhShieldCheckered extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    ["thin", svg`<path d="M208,44H48A12,12,0,0,0,36,56v58.77c0,86.87,73.54,115.7,88.28,120.59a11.68,11.68,0,0,0,3.7.62h0a11.68,11.68,0,0,0,3.7-.62C146.46,230.49,220,201.66,220,114.79V56A12,12,0,0,0,208,44Zm4,12v58.77c0,3.16-.12,6.22-.31,9.21H132V52h76A4,4,0,0,1,212,56ZM44,56a4,4,0,0,1,4-4h76v72H44.31c-.19-3-.31-6-.31-9.21Zm1.09,76H124v94.81C107,220.55,53.4,196,45.09,132ZM132,226.81V132h78.91C202.6,196,149,220.55,132,226.81Z"/>`],
    ["light", svg`<path d="M208,42H48A14,14,0,0,0,34,56v58.77c0,88.25,74.68,117.52,89.65,122.49a13.5,13.5,0,0,0,8.7,0c15-5,89.65-34.24,89.65-122.49V56A14,14,0,0,0,208,42Zm2,14v58.77c0,2.46-.07,4.86-.19,7.21H134V54h74A2,2,0,0,1,210,56ZM46,56a2,2,0,0,1,2-2h74v68H46.19c-.12-2.35-.19-4.75-.19-7.21Zm1.4,78H122v89.9C103.17,216.44,56.08,192.18,47.4,134ZM134,223.9V134h74.6C199.92,192.17,152.83,216.44,134,223.9Z"/>`],
    ["regular", svg`<path d="M208,40H48A16,16,0,0,0,32,56v58.77c0,89.62,75.82,119.34,91,124.38a15.44,15.44,0,0,0,10,0c15.2-5.05,91-34.77,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,1.77,0,3.5-.11,5.21H136V56h72ZM48,56h72v64H48.11c-.07-1.71-.11-3.44-.11-5.21Zm1.74,80H120v84.92C100.32,212.56,58.73,188.92,49.74,136ZM136,220.91V136h70.26C197.27,188.89,155.72,212.54,136,220.91Z"/>`],
    ["bold", svg`<path d="M208,36H48A20,20,0,0,0,28,56v58.77c0,92.37,78.1,123,93.75,128.18a19.82,19.82,0,0,0,5.66,1c.2,0,.39,0,.59,0s.39,0,.58,0a20,20,0,0,0,5.66-1C149.9,237.78,228,207.16,228,114.79V56A20,20,0,0,0,208,36Zm-4,78.79c0,.41,0,.81,0,1.21H140V60h64ZM52,60h64v56H52c0-.4,0-.8,0-1.21Zm2.59,80H116v74.72C96.33,205.21,63.92,183.37,54.59,140ZM140,214.72V140h61.41C192.08,183.37,159.67,205.21,140,214.72Z"/>`],
    ["fill", svg`<path d="M208,40H48A16,16,0,0,0,32,56v58.77c0,89.62,75.82,119.34,91,124.38a15.44,15.44,0,0,0,10,0c15.2-5.05,91-34.77,91-124.39V56A16,16,0,0,0,208,40ZM48.66,128H128V56h80v58.77a130.51,130.51,0,0,1-.66,13.21H128v96h0C115.26,219.73,55.59,196.26,48.66,128Z"/>`],
    ["duotone", svg`<path d="M215.39,128c-7,73.93-71.47,99.12-84.93,103.59A7.93,7.93,0,0,1,128,232V128h87.39ZM128,48H48a8,8,0,0,0-8,8v58.77q0,6.85.61,13.21H128Z" opacity="0.2"/><path d="M208,40H48A16,16,0,0,0,32,56v58.77c0,89.62,75.82,119.34,91,124.38a15.44,15.44,0,0,0,10,0c15.2-5.05,91-34.77,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,1.77,0,3.5-.11,5.21H136V56h72ZM48,56h72v64H48.11c-.07-1.71-.11-3.44-.11-5.21Zm1.74,80H120v84.92C100.32,212.56,58.73,188.92,49.74,136ZM136,220.91V136h70.26C197.27,188.89,155.72,212.54,136,220.91Z"/>`],
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
      ${PhShieldCheckered.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhShieldCheckered }
