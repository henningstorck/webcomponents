/* GENERATED FILE */
import { html, svg, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { IconWeight } from '../types';

declare global {
  interface HTMLElementTagNameMap {
    "ph-flying-saucer": PhFlyingSaucer;
  }
}

@customElement('ph-flying-saucer')
class PhFlyingSaucer extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    ["thin", svg`<path d="M179.79,214.73a4,4,0,0,1-2.53,5.06A3.92,3.92,0,0,1,176,220a4,4,0,0,1-3.79-2.73l-8-24a4,4,0,1,1,7.58-2.54ZM128,188a4,4,0,0,0-4,4v32a4,4,0,0,0,8,0V192A4,4,0,0,0,128,188Zm-38.74.2a4,4,0,0,0-5.05,2.53l-8,24a4,4,0,1,0,7.58,2.54l8-24A4,4,0,0,0,89.26,188.2ZM244,112c0,29.16-50.95,52-116,52S12,141.16,12,112c0-20.31,24.8-38.16,64.84-46.8a59.65,59.65,0,0,1,93.31-11.9,60.91,60.91,0,0,1,9.42,12C219.36,74,244,91.77,244,112ZM76,96.83v3a11.9,11.9,0,0,0,9.24,11.64A192,192,0,0,0,128,116a192,192,0,0,0,42.75-4.48A11.9,11.9,0,0,0,180,99.88V96a52,52,0,0,0-52.69-52C99,44.37,76,68.07,76,96.83ZM236,112c0-15-20.13-29.37-51.94-37.43A59.9,59.9,0,0,1,188,96v3.91a19.87,19.87,0,0,1-15.45,19.41A199.69,199.69,0,0,1,128,124a199.69,199.69,0,0,1-44.54-4.68A19.86,19.86,0,0,1,68,99.91h0V96.85a60.91,60.91,0,0,1,4.25-22.36C40.25,82.54,20,96.88,20,112c0,23.85,49.46,44,108,44S236,135.85,236,112Z"/>`],
    ["light", svg`<path d="M181.69,214.1a6,6,0,1,1-11.38,3.8l-8-24a6,6,0,1,1,11.38-3.8ZM128,186a6,6,0,0,0-6,6v32a6,6,0,0,0,12,0V192A6,6,0,0,0,128,186Zm-38.1.31a6,6,0,0,0-7.59,3.79l-8,24a6,6,0,1,0,11.38,3.8l8-24A6,6,0,0,0,89.9,186.31ZM246,112c0,15.37-12.94,29.39-36.44,39.46C187.67,160.84,158.71,166,128,166s-59.67-5.16-81.56-14.54C22.94,141.39,10,127.37,10,112c0-21.16,25.06-39.65,65.59-48.57a61.85,61.85,0,0,1,105.24.09C221.1,72.48,246,90.93,246,112ZM78,96.84v3a9.93,9.93,0,0,0,7.69,9.7A190.35,190.35,0,0,0,128,114a190.35,190.35,0,0,0,42.3-4.42,9.93,9.93,0,0,0,7.69-9.7V96a50,50,0,0,0-50-50h-.67C100.13,46.36,78,69.16,78,96.84ZM234,112c0-13.33-18.38-26.61-46.8-34.52A62.24,62.24,0,0,1,190,96v3.92a21.86,21.86,0,0,1-17,21.35A202,202,0,0,1,128,126a201.89,201.89,0,0,1-45-4.73A21.86,21.86,0,0,1,66,99.92h0V96.85A63,63,0,0,1,69.08,77.4C40.49,85.3,22,98.62,22,112c0,10.12,10.63,20.48,29.17,28.43C71.59,149.18,98.88,154,128,154s56.41-4.82,76.83-13.57C223.37,132.48,234,122.12,234,112Z"/>`],
    ["regular", svg`<path d="M183.59,213.47a8,8,0,0,1-15.18,5.06l-8-24a8,8,0,0,1,15.18-5.06ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184Zm-37.47.41a8,8,0,0,0-10.12,5.06l-8,24a8,8,0,0,0,15.18,5.06l8-24A8,8,0,0,0,90.53,184.41ZM248,112c0,16.22-13.37,30.89-37.65,41.29C188.22,162.78,159,168,128,168s-60.22-5.22-82.35-14.71C21.37,142.89,8,128.22,8,112c0-8.37,3.67-20.79,21.17-32.5,11.37-7.61,26.94-13.76,45.18-17.85A63.64,63.64,0,0,1,173,50.45a64.84,64.84,0,0,1,9.11,11.3C223.43,71.09,248,89.74,248,112ZM80,96.83v3a7.92,7.92,0,0,0,6.13,7.76A188.24,188.24,0,0,0,128,112a188.09,188.09,0,0,0,41.85-4.37A7.93,7.93,0,0,0,176,99.87V96a48,48,0,0,0-48.64-48C101.25,48.34,80,70.25,80,96.83ZM232,112c0-11.7-16.63-23.89-41.9-31.59A64.68,64.68,0,0,1,192,96v3.92a23.86,23.86,0,0,1-18.56,23.3A204.05,204.05,0,0,1,128,128a204.15,204.15,0,0,1-45.44-4.78A23.86,23.86,0,0,1,64,99.92h0V96.86a65.28,65.28,0,0,1,2.13-16.52C40.72,88,24,100.25,24,112c0,18.92,42.71,40,104,40S232,130.92,232,112Z"/>`],
    ["bold", svg`<path d="M187.38,212.21a12,12,0,1,1-22.76,7.58l-8-24a12,12,0,1,1,22.76-7.58ZM128,184a12,12,0,0,0-12,12v28a12,12,0,0,0,24,0V196A12,12,0,0,0,128,184Zm-36.21-3.38a12,12,0,0,0-15.17,7.59l-8,24a12,12,0,1,0,22.76,7.58l8-24A12,12,0,0,0,91.79,180.62ZM252,112c0,17.92-14.23,33.89-40.08,45-22.61,9.69-52.42,15-83.92,15s-61.31-5.34-83.92-15C18.23,145.89,4,129.92,4,112,4,87.94,29.28,68,71.91,58.11A67.61,67.61,0,0,1,175.77,47.6a69.05,69.05,0,0,1,8.79,10.62C226.9,68.14,252,88.05,252,112ZM84,96.83v3a4,4,0,0,0,3,3.87A184.32,184.32,0,0,0,128,108a184.32,184.32,0,0,0,41-4.27,4,4,0,0,0,3-3.87V96a44,44,0,0,0-44-44h-.59C103.47,52.31,84,72.43,84,96.83ZM228,112c0-6.64-7.65-12.76-12.21-15.83a91.73,91.73,0,0,0-20.48-9.88A69.47,69.47,0,0,1,196,96v3.93a27.84,27.84,0,0,1-21.66,27.19A207.92,207.92,0,0,1,128,132a207.92,207.92,0,0,1-46.33-4.88A27.84,27.84,0,0,1,60,99.94h0V96.87a70.37,70.37,0,0,1,.82-10.63,92.39,92.39,0,0,0-20.53,9.88C35.7,99.19,28,105.34,28,112c0,14.68,39,36,100,36S228,126.68,228,112Z"/>`],
    ["fill", svg`<path d="M183.59,213.47a8,8,0,0,1-15.18,5.06l-8-24a8,8,0,0,1,15.18-5.06ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184Zm-37.47.41a8,8,0,0,0-10.12,5.06l-8,24a8,8,0,0,0,15.18,5.06l8-24A8,8,0,0,0,90.53,184.41ZM248,112c0,16.22-13.37,30.89-37.65,41.29C188.22,162.78,159,168,128,168s-60.22-5.22-82.35-14.71C21.37,142.89,8,128.22,8,112c0-8.37,3.67-20.79,21.17-32.5,11.37-7.61,26.94-13.76,45.18-17.85A63.64,63.64,0,0,1,173,50.45a64.84,64.84,0,0,1,9.11,11.3C223.43,71.09,248,89.74,248,112ZM176,96a47.66,47.66,0,0,0-6.06-23.35l-.06-.09A48.07,48.07,0,0,0,127.36,48C101.25,48.34,80,70.25,80,96.83v3a7.92,7.92,0,0,0,6.13,7.76A188.24,188.24,0,0,0,128,112a188.09,188.09,0,0,0,41.85-4.37A7.93,7.93,0,0,0,176,99.87Z"/>`],
    ["duotone", svg`<path d="M240,112c0,26.51-50.14,48-112,48S16,138.51,16,112c0-19,25.86-35.49,63.35-43.25h0A57.07,57.07,0,0,0,72,96.83V99.9a15.94,15.94,0,0,0,12.34,15.52A195.87,195.87,0,0,0,128,120a195.71,195.71,0,0,0,43.64-4.58A16,16,0,0,0,184,99.9V96a55.7,55.7,0,0,0-7-27.18h0C214.29,76.61,240,93,240,112Z" opacity="0.2"/><path d="M183.59,213.47a8,8,0,0,1-15.18,5.06l-8-24a8,8,0,0,1,15.18-5.06ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184Zm-37.47.41a8,8,0,0,0-10.12,5.06l-8,24a8,8,0,0,0,15.18,5.06l8-24A8,8,0,0,0,90.53,184.41ZM248,112c0,16.22-13.37,30.89-37.65,41.29C188.22,162.78,159,168,128,168s-60.22-5.22-82.35-14.71C21.37,142.89,8,128.22,8,112c0-8.37,3.67-20.79,21.17-32.5,11.37-7.61,26.94-13.76,45.18-17.85A63.64,63.64,0,0,1,173,50.45a64.84,64.84,0,0,1,9.11,11.3C223.43,71.09,248,89.74,248,112ZM80,96.83v3a7.92,7.92,0,0,0,6.13,7.76A188.24,188.24,0,0,0,128,112a188.09,188.09,0,0,0,41.85-4.37A7.93,7.93,0,0,0,176,99.87V96a48,48,0,0,0-48.64-48C101.25,48.34,80,70.25,80,96.83ZM232,112c0-11.7-16.63-23.89-41.9-31.59A64.68,64.68,0,0,1,192,96v3.92a23.86,23.86,0,0,1-18.56,23.3A204.05,204.05,0,0,1,128,128a204.15,204.15,0,0,1-45.44-4.78A23.86,23.86,0,0,1,64,99.92h0V96.86a65.28,65.28,0,0,1,2.13-16.52C40.72,88,24,100.25,24,112c0,18.92,42.71,40,104,40S232,130.92,232,112Z"/>`],
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
      ${PhFlyingSaucer.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhFlyingSaucer }
