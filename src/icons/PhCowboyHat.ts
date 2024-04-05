/* GENERATED FILE */
import { html, svg, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight, IconAttrs } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-cowboy-hat": IconAttrs;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-cowboy-hat": IconAttrs;
    }
  }
}

@customElement("ph-cowboy-hat")
class PhCowboyHat extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M216,124a4,4,0,0,0-3.39,1.88A174.9,174.9,0,0,1,193,151.81l-18.62-98A12,12,0,0,0,155,46.69L130.5,67.13a4,4,0,0,1-4.94.05L100.9,46.64a12,12,0,0,0-19.29,7.15L63,151.81a174.9,174.9,0,0,1-19.6-25.93A4,4,0,0,0,40,124a36,36,0,0,0,0,72H216a36,36,0,0,0,0-72ZM89.48,55.28a4,4,0,0,1,6.37-2.44L120.5,73.38a12,12,0,0,0,15.06-.06l24.53-20.43a3.92,3.92,0,0,1,3.89-.63,4,4,0,0,1,2.55,3L181.11,132H74.89ZM40,188a28,28,0,0,1-2.15-55.92C58.3,164,80.59,180,97.9,188Zm88,0h0c-.27,0-11.78-.21-27.77-7.84a118.23,118.23,0,0,1-30.43-21.4L73.37,140H182.63l3.56,18.76a118.23,118.23,0,0,1-30.43,21.4C139.77,187.79,128.26,188,128,188Zm88,0H158.1c17.31-8,39.6-24,60.05-55.92A28,28,0,0,1,216,188Z"/>`,
    ],
    [
      "light",
      svg`<path d="M216,122a6,6,0,0,0-5.09,2.82,176.66,176.66,0,0,1-16.69,22.65l-17.87-94a14,14,0,0,0-22.5-8.35l-.1.08L129.22,65.59a2,2,0,0,1-2.44,0L102.25,45.16l-.1-.08a14,14,0,0,0-22.5,8.34L61.77,147.49a178.33,178.33,0,0,1-16.68-22.67A6,6,0,0,0,40,122a38,38,0,0,0,0,76H216a38,38,0,0,0,0-76ZM91.44,55.65a2,2,0,0,1,3.18-1.22l24.54,20.43.09.08a13.93,13.93,0,0,0,17.5,0l.09-.08,24.54-20.43a2,2,0,0,1,3.18,1.23L178.69,130H77.31ZM40,186a26,26,0,0,1-3.17-51.81C54.5,161.44,73.53,177.05,89.62,186Zm88,0c-.34,0-26.71-.41-56-27.91L75,142H181L184,158.05a115.79,115.79,0,0,1-28.89,20.19C139.38,185.81,128.08,186,128,186Zm88,0H166.38c16.09-8.95,35.12-24.56,52.79-51.81A26,26,0,0,1,216,186Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M216,120a8,8,0,0,0-6.78,3.76A179.9,179.9,0,0,1,195.41,143L178.32,53.07a16,16,0,0,0-25.72-9.55l-.13.1L128,64,103.53,43.62l-.13-.1a16,16,0,0,0-25.72,9.53L60.59,143a179.27,179.27,0,0,1-13.81-19.25A8,8,0,0,0,40,120a40,40,0,0,0,0,80H216a40,40,0,0,0,0-80ZM93.41,56,117.88,76.4l.12.1a15.92,15.92,0,0,0,20,0l.12-.1L162.59,56l13.68,72H79.73ZM40,184a24,24,0,0,1-4.14-47.64C51.28,159.83,67.73,174.65,82.4,184Zm88,0c-.33,0-25.49-.4-53.86-26.6L76.68,144H179.31l2.54,13.35a113.28,113.28,0,0,1-27.35,19C139.1,183.77,128.06,184,128,184Zm88,0H173.6c14.67-9.35,31.12-24.17,46.54-47.64A24,24,0,0,1,216,184Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M212,116a12,12,0,0,0-10.18,5.64q-2.48,4-5,7.57L182.25,52.33A20,20,0,0,0,150.1,40.4l-.18.15L128,58.8,106.08,40.55l-.18-.15A20,20,0,0,0,73.75,52.3L59.14,129.22q-2.49-3.61-5-7.57A12,12,0,0,0,44,116a44,44,0,1,0,0,88H212a44,44,0,1,0,0-88ZM96.07,63.44l19.25,16,.19.15a19.89,19.89,0,0,0,25,0l.19-.15,19.25-16L171.44,124H84.56ZM44,180a20,20,0,0,1-5.94-39.1c11.7,17.38,23.7,30,35,39.1Zm35-26.75L80,148h96l1,5.25c-25.33,25-46.71,26.65-49,26.75C125.71,179.9,104.33,178.29,79,153.25ZM212,180H183c11.28-9.12,23.28-21.72,35-39.1A20,20,0,0,1,212,180Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M216,120a8,8,0,0,0-6.78,3.76A179.9,179.9,0,0,1,195.41,143l-1.63-8.57v0L178.32,53.07a16,16,0,0,0-25.72-9.55l-.13.1L128,64,103.53,43.62l-.13-.1a16,16,0,0,0-25.72,9.53L62.23,134.38v0L60.59,143a179.27,179.27,0,0,1-13.81-19.25A8,8,0,0,0,40,120a40,40,0,0,0,0,80H216a40,40,0,0,0,0-80ZM76.68,144H179.31l2.54,13.35a113.28,113.28,0,0,1-27.35,19C139.1,183.77,128.06,184,128,184c-.33,0-25.49-.4-53.86-26.6Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M190.53,160.18C158.13,192,128,192,128,192s-30.13,0-62.53-31.82L70.06,136H185.94Z" opacity="0.2"/><path d="M216,120a8,8,0,0,0-6.78,3.76A179.9,179.9,0,0,1,195.41,143L178.32,53.07a16,16,0,0,0-25.72-9.55l-.13.1L128,64,103.53,43.62l-.13-.1a16,16,0,0,0-25.72,9.53L60.59,143a179.27,179.27,0,0,1-13.81-19.25A8,8,0,0,0,40,120a40,40,0,0,0,0,80H216a40,40,0,0,0,0-80ZM93.41,56,117.88,76.4l.12.1a15.92,15.92,0,0,0,20,0l.12-.1L162.59,56l13.68,72H79.73ZM40,184a24,24,0,0,1-4.14-47.64C51.28,159.83,67.73,174.65,82.4,184Zm88,0c-.33,0-25.49-.4-53.86-26.6L76.68,144H179.31l2.54,13.35a113.28,113.28,0,0,1-27.35,19C139.1,183.77,128.06,184,128,184Zm88,0H173.6c14.67-9.35,31.12-24.17,46.54-47.64A24,24,0,0,1,216,184Z"/>`,
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
      ${PhCowboyHat.weightsMap.get(this.weight ?? "regular")}
    </svg>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

export { PhCowboyHat };
