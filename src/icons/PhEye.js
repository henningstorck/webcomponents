/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhEye = {
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
      svg`<path d="M128,55.99219C48,55.99219,16,128,16,128s32,71.99219,112,71.99219S240,128,240,128,208,55.99219,128,55.99219Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="128" cy="128" r="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M127.99414,55.99231c-80,0-112,72.00781-112,72.00781s32,71.99219,112,71.99219,112-71.99219,112-71.99219S207.99414,55.99231,127.99414,55.99231Zm0,112.0083a40,40,0,1,1,40-40A40.0001,40.0001,0,0,1,127.99414,168.00061Z" opacity="0.2"/>
  <path d="M127.99414,55.99219c-80,0-112,72.00781-112,72.00781s32,71.99219,112,71.99219,112-71.99219,112-71.99219S207.99414,55.99219,127.99414,55.99219Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="127.99414" cy="128.00061" r="40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M247.31055,124.75061c-.35157-.79-8.81934-19.57617-27.65332-38.41113C194.57324,61.25256,162.87793,47.99182,128,47.99182S61.42676,61.25256,36.34277,86.33948c-18.834,18.835-27.30175,37.62109-27.65332,38.41113a8.00282,8.00282,0,0,0,0,6.49805c.35157.791,8.82032,19.57226,27.6543,38.40429C61.42773,194.734,93.12207,207.99182,128,207.99182S194.57227,194.734,219.65625,169.653c18.834-18.832,27.30273-37.61328,27.6543-38.40429A8.00282,8.00282,0,0,0,247.31055,124.75061ZM128,92.00061a36,36,0,1,1-36,36A36.04061,36.04061,0,0,1,128,92.00061Z"/>`}
      ${weight === "light" &&
      svg`<path d="M128,55.99219C48,55.99219,16,128,16,128s32,71.99219,112,71.99219S240,128,240,128,208,55.99219,128,55.99219Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="128" cy="128.00061" r="40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M128,55.99219C48,55.99219,16,128,16,128s32,71.99219,112,71.99219S240,128,240,128,208,55.99219,128,55.99219Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="128" cy="128.00061" r="40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M128,55.99219C48,55.99219,16,128,16,128s32,71.99219,112,71.99219S240,128,240,128,208,55.99219,128,55.99219Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128" cy="128.00061" r="40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-eye", PhEye);
export default PhEye;
