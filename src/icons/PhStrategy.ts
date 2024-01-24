/* GENERATED FILE */
import { html, svg, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { IconWeight } from '../types';

declare global {
  interface HTMLElementTagNameMap {
    "ph-strategy": PhStrategy;
  }
}

@customElement('ph-strategy')
class PhStrategy extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    ["thin", svg`<path d="M68,156a32,32,0,1,0,32,32A32,32,0,0,0,68,156Zm0,56a24,24,0,1,1,24-24A24,24,0,0,1,68,212ZM37.17,109.17,54.34,92,37.17,74.83a4,4,0,0,1,5.66-5.66L60,86.34,77.17,69.17a4,4,0,0,1,5.66,5.66L65.66,92l17.17,17.17a4,4,0,0,1-5.66,5.66L60,97.66,42.83,114.83a4,4,0,0,1-5.66-5.66Zm181.66,96a4,4,0,0,1-5.66,5.66L196,193.66l-17.17,17.17a4,4,0,0,1-5.66-5.66L190.34,188l-17.17-17.17a4,4,0,0,1,5.66-5.66L196,182.34l17.17-17.17a4,4,0,0,1,5.66,5.66L201.66,188Zm-46.21-93.41c-5.82,21-23.77,39.15-43.65,44.12a4.09,4.09,0,0,1-1,.12,4,4,0,0,1-1-7.88c16.94-4.24,32.87-20.42,37.88-38.49,3.47-12.53,3.55-31.51-15.74-50.8L140,49.66V80a4,4,0,0,1-8,0V40a4,4,0,0,1,4-4h40a4,4,0,0,1,0,8H145.66l9.17,9.17C172,70.35,178.33,91.16,172.62,111.76Z"/>`],
    ["light", svg`<path d="M68,154a34,34,0,1,0,34,34A34,34,0,0,0,68,154Zm0,56a22,22,0,1,1,22-22A22,22,0,0,1,68,210ZM35.76,107.76,51.52,92,35.76,76.24a6,6,0,0,1,8.48-8.48L60,83.52,75.76,67.76a6,6,0,0,1,8.48,8.48L68.48,92l15.76,15.76a6,6,0,1,1-8.48,8.48L60,100.48,44.24,116.24a6,6,0,0,1-8.48-8.48Zm184.48,96a6,6,0,1,1-8.48,8.48L196,196.48l-15.76,15.76a6,6,0,0,1-8.48-8.48L187.52,188l-15.76-15.76a6,6,0,0,1,8.48-8.48L196,179.52l15.76-15.76a6,6,0,0,1,8.48,8.48L204.48,188ZM174.55,112.3c-6,21.66-24.55,40.38-45.09,45.52A6.14,6.14,0,0,1,128,158a6,6,0,0,1-1.46-11.82c16.29-4.07,31.62-19.67,36.44-37.09,3.33-12,3.39-30.24-15.22-48.85L142,54.48V80a6,6,0,0,1-12,0V40a6,6,0,0,1,6-6h40a6,6,0,0,1,0,12H150.48l5.76,5.76C174,69.47,180.45,91,174.55,112.3Z"/>`],
    ["regular", svg`<path d="M68,152a36,36,0,1,0,36,36A36,36,0,0,0,68,152Zm0,56a20,20,0,1,1,20-20A20,20,0,0,1,68,208ZM34.34,106.34,48.69,92,34.34,77.66A8,8,0,0,1,45.66,66.34L60,80.69,74.34,66.34A8,8,0,0,1,85.66,77.66L71.31,92l14.35,14.34a8,8,0,0,1-11.32,11.32L60,103.31,45.66,117.66a8,8,0,0,1-11.32-11.32Zm187.32,96a8,8,0,0,1-11.32,11.32L196,199.31l-14.34,14.35a8,8,0,0,1-11.32-11.32L184.69,188l-14.35-14.34a8,8,0,0,1,11.32-11.32L196,176.69l14.34-14.35a8,8,0,0,1,11.32,11.32L207.31,188Zm-45.19-89.51c-6.18,22.33-25.32,41.63-46.53,46.93a8.13,8.13,0,0,1-2,.24,8,8,0,0,1-1.93-15.76c15.63-3.91,30.35-18.91,35-35.68,3.19-11.5,3.22-29-14.71-46.9L144,59.31V80a8,8,0,0,1-16,0V40a8,8,0,0,1,8-8h40a8,8,0,0,1,0,16H155.31l2.35,2.34C175.9,68.59,182.58,90.78,176.47,112.83Z"/>`],
    ["bold", svg`<path d="M72,144a40,40,0,1,0,40,40A40,40,0,0,0,72,144Zm0,56a16,16,0,1,1,16-16A16,16,0,0,1,72,200ZM40,128a12,12,0,0,1-8.49-20.49L43,96,31.51,84.49a12,12,0,0,1,17-17L60,79,71.51,67.51a12,12,0,0,1,17,17L77,96l11.52,11.51a12,12,0,0,1-17,17L60,113,48.49,124.49A12,12,0,0,1,40,128Zm184.49,75.51a12,12,0,0,1-17,17L196,209l-11.51,11.52a12,12,0,0,1-17-17L179,192l-11.52-11.51a12,12,0,0,1,17-17L196,175l11.51-11.52a12,12,0,0,1,17,17L213,192Zm-43.4-92.62c-5.21,23-23.33,43.53-45.09,51.22a12,12,0,1,1-8-22.63c14.07-5,26.27-18.91,29.67-33.9,2.37-10.46.4-20.84-5.68-30.54v9a12,12,0,0,1-24,0V44a12,12,0,0,1,12-12h40a12,12,0,0,1,0,24H168C180.77,72.61,185.42,91.76,181.09,110.89Z"/>`],
    ["fill", svg`<path d="M104,188a36,36,0,1,1-36-36A36,36,0,0,1,104,188ZM34.34,117.66a8,8,0,0,0,11.32,0L60,103.31l14.34,14.35a8,8,0,0,0,11.32-11.32L71.31,92,85.66,77.66A8,8,0,0,0,74.34,66.34L60,80.69,45.66,66.34A8,8,0,0,0,34.34,77.66L48.69,92,34.34,106.34A8,8,0,0,0,34.34,117.66Zm173,70.34,14.35-14.34a8,8,0,0,0-11.32-11.32L196,176.69l-14.34-14.35a8,8,0,0,0-11.32,11.32L184.69,188l-14.35,14.34a8,8,0,0,0,11.32,11.32L196,199.31l14.34,14.35a8,8,0,0,0,11.32-11.32ZM157.66,50.34,155.31,48H176a8,8,0,0,0,0-16H136a8,8,0,0,0-8,8V80a8,8,0,0,0,16,0V59.31l2.34,2.35c17.93,17.93,17.9,35.4,14.71,46.9-4.64,16.77-19.36,31.77-35,35.68A8,8,0,0,0,128,160a8.13,8.13,0,0,0,2-.24c21.21-5.3,40.35-24.6,46.53-46.93C182.58,90.78,175.9,68.59,157.66,50.34Z"/>`],
    ["duotone", svg`<path d="M96,188a28,28,0,1,1-28-28A28,28,0,0,1,96,188Z" opacity="0.2"/><path d="M68,152a36,36,0,1,0,36,36A36,36,0,0,0,68,152Zm0,56a20,20,0,1,1,20-20A20,20,0,0,1,68,208ZM34.34,106.34,48.69,92,34.34,77.66A8,8,0,0,1,45.66,66.34L60,80.69,74.34,66.34A8,8,0,0,1,85.66,77.66L71.31,92l14.35,14.34a8,8,0,0,1-11.32,11.32L60,103.31,45.66,117.66a8,8,0,0,1-11.32-11.32Zm187.32,96a8,8,0,0,1-11.32,11.32L196,199.31l-14.34,14.35a8,8,0,0,1-11.32-11.32L184.69,188l-14.35-14.34a8,8,0,0,1,11.32-11.32L196,176.69l14.34-14.35a8,8,0,0,1,11.32,11.32L207.31,188Zm-45.19-89.51c-6.18,22.33-25.32,41.63-46.53,46.93a8.13,8.13,0,0,1-2,.24,8,8,0,0,1-1.93-15.76c15.63-3.91,30.35-18.91,35-35.68,3.19-11.5,3.22-29-14.71-46.9L144,59.31V80a8,8,0,0,1-16,0V40a8,8,0,0,1,8-8h40a8,8,0,0,1,0,16H155.31l2.35,2.34C175.9,68.59,182.58,90.78,176.47,112.83Z"/>`],
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
      ${PhStrategy.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhStrategy }
