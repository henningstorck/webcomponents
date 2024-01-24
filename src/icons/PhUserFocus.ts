/* GENERATED FILE */
import { html, svg, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { IconWeight } from '../types';

declare global {
  interface HTMLElementTagNameMap {
    "ph-user-focus": PhUserFocus;
  }
}

@customElement('ph-user-focus')
class PhUserFocus extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    ["thin", svg`<path d="M220,48V76a4,4,0,0,1-8,0V48a4,4,0,0,0-4-4H180a4,4,0,0,1,0-8h28A12,12,0,0,1,220,48Zm-4,128a4,4,0,0,0-4,4v28a4,4,0,0,1-4,4H180a4,4,0,0,0,0,8h28a12,12,0,0,0,12-12V180A4,4,0,0,0,216,176ZM76,212H48a4,4,0,0,1-4-4V180a4,4,0,0,0-8,0v28a12,12,0,0,0,12,12H76a4,4,0,0,0,0-8ZM40,80a4,4,0,0,0,4-4V48a4,4,0,0,1,4-4H76a4,4,0,0,0,0-8H48A12,12,0,0,0,36,48V76A4,4,0,0,0,40,80Zm136,92a4,4,0,0,1-3.2-1.6,56,56,0,0,0-89.6,0,4,4,0,1,1-6.4-4.8,63.65,63.65,0,0,1,32.5-22.85,36,36,0,1,1,37.4,0,63.65,63.65,0,0,1,32.5,22.85A4,4,0,0,1,176,172Zm-48-32a28,28,0,1,0-28-28A28,28,0,0,0,128,140Z"/>`],
    ["light", svg`<path d="M222,48V76a6,6,0,0,1-12,0V48a2,2,0,0,0-2-2H180a6,6,0,0,1,0-12h28A14,14,0,0,1,222,48Zm-6,126a6,6,0,0,0-6,6v28a2,2,0,0,1-2,2H180a6,6,0,0,0,0,12h28a14,14,0,0,0,14-14V180A6,6,0,0,0,216,174ZM76,210H48a2,2,0,0,1-2-2V180a6,6,0,0,0-12,0v28a14,14,0,0,0,14,14H76a6,6,0,0,0,0-12ZM40,82a6,6,0,0,0,6-6V48a2,2,0,0,1,2-2H76a6,6,0,0,0,0-12H48A14,14,0,0,0,34,48V76A6,6,0,0,0,40,82Zm136,92a6,6,0,0,1-4.8-2.4,54,54,0,0,0-86.4,0,6,6,0,1,1-9.6-7.2,65.65,65.65,0,0,1,29.69-22.26,38,38,0,1,1,46.22,0A65.65,65.65,0,0,1,180.8,164.4,6,6,0,0,1,176,174Zm-48-36a26,26,0,1,0-26-26A26,26,0,0,0,128,138Z"/>`],
    ["regular", svg`<path d="M224,48V76a8,8,0,0,1-16,0V48H180a8,8,0,0,1,0-16h28A16,16,0,0,1,224,48Zm-8,124a8,8,0,0,0-8,8v28H180a8,8,0,0,0,0,16h28a16,16,0,0,0,16-16V180A8,8,0,0,0,216,172ZM76,208H48V180a8,8,0,0,0-16,0v28a16,16,0,0,0,16,16H76a8,8,0,0,0,0-16ZM40,84a8,8,0,0,0,8-8V48H76a8,8,0,0,0,0-16H48A16,16,0,0,0,32,48V76A8,8,0,0,0,40,84Zm136,92a8,8,0,0,1-6.41-3.19,52,52,0,0,0-83.2,0,8,8,0,1,1-12.8-9.62A67.94,67.94,0,0,1,101,141.51a40,40,0,1,1,53.94,0,67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,176,176Zm-48-40a24,24,0,1,0-24-24A24,24,0,0,0,128,136Z"/>`],
    ["bold", svg`<path d="M228,48V76a12,12,0,0,1-24,0V52H180a12,12,0,0,1,0-24h28A20,20,0,0,1,228,48ZM216,168a12,12,0,0,0-12,12v24H180a12,12,0,0,0,0,24h28a20,20,0,0,0,20-20V180A12,12,0,0,0,216,168ZM76,204H52V180a12,12,0,0,0-24,0v28a20,20,0,0,0,20,20H76a12,12,0,0,0,0-24ZM40,88A12,12,0,0,0,52,76V52H76a12,12,0,0,0,0-24H48A20,20,0,0,0,28,48V76A12,12,0,0,0,40,88Zm136,92a12,12,0,0,1-9.6-4.79,48,48,0,0,0-76.82,0,12,12,0,0,1-19.18-14.42,72.1,72.1,0,0,1,23.92-20.5,44,44,0,1,1,67.34,0,72.1,72.1,0,0,1,23.92,20.5A12,12,0,0,1,176,180Zm-48-48a20,20,0,1,0-20-20A20,20,0,0,0,128,132Z"/>`],
    ["fill", svg`<path d="M224,48V76a8,8,0,0,1-16,0V48H180a8,8,0,0,1,0-16h28A16,16,0,0,1,224,48Zm-8,124a8,8,0,0,0-8,8v28H180a8,8,0,0,0,0,16h28a16,16,0,0,0,16-16V180A8,8,0,0,0,216,172ZM76,208H48V180a8,8,0,0,0-16,0v28a16,16,0,0,0,16,16H76a8,8,0,0,0,0-16ZM40,84a8,8,0,0,0,8-8V48H76a8,8,0,0,0,0-16H48A16,16,0,0,0,32,48V76A8,8,0,0,0,40,84Zm61,57.51A67.94,67.94,0,0,0,73.6,163.19,8,8,0,0,0,80,176h96a8,8,0,0,0,6.4-12.81A67.94,67.94,0,0,0,155,141.51a40,40,0,1,0-53.94,0Z"/>`],
    ["duotone", svg`<path d="M160,112a32,32,0,1,1-32-32A32,32,0,0,1,160,112Z" opacity="0.2"/><path d="M224,48V76a8,8,0,0,1-16,0V48H180a8,8,0,0,1,0-16h28A16,16,0,0,1,224,48Zm-8,124a8,8,0,0,0-8,8v28H180a8,8,0,0,0,0,16h28a16,16,0,0,0,16-16V180A8,8,0,0,0,216,172ZM76,208H48V180a8,8,0,0,0-16,0v28a16,16,0,0,0,16,16H76a8,8,0,0,0,0-16ZM40,84a8,8,0,0,0,8-8V48H76a8,8,0,0,0,0-16H48A16,16,0,0,0,32,48V76A8,8,0,0,0,40,84Zm136,92a8,8,0,0,1-6.41-3.19,52,52,0,0,0-83.2,0,8,8,0,1,1-12.8-9.62A67.94,67.94,0,0,1,101,141.51a40,40,0,1,1,53.94,0,67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,176,176Zm-48-40a24,24,0,1,0-24-24A24,24,0,0,0,128,136Z"/>`],
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
      ${PhUserFocus.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhUserFocus }
