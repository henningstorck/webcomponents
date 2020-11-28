/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhClub = {
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
      ${weight === "bold" && svg`<path d="M104.512,186.61814a47.9857,47.9857,0,1,1-17.29771-85.30105l-.00069.00287a48,48,0,1,1,81.57046.00366l-.00718-.00443a48.00516,48.00516,0,1,1-17.28893,85.299L160,232H96Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<g opacity="0.2">
    <path d="M112.51708,179.15431a47.97767,47.97767,0,1,1-25.30276-77.83722l-.00069.00287a48,48,0,1,1,81.57046.00366l-.00718-.00443a48.00575,48.00575,0,1,1-25.29289,77.8364L160,232H96Z"/>
  </g>
  <path d="M112.51708,179.15431a47.97767,47.97767,0,1,1-25.30276-77.83722l-.00069.00287a48,48,0,1,1,81.57046.00366l-.00718-.00443a48.00575,48.00575,0,1,1-25.29289,77.8364L160,232H96Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<path d="M232,148a52.00505,52.00505,0,0,1-80.459,43.52539l10.6538,34.08789A7.99984,7.99984,0,0,1,154.55908,236H101.44092a7.99954,7.99954,0,0,1-7.63526-10.38672L104.45459,191.542a51.7046,51.7046,0,0,1-29.9624,8.43653c-27.72657-.78516-50.377-24.00489-50.4917-51.75977A51.99976,51.99976,0,0,1,76,96q2.02881,0,4.04883.15625a52.00294,52.00294,0,1,1,95.89648,0,53.33621,53.33621,0,0,1,5.46387-.1377A51.70261,51.70261,0,0,1,232,148Z"/>`}
      ${weight === "light" && svg`<path d="M112.51708,179.15431a47.97767,47.97767,0,1,1-25.30276-77.83722l-.00069.00287a48,48,0,1,1,81.57046.00366l-.00718-.00443a48.00575,48.00575,0,1,1-25.29289,77.8364L160,232H96Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<path d="M112.51708,179.15431a47.97767,47.97767,0,1,1-25.30276-77.83722l-.00069.00287a48,48,0,1,1,81.57046.00366l-.00718-.00443a48.00575,48.00575,0,1,1-25.29289,77.8364L160,232H96Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<path d="M112.51708,179.15431a47.97767,47.97767,0,1,1-25.30276-77.83722l-.00069.00287a48,48,0,1,1,81.57046.00366l-.00718-.00443a48.00575,48.00575,0,1,1-25.29289,77.8364L160,232H96Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-club", PhClub);
export default PhClub;
