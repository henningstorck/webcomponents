/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhBatteryCharging = {
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
      transform=${mirrored ? "scale(-1, 1)" : undefined}
    >
      <slot></slot>
      ${weight === "bold" &&
      svg`<rect x="46" y="38" width="144" height="180" rx="16" transform="translate(246 10) rotate(90)" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="244" y1="96" x2="244" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="118 168 134 128 102 128 118 88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<rect x="44" y="36" width="144" height="184" rx="16" transform="translate(244 12) rotate(90)" opacity="0.2"/>
  <line x1="240" y1="96" x2="240" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="44" y="36" width="144" height="184" rx="16" transform="translate(244 12) rotate(90)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="116 168 132 128 100 128 116 88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <path d="M240,88a8.00008,8.00008,0,0,0-8,8v64a8,8,0,0,0,16,0V96A8.00008,8.00008,0,0,0,240,88Z"/>
    <path d="M192,47.99805H40a24.02624,24.02624,0,0,0-24,24v112a24.02624,24.02624,0,0,0,24,24H192a24.02625,24.02625,0,0,0,24-24v-112A24.02624,24.02624,0,0,0,192,47.99805ZM139.42187,130.9668l-16,40a7.99361,7.99361,0,1,1-14.84375-5.9375l11.60938-29.03125H100a7.99271,7.99271,0,0,1-7.42188-10.96875l16-40a7.99361,7.99361,0,1,1,14.84375,5.9375L111.8125,119.99805H132a7.9927,7.9927,0,0,1,7.42187,10.96875Z"/>
  </g>`}
      ${weight === "light" &&
      svg`<line x1="240" y1="96" x2="240" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="44" y="36" width="144" height="184" rx="16" transform="translate(244 12) rotate(90)" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="116 168 132 128 100 128 116 88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<line x1="240" y1="96" x2="240" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="44" y="36" width="144" height="184" rx="16" transform="translate(244 12) rotate(90)" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="116 168 132 128 100 128 116 88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="240" y1="96" x2="240" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="44" y="36" width="144" height="184" rx="16" transform="translate(244 12) rotate(90)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="116 168 132 128 100 128 116 88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-battery-charging", PhBatteryCharging);
export default PhBatteryCharging;
