/* GENERATED FILE */
import { html, svg, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { IconWeight } from "../types";

declare global {
  interface HTMLElementTagNameMap {
    "ph-presentation-chart": PhPresentationChart;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ph-presentation-chart": PhPresentationChart;
    }
  }
}

@customElement("ph-presentation-chart")
class PhPresentationChart extends LitElement {
  static weightsMap = new Map<IconWeight, ReturnType<typeof svg>>([
    [
      "thin",
      svg`<path d="M216,44H132V24a4,4,0,0,0-8,0V44H40A12,12,0,0,0,28,56V176a12,12,0,0,0,12,12H87.68l-26.8,33.5a4,4,0,1,0,6.24,5L97.92,188h60.16l30.8,38.5a4,4,0,0,0,6.24-5L168.32,188H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44Zm4,132a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4ZM100,120v24a4,4,0,0,1-8,0V120a4,4,0,0,1,8,0Zm32-16v40a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Zm32-16v56a4,4,0,0,1-8,0V88a4,4,0,0,1,8,0Z"/>`,
    ],
    [
      "light",
      svg`<path d="M216,42H134V24a6,6,0,0,0-12,0V42H40A14,14,0,0,0,26,56V176a14,14,0,0,0,14,14H83.52L59.31,220.25a6,6,0,0,0,9.38,7.5L98.88,190h58.24l30.19,37.75a6,6,0,0,0,9.38-7.5L172.48,190H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42Zm2,134a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM102,120v24a6,6,0,0,1-12,0V120a6,6,0,0,1,12,0Zm32-16v40a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Zm32-16v56a6,6,0,0,1-12,0V88a6,6,0,0,1,12,0Z"/>`,
    ],
    [
      "regular",
      svg`<path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"/>`,
    ],
    [
      "bold",
      svg`<path d="M216,36H140V24a12,12,0,0,0-24,0V36H40A20,20,0,0,0,20,56V176a20,20,0,0,0,20,20H71l-16.4,20.5a12,12,0,0,0,18.74,15l28.4-35.5h52.46l28.4,35.5a12,12,0,0,0,18.74-15L185,196h31a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36Zm-4,136H44V60H212ZM104,120v24a12,12,0,0,1-24,0V120a12,12,0,0,1,24,0Zm24-28a12,12,0,0,1,12,12v40a12,12,0,0,1-24,0V104A12,12,0,0,1,128,92Zm24,52V88a12,12,0,0,1,24,0v56a12,12,0,0,1-24,0Z"/>`,
    ],
    [
      "fill",
      svg`<path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM104,144a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32,0a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"/>`,
    ],
    [
      "duotone",
      svg`<path d="M224,56V176a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"/><path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"/>`,
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
      ${PhPresentationChart.weightsMap.get(this.weight)}
    </svg>`;
  }
}

export { PhPresentationChart };
