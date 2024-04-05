/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-file-lock": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-file-lock": IconAttrs;
    }
  }
}

@customElement("ph-file-lock")
class PhFileLock extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M120,180H108v-8a24,24,0,0,0-48,0v8H48a4,4,0,0,0-4,4v40a4,4,0,0,0,4,4h72a4,4,0,0,0,4-4V184A4,4,0,0,0,120,180Zm-52-8a16,16,0,0,1,32,0v8H68Zm48,48H52V188h64ZM210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40v88a4,4,0,0,0,8,0V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V216a4,4,0,0,1-4,4H160a4,4,0,0,0,0,8h40a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156Z"/>`,
    ],
    [
      "light",
      svg`<path d="M120,178H110v-6a26,26,0,0,0-52,0v6H48a6,6,0,0,0-6,6v40a6,6,0,0,0,6,6h72a6,6,0,0,0,6-6V184A6,6,0,0,0,120,178Zm-50-6a14,14,0,0,1,28,0v6H70Zm44,46H54V190h60ZM212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40v88a6,6,0,0,0,12,0V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50V216a2,2,0,0,1-2,2H160a6,6,0,0,0,0,12h40a14,14,0,0,0,14-14V88A6,6,0,0,0,212.24,83.76ZM158,46.48,193.52,82H158Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M120,176h-8v-4a28,28,0,0,0-56,0v4H48a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8V184A8,8,0,0,0,120,176Zm-48-4a12,12,0,0,1,24,0v4H72Zm40,44H56V192h56ZM213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v88a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48V216H160a8,8,0,0,0,0,16h40a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M120,168h-4v-4a32,32,0,0,0-64,0v4H48a12,12,0,0,0-12,12v44a12,12,0,0,0,12,12h72a12,12,0,0,0,12-12V180A12,12,0,0,0,120,168Zm-44-4a8,8,0,0,1,16,0v4H76Zm32,48H60V192h48ZM216.49,79.52l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40v68a12,12,0,0,0,24,0V44h76V92a12,12,0,0,0,12,12h48V212H164a12,12,0,0,0,0,24h36a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.52ZM160,57l23,23H160Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M120,176h-8v-4a28,28,0,0,0-56,0v4H48a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8V184A8,8,0,0,0,120,176Zm-24,0H72v-4a12,12,0,0,1,24,0ZM213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v88a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48V216H160a8,8,0,0,0,0,16h40a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M48,184h72v40H48ZM152,32V88h56Z" opacity="0.2"/><path d="M120,176h-8v-4a28,28,0,0,0-56,0v4H48a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8V184A8,8,0,0,0,120,176Zm-48-4a12,12,0,0,1,24,0v4H72Zm40,44H56V192h56ZM213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v88a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48V216H160a8,8,0,0,0,0,16h40a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160Z"/>`,
    ],
  ]);

  @property({ type: String, reflect: true })
  size?: string | number = "1em";

  @property({ type: String, reflect: true })
  weight?: IconWeight = "regular";

  @property({ type: String, reflect: true })
  color?: string = "currentColor";

  @property({ type: Boolean, reflect: true })
  mirrored?: boolean = false;

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
      ${PhFileLock.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhFileLock };
