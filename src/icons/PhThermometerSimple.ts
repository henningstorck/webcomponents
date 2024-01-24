/* GENERATED FILE */
import { html, svg, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { IconWeight } from '../types';

declare global {
  interface HTMLElementTagNameMap {
    "ph-thermometer-simple": PhThermometerSimple;
  }
}

@customElement('ph-thermometer-simple')
class PhThermometerSimple extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    ["thin", svg`<path d="M132,156.29V88a4,4,0,0,0-8,0v68.29a28,28,0,1,0,8,0ZM128,204a20,20,0,1,1,20-20A20,20,0,0,1,128,204Zm36-68V48a36,36,0,0,0-72,0v88a60,60,0,1,0,72,0ZM128,236a52,52,0,0,1-29.71-94.68A4,4,0,0,0,100,138V48a28,28,0,0,1,56,0v90a4,4,0,0,0,1.71,3.28A52,52,0,0,1,128,236Z"/>`],
    ["light", svg`<path d="M134,154.6V88a6,6,0,0,0-12,0v66.6a30,30,0,1,0,12,0ZM128,202a18,18,0,1,1,18-18A18,18,0,0,1,128,202Zm38-67V48a38,38,0,0,0-76,0v87a62,62,0,1,0,76,0Zm-38,99a50,50,0,0,1-28.57-91A6,6,0,0,0,102,138V48a26,26,0,0,1,52,0v90a6,6,0,0,0,2.57,4.92A50,50,0,0,1,128,234Z"/>`],
    ["regular", svg`<path d="M136,153V88a8,8,0,0,0-16,0v65a32,32,0,1,0,16,0Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,128,200Zm40-66V48a40,40,0,0,0-80,0v86a64,64,0,1,0,80,0Zm-40,98a48,48,0,0,1-27.42-87.4A8,8,0,0,0,104,138V48a24,24,0,0,1,48,0v90a8,8,0,0,0,3.42,6.56A48,48,0,0,1,128,232Z"/>`],
    ["bold", svg`<path d="M180,150.69V56A52,52,0,0,0,76,56v94.69a64,64,0,1,0,104,0ZM128,228a40,40,0,0,1-30.91-65.39,12,12,0,0,0,2.91-7.83V56a28,28,0,0,1,56,0v98.77a12,12,0,0,0,2.77,7.68A40,40,0,0,1,128,228Zm24-40a24,24,0,1,1-36-20.78V92a12,12,0,0,1,24,0v75.22A24,24,0,0,1,152,188Z"/>`],
    ["fill", svg`<path d="M160,146.08V40a32,32,0,0,0-64,0V146.08a56,56,0,1,0,64,0ZM128,24a16,16,0,0,1,16,16V80H112V40A16,16,0,0,1,128,24Z"/>`],
    ["duotone", svg`<path d="M160,138V48a32,32,0,0,0-64,0v90a56,56,0,1,0,64,0Zm-32,70a24,24,0,1,1,24-24A24,24,0,0,1,128,208Z" opacity="0.2"/><path d="M136,153V88a8,8,0,0,0-16,0v65a32,32,0,1,0,16,0Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,128,200Zm40-66V48a40,40,0,0,0-80,0v86a64,64,0,1,0,80,0Zm-40,98a48,48,0,0,1-27.42-87.4A8,8,0,0,0,104,138V48a24,24,0,0,1,48,0v90a8,8,0,0,0,3.42,6.56A48,48,0,0,1,128,232Z"/>`],
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
      ${PhThermometerSimple.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhThermometerSimple }
