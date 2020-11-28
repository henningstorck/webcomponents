/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhShieldChevron = {
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
      ${weight === "bold" && svg`<path d="M40,106.66667V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.306,218.51683,40,190.682,40,106.66667Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="202.402 164.082 128 112 53.597 164.082" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<path d="M202.40575,164.0837C180.989,204.285,140.7647,219.81955,130.4562,223.23725a7.54755,7.54755,0,0,1-4.9124,0c-10.30857-3.41773-50.53339-18.95246-71.95-59.15443l.00313-.001L128,112l74.40193,52.08167Z" opacity="0.2"/>
  <path d="M40,106.66667V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.306,218.51683,40,190.682,40,106.66667Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="202.402 164.082 128 112 53.597 164.082" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<path d="M207.99951,32.00012h-160a16.01818,16.01818,0,0,0-16,16v58.66651c0,89.45312,75.82617,119.12451,91.02637,124.16406a15.48361,15.48361,0,0,0,9.94726.00049c15.2002-5.04,91.02637-34.71143,91.02637-124.16455V48.00012A16.01817,16.01817,0,0,0,207.99951,32.00012Zm-160,16h160v58.66651c0,17.68237-3.39453,32.69653-8.79639,45.4104L132.5874,105.44617a8.00131,8.00131,0,0,0-9.17578,0L56.79541,152.077c-5.40137-12.71387-8.7959-27.728-8.7959-45.4104Z"/>`}
      ${weight === "light" && svg`<path d="M40,106.66667V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.306,218.51683,40,190.682,40,106.66667Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="202.402 164.082 128 112 53.597 164.082" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<path d="M40,106.66667V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.306,218.51683,40,190.682,40,106.66667Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="202.402 164.082 128 112 53.597 164.082" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<path d="M40,106.66667V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.306,218.51683,40,190.682,40,106.66667Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="202.402 164.082 128 112 53.597 164.082" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-shield-chevron", PhShieldChevron);
export default PhShieldChevron;
