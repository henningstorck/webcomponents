/* GENERATED FILE */
import { html, svg, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { IconWeight } from '../types';

declare global {
  interface HTMLElementTagNameMap {
    "ph-text-align-center": PhTextAlignCenter;
  }
}

@customElement('ph-text-align-center')
class PhTextAlignCenter extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    ["thin", svg`<path d="M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm28,36a4,4,0,0,0,0,8H192a4,4,0,0,0,0-8Zm152,40H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm-24,40H64a4,4,0,0,0,0,8H192a4,4,0,0,0,0-8Z"/>`],
    ["light", svg`<path d="M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64ZM64,98a6,6,0,0,0,0,12H192a6,6,0,0,0,0-12Zm152,40H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Zm-24,40H64a6,6,0,0,0,0,12H192a6,6,0,0,0,0-12Z"/>`],
    ["regular", svg`<path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64ZM64,96a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16Zm152,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm-24,40H64a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16Z"/>`],
    ["bold", svg`<path d="M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64ZM64,92a12,12,0,0,0,0,24H192a12,12,0,0,0,0-24Zm152,40H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm-24,40H64a12,12,0,0,0,0,24H192a12,12,0,0,0,0-24Z"/>`],
    ["fill", svg`<path d="M224,64v8a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H216A8,8,0,0,1,224,64Zm-32,56a8,8,0,0,0,8-8v-8a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8v8a8,8,0,0,0,8,8Zm24,16H40a8,8,0,0,0-8,8v8a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8v-8A8,8,0,0,0,216,136Zm-24,40H64a8,8,0,0,0-8,8v8a8,8,0,0,0,8,8H192a8,8,0,0,0,8-8v-8A8,8,0,0,0,192,176Z"/>`],
    ["duotone", svg`<path d="M216,64V176a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64Z" opacity="0.2"/><path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64ZM64,96a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16Zm152,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm-24,40H64a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16Z"/>`],
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
      ${PhTextAlignCenter.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhTextAlignCenter }
