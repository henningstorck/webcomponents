/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhQuestion = {
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
      svg`<circle cx="128.00146" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M128.00146,144v-8a32,32,0,1,0-32-32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="128" cy="184" r="16"/>`}
      ${weight === "duotone" &&
      svg`<circle cx="128.00244" cy="128" r="96" opacity="0.2"/>
  <circle cx="128.00244" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M128.00244,152v-8a32,32,0,1,0-32-32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128" cy="184" r="12"/>`}
      ${weight === "fill" &&
      svg`<path d="M128.00146,23.99963a104,104,0,1,0,104,104A104.11791,104.11791,0,0,0,128.00146,23.99963Zm12.001,160.00391a12.002,12.002,0,1,1,0-.00391Zm16.28418-43.71875a39.72506,39.72506,0,0,1-20.28516,10.91992v.79492a8,8,0,1,1-16,0v-8a8.0004,8.0004,0,0,1,8-8,23.99881,23.99881,0,1,0-24-24,8,8,0,0,1-16,0,40,40,0,1,1,68.28516,28.28516Z"/>`}
      ${weight === "light" &&
      svg`<circle cx="128.00098" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M128.001,152v-8a32,32,0,1,0-32-32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="128" cy="184" r="10"/>`}
      ${weight === "thin" &&
      svg`<circle cx="128.00049" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M128.00049,152v-8a32,32,0,1,0-32-32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="128" cy="184" r="8"/>`}
      ${weight === "regular" &&
      svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M128,152v-8a32,32,0,1,0-32-32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128" cy="184" r="12"/>`}
    </svg>
  `,
};

define("ph-question", PhQuestion);
export default PhQuestion;
