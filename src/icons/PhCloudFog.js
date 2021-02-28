/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhCloudFog = {
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
      svg`<line x1="120" y1="200" x2="72" y2="200" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="184" y1="200" x2="160" y2="200" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="160" y1="240" x2="104" y2="240" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792" opacity="0.2"/>
  <line x1="120" y1="192" x2="72" y2="192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="184" y1="192" x2="160" y2="192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="160" y1="224" x2="104" y2="224" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M120,200H72a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm64-16H160a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Zm-24,32H104a8,8,0,0,0,0,16h56a8,8,0,0,0,0-16ZM156,16A76.13113,76.13113,0,0,0,85.03711,64.7832,52.0037,52.0037,0,1,0,76,168h80a76,76,0,0,0,0-152Z"/>`}
      ${weight === "light" &&
      svg`<line x1="120" y1="192" x2="72" y2="192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="184" y1="192" x2="160" y2="192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="160" y1="224" x2="104" y2="224" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<line x1="120" y1="192" x2="72" y2="192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="184" y1="192" x2="160" y2="192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="160" y1="224" x2="104" y2="224" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="120" y1="192" x2="72" y2="192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="184" y1="192" x2="160" y2="192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="160" y1="224" x2="104" y2="224" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-cloud-fog", PhCloudFog);
export default PhCloudFog;
