/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhAnchor = {
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
      svg`<line x1="128" y1="232" x2="128" y2="72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="128" cy="52" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="88" y1="112" x2="168" y2="112" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M40,144a48,48,0,0,0,48,48,40,40,0,0,1,40,40,40,40,0,0,1,40-40,48,48,0,0,0,48-48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<line x1="128" y1="232" x2="128" y2="72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128" cy="52" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="88" y1="112" x2="168" y2="112" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M40,144a48,48,0,0,0,48,48,40,40,0,0,1,40,40,40,40,0,0,1,40-40,48,48,0,0,0,48-48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M216,136a8.00039,8.00039,0,0,0-8,8,40.04584,40.04584,0,0,1-40,40,47.79539,47.79539,0,0,0-32,12.27148V120h32a8,8,0,0,0,0-16H136V78.8291a28,28,0,1,0-16,0V104H88a8,8,0,0,0,0,16h32v76.27148A47.79539,47.79539,0,0,0,88,184a40.04584,40.04584,0,0,1-40-40,8,8,0,0,0-16,0,56.0629,56.0629,0,0,0,56,56,32.03667,32.03667,0,0,1,32,32,8,8,0,0,0,16,0,32.03667,32.03667,0,0,1,32-32,56.0629,56.0629,0,0,0,56-56A8.00039,8.00039,0,0,0,216,136ZM116,52a12,12,0,1,1,12,12A12.01312,12.01312,0,0,1,116,52Z"/>`}
      ${weight === "light" &&
      svg`<line x1="128" y1="232" x2="128" y2="72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="128" cy="52" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="88" y1="112" x2="168" y2="112" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M40,144a48,48,0,0,0,48,48,40,40,0,0,1,40,40,40,40,0,0,1,40-40,48,48,0,0,0,48-48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<line x1="128" y1="232" x2="128" y2="72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="128" cy="52" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="88" y1="112" x2="168" y2="112" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M40,144a48,48,0,0,0,48,48,40,40,0,0,1,40,40,40,40,0,0,1,40-40,48,48,0,0,0,48-48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="128" y1="232" x2="128" y2="72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128" cy="52" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="88" y1="112" x2="168" y2="112" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M40,144a48,48,0,0,0,48,48,40,40,0,0,1,40,40,40,40,0,0,1,40-40,48,48,0,0,0,48-48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-anchor", PhAnchor);
export default PhAnchor;
