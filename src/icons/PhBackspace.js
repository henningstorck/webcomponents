/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhBackspace = {
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
      ${weight === "bold" && svg`<path d="M61.66958,204.116,16,128l45.66958-76.116a8,8,0,0,1,6.85994-3.884H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H68.52952A8,8,0,0,1,61.66958,204.116Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="160" y1="104.00005" x2="112" y2="152.00005" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="160" y1="152.00005" x2="112" y2="104.00005" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<path d="M61.66958,204.116,16,128l45.66958-76.116a8,8,0,0,1,6.85994-3.884H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H68.52952A8,8,0,0,1,61.66958,204.116Z" opacity="0.2"/>
  <path d="M61.66958,204.116,16,128l45.66958-76.116a8,8,0,0,1,6.85994-3.884H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H68.52952A8,8,0,0,1,61.66958,204.116Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="160" y1="104.00005" x2="112" y2="152.00005" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="160" y1="152.00005" x2="112" y2="104.00005" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<path d="M215.99512,39.99805H68.52637a16.1162,16.1162,0,0,0-13.71875,7.76562L9.13574,123.88086a8.02459,8.02459,0,0,0,0,8.23437l45.67188,76.11719v.00781a16.10652,16.10652,0,0,0,13.71875,7.75782H215.99512a16.01583,16.01583,0,0,0,16-16v-144A16.01582,16.01582,0,0,0,215.99512,39.99805ZM165.65137,146.3418a7.99915,7.99915,0,1,1-11.3125,11.3125l-18.34375-18.34375L117.65137,157.6543a7.99915,7.99915,0,0,1-11.3125-11.3125l18.34375-18.34375L106.33887,109.6543a7.99915,7.99915,0,0,1,11.3125-11.3125l18.34375,18.34375L154.33887,98.3418a7.99915,7.99915,0,0,1,11.3125,11.3125l-18.34375,18.34375Z"/>`}
      ${weight === "light" && svg`<path d="M61.66958,204.116,16,128l45.66958-76.116a8,8,0,0,1,6.85994-3.884H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H68.52952A8,8,0,0,1,61.66958,204.116Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="160" y1="104.00005" x2="112" y2="152.00005" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="160" y1="152.00005" x2="112" y2="104.00005" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<path d="M61.66958,204.116,16,128l45.66958-76.116a8,8,0,0,1,6.85994-3.884H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H68.52952A8,8,0,0,1,61.66958,204.116Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="160" y1="104.00005" x2="112" y2="152.00005" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="160" y1="152.00005" x2="112" y2="104.00005" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<path d="M61.66958,204.116,16,128l45.66958-76.116a8,8,0,0,1,6.85994-3.884H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H68.52952A8,8,0,0,1,61.66958,204.116Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="160" y1="104.00005" x2="112" y2="152.00005" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="160" y1="152.00005" x2="112" y2="104.00005" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-backspace", PhBackspace);
export default PhBackspace;
