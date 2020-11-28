/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhAlignCenterVertical = {
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
      ${weight === "bold" && svg`<line x1="224.00488" y1="128" x2="204.00488" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="52.00488" y1="128" x2="32.00488" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="148.00488" y1="128" x2="108.00488" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <rect x="112" y="100" width="128" height="56" rx="8" transform="translate(304 -48) rotate(90)" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="52" y="40" width="56" height="176" rx="8" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "duotone" && svg`<line x1="224.00488" y1="128" x2="200.00488" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="108" y="100" width="128" height="56" rx="8" transform="translate(300 -44) rotate(90)" opacity="0.2"/>
  <rect x="56" y="40" width="56" height="176" rx="8" opacity="0.2"/>
  <line x1="56.00488" y1="128" x2="32.00488" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="144.00488" y1="128" x2="112.00488" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="108" y="100" width="128" height="56" rx="8" transform="translate(300 -44) rotate(90)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="56" y="40" width="56" height="176" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "fill" && svg`<path d="M232.00488,128a7.99977,7.99977,0,0,1-8,8H208v48a16.01833,16.01833,0,0,1-16,16H152a16.01833,16.01833,0,0,1-16-16V136H120v72a16.01833,16.01833,0,0,1-16,16H64a16.01833,16.01833,0,0,1-16-16V136H32.00488a8,8,0,0,1,0-16H48V48A16.01833,16.01833,0,0,1,64,32h40a16.01833,16.01833,0,0,1,16,16v72h16V72a16.01833,16.01833,0,0,1,16-16h40a16.01833,16.01833,0,0,1,16,16v48h16.00488A7.99977,7.99977,0,0,1,232.00488,128Z"/>`}
      ${weight === "light" && svg`<line x1="224.00488" y1="128" x2="200.00488" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="56.00488" y1="128" x2="32.00488" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="144.00488" y1="128" x2="112.00488" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="108" y="100" width="128" height="56" rx="8" transform="translate(300 -44) rotate(90)" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="56" y="40" width="56" height="176" rx="8" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "thin" && svg`<line x1="224.00488" y1="128" x2="200.00488" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="56.00488" y1="128" x2="32.00488" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="144.00488" y1="128" x2="112.00488" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="108" y="100" width="128" height="56" rx="8" transform="translate(300 -44) rotate(90)" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="56" y="40" width="56" height="176" rx="8" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "regular" && svg`<line x1="224.00488" y1="128" x2="200.00488" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="56.00488" y1="128" x2="32.00488" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="144.00488" y1="128" x2="112.00488" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="108" y="100" width="128" height="56" rx="8" transform="translate(300 -44) rotate(90)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="56" y="40" width="56" height="176" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
    </svg>
  `,
};

define("ph-align-center-vertical", PhAlignCenterVertical);
export default PhAlignCenterVertical;
