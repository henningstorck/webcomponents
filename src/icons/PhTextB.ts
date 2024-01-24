/* GENERATED FILE */
import { html, svg, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { IconWeight } from '../types';

declare global {
  interface HTMLElementTagNameMap {
    "ph-text-b": PhTextB;
  }
}

@customElement('ph-text-b')
class PhTextB extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    ["thin", svg`<path d="M162.27,117.21A40,40,0,0,0,140,44H72a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4h80a44,44,0,0,0,10.27-86.79ZM76,52h64a32,32,0,0,1,0,64H76Zm76,144H76V124h76a36,36,0,0,1,0,72Z"/>`],
    ["light", svg`<path d="M166.69,116.41A42,42,0,0,0,140,42H72a6,6,0,0,0-6,6V200a6,6,0,0,0,6,6h80a46,46,0,0,0,14.69-89.59ZM78,54h62a30,30,0,0,1,0,60H78Zm74,140H78V126h74a34,34,0,0,1,0,68Z"/>`],
    ["regular", svg`<path d="M170.48,115.7A44,44,0,0,0,140,40H72a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8h80a48,48,0,0,0,18.48-92.3ZM80,56h60a28,28,0,0,1,0,56H80Zm72,136H80V128h72a32,32,0,0,1,0,64Z"/>`],
    ["bold", svg`<path d="M177.08,114.46A48,48,0,0,0,140,36H72A12,12,0,0,0,60,48V200a12,12,0,0,0,12,12h80a52,52,0,0,0,25.08-97.54ZM84,60h56a24,24,0,0,1,0,48H84Zm68,128H84V132h68a28,28,0,0,1,0,56Z"/>`],
    ["fill", svg`<path d="M168,156a20,20,0,0,1-20,20H96V136h52A20,20,0,0,1,168,156ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM184,156a36,36,0,0,0-18-31.15A36,36,0,0,0,140,64H88a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8h60A36,36,0,0,0,184,156Zm-24-56a20,20,0,0,0-20-20H96v40h44A20,20,0,0,0,160,100Z"/>`],
    ["duotone", svg`<path d="M192,160a40,40,0,0,1-40,40H72V48h68a36,36,0,0,1,0,72h12A40,40,0,0,1,192,160Z" opacity="0.2"/><path d="M170.48,115.7A44,44,0,0,0,140,40H72a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8h80a48,48,0,0,0,18.48-92.3ZM80,56h60a28,28,0,0,1,0,56H80Zm72,136H80V128h72a32,32,0,0,1,0,64Z"/>`],
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
      ${PhTextB.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhTextB }
