/* GENERATED FILE */
import { html, svg, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { IconWeight } from '../types';

declare global {
  interface HTMLElementTagNameMap {
    "ph-wall": PhWall;
  }
}

@customElement('ph-wall')
class PhWall extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    ["thin", svg`<path d="M224,52H32a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H224a4,4,0,0,0,4-4V56A4,4,0,0,0,224,52ZM84,148V108h88v40Zm-48,0V108H76v40Zm144-40h40v40H180Zm40-8H132V60h88ZM124,60v40H36V60ZM36,156h88v40H36Zm96,40V156h88v40Z"/>`],
    ["light", svg`<path d="M224,50H32a6,6,0,0,0-6,6V200a6,6,0,0,0,6,6H224a6,6,0,0,0,6-6V56A6,6,0,0,0,224,50ZM86,146V110h84v36Zm-48,0V110H74v36Zm144-36h36v36H182Zm36-12H134V62h84ZM122,62V98H38V62ZM38,158h84v36H38Zm96,36V158h84v36Z"/>`],
    ["regular", svg`<path d="M224,48H32a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V56A8,8,0,0,0,224,48ZM88,144V112h80v32Zm-48,0V112H72v32Zm144-32h32v32H184Zm32-16H136V64h80ZM120,64V96H40V64ZM40,160h80v32H40Zm96,32V160h80v32Z"/>`],
    ["bold", svg`<path d="M224,44H32A12,12,0,0,0,20,56V200a12,12,0,0,0,12,12H224a12,12,0,0,0,12-12V56A12,12,0,0,0,224,44ZM92,140V116h72v24Zm-48,0V116H68v24Zm144-24h24v24H188Zm24-24H140V68h72ZM116,68V92H44V68ZM44,164h72v24H44Zm96,24V164h72v24Z"/>`],
    ["fill", svg`<path d="M136,92h92a4,4,0,0,0,4-4V56a8,8,0,0,0-8-8H140a4,4,0,0,0-4,4Z"/><path d="M184,152h44a4,4,0,0,0,4-4V112a4,4,0,0,0-4-4H184Z"/><rect x="88" y="108" width="80" height="44"/><path d="M72,108H28a4,4,0,0,0-4,4v36a4,4,0,0,0,4,4H72Z"/><path d="M136,168v36a4,4,0,0,0,4,4h84a8,8,0,0,0,8-8V172a4,4,0,0,0-4-4Z"/><path d="M120,92V52a4,4,0,0,0-4-4H32a8,8,0,0,0-8,8V88a4,4,0,0,0,4,4Z"/><path d="M120,168H28a4,4,0,0,0-4,4v28a8,8,0,0,0,8,8h84a4,4,0,0,0,4-4Z"/>`],
    ["duotone", svg`<path d="M128,104H32V56h96Zm48,0v48H128v48h96V104Z" opacity="0.2"/><path d="M224,48H32a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V56A8,8,0,0,0,224,48ZM88,144V112h80v32Zm-48,0V112H72v32Zm144-32h32v32H184Zm32-16H136V64h80ZM120,64V96H40V64ZM40,160h80v32H40Zm96,32V160h80v32Z"/>`],
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
      ${PhWall.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhWall }
