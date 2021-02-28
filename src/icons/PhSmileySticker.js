/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhSmileySticker = {
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
      svg`<path d="M169.57812,151.99627a48.02731,48.02731,0,0,1-83.15624.00073" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M156.21732,219.78606a95.898,95.898,0,1,1,63.57-63.573Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="92" cy="108" r="16"/>
  <circle cx="164" cy="108" r="16"/>`}
      ${weight === "duotone" &&
      svg`<path d="M156.21732,219.78606a95.898,95.898,0,1,1,63.57-63.573Z" opacity="0.2"/>
  <path d="M169.57812,151.99627a48.02731,48.02731,0,0,1-83.15624.00073" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M156.21732,219.78606a95.898,95.898,0,1,1,63.57-63.573Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="92" cy="108" r="12"/>
  <circle cx="164" cy="108" r="12"/>`}
      ${weight === "fill" &&
      svg`<path d="M128,24a104,104,0,1,0,30.56543,203.43359,7.99683,7.99683,0,0,0,3.30859-1.99072l63.57032-63.57324a7.99548,7.99548,0,0,0,1.99072-3.30859A104.07559,104.07559,0,0,0,128,24Zm36,72a12,12,0,1,1-12,12A12,12,0,0,1,164,96ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96Zm84.50293,60.00244a56.19607,56.19607,0,0,1-26.70264,23.58936,56.05693,56.05693,0,0,1-70.30322-23.58863,8.00011,8.00011,0,0,1,13.84961-8.0122,40.19352,40.19352,0,0,0,19.08594,16.86548,39.95953,39.95953,0,0,0,43.85156-8.57618,40.18715,40.18715,0,0,0,6.36914-8.28979,8.00005,8.00005,0,1,1,13.84961,8.012Z"/>`}
      ${weight === "light" &&
      svg`<path d="M169.57812,151.99627a48.02731,48.02731,0,0,1-83.15624.00073" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M156.21732,219.78606a95.898,95.898,0,1,1,63.57-63.573Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="92" cy="108" r="10"/>
  <circle cx="164" cy="108" r="10"/>`}
      ${weight === "thin" &&
      svg`<path d="M169.57812,151.99627a48.02731,48.02731,0,0,1-83.15624.00073" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M156.21732,219.78606a95.898,95.898,0,1,1,63.57-63.573Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="92" cy="108" r="8"/>
  <circle cx="164" cy="108" r="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M169.57812,151.99627a48.02731,48.02731,0,0,1-83.15624.00073" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M156.21732,219.78606a95.898,95.898,0,1,1,63.57-63.573Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="92" cy="108" r="12"/>
  <circle cx="164" cy="108" r="12"/>`}
    </svg>
  `,
};

define("ph-smiley-sticker", PhSmileySticker);
export default PhSmileySticker;
