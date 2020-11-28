/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhKeyboard = {
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
      ${weight === "bold" && svg`<rect x="24" y="56" width="208" height="144" rx="8.48528" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="64" y1="128" x2="192" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="64" y1="92" x2="192" y2="92" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="64" y1="164" x2="72" y2="164" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="108" y1="164" x2="148" y2="164" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="184" y1="164" x2="192" y2="164" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<rect x="24" y="56" width="208" height="144" rx="8.48528" opacity="0.2"/>
  <rect x="24" y="56" width="208" height="144" rx="8.48528" stroke-width="16.97056" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="56" y1="128" x2="200" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="56" y1="96" x2="200" y2="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="56" y1="160" x2="64" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="96" y1="160" x2="160" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="192" y1="160" x2="200" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<path d="M223.51465,47.51465H32.48535a16.99025,16.99025,0,0,0-16.9707,16.9707v127.0293a16.99025,16.99025,0,0,0,16.9707,16.9707h191.0293a16.99025,16.99025,0,0,0,16.9707-16.9707V64.48535A16.99025,16.99025,0,0,0,223.51465,47.51465ZM64,168H56a8,8,0,0,1,0-16h8a8,8,0,0,1,0,16Zm96,0H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm40,0h-8a8,8,0,0,1,0-16h8a8,8,0,0,1,0,16Zm0-32H56a8,8,0,0,1,0-16H200a8,8,0,0,1,0,16Zm0-32H56a8,8,0,0,1,0-16H200a8,8,0,0,1,0,16Z"/>`}
      ${weight === "light" && svg`<rect x="24" y="56" width="208" height="144" rx="8.48528" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="56" y1="128" x2="200" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="56" y1="96" x2="200" y2="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="56" y1="160" x2="64" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="96" y1="160" x2="160" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="192" y1="160" x2="200" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<rect x="24" y="56" width="208" height="144" rx="8.48528" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="56" y1="128" x2="200" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="56" y1="96" x2="200" y2="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="56" y1="160" x2="64" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="96" y1="160" x2="160" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="192" y1="160" x2="200" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<rect x="24" y="56" width="208" height="144" rx="8.48528" stroke-width="16.97056" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="56" y1="128" x2="200" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="56" y1="96" x2="200" y2="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="56" y1="160" x2="64" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="96" y1="160" x2="160" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="192" y1="160" x2="200" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-keyboard", PhKeyboard);
export default PhKeyboard;
