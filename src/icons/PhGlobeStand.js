/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhGlobeStand = {
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
      svg`<circle cx="128" cy="96" r="64" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M201.53911,169.53264A104,104,0,0,1,54.46089,22.45443" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="96" y1="235.99353" x2="160" y2="235.99353" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="128" y1="199.99353" x2="128" y2="235.99353" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<circle cx="128" cy="95.99353" r="72" opacity="0.2"/>
  <circle cx="128" cy="95.99353" r="72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M201.53911,169.53264A104,104,0,0,1,54.46089,22.45443" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="96" y1="231.99353" x2="160" y2="231.99353" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="199.99353" x2="128" y2="231.99353" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <circle cx="128" cy="95.99316" r="80"/>
    <path d="M207.19629,175.18945A8.00052,8.00052,0,0,0,195.88184,163.875,95.99942,95.99942,0,1,1,60.11816,28.11133,8.00052,8.00052,0,0,0,48.80371,16.79688,112.00314,112.00314,0,0,0,120,207.71v16.2832H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V207.71A111.16718,111.16718,0,0,0,207.19629,175.18945Z"/>
  </g>`}
      ${weight === "light" &&
      svg`<circle cx="128" cy="95.99353" r="72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M201.53911,169.53264A104,104,0,0,1,54.46089,22.45443" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="96" y1="231.99353" x2="160" y2="231.99353" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="128" y1="199.99353" x2="128" y2="231.99353" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<circle cx="128" cy="95.99353" r="72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M201.53911,169.53264A104,104,0,0,1,54.46089,22.45443" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="96" y1="231.99353" x2="160" y2="231.99353" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="128" y1="199.99353" x2="128" y2="231.99353" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<circle cx="128" cy="95.99353" r="72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M201.53911,169.53264A104,104,0,0,1,54.46089,22.45443" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="96" y1="231.99353" x2="160" y2="231.99353" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="199.99353" x2="128" y2="231.99353" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-globe-stand", PhGlobeStand);
export default PhGlobeStand;
