/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhArrowFatLinesDown = {
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
      svg`<polygon points="32 136 128 232 224 136 176 136 176 116 80 116 80 136 32 136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="176" y1="44" x2="80" y2="44" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="176" y1="80" x2="80" y2="80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<polygon points="32 136 128 232 224 136 176 136 176 104 80 104 80 136 32 136" opacity="0.2"/>
  <polygon points="32 136 128 232 224 136 176 136 176 104 80 104 80 136 32 136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="176" y1="40" x2="80" y2="40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="176" y1="72" x2="80" y2="72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M229.65674,141.65723l-96,96a8.00182,8.00182,0,0,1-11.31348,0l-96-96A8.0001,8.0001,0,0,1,32,128H72V104a8.00008,8.00008,0,0,1,8-8h96a8.00008,8.00008,0,0,1,8,8v24h40a8.0001,8.0001,0,0,1,5.65674,13.65723ZM184,40a8.00008,8.00008,0,0,0-8-8H80a8,8,0,0,0,0,16h96A8.00008,8.00008,0,0,0,184,40Zm0,32a8.00008,8.00008,0,0,0-8-8H80a8,8,0,0,0,0,16h96A8.00008,8.00008,0,0,0,184,72Z"/>`}
      ${weight === "light" &&
      svg`<polygon points="32 136 128 232 224 136 176 136 176 104 80 104 80 136 32 136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="176" y1="40" x2="80" y2="40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="176" y1="72" x2="80" y2="72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<polygon points="32 136 128 232 224 136 176 136 176 104 80 104 80 136 32 136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="176" y1="40" x2="80" y2="40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="176" y1="72" x2="80" y2="72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<polygon points="32 136 128 232 224 136 176 136 176 104 80 104 80 136 32 136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="176" y1="40" x2="80" y2="40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="176" y1="72" x2="80" y2="72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-arrow-fat-lines-down", PhArrowFatLinesDown);
export default PhArrowFatLinesDown;
