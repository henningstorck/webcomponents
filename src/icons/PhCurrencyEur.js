/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhCurrencyEur = {
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: false,
  render: ({ color, size, weight, mirrored }) => html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${size}"
      height="${size}"
      fill="${color}"
      viewBox="0 0 256 256"
      transform=${mirrored ? "scale(-1, 1)" : null}
    >
      <slot></slot>
      ${weight === "bold" &&
      svg`<path d="M186.91167,194.91171A72,72,0,0,1,64,144V112A72,72,0,0,1,186.91167,61.08829" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="40" y1="108" x2="136" y2="108" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="40" y1="148" x2="120" y2="148" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M186.91167,194.91171A72,72,0,0,1,64,144V112A72,72,0,0,1,186.91167,61.08829" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="40" y1="112" x2="136" y2="112" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="40" y1="144" x2="120" y2="144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M192.56934,189.25488a7.99974,7.99974,0,0,1-.001,11.314A80.00019,80.00019,0,0,1,56.40088,152H40a8,8,0,0,1,0-16H56V120H40a8,8,0,0,1,0-16H56.40088A80.00019,80.00019,0,0,1,192.56836,55.43115a7.99984,7.99984,0,1,1-11.3125,11.31446A63.98841,63.98841,0,0,0,72.51758,104H136a8,8,0,0,1,0,16H72v16h48a8,8,0,0,1,0,16H72.51758a63.98841,63.98841,0,0,0,108.73828,37.25439A8.00093,8.00093,0,0,1,192.56934,189.25488Z"/>`}
      ${weight === "light" &&
      svg`<path d="M186.91167,194.91171A72,72,0,0,1,64,144V112A72,72,0,0,1,186.91167,61.08829" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="40" y1="112" x2="136" y2="112" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="40" y1="144" x2="120" y2="144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M186.91167,194.91171A72,72,0,0,1,64,144V112A72,72,0,0,1,186.91167,61.08829" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="40" y1="112" x2="136" y2="112" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="40" y1="144" x2="120" y2="144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M186.91167,194.91171A72,72,0,0,1,64,144V112A72,72,0,0,1,186.91167,61.08829" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="40" y1="112" x2="136" y2="112" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="40" y1="144" x2="120" y2="144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-currency-eur", PhCurrencyEur);
export default PhCurrencyEur;
