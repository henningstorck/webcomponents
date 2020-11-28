/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhClosedCaptioning = {
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
      <slot />
      ${weight === "bold" && svg`<rect x="32" y="48" width="192" height="160" rx="8" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M113.00272,152.80413a28,28,0,1,1-.00014-49.60833" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M185.00272,152.80413a28,28,0,1,1-.00014-49.60833" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<rect x="32" y="48" width="192" height="160" rx="8" opacity="0.2"/>
  <rect x="32" y="48" width="192" height="160" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M116,147.59582a28,28,0,1,1,.00011-39.19153" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M188,147.59582a28,28,0,1,1,.00011-39.19153" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<path d="M216,40H40A16.01833,16.01833,0,0,0,24,56V200a16.01833,16.01833,0,0,0,16,16H216a16.01833,16.01833,0,0,0,16-16V56A16.01833,16.01833,0,0,0,216,40ZM96,148a19.85259,19.85259,0,0,0,14.28613-6.00293,7.99956,7.99956,0,0,1,11.42774,11.19727,36,36,0,1,1,0-50.38868,7.99956,7.99956,0,0,1-11.42774,11.19727A20.00012,20.00012,0,1,0,96,148Zm72,0a19.85259,19.85259,0,0,0,14.28613-6.00293,7.99956,7.99956,0,0,1,11.42774,11.19727,36,36,0,1,1,0-50.38868,7.99956,7.99956,0,0,1-11.42774,11.19727A20.00012,20.00012,0,1,0,168,148Z"/>`}
      ${weight === "light" && svg`<rect x="32" y="48" width="192" height="160" rx="8" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M116,147.59582a28,28,0,1,1,.00011-39.19153" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M188,147.59582a28,28,0,1,1,.00011-39.19153" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<rect x="32" y="48" width="192" height="160" rx="8" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M116,147.59582a28,28,0,1,1,.00011-39.19153" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M188,147.59582a28,28,0,1,1,.00011-39.19153" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<rect x="32" y="48" width="192" height="160" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M116,147.59582a28,28,0,1,1,.00011-39.19153" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M188,147.59582a28,28,0,1,1,.00011-39.19153" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-closed-captioning", PhClosedCaptioning);
export default PhClosedCaptioning;
