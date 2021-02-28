/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhBellSimple = {
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
      svg`<line x1="96" y1="228" x2="160" y2="228" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M56.20305,104A71.899,71.899,0,0,1,128.5484,32.002c39.58967.29432,71.25651,33.20133,71.25651,72.90185V108c0,35.81563,7.49325,56.59893,14.093,67.95814A7.999,7.999,0,0,1,207.01628,188H48.98365A7.99908,7.99908,0,0,1,42.103,175.95641c6.60328-11.35959,14.1-32.1426,14.1-67.95641Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M55.99674,104A72.00377,72.00377,0,0,1,128.55,32.002c39.70343.29432,71.46127,33.20133,71.46127,72.90185V112c0,35.81563,7.51478,56.59893,14.13351,67.95814A7.99892,7.99892,0,0,1,207.24334,192H48.75659a7.999,7.999,0,0,1-6.90041-12.04359C48.47844,168.59682,55.99674,147.81381,55.99674,112Z" opacity="0.2"/>
  <line x1="96" y1="224" x2="160" y2="224" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M56.20305,104A71.899,71.899,0,0,1,128.5484,32.002c39.58967.29432,71.25651,33.20133,71.25651,72.90185V112c0,35.81563,7.49325,56.59893,14.093,67.95814A7.999,7.999,0,0,1,207.01628,192H48.98365A7.99908,7.99908,0,0,1,42.103,179.95641c6.60328-11.35959,14.1-32.1426,14.1-67.95641Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <path d="M221.048,175.93066C215.09778,165.7168,208.004,146.335,208.004,112v-7.0957c0-44.28516-35.61621-80.57813-79.39453-80.90235-.20508-.001-.40722-.002-.61133-.002A79.99928,79.99928,0,0,0,48.004,104v8c0,34.33105-7.09668,53.71387-13.0498,63.92676A15.999,15.999,0,0,0,48.76478,200h158.4707a15.99861,15.99861,0,0,0,13.8125-24.06934Z"/>
    <path d="M159.92884,216h-64a8,8,0,1,0,0,16h64a8,8,0,1,0,0-16Z"/>
  </g>`}
      ${weight === "light" &&
      svg`<line x1="95.92521" y1="224.02075" x2="159.92521" y2="224.02075" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M56.20305,104A71.899,71.899,0,0,1,128.5484,32.002c39.58967.29432,71.25651,33.20133,71.25651,72.90185V112c0,35.81563,7.49325,56.59893,14.093,67.95814A7.999,7.999,0,0,1,207.01628,192H48.98365A7.99908,7.99908,0,0,1,42.103,179.95641c6.60328-11.35959,14.1-32.1426,14.1-67.95641Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<line x1="96" y1="224" x2="160" y2="224" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M56.20305,104A71.899,71.899,0,0,1,128.5484,32.002c39.58967.29432,71.25651,33.20133,71.25651,72.90185V112c0,35.81563,7.49325,56.59893,14.093,67.95814A7.999,7.999,0,0,1,207.01628,192H48.98365A7.99908,7.99908,0,0,1,42.103,179.95641c6.60328-11.35959,14.1-32.1426,14.1-67.95641Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="96" y1="224" x2="160" y2="224" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M56.20305,104A71.899,71.899,0,0,1,128.5484,32.002c39.58967.29432,71.25651,33.20133,71.25651,72.90185V112c0,35.81563,7.49325,56.59893,14.093,67.95814A7.999,7.999,0,0,1,207.01628,192H48.98365A7.99908,7.99908,0,0,1,42.103,179.95641c6.60328-11.35959,14.1-32.1426,14.1-67.95641Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-bell-simple", PhBellSimple);
export default PhBellSimple;
