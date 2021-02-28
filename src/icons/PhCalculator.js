/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhCalculator = {
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
      ${weight === "bold" &&
      svg`<rect x="31.99995" y="48.00781" width="192" height="160" rx="8" transform="translate(256.00777 0.00786) rotate(90)" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="92" y1="76" x2="164" y2="76" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="104" cy="128" r="16"/>
  <circle cx="152" cy="128" r="16"/>
  <circle cx="104" cy="176" r="16"/>
  <circle cx="152" cy="176" r="16"/>`}
      ${weight === "duotone" &&
      svg`<rect x="80" y="64" width="96" height="48" opacity="0.2"/>
  <rect x="80" y="64" width="96" height="48" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="31.99995" y="48.00781" width="192" height="160" rx="8" transform="translate(256.00777 0.00786) rotate(90)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="88" cy="148" r="12"/>
  <circle cx="128" cy="148" r="12"/>
  <circle cx="168" cy="148" r="12"/>
  <circle cx="88" cy="188" r="12"/>
  <circle cx="128" cy="188" r="12"/>
  <circle cx="168" cy="188" r="12"/>`}
      ${weight === "fill" &&
      svg`<path d="M200,24.00781H56a16.01833,16.01833,0,0,0-16,16v176a16.01833,16.01833,0,0,0,16,16H200a16.01833,16.01833,0,0,0,16-16v-176A16.01833,16.01833,0,0,0,200,24.00781ZM88,200a12,12,0,1,1,12-12A12.01375,12.01375,0,0,1,88,200Zm0-40a12,12,0,1,1,12-12A12.01375,12.01375,0,0,1,88,160Zm40,40a12,12,0,1,1,12-12A12.01375,12.01375,0,0,1,128,200Zm0-40a12,12,0,1,1,12-12A12.01375,12.01375,0,0,1,128,160Zm40,40a12,12,0,1,1,12-12A12.01375,12.01375,0,0,1,168,200Zm0-40a12,12,0,1,1,12-12A12.01375,12.01375,0,0,1,168,160Zm16-56a7.99977,7.99977,0,0,1-8,8H80a7.99977,7.99977,0,0,1-8-8V64a7.99977,7.99977,0,0,1,8-8h96a7.99977,7.99977,0,0,1,8,8Z"/>`}
      ${weight === "light" &&
      svg`<rect x="80" y="64" width="96" height="48" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="31.99995" y="48.00781" width="192" height="160" rx="8" transform="translate(256.00777 0.00786) rotate(90)" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="88" cy="148" r="10"/>
  <circle cx="128" cy="148" r="10"/>
  <circle cx="168" cy="148" r="10"/>
  <circle cx="88" cy="188" r="10"/>
  <circle cx="128" cy="188" r="10"/>
  <circle cx="168" cy="188" r="10"/>`}
      ${weight === "thin" &&
      svg`<rect x="80" y="64" width="96" height="48" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="31.99995" y="48.00781" width="192" height="160" rx="8" transform="translate(256.00777 0.00786) rotate(90)" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="88" cy="148" r="8"/>
  <circle cx="128" cy="148" r="8"/>
  <circle cx="168" cy="148" r="8"/>
  <circle cx="88" cy="188" r="8"/>
  <circle cx="128" cy="188" r="8"/>
  <circle cx="168" cy="188" r="8"/>`}
      ${weight === "regular" &&
      svg`<rect x="80" y="64" width="96" height="48" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="31.99995" y="48.00781" width="192" height="160" rx="8" transform="translate(256.00777 0.00786) rotate(90)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="88" cy="148" r="12"/>
  <circle cx="128" cy="148" r="12"/>
  <circle cx="168" cy="148" r="12"/>
  <circle cx="88" cy="188" r="12"/>
  <circle cx="128" cy="188" r="12"/>
  <circle cx="168" cy="188" r="12"/>`}
    </svg>
  `,
};

define("ph-calculator", PhCalculator);
export default PhCalculator;
