/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhArrowSquareRight = {
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
      svg`<rect x="40" y="40" width="176" height="176" rx="8" transform="translate(256) rotate(90)" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="134.059 94.059 168 128 134.059 161.941" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="88" y1="128" x2="168" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<rect x="40" y="40" width="176" height="176" rx="8" transform="translate(256) rotate(90)" opacity="0.2"/>
  <rect x="40" y="40" width="176" height="176" rx="8" transform="translate(256) rotate(90)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="134.059 94.059 168 128 134.059 161.941" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="88" y1="128" x2="168" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M48,223.99414H208a16.01582,16.01582,0,0,0,16-16v-160a16.01583,16.01583,0,0,0-16-16H48a16.01583,16.01583,0,0,0-16,16v160A16.01582,16.01582,0,0,0,48,223.99414Zm80.40625-56.39062a7.99708,7.99708,0,0,1,0-11.3125l20.28613-20.29688H88a8,8,0,0,1,0-16h60.6875L128.40625,99.71289a7.99915,7.99915,0,0,1,11.3125-11.3125l33.92773,33.92773a8.02367,8.02367,0,0,1,0,11.332l-33.92773,33.94336A7.99708,7.99708,0,0,1,128.40625,167.60352Z"/>`}
      ${weight === "light" &&
      svg`<rect x="40" y="40" width="176" height="176" rx="8" transform="translate(256) rotate(90)" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="134.059 94.059 168 128 134.059 161.941" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="88" y1="128" x2="168" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<rect x="40" y="40" width="176" height="176" rx="8" transform="translate(256) rotate(90)" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="134.059 94.059 168 128 134.059 161.941" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="88" y1="128" x2="168" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<rect x="40" y="40" width="176" height="176" rx="8" transform="translate(256) rotate(90)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="134.059 94.059 168 128 134.059 161.941" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="88" y1="128" x2="168" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-arrow-square-right", PhArrowSquareRight);
export default PhArrowSquareRight;
