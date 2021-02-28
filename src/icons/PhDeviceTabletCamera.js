/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhDeviceTabletCamera = {
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
      svg`<rect x="32" y="48" width="192" height="160" rx="16" transform="translate(256) rotate(90)" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="128" cy="76" r="16"/>`}
      ${weight === "duotone" &&
      svg`<rect x="32" y="48" width="192" height="160" rx="16" transform="translate(256) rotate(90)" opacity="0.2"/>
  <rect x="32" y="48" width="192" height="160" rx="16" transform="translate(256) rotate(90)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="128" cy="68" r="12"/>`}
      ${weight === "fill" &&
      svg`<path d="M192,24H64A24.0275,24.0275,0,0,0,40,48V208a24.0275,24.0275,0,0,0,24,24H192a24.0275,24.0275,0,0,0,24-24V48A24.0275,24.0275,0,0,0,192,24ZM128,80a12,12,0,1,1,12-12A12,12,0,0,1,128,80Z"/>`}
      ${weight === "light" &&
      svg`<rect x="32" y="48" width="192" height="160" rx="16" transform="translate(256) rotate(90)" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="128" cy="68" r="10"/>`}
      ${weight === "thin" &&
      svg`<rect x="32" y="48" width="192" height="160" rx="16" transform="translate(256) rotate(90)" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="128" cy="68" r="8"/>`}
      ${weight === "regular" &&
      svg`<rect x="32" y="48" width="192" height="160" rx="16" transform="translate(256) rotate(90)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="128" cy="68" r="12"/>`}
    </svg>
  `,
};

define("ph-device-tablet-camera", PhDeviceTabletCamera);
export default PhDeviceTabletCamera;
