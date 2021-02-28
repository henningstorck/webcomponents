/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhMedal = {
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
      svg`<circle cx="127.99414" cy="96" r="80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="128" cy="96" r="40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="176 159.995 176 240 127.993 216 80 240 80 160.002" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<circle cx="127.99414" cy="96" r="48" opacity="0.2"/>
  <circle cx="127.99414" cy="96" r="80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="127.99414" cy="96" r="48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="176 159.995 176 240 127.993 216 80 240 80 160.002" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <circle cx="127.99414" cy="96" r="56"/>
    <path d="M127.99414,8A87.96624,87.96624,0,0,0,72,163.8374V240a7.99951,7.99951,0,0,0,11.57812,7.15527l44.415-22.21093,44.42969,22.21142A8,8,0,0,0,184,240V163.82764A87.96617,87.96617,0,0,0,127.99414,8Zm0,160a72,72,0,1,1,72-72A72.08124,72.08124,0,0,1,127.99414,168Z"/>
  </g>`}
      ${weight === "light" &&
      svg`<circle cx="127.99414" cy="96" r="80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="127.99414" cy="96" r="48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="176 159.995 176 240 127.993 216 80 240 80 160.002" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<circle cx="127.99414" cy="96" r="80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="127.99414" cy="96" r="48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="176 159.995 176 240 127.993 216 80 240 80 160.002" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<circle cx="127.99414" cy="96" r="80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="127.99414" cy="96" r="48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="176 159.995 176 240 127.993 216 80 240 80 160.002" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-medal", PhMedal);
export default PhMedal;
