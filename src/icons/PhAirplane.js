/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhAirplane = {
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
      ${weight === "bold" && svg`<path d="M128,224l-40,8V208l16-16V152L24,168V144l80-40,.11255-56a24,24,0,0,1,48,0l.11255,56,80,40v24l-80-16v40L168,208v24Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<path d="M128,224l-40,8V208l16-16V152L24,168V144l80-40,.11255-56a24,24,0,0,1,48,0l.11255,56,80,40v24l-80-16v40L168,208v24Z" opacity="0.2"/>
  <path d="M128,224l-40,8V208l16-16V152L24,168V144l80-40,.11255-56a24,24,0,0,1,48,0l.11255,56,80,40v24l-80-16v40L168,208v24Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<path d="M235.80371,136.84473,160.21582,99.05078,160.1123,48a32,32,0,0,0-64-.01611l-.10253,51.06689L20.42188,136.84473A7.99967,7.99967,0,0,0,16,144v24a8.00012,8.00012,0,0,0,9.56934,7.84473L96,161.7583V188.686L82.34277,202.34326A8.00035,8.00035,0,0,0,80,208v24a8.00012,8.00012,0,0,0,9.56934,7.84473L128,232.1582l38.43066,7.68653A8.00012,8.00012,0,0,0,176,232V208a8.00119,8.00119,0,0,0-2.30273-5.6167l-13.47168-13.66357V161.7583l70.43066,14.08643A8.00013,8.00013,0,0,0,240.22559,168V144A7.99969,7.99969,0,0,0,235.80371,136.84473Z"/>`}
      ${weight === "light" && svg`<path d="M128,224l-40,8V208l16-16V152L24,168V144l80-40,.11255-56a24,24,0,0,1,48,0l.11255,56,80,40v24l-80-16v40L168,208v24Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<path d="M128,224l-40,8V208l16-16V152L24,168V144l80-40,.11255-56a24,24,0,0,1,48,0l.11255,56,80,40v24l-80-16v40L168,208v24Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<path d="M128,224l-40,8V208l16-16V152L24,168V144l80-40,.11255-56a24,24,0,0,1,48,0l.11255,56,80,40v24l-80-16v40L168,208v24Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-airplane", PhAirplane);
export default PhAirplane;
