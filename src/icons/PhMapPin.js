/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhMapPin = {
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
      svg`<circle cx="128" cy="104" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M128,24a80.0002,80.0002,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80.0002,80.0002,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32.00034,32.00034,0,0,1,128,136Z" opacity="0.2"/>
  <circle cx="128" cy="104" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M127.99414,15.9971a88.1046,88.1046,0,0,0-88,88c0,75.29688,80,132.17188,83.40625,134.55469a8.023,8.023,0,0,0,9.1875,0c3.40625-2.38281,83.40625-59.25781,83.40625-134.55469A88.10459,88.10459,0,0,0,127.99414,15.9971ZM128,72a32,32,0,1,1-32,32A31.99909,31.99909,0,0,1,128,72Z"/>`}
      ${weight === "light" &&
      svg`<circle cx="128" cy="104" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<circle cx="128" cy="104" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<circle cx="128" cy="104" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-map-pin", PhMapPin);
export default PhMapPin;
