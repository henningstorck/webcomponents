/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhSmileyNervous = {
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
      ${weight === "bold" && svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="85.791 164.762 96 152 112 172 128 152 144 172 160 152 170.21 164.762" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="92" cy="108" r="16"/>
  <circle cx="164" cy="108" r="16"/>`}
      ${weight === "duotone" && svg`<circle cx="128" cy="128" r="96" opacity="0.2"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>
  <polyline points="80 172 96 152 112 172 128 152 144 172 160 152 176 172" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="92" cy="108" r="12"/>
  <circle cx="164" cy="108" r="12"/>`}
      ${weight === "fill" && svg`<path d="M128,24A104,104,0,1,0,232,128,104.11791,104.11791,0,0,0,128,24Zm36,72a12,12,0,1,1-12,12A12,12,0,0,1,164,96ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96Zm88.99756,82.24707a8.00032,8.00032,0,0,1-11.24463-1.24951L160,164.80615l-9.75293,12.19141a8.00025,8.00025,0,0,1-12.49414,0L128,164.80615l-9.75293,12.19141a8.00025,8.00025,0,0,1-12.49414,0L96,164.80615l-9.75293,12.19141a8.00009,8.00009,0,0,1-12.49414-9.99512l16-20a8.00025,8.00025,0,0,1,12.49414,0L112,159.19385l9.75293-12.19141a8.00025,8.00025,0,0,1,12.49414,0L144,159.19385l9.75293-12.19141a8.00025,8.00025,0,0,1,12.49414,0l16,20A8.00036,8.00036,0,0,1,180.99756,178.24707Z"/>`}
      ${weight === "light" && svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="80 172 96 152 112 172 128 152 144 172 160 152 176 172" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="92" cy="108" r="10"/>
  <circle cx="164" cy="108" r="10"/>`}
      ${weight === "thin" && svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="80 172 96 152 112 172 128 152 144 172 160 152 176 172" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="92" cy="108" r="8"/>
  <circle cx="164" cy="108" r="8"/>`}
      ${weight === "regular" && svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>
  <polyline points="80 172 96 152 112 172 128 152 144 172 160 152 176 172" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="92" cy="108" r="12"/>
  <circle cx="164" cy="108" r="12"/>`}
    </svg>
  `,
};

define("ph-smiley-nervous", PhSmileyNervous);
export default PhSmileyNervous;
