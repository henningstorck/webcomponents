/* GENERATED FILE */
import { html, svg, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { IconWeight } from '../types';

declare global {
  interface HTMLElementTagNameMap {
    "ph-piggy-bank": PhPiggyBank;
  }
}

@customElement('ph-piggy-bank')
class PhPiggyBank extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    ["thin", svg`<path d="M188,116a8,8,0,1,1-8-8A8,8,0,0,1,188,116ZM152,68H112a4,4,0,0,0,0,8h40a4,4,0,0,0,0-8Zm92,44v32a20,20,0,0,1-20,20h-5.18l-17.16,48a12,12,0,0,1-11.3,8H177.64a12,12,0,0,1-11.3-8l-2.87-8H100.53l-2.87,8a12,12,0,0,1-11.3,8H73.64a12,12,0,0,1-11.3-8l-12.82-35.9a83.73,83.73,0,0,1-21.4-51.76A20,20,0,0,0,12,144a4,4,0,0,1-8,0,28,28,0,0,1,24.09-27.72A84.1,84.1,0,0,1,112,36H216a4,4,0,0,1,0,8H179.8a84,84,0,0,1,41.31,42.63c.76,1.76,1.47,3.55,2.11,5.37H224A20,20,0,0,1,244,112Zm-8,0a12,12,0,0,0-12-12h-3.66a4,4,0,0,1-3.82-2.8,74.45,74.45,0,0,0-2.75-7.39A76,76,0,0,0,144,44H112A76,76,0,0,0,56,171.34a4,4,0,0,1,.82,1.36l13.09,36.65A4,4,0,0,0,73.64,212H86.36a4,4,0,0,0,3.77-2.65L94,198.65A4,4,0,0,1,97.71,196h68.58a4,4,0,0,1,3.76,2.65l3.82,10.7a4,4,0,0,0,3.77,2.65h12.72a4,4,0,0,0,3.77-2.65l18.1-50.7A4,4,0,0,1,216,156h8a12,12,0,0,0,12-12Z"/>`],
    ["light", svg`<path d="M190,116a10,10,0,1,1-10-10A10,10,0,0,1,190,116ZM152,66H112a6,6,0,0,0,0,12h40a6,6,0,0,0,0-12Zm94,46v32a22,22,0,0,1-22,22h-3.77l-16.68,46.71A14,14,0,0,1,190.36,222H177.64a14,14,0,0,1-13.19-9.29L162.06,206H101.94l-2.39,6.71A14,14,0,0,1,86.36,222H73.64a14,14,0,0,1-13.19-9.29L47.76,177.18a85.72,85.72,0,0,1-21.47-50.24A18,18,0,0,0,14,144a6,6,0,0,1-12,0,30,30,0,0,1,24.19-29.43A86.1,86.1,0,0,1,112,34H216a6,6,0,0,1,0,12H187.82a85.92,85.92,0,0,1,35.12,39.83c.6,1.38,1.16,2.77,1.68,4.18A22,22,0,0,1,246,112Zm-12,0a10,10,0,0,0-10-10h-3.66a6,6,0,0,1-5.73-4.2,71.4,71.4,0,0,0-2.68-7.19A74,74,0,0,0,144,46H112A74,74,0,0,0,57.44,170a5.81,5.81,0,0,1,1.22,2l13.09,36.64A2,2,0,0,0,73.64,210H86.36a2,2,0,0,0,1.89-1.33L92.06,198a6,6,0,0,1,5.65-4h68.58a6,6,0,0,1,5.65,4l3.81,10.69a2,2,0,0,0,1.89,1.33h12.72a2,2,0,0,0,1.89-1.33L210.35,158a6,6,0,0,1,5.65-4h8a10,10,0,0,0,10-10Z"/>`],
    ["regular", svg`<path d="M192,116a12,12,0,1,1-12-12A12,12,0,0,1,192,116ZM152,64H112a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm96,48v32a24,24,0,0,1-24,24h-2.36l-16.21,45.38A16,16,0,0,1,190.36,224H177.64a16,16,0,0,1-15.07-10.62L160.65,208h-57.3l-1.92,5.38A16,16,0,0,1,86.36,224H73.64a16,16,0,0,1-15.07-10.62L46,178.22a87.69,87.69,0,0,1-21.44-48.38A16,16,0,0,0,16,144a8,8,0,0,1-16,0,32,32,0,0,1,24.28-31A88.12,88.12,0,0,1,112,32H216a8,8,0,0,1,0,16H194.61a87.93,87.93,0,0,1,30.17,37c.43,1,.85,2,1.25,3A24,24,0,0,1,248,112Zm-16,0a8,8,0,0,0-8-8h-3.66a8,8,0,0,1-7.64-5.6A71.9,71.9,0,0,0,144,48H112A72,72,0,0,0,58.91,168.64a8,8,0,0,1,1.64,2.71L73.64,208H86.36l3.82-10.69A8,8,0,0,1,97.71,192h68.58a8,8,0,0,1,7.53,5.31L177.64,208h12.72l18.11-50.69A8,8,0,0,1,216,152h8a8,8,0,0,0,8-8Z"/>`],
    ["bold", svg`<path d="M200,120a16,16,0,1,1-16-16A16,16,0,0,1,200,120ZM156,64H116a12,12,0,0,0,0,24h40a12,12,0,0,0,0-24Zm100,48v32a28,28,0,0,1-27.54,28L213.2,214.73A20,20,0,0,1,194.36,228H181.64a20,20,0,0,1-18.84-13.27l-1-2.73H110.17l-1,2.73A20,20,0,0,1,90.36,228H77.64A20,20,0,0,1,58.8,214.73L46.5,180.28A91.63,91.63,0,0,1,25.75,137.8,11.91,11.91,0,0,0,24,144a12,12,0,0,1-24,0,36.07,36.07,0,0,1,24.56-34.13A92.13,92.13,0,0,1,116,28H220a12,12,0,0,1,0,24H210a92,92,0,0,1,22.48,31.45l.42,1A28.05,28.05,0,0,1,256,112Zm-24,0a4,4,0,0,0-4-4h-3.66a12,12,0,0,1-11.45-8.41A68,68,0,0,0,148,52H116A68,68,0,0,0,65.86,165.94,11.85,11.85,0,0,1,68.31,170l12.15,34h7.08l2.87-8a12,12,0,0,1,11.3-8h68.58a12,12,0,0,1,11.3,8l2.87,8h7.08l17.16-48a12,12,0,0,1,11.3-8h8a4,4,0,0,0,4-4Z"/>`],
    ["fill", svg`<path d="M226,88.08c-.4-1-.82-2-1.25-3a87.93,87.93,0,0,0-30.17-37H216a8,8,0,0,0,0-16H112a88.12,88.12,0,0,0-87.72,81A32,32,0,0,0,0,144a8,8,0,0,0,16,0,16,16,0,0,1,8.57-14.16A87.69,87.69,0,0,0,46,178.22l12.56,35.16A16,16,0,0,0,73.64,224H86.36a16,16,0,0,0,15.07-10.62l1.92-5.38h57.3l1.92,5.38A16,16,0,0,0,177.64,224h12.72a16,16,0,0,0,15.07-10.62L221.64,168H224a24,24,0,0,0,24-24V112A24,24,0,0,0,226,88.08ZM152,72H112a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm28,56a12,12,0,1,1,12-12A12,12,0,0,1,180,128Z"/>`],
    ["duotone", svg`<path d="M240,112v32a16,16,0,0,1-16,16h-8l-18.1,50.69a8,8,0,0,1-7.54,5.31H177.64a8,8,0,0,1-7.54-5.31L166.29,200H97.71L93.9,210.69A8,8,0,0,1,86.36,216H73.64a8,8,0,0,1-7.54-5.31L53,174a79.7,79.7,0,0,1-21-54h0a80,80,0,0,1,80-80h32a80,80,0,0,1,73.44,48.22,82.22,82.22,0,0,1,2.9,7.78H224A16,16,0,0,1,240,112Z" opacity="0.2"/><path d="M192,116a12,12,0,1,1-12-12A12,12,0,0,1,192,116ZM152,64H112a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm96,48v32a24,24,0,0,1-24,24h-2.36l-16.21,45.38A16,16,0,0,1,190.36,224H177.64a16,16,0,0,1-15.07-10.62L160.65,208h-57.3l-1.92,5.38A16,16,0,0,1,86.36,224H73.64a16,16,0,0,1-15.07-10.62L46,178.22a87.69,87.69,0,0,1-21.44-48.38A16,16,0,0,0,16,144a8,8,0,0,1-16,0,32,32,0,0,1,24.28-31A88.12,88.12,0,0,1,112,32H216a8,8,0,0,1,0,16H194.61a87.93,87.93,0,0,1,30.17,37c.43,1,.85,2,1.25,3A24,24,0,0,1,248,112Zm-16,0a8,8,0,0,0-8-8h-3.66a8,8,0,0,1-7.64-5.6A71.9,71.9,0,0,0,144,48H112A72,72,0,0,0,58.91,168.64a8,8,0,0,1,1.64,2.71L73.64,208H86.36l3.82-10.69A8,8,0,0,1,97.71,192h68.58a8,8,0,0,1,7.53,5.31L177.64,208h12.72l18.11-50.69A8,8,0,0,1,216,152h8a8,8,0,0,0,8-8Z"/>`],
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
      ${PhPiggyBank.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhPiggyBank }
