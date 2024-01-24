/* GENERATED FILE */
import { html, svg, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { IconWeight } from '../types';

declare global {
  interface HTMLElementTagNameMap {
    "ph-git-fork": PhGitFork;
  }
}

@customElement('ph-git-fork')
class PhGitFork extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    ["thin", svg`<path d="M220,64a28,28,0,1,0-32,27.71V104a20,20,0,0,1-20,20H88a20,20,0,0,1-20-20V91.71a28,28,0,1,0-8,0V104a28,28,0,0,0,28,28h36v32.29a28,28,0,1,0,8,0V132h36a28,28,0,0,0,28-28V91.71A28,28,0,0,0,220,64ZM44,64A20,20,0,1,1,64,84,20,20,0,0,1,44,64ZM148,192a20,20,0,1,1-20-20A20,20,0,0,1,148,192ZM192,84a20,20,0,1,1,20-20A20,20,0,0,1,192,84Z"/>`],
    ["light", svg`<path d="M222,64a30,30,0,1,0-36,29.4V104a18,18,0,0,1-18,18H88a18,18,0,0,1-18-18V93.4a30,30,0,1,0-12,0V104a30,30,0,0,0,30,30h34v28.6a30,30,0,1,0,12,0V134h34a30,30,0,0,0,30-30V93.4A30.05,30.05,0,0,0,222,64ZM46,64A18,18,0,1,1,64,82,18,18,0,0,1,46,64ZM146,192a18,18,0,1,1-18-18A18,18,0,0,1,146,192ZM192,82a18,18,0,1,1,18-18A18,18,0,0,1,192,82Z"/>`],
    ["regular", svg`<path d="M224,64a32,32,0,1,0-40,31v9a16,16,0,0,1-16,16H88a16,16,0,0,1-16-16V95a32,32,0,1,0-16,0v9a32,32,0,0,0,32,32h32v25a32,32,0,1,0,16,0V136h32a32,32,0,0,0,32-32V95A32.06,32.06,0,0,0,224,64ZM48,64A16,16,0,1,1,64,80,16,16,0,0,1,48,64Zm96,128a16,16,0,1,1-16-16A16,16,0,0,1,144,192ZM192,80a16,16,0,1,1,16-16A16,16,0,0,1,192,80Z"/>`],
    ["bold", svg`<path d="M228,64a36,36,0,1,0-48,33.94V104a12,12,0,0,1-12,12H88a12,12,0,0,1-12-12V97.94a36,36,0,1,0-24,0V104a36,36,0,0,0,36,36h28v18.06a36,36,0,1,0,24,0V140h28a36,36,0,0,0,36-36V97.94A36.07,36.07,0,0,0,228,64ZM64,52A12,12,0,1,1,52,64,12,12,0,0,1,64,52Zm64,152a12,12,0,1,1,12-12A12,12,0,0,1,128,204ZM192,76a12,12,0,1,1,12-12A12,12,0,0,1,192,76Z"/>`],
    ["fill", svg`<path d="M224,64a32,32,0,1,0-40,31v9a16,16,0,0,1-16,16H88a16,16,0,0,1-16-16V95a32,32,0,1,0-16,0v9a32,32,0,0,0,32,32h32v25a32,32,0,1,0,16,0V136h32a32,32,0,0,0,32-32V95A32.06,32.06,0,0,0,224,64ZM144,192a16,16,0,1,1-16-16A16,16,0,0,1,144,192Z"/>`],
    ["duotone", svg`<path d="M88,64A24,24,0,1,1,64,40,24,24,0,0,1,88,64ZM192,40a24,24,0,1,0,24,24A24,24,0,0,0,192,40Z" opacity="0.2"/><path d="M224,64a32,32,0,1,0-40,31v9a16,16,0,0,1-16,16H88a16,16,0,0,1-16-16V95a32,32,0,1,0-16,0v9a32,32,0,0,0,32,32h32v25a32,32,0,1,0,16,0V136h32a32,32,0,0,0,32-32V95A32.06,32.06,0,0,0,224,64ZM48,64A16,16,0,1,1,64,80,16,16,0,0,1,48,64Zm96,128a16,16,0,1,1-16-16A16,16,0,0,1,144,192ZM192,80a16,16,0,1,1,16-16A16,16,0,0,1,192,80Z"/>`],
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
      ${PhGitFork.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhGitFork }
