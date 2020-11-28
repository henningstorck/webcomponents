/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhTicket = {
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
      svg`<line x1="96" y1="56" x2="96" y2="200" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M24,167.19024a7.98836,7.98836,0,0,1,6.39917-7.83019,32.00785,32.00785,0,0,0,0-62.7201A7.98836,7.98836,0,0,1,24,88.80976V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V88.80976A7.98836,7.98836,0,0,1,225.60083,96.64a32.00785,32.00785,0,0,0,0,62.7201A7.98836,7.98836,0,0,1,232,167.19024V192a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M96,56H224a8,8,0,0,1,8,8V88.80976A7.98836,7.98836,0,0,1,225.60083,96.64a32.00785,32.00785,0,0,0,0,62.7201A7.98836,7.98836,0,0,1,232,167.19024V192a8,8,0,0,1-8,8H96Z" opacity="0.2"/>
  <line x1="96" y1="56" x2="96" y2="200" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M24,167.19024a7.98836,7.98836,0,0,1,6.39917-7.83019,32.00785,32.00785,0,0,0,0-62.7201A7.98836,7.98836,0,0,1,24,88.80976V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V88.80976A7.98836,7.98836,0,0,1,225.60083,96.64a32.00785,32.00785,0,0,0,0,62.7201A7.98836,7.98836,0,0,1,232,167.19024V192a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M227.19141,104.48A16.04032,16.04032,0,0,0,240,88.80957V64a16.01833,16.01833,0,0,0-16-16H32A16.01833,16.01833,0,0,0,16,64V88.80957A16.04032,16.04032,0,0,0,28.80859,104.48a24.00818,24.00818,0,0,1,0,47.04A16.04032,16.04032,0,0,0,16,167.19043V192a16.01833,16.01833,0,0,0,16,16H224a16.01833,16.01833,0,0,0,16-16V167.19043A16.04032,16.04032,0,0,0,227.19141,151.52a24.00818,24.00818,0,0,1,0-47.04ZM32,167.19824a40.00306,40.00306,0,0,0,0-78.38867V64H88V192H32Z"/>`}
      ${weight === "light" &&
      svg`<line x1="96" y1="56" x2="96" y2="200" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M24,167.19024a7.98836,7.98836,0,0,1,6.39917-7.83019,32.00785,32.00785,0,0,0,0-62.7201A7.98836,7.98836,0,0,1,24,88.80976V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V88.80976A7.98836,7.98836,0,0,1,225.60083,96.64a32.00785,32.00785,0,0,0,0,62.7201A7.98836,7.98836,0,0,1,232,167.19024V192a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<line x1="96" y1="56" x2="96" y2="200" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M24,167.19024a7.98836,7.98836,0,0,1,6.39917-7.83019,32.00785,32.00785,0,0,0,0-62.7201A7.98836,7.98836,0,0,1,24,88.80976V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V88.80976A7.98836,7.98836,0,0,1,225.60083,96.64a32.00785,32.00785,0,0,0,0,62.7201A7.98836,7.98836,0,0,1,232,167.19024V192a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="96" y1="56" x2="96" y2="200" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M24,167.19024a7.98836,7.98836,0,0,1,6.39917-7.83019,32.00785,32.00785,0,0,0,0-62.7201A7.98836,7.98836,0,0,1,24,88.80976V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V88.80976A7.98836,7.98836,0,0,1,225.60083,96.64a32.00785,32.00785,0,0,0,0,62.7201A7.98836,7.98836,0,0,1,232,167.19024V192a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-ticket", PhTicket);
export default PhTicket;
