/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhPaperPlane = {
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
      svg`<path d="M120.90154,36.46437,26.30921,205.37925A8,8,0,0,0,35.98,216.822l89.211-31.86106a8,8,0,0,1,5.38138,0l89.211,31.86106a8,8,0,0,0,9.67074-11.44277L134.86164,36.46437A8,8,0,0,0,120.90154,36.46437Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="127.88159" y1="184" x2="127.88159" y2="120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M120.90154,36.46437,26.30921,205.37925A8,8,0,0,0,35.98,216.822l89.211-31.86106a8,8,0,0,1,5.38138,0l89.211,31.86106a8,8,0,0,0,9.67074-11.44277L134.86164,36.46437A8,8,0,0,0,120.90154,36.46437Z" opacity="0.2"/>
  <path d="M120.90154,36.46437,26.30921,205.37925A8,8,0,0,0,35.98,216.822l89.211-31.86106a8,8,0,0,1,5.38138,0l89.211,31.86106a8,8,0,0,0,9.67074-11.44277L134.86164,36.46437A8,8,0,0,0,120.90154,36.46437Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="127.88159" y1="184" x2="127.88159" y2="120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M236.43432,201.4707l-94.59179-168.915a16.00119,16.00119,0,0,0-27.92188,0L19.32885,201.47021A16.00042,16.00042,0,0,0,38.67065,224.356l81.21094-29.00391V120a8,8,0,1,1,16,0v75.352L217.09253,224.356a16.171,16.171,0,0,0,5.44531.95117,16.02221,16.02221,0,0,0,13.89648-23.83643Z"/>`}
      ${weight === "light" &&
      svg`<path d="M120.90154,36.46437,26.30921,205.37925A8,8,0,0,0,35.98,216.822l89.211-31.86106a8,8,0,0,1,5.38138,0l89.211,31.86106a8,8,0,0,0,9.67074-11.44277L134.86164,36.46437A8,8,0,0,0,120.90154,36.46437Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="127.88159" y1="184" x2="127.88159" y2="120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M120.90154,36.46437,26.30921,205.37925A8,8,0,0,0,35.98,216.822l89.211-31.86106a8,8,0,0,1,5.38138,0l89.211,31.86106a8,8,0,0,0,9.67074-11.44277L134.86164,36.46437A8,8,0,0,0,120.90154,36.46437Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="127.88159" y1="184" x2="127.88159" y2="120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M120.90154,36.46437,26.30921,205.37925A8,8,0,0,0,35.98,216.822l89.211-31.86106a8,8,0,0,1,5.38138,0l89.211,31.86106a8,8,0,0,0,9.67074-11.44277L134.86164,36.46437A8,8,0,0,0,120.90154,36.46437Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="127.88159" y1="184" x2="127.88159" y2="120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-paper-plane", PhPaperPlane);
export default PhPaperPlane;
