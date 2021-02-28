/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhSmiley = {
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
      svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M169.57812,151.99627a48.02731,48.02731,0,0,1-83.15624.00073" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="92" cy="108" r="16"/>
  <circle cx="164" cy="108" r="16"/>`}
      ${weight === "duotone" &&
      svg`<circle cx="128" cy="128" r="96" opacity="0.2"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>
  <path d="M169.57812,151.99627a48.02731,48.02731,0,0,1-83.15624.00073" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="92" cy="108" r="12"/>
  <circle cx="164" cy="108" r="12"/>`}
      ${weight === "fill" &&
      svg`<path d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm36,72a12,12,0,1,1-12,12A12.0006,12.0006,0,0,1,164,96ZM92,96a12,12,0,1,1-12,12A12.0006,12.0006,0,0,1,92,96Zm84.5,60.00781a56.20543,56.20543,0,0,1-26.6875,23.58594A56.0807,56.0807,0,0,1,79.5,156.00781a7.99843,7.99843,0,1,1,13.84375-8.01562,40.274,40.274,0,0,0,19.09375,16.86719,40.44532,40.44532,0,0,0,31.14062,0,40.0058,40.0058,0,0,0,12.70313-8.57813,40.82317,40.82317,0,0,0,6.375-8.28906A7.99843,7.99843,0,1,1,176.5,156.00781Z"/>`}
      ${weight === "light" &&
      svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M169.57812,151.99627a48.02731,48.02731,0,0,1-83.15624.00073" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="92" cy="108" r="10"/>
  <circle cx="164" cy="108" r="10"/>`}
      ${weight === "thin" &&
      svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M169.57812,151.99627a48.02731,48.02731,0,0,1-83.15624.00073" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="92" cy="108" r="8"/>
  <circle cx="164" cy="108" r="8"/>`}
      ${weight === "regular" &&
      svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M169.57812,151.99627a48.02731,48.02731,0,0,1-83.15624.00073" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="92" cy="108" r="12"/>
  <circle cx="164" cy="108" r="12"/>`}
    </svg>
  `,
};

define("ph-smiley", PhSmiley);
export default PhSmiley;
