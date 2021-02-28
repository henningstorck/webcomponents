/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhTable = {
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
      svg`<path d="M32.0002,56H223.9998a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40.0002a8,8,0,0,1-8-8V56A0,0,0,0,1,32.0002,56Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="32" y1="104" x2="224" y2="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="32" y1="152" x2="224" y2="152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="88.00008" y1="104" x2="88.00008" y2="200" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<rect x="32.0002" y="104" width="55.99988" height="96" opacity="0.2"/>
  <path d="M32.0002,56H223.9998a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40.0002a8,8,0,0,1-8-8V56A0,0,0,0,1,32.0002,56Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="32" y1="104" x2="224" y2="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="32" y1="152" x2="224" y2="152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="88.00008" y1="104" x2="88.00008" y2="200" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M224.00586,48h-192a7.99977,7.99977,0,0,0-8,8V192a16.01833,16.01833,0,0,0,16,16h176a16.01833,16.01833,0,0,0,16-16V56A7.99977,7.99977,0,0,0,224.00586,48Zm-184,64h40v32h-40Zm56,0H216.01l.00244,32H96.00586Zm-56,48h40v32h-40Zm176,32h-120V160H216.01367l.00244,31.99951Z"/>`}
      ${weight === "light" &&
      svg`<path d="M32.0002,56H223.9998a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40.0002a8,8,0,0,1-8-8V56A0,0,0,0,1,32.0002,56Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="32" y1="104" x2="224" y2="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="32" y1="152" x2="224" y2="152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="88.00008" y1="104" x2="88.00008" y2="200" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M32.0002,56H223.9998a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40.0002a8,8,0,0,1-8-8V56A0,0,0,0,1,32.0002,56Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="32" y1="104" x2="224" y2="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="32" y1="152" x2="224" y2="152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="88.00008" y1="104" x2="88.00008" y2="200" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M32.0002,56H223.9998a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40.0002a8,8,0,0,1-8-8V56A0,0,0,0,1,32.0002,56Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="32" y1="104" x2="224" y2="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="32" y1="152" x2="224" y2="152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="88.00008" y1="104" x2="88.00008" y2="200" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-table", PhTable);
export default PhTable;
