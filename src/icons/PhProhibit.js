/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhProhibit = {
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
      svg`<circle cx="128.00049" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="60.11824" y1="60.11775" x2="195.88274" y2="195.88225" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<circle cx="128.00049" cy="128" r="96" opacity="0.2"/>
  <circle cx="128.00049" cy="128" r="96" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>
  <line x1="60.11824" y1="60.11775" x2="195.88274" y2="195.88225" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M200,128.00012a71.6357,71.6357,0,0,1-15.78027,44.90527L83.09424,71.78039A71.94387,71.94387,0,0,1,200,128.00012Zm-144,0a71.94342,71.94342,0,0,0,116.90576,56.21924L71.78027,83.09436A71.63607,71.63607,0,0,0,56,128.00012Zm180,0a108,108,0,1,1-108-108A108.12249,108.12249,0,0,1,236,128.00012Zm-20,0a88,88,0,1,0-88,88A88.09957,88.09957,0,0,0,216,128.00012Z"/>`}
      ${weight === "light" &&
      svg`<circle cx="128.00049" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="60.11824" y1="60.11775" x2="195.88274" y2="195.88225" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<circle cx="128.00049" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="60.11824" y1="60.11775" x2="195.88274" y2="195.88225" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<circle cx="128.00049" cy="128" r="96" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>
  <line x1="60.11824" y1="60.11775" x2="195.88274" y2="195.88225" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-prohibit", PhProhibit);
export default PhProhibit;
