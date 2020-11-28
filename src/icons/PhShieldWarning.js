/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhShieldWarning = {
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
      ${weight === "bold" && svg`<path d="M39.99951,106.66667V48a8,8,0,0,1,8-8h160a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.30553,218.51683,39.99951,190.682,39.99951,106.66667Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="127.99951" y1="84" x2="127.99951" y2="124" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="128" cy="164" r="16"/>`}
      ${weight === "duotone" && svg`<path d="M39.99951,106.66667V48a8,8,0,0,1,8-8h160a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.30553,218.51683,39.99951,190.682,39.99951,106.66667Z" opacity="0.2"/>
  <path d="M39.99951,106.66667V48a8,8,0,0,1,8-8h160a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.30553,218.51683,39.99951,190.682,39.99951,106.66667Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="127.99951" y1="88" x2="127.99951" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128" cy="164" r="12"/>`}
      ${weight === "fill" && svg`<path d="M207.99951,32h-160a16.01833,16.01833,0,0,0-16,16v58.667c0,89.45313,75.82617,119.124,91.02637,124.16406a15.48781,15.48781,0,0,0,9.94726,0c15.2002-5.04,91.02637-34.71093,91.02637-124.16406V48A16.01833,16.01833,0,0,0,207.99951,32Zm-88,56a8,8,0,1,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,127.99951,176Z"/>`}
      ${weight === "light" && svg`<path d="M39.99951,106.66667V48a8,8,0,0,1,8-8h160a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.30553,218.51683,39.99951,190.682,39.99951,106.66667Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="127.99951" y1="88" x2="127.99951" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="128" cy="164" r="10"/>`}
      ${weight === "thin" && svg`<path d="M39.99951,106.66667V48a8,8,0,0,1,8-8h160a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.30553,218.51683,39.99951,190.682,39.99951,106.66667Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="127.99951" y1="88" x2="127.99951" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="128" cy="164" r="8"/>`}
      ${weight === "regular" && svg`<path d="M40,106.66667V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.306,218.51683,40,190.682,40,106.66667Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="88" x2="128" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128" cy="164" r="12"/>`}
    </svg>
  `,
};

define("ph-shield-warning", PhShieldWarning);
export default PhShieldWarning;
