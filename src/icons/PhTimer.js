/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhTimer = {
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
      svg`<circle cx="128" cy="140" r="88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="128" y1="140" x2="161.94113" y2="106.05887" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="104" y1="12" x2="152" y2="12" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<circle cx="128" cy="128" r="88" opacity="0.2"/>
  <circle cx="128" cy="128" r="88" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>
  <line x1="128" y1="128" x2="167.59798" y2="88.40202" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="104" y1="8" x2="152" y2="8" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <path d="M104,16h48a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16Z"/>
    <path d="M128,32a96,96,0,1,0,96,96A96.10874,96.10874,0,0,0,128,32Zm45.25488,62.05859-39.59765,39.59815a8.00018,8.00018,0,0,1-11.31446-11.31348l39.59815-39.59814a8,8,0,1,1,11.314,11.31347Z"/>
  </g>`}
      ${weight === "light" &&
      svg`<circle cx="128" cy="128" r="88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="128" y1="128" x2="167.59798" y2="88.40202" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="104" y1="8" x2="152" y2="8" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<circle cx="128" cy="128" r="88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="128" y1="128" x2="167.59798" y2="88.40202" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="104" y1="8" x2="152" y2="8" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<circle cx="128" cy="128" r="88" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>
  <line x1="128" y1="128" x2="167.59798" y2="88.40202" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="104" y1="8" x2="152" y2="8" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-timer", PhTimer);
export default PhTimer;
