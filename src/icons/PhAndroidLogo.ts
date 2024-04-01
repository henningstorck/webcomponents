/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-android-logo": PhAndroidLogo;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-android-logo": PhAndroidLogo;
    }
  }
}

@customElement("ph-android-logo")
class PhAndroidLogo extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M172,148a8,8,0,1,1-8-8A8,8,0,0,1,172,148Zm-80-8a8,8,0,1,0,8,8A8,8,0,0,0,92,140Zm144,20v24a12,12,0,0,1-12,12H32a12,12,0,0,1-12-12V161.13A109.43,109.43,0,0,1,57.18,78.84l-28-28a4,4,0,0,1,5.66-5.66L63.41,73.75A106.63,106.63,0,0,1,127.62,52H128a107.16,107.16,0,0,1,64.78,21.57l28.39-28.4a4,4,0,1,1,5.66,5.66L199,78.64c1.78,1.56,3.52,3.17,5.21,4.86A107.25,107.25,0,0,1,236,160Zm-8,0A100,100,0,0,0,128,60h-.35C72.7,60.19,28,105.56,28,161.13V184a4,4,0,0,0,4,4H224a4,4,0,0,0,4-4Z"/>`,
    ],
    [
      "light",
      svg`<path d="M174,148a10,10,0,1,1-10-10A10,10,0,0,1,174,148ZM92,138a10,10,0,1,0,10,10A10,10,0,0,0,92,138Zm146,22v24a14,14,0,0,1-14,14H32a14,14,0,0,1-14-14V161.13A111.44,111.44,0,0,1,54.28,78.76L27.76,52.24a6,6,0,1,1,8.48-8.48L63.61,71.12a108.59,108.59,0,0,1,64-21.12H128a109.17,109.17,0,0,1,64.58,20.93l27.18-27.17a6,6,0,0,1,8.48,8.48L201.93,78.55c1.26,1.15,2.5,2.32,3.72,3.53A109.29,109.29,0,0,1,238,160Zm-12,0a98,98,0,0,0-98-98h-.35C73.81,62.19,30,106.66,30,161.13V184a2,2,0,0,0,2,2H224a2,2,0,0,0,2-2Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M176,148a12,12,0,1,1-12-12A12,12,0,0,1,176,148ZM92,136a12,12,0,1,0,12,12A12,12,0,0,0,92,136Zm148,24v24a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V161.13A113.38,113.38,0,0,1,51.4,78.72L26.34,53.66A8,8,0,0,1,37.66,42.34L63.82,68.5a111.43,111.43,0,0,1,128.55-.19l26-26a8,8,0,0,1,11.32,11.32L204.82,78.5c.75.71,1.5,1.43,2.24,2.17A111.25,111.25,0,0,1,240,160Zm-16,0a96,96,0,0,0-96-96h-.34C74.91,64.18,32,107.75,32,161.13V184H224Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M180,148a16,16,0,1,1-16-16A16,16,0,0,1,180,148ZM92,132a16,16,0,1,0,16,16A16,16,0,0,0,92,132Zm152,28v24a20,20,0,0,1-20,20H32a20,20,0,0,1-20-20V161.13A117.35,117.35,0,0,1,45.72,78.69L23.51,56.49a12,12,0,0,1,17-17L64.3,63.33A114.35,114.35,0,0,1,127.59,44H128a115.15,115.15,0,0,1,63.89,19.14l23.62-23.63a12,12,0,0,1,17,17l-22,22A115.18,115.18,0,0,1,244,160Zm-24,0a92,92,0,0,0-92.33-92C77.12,68.18,36,110,36,161.13V180H220Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M207.06,80.67c-.74-.74-1.49-1.46-2.24-2.17l24.84-24.84a8,8,0,0,0-11.32-11.32l-26,26a111.43,111.43,0,0,0-128.55.19L37.66,42.34A8,8,0,0,0,26.34,53.66L51.4,78.72A113.38,113.38,0,0,0,16,161.13V184a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V160A111.25,111.25,0,0,0,207.06,80.67ZM92,160a12,12,0,1,1,12-12A12,12,0,0,1,92,160Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,160Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M232,160v24a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V161.13C24,103.65,70.15,56.2,127.63,56A104,104,0,0,1,232,160Z" opacity="0.2"/><path d="M176,148a12,12,0,1,1-12-12A12,12,0,0,1,176,148ZM92,136a12,12,0,1,0,12,12A12,12,0,0,0,92,136Zm148,24v24a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V161.13A113.38,113.38,0,0,1,51.4,78.72L26.34,53.66A8,8,0,0,1,37.66,42.34L63.82,68.5a111.4,111.4,0,0,1,128.55-.18l26-26a8,8,0,0,1,11.32,11.32L204.82,78.5c.75.71,1.5,1.43,2.24,2.17A111.25,111.25,0,0,1,240,160Zm-16,0a96,96,0,0,0-96-96h-.34C74.91,64.18,32,107.75,32,161.13V184H224Z"/>`,
    ],
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
      ${PhAndroidLogo.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhAndroidLogo };
