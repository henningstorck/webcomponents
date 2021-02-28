/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhTrainSimple = {
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
      svg`<line x1="44" y1="128" x2="212" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="96" y1="208" x2="72" y2="240" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="160" y1="208" x2="184" y2="240" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <rect x="44" y="32" width="168" height="176" rx="24" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="88" cy="168" r="16"/>
  <circle cx="168" cy="168" r="16"/>`}
      ${weight === "duotone" &&
      svg`<path d="M212,56a24,24,0,0,0-24-24H68A24,24,0,0,0,44,56v72H212Z" opacity="0.2"/>
  <line x1="44" y1="128" x2="212" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="96" y1="208" x2="72" y2="240" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="160" y1="208" x2="184" y2="240" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="44" y="32" width="168" height="176" rx="24" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="84" cy="172" r="12"/>
  <circle cx="172" cy="172" r="12"/>`}
      ${weight === "fill" &&
      svg`<g>
    <path d="M188,24H68A32.03667,32.03667,0,0,0,36,56V184a32.03667,32.03667,0,0,0,32,32H79.99976L65.59961,235.2002a8.00019,8.00019,0,0,0,12.80078,9.5996L100.00024,216h55.99952l21.59985,28.7998a8.00019,8.00019,0,0,0,12.80078-9.5996L176.00024,216H188a32.03667,32.03667,0,0,0,32-32V56A32.03667,32.03667,0,0,0,188,24Zm0,176H68a16.01833,16.01833,0,0,1-16-16V136H204v48A16.01833,16.01833,0,0,1,188,200Z"/>
    <circle cx="84" cy="172" r="12"/>
    <circle cx="172" cy="172" r="12"/>
  </g>`}
      ${weight === "light" &&
      svg`<line x1="44" y1="128" x2="212" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="96" y1="208" x2="72" y2="240" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="160" y1="208" x2="184" y2="240" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="44" y="32" width="168" height="176" rx="24" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="172" cy="172" r="10"/>
  <circle cx="84" cy="172" r="10"/>`}
      ${weight === "thin" &&
      svg`<line x1="44" y1="128" x2="212" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="96" y1="208" x2="72" y2="240" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="160" y1="208" x2="184" y2="240" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="44" y="32" width="168" height="176" rx="24" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="84" cy="172" r="8"/>
  <circle cx="172" cy="172" r="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="44" y1="128" x2="212" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="96" y1="208" x2="72" y2="240" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="160" y1="208" x2="184" y2="240" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="44" y="32" width="168" height="176" rx="24" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="84" cy="172" r="12"/>
  <circle cx="172" cy="172" r="12"/>`}
    </svg>
  `,
};

define("ph-train-simple", PhTrainSimple);
export default PhTrainSimple;
