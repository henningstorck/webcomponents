/* GENERATED FILE */
import { html, svg, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { IconWeight } from '../types';

declare global {
  interface HTMLElementTagNameMap {
    "ph-bowl-food": PhBowlFood;
  }
}

@customElement('ph-bowl-food')
class PhBowlFood extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    ["thin", svg`<path d="M224,108H211.9a84,84,0,0,0-167.8,0H32a4,4,0,0,0-4,4,100.32,100.32,0,0,0,56,89.82V208a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12v-6.18A100.32,100.32,0,0,0,228,112,4,4,0,0,0,224,108Zm-20.11,0H141.05a75.92,75.92,0,0,1,50.16-38.14A75.45,75.45,0,0,1,203.89,108ZM186,62.93A83.92,83.92,0,0,0,132.08,108H94.68A76.22,76.22,0,0,1,168,52c2.33,0,4.68.13,7,.34A76.81,76.81,0,0,1,186,62.93ZM128,36a75.48,75.48,0,0,1,34.3,8.21A84.26,84.26,0,0,0,86.41,108H52.11A76.09,76.09,0,0,1,128,36Zm38.33,159.66A4,4,0,0,0,164,199.3V208a4,4,0,0,1-4,4H96a4,4,0,0,1-4-4v-8.7a4,4,0,0,0-2.33-3.64A92.33,92.33,0,0,1,36.09,116H219.91A92.33,92.33,0,0,1,166.33,195.66Z"/>`],
    ["light", svg`<path d="M224,106H213.77a86,86,0,0,0-171.54,0H32a6,6,0,0,0-6,6,102.35,102.35,0,0,0,56,91.06V208a14,14,0,0,0,14,14h64a14,14,0,0,0,14-14v-4.94A102.35,102.35,0,0,0,230,112,6,6,0,0,0,224,106ZM174.24,54.29a74.15,74.15,0,0,1,8.15,7.6A85.89,85.89,0,0,0,130.84,106H97.34A74.24,74.24,0,0,1,168,54C170.08,54,172.17,54.11,174.24,54.29ZM190.3,72.14A73.49,73.49,0,0,1,201.74,106H144.48A73.89,73.89,0,0,1,190.3,72.14ZM128,38a73.68,73.68,0,0,1,26.8,5,86.32,86.32,0,0,0-69.94,63H54.26A74.09,74.09,0,0,1,128,38Zm37.5,155.84a6,6,0,0,0-3.5,5.46V208a2,2,0,0,1-2,2H96a2,2,0,0,1-2-2v-8.7a6,6,0,0,0-3.5-5.46A90.35,90.35,0,0,1,38.2,118H217.8A90.35,90.35,0,0,1,165.5,193.84Z"/>`],
    ["regular", svg`<path d="M224,104h-8.37a88,88,0,0,0-175.26,0H32a8,8,0,0,0-8,8,104.35,104.35,0,0,0,56,92.28V208a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16v-3.72A104.35,104.35,0,0,0,232,112,8,8,0,0,0,224,104Zm-24.46,0H148.12a71.84,71.84,0,0,1,41.27-29.57A71.45,71.45,0,0,1,199.54,104ZM173.48,56.23q2.75,2.25,5.27,4.75a87.92,87.92,0,0,0-49.15,43H100.1A72.26,72.26,0,0,1,168,56C169.83,56,171.66,56.09,173.48,56.23ZM128,40a71.87,71.87,0,0,1,19,2.57A88.36,88.36,0,0,0,83.33,104H56.46A72.08,72.08,0,0,1,128,40Zm36.66,152A8,8,0,0,0,160,199.3V208H96v-8.7A8,8,0,0,0,91.34,192a88.29,88.29,0,0,1-51-72H215.63A88.29,88.29,0,0,1,164.66,192Z"/>`],
    ["bold", svg`<path d="M224,100h-4.78a92,92,0,0,0-182.44,0H32a12,12,0,0,0-12,12,108.38,108.38,0,0,0,56,94.68V208a20,20,0,0,0,20,20h64a20,20,0,0,0,20-20v-1.32A108.38,108.38,0,0,0,236,112,12,12,0,0,0,224,100ZM170.29,60.06A92,92,0,0,0,127.19,100H106a68.27,68.27,0,0,1,62-40C168.76,60,169.52,60,170.29,60.06Zm17.22,19.08A67.66,67.66,0,0,1,194.92,100H156.13A67.91,67.91,0,0,1,187.51,79.14ZM128,44c.83,0,1.65,0,2.48.06A92.3,92.3,0,0,0,80.37,100H61.08A68.1,68.1,0,0,1,128,44Zm35,144.39a12,12,0,0,0-7,10.91V204H100v-4.7a12,12,0,0,0-7-10.91A84.32,84.32,0,0,1,44.87,124H211.13A84.32,84.32,0,0,1,163,188.39Z"/>`],
    ["fill", svg`<path d="M224,104h-8.37a88,88,0,0,0-175.26,0H32a8,8,0,0,0-8,8,104.35,104.35,0,0,0,56,92.28V208a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16v-3.72A104.35,104.35,0,0,0,232,112,8,8,0,0,0,224,104ZM173.48,56.23q2.75,2.25,5.27,4.75a87.92,87.92,0,0,0-49.15,43H100.1A72.26,72.26,0,0,1,168,56C169.83,56,171.66,56.09,173.48,56.23ZM148.12,104a71.84,71.84,0,0,1,41.27-29.57A71.45,71.45,0,0,1,199.54,104ZM128,40a71.87,71.87,0,0,1,19,2.57A88.36,88.36,0,0,0,83.33,104H56.46A72.08,72.08,0,0,1,128,40Z"/>`],
    ["duotone", svg`<path d="M224,112a96,96,0,0,1-56,87.3V208a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-8.7A96,96,0,0,1,32,112Z" opacity="0.2"/><path d="M224,104h-8.37a88,88,0,0,0-175.26,0H32a8,8,0,0,0-8,8,104.35,104.35,0,0,0,56,92.28V208a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16v-3.72A104.35,104.35,0,0,0,232,112,8,8,0,0,0,224,104ZM173.48,56.23q2.75,2.25,5.27,4.75a87.92,87.92,0,0,0-49.15,43H100.1A72.26,72.26,0,0,1,168,56C169.83,56,171.66,56.09,173.48,56.23Zm15.91,18.2A71.45,71.45,0,0,1,199.54,104H148.12A71.84,71.84,0,0,1,189.39,74.43ZM128,40a71.87,71.87,0,0,1,19,2.57A88.36,88.36,0,0,0,83.33,104H56.46A72.08,72.08,0,0,1,128,40Zm36.66,152A8,8,0,0,0,160,199.3V208H96v-8.7A8,8,0,0,0,91.34,192a88.29,88.29,0,0,1-51-72H215.63A88.29,88.29,0,0,1,164.66,192Z"/>`],
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
      ${PhBowlFood.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhBowlFood }
