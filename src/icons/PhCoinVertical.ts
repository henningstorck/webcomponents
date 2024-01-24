/* GENERATED FILE */
import { html, svg, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { IconWeight } from '../types';

declare global {
  interface HTMLElementTagNameMap {
    "ph-coin-vertical": PhCoinVertical;
  }
}

@customElement('ph-coin-vertical')
class PhCoinVertical extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    ["thin", svg`<path d="M195.05,58.1C183.73,38.69,168.44,28,152,28H104C87.56,28,72.27,38.69,61,58.1,50,76.84,44,101.66,44,128s6,51.16,17,69.9C72.27,217.31,87.56,228,104,228h48c16.44,0,31.73-10.69,43.05-30.1C206,179.16,212,154.34,212,128S206,76.84,195.05,58.1ZM191.27,188H152.1c7.24-16.14,11.37-35.53,11.84-56h40C203.44,152.77,199,172.28,191.27,188Zm-27.33-64c-.47-20.47-4.6-39.86-11.84-56h39.17c7.74,15.72,12.17,35.23,12.67,56ZM152,36c12.89,0,25.19,8.51,34.84,24H148.11c-.35-.63-.7-1.28-1.06-1.9-5.58-9.56-12.12-17-19.29-22.1ZM67.86,193.87C57.63,176.34,52,153,52,128s5.63-48.34,15.86-65.87C77.69,45.28,90.52,36,104,36s26.31,9.28,36.14,26.13C150.37,79.66,156,103.05,156,128s-5.63,48.34-15.86,65.87C130.31,210.72,117.48,220,104,220S77.69,210.72,67.86,193.87ZM152,220H127.76c7.17-5.09,13.71-12.54,19.29-22.1.36-.62.71-1.27,1.06-1.9h38.73C177.19,211.49,164.89,220,152,220Z"/>`],
    ["light", svg`<path d="M196.78,57.09C185.08,37,169.18,26,152,26H104C86.82,26,70.92,37,59.22,57.09,48.12,76.13,42,101.31,42,128s6.12,51.87,17.22,70.91C70.92,219,86.82,230,104,230h48c17.18,0,33.08-11,44.78-31.09,11.1-19,17.22-44.22,17.22-70.91S207.88,76.13,196.78,57.09Zm5.1,64.91h-36c-.65-18.84-4.37-36.73-10.74-52H190C197.06,84.74,201.16,102.77,201.88,122ZM152,38c11.31,0,22.22,7.06,31.14,20H149.28l-.5-.91A76.8,76.8,0,0,0,133.49,38ZM69.58,192.86C59.54,175.63,54,152.6,54,128s5.54-47.63,15.58-64.86C79,46.93,91.26,38,104,38s25,8.93,34.42,25.14C148.46,80.37,154,103.4,154,128s-5.54,47.63-15.58,64.86C129,209.07,116.74,218,104,218S79,209.07,69.58,192.86ZM152,218H133.49a76.8,76.8,0,0,0,15.29-19.09l.5-.91h33.86C174.22,210.94,163.31,218,152,218Zm38-32H155.14c6.37-15.27,10.09-33.16,10.74-52h36C201.16,153.23,197.06,171.26,190,186Z"/>`],
    ["regular", svg`<path d="M198.51,56.09C186.44,35.4,169.92,24,152,24H104C86.08,24,69.56,35.4,57.49,56.09,46.21,75.42,40,101,40,128s6.21,52.58,17.49,71.91C69.56,220.6,86.08,232,104,232h48c17.92,0,34.44-11.4,46.51-32.09C209.79,180.58,216,155,216,128S209.79,75.42,198.51,56.09ZM199.79,120h-32a152.78,152.78,0,0,0-9.68-48H188.7C194.82,85.38,198.86,102,199.79,120Zm-20.6-64H150.46a83.13,83.13,0,0,0-12-16H152C162,40,171.4,46,179.19,56ZM56,128c0-47.7,22-88,48-88s48,40.3,48,88-22,88-48,88S56,175.7,56,128Zm96,88H138.49a83.13,83.13,0,0,0,12-16h28.73C171.4,210,162,216,152,216Zm36.7-32H158.12a152.78,152.78,0,0,0,9.68-48h32C198.86,154,194.82,170.62,188.7,184Z"/>`],
    ["bold", svg`<path d="M152,20H104C65.87,20,36,67.44,36,128s29.87,108,68,108h48c38.13,0,68-47.44,68-108S190.13,20,152,20Zm37.21,152h-22.9a162.62,162.62,0,0,0,5.29-32h23.93A133.22,133.22,0,0,1,189.21,172ZM171.6,116a162.62,162.62,0,0,0-5.29-32h22.9a133.22,133.22,0,0,1,6.32,32Zm5.63-56h-20a98.26,98.26,0,0,0-10-16H152C157.37,44,167.25,46.25,177.23,60ZM74.77,189.84C65.24,173.51,60,151.55,60,128s5.24-45.51,14.77-61.84C86,46.88,97.91,44,104,44s18,2.88,29.23,22.16C142.76,82.49,148,104.45,148,128s-5.24,45.51-14.77,61.84C122,209.12,110.09,212,104,212S86,209.12,74.77,189.84ZM152,212h-4.79a98.26,98.26,0,0,0,10-16h20C167.25,209.75,157.37,212,152,212Z"/>`],
    ["fill", svg`<path d="M198.51,56.09C186.44,35.4,169.92,24,152,24H104C86.08,24,69.56,35.4,57.49,56.09,46.21,75.42,40,101,40,128s6.21,52.58,17.49,71.91C69.56,220.6,86.08,232,104,232h48c17.92,0,34.44-11.4,46.51-32.09C209.79,180.58,216,155,216,128S209.79,75.42,198.51,56.09ZM199.79,120h-32a152.78,152.78,0,0,0-9.68-48H188.7C194.82,85.38,198.86,102,199.79,120Zm-20.6-64H150.46a83.13,83.13,0,0,0-12-16H152C162,40,171.4,46,179.19,56ZM152,216H138.49a83.13,83.13,0,0,0,12-16h28.73C171.4,210,162,216,152,216Zm36.7-32H158.12a152.78,152.78,0,0,0,9.68-48h32C198.86,154,194.82,170.62,188.7,184Z"/>`],
    ["duotone", svg`<path d="M160,128c0,53-25.07,96-56,96s-56-43-56-96,25.07-96,56-96S160,75,160,128Z" opacity="0.2"/><path d="M198.51,56.09C186.44,35.4,169.92,24,152,24H104C86.08,24,69.56,35.4,57.49,56.09,46.21,75.42,40,101,40,128s6.21,52.58,17.49,71.91C69.56,220.6,86.08,232,104,232h48c17.92,0,34.44-11.4,46.51-32.09C209.79,180.58,216,155,216,128S209.79,75.42,198.51,56.09ZM199.79,120h-32a152.78,152.78,0,0,0-9.68-48H188.7C194.82,85.38,198.86,102,199.79,120Zm-20.6-64H150.46a83.13,83.13,0,0,0-12-16H152C162,40,171.4,46,179.19,56ZM56,128c0-47.7,22-88,48-88s48,40.3,48,88-22,88-48,88S56,175.7,56,128Zm96,88H138.49a83.13,83.13,0,0,0,12-16h28.73C171.4,210,162,216,152,216Zm36.7-32H158.12a152.78,152.78,0,0,0,9.68-48h32C198.86,154,194.82,170.62,188.7,184Z"/>`],
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
      ${PhCoinVertical.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhCoinVertical }
