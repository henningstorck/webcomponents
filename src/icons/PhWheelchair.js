/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhWheelchair = {
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
      svg`<circle cx="95.88745" cy="40" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="95.887 60 95.887 136 183.887 136 215.887 200 239.887 192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M163.20563,184.07319A64.00734,64.00734,0,1,1,103.88745,96h56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<circle cx="95.88745" cy="40" r="20" opacity="0.2"/>
  <circle cx="95.88745" cy="40" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="95.887 60 95.887 132 183.887 132 215.887 196 239.887 188" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M167.76447,164.00014A64.001,64.001,0,1,1,103.88745,96h56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M247.47729,185.47021a7.99737,7.99737,0,0,0-10.12012-5.05957l-17.417,5.80567-28.89746-57.79395A7.99979,7.99979,0,0,0,183.88745,124h-80V104h56a8,8,0,0,0,0-16h-56V62.629a24,24,0,1,0-16,0V89.81421a71.99395,71.99395,0,1,0,87.86133,74.678,7.99953,7.99953,0,1,0-15.96875-.98438,56.001,56.001,0,1,1-71.89258-57.16644V132a8.00008,8.00008,0,0,0,8,8h83.05566l29.78906,59.57764a7.9934,7.9934,0,0,0,9.68555,4.01172l24-8A8.00045,8.00045,0,0,0,247.47729,185.47021Z"/>`}
      ${weight === "light" &&
      svg`<circle cx="95.88745" cy="40" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="95.887 60 95.887 132 183.887 132 215.887 196 239.887 188" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M167.76447,164.00014A64.001,64.001,0,1,1,103.88745,96h56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<circle cx="95.88745" cy="40" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="95.887 60 95.887 132 183.887 132 215.887 196 239.887 188" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M167.76447,164.00014A64.001,64.001,0,1,1,103.88745,96h56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<circle cx="95.88745" cy="40" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="95.887 60 95.887 132 183.887 132 215.887 196 239.887 188" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M167.76447,164.00014A64.001,64.001,0,1,1,103.88745,96h56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-wheelchair", PhWheelchair);
export default PhWheelchair;
