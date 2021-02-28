/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhArrowFatLineDown = {
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
      svg`<polygon points="32 136 128 232 224 136 176 136 176 80 80 80 80 136 32 136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="176" y1="40" x2="80" y2="40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<polygon points="32 136 128 232 224 136 176 136 176 72 80 72 80 136 32 136" opacity="0.2"/>
  <polygon points="32 136 128 232 224 136 176 136 176 72 80 72 80 136 32 136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="176" y1="40" x2="80" y2="40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M229.65723,141.65723l-96,96a8.003,8.003,0,0,1-11.31446,0l-96-96A8.00065,8.00065,0,0,1,32,128H72V72a8.00039,8.00039,0,0,1,8-8h96a8.00039,8.00039,0,0,1,8,8v56h40a8.00066,8.00066,0,0,1,5.65723,13.65723ZM184,40a8.00039,8.00039,0,0,0-8-8H80a8,8,0,0,0,0,16h96A8.00039,8.00039,0,0,0,184,40Z"/>`}
      ${weight === "light" &&
      svg`<polygon points="32 136 128 232 224 136 176 136 176 72 80 72 80 136 32 136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="176" y1="40" x2="80" y2="40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<polygon points="32 136 128 232 224 136 176 136 176 72 80 72 80 136 32 136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="176" y1="40" x2="80" y2="40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<polygon points="32 136 128 232 224 136 176 136 176 72 80 72 80 136 32 136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="176" y1="40" x2="80" y2="40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-arrow-fat-line-down", PhArrowFatLineDown);
export default PhArrowFatLineDown;
