/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhArrowFatLineUp = {
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
      svg`<polygon points="32 120 128 24 224 120 176 120 176 176 80 176 80 120 32 120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="176" y1="216" x2="80" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<polygon points="32 120 128 24 224 120 176 120 176 184 80 184 80 120 32 120" opacity="0.2"/>
  <polygon points="32 120 128 24 224 120 176 120 176 184 80 184 80 120 32 120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="176" y1="216" x2="80" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M231.39062,123.06152A8,8,0,0,1,224,128H184v56a8.00039,8.00039,0,0,1-8,8H80a8.00039,8.00039,0,0,1-8-8V128H32a8.00065,8.00065,0,0,1-5.65723-13.65723l96-96a8.003,8.003,0,0,1,11.31446,0l96,96A8.002,8.002,0,0,1,231.39062,123.06152ZM176,208H80a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z"/>`}
      ${weight === "light" &&
      svg`<polygon points="32 120 128 24 224 120 176 120 176 184 80 184 80 120 32 120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="176" y1="216" x2="80" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<polygon points="32 120 128 24 224 120 176 120 176 184 80 184 80 120 32 120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="176" y1="216" x2="80" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<polygon points="32 120 128 24 224 120 176 120 176 184 80 184 80 120 32 120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="176" y1="216" x2="80" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-arrow-fat-line-up", PhArrowFatLineUp);
export default PhArrowFatLineUp;
