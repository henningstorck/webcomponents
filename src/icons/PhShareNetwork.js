/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhShareNetwork = {
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
      svg`<circle cx="64" cy="128" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="176" cy="200" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="176" cy="56" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="149.08436" y1="73.30291" x2="90.91323" y2="110.69864" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="90.9132" y1="145.30134" x2="149.08428" y2="182.69704" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<circle cx="176" cy="200" r="32" opacity="0.2"/>
  <circle cx="176" cy="56" r="32" opacity="0.2"/>
  <circle cx="64" cy="128" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="176" cy="200" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="176" cy="56" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="149.08436" y1="73.30291" x2="90.91323" y2="110.69864" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="90.9132" y1="145.30134" x2="149.08428" y2="182.69704" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M176,160a39.87518,39.87518,0,0,0-28.61768,12.09277L101.28467,142.4585a39.85174,39.85174,0,0,0,0-28.917l46.09765-29.63427a39.94957,39.94957,0,1,0-8.667-13.44947L92.61719,100.09229a40,40,0,1,0,0,55.81542l46.09814,29.63453A39.99342,39.99342,0,1,0,176,160Z"/>`}
      ${weight === "light" &&
      svg`<circle cx="64" cy="128" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="176" cy="200" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="176" cy="56" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="149.08436" y1="73.30291" x2="90.91323" y2="110.69864" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="90.9132" y1="145.30134" x2="149.08428" y2="182.69704" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<circle cx="64" cy="128" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="176" cy="200" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="176" cy="56" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="149.08436" y1="73.30291" x2="90.91323" y2="110.69864" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="90.9132" y1="145.30134" x2="149.08428" y2="182.69704" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<circle cx="64" cy="128" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="176" cy="200" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="176" cy="56" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="149.08436" y1="73.30291" x2="90.91323" y2="110.69864" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="90.9132" y1="145.30134" x2="149.08428" y2="182.69704" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-share-network", PhShareNetwork);
export default PhShareNetwork;
