/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhHorse = {
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
      svg`<path d="M176,120a48,48,0,0,1-48,48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M63.99958,199.555a95.66337,95.66337,0,0,0,65.94315,24.42575c51.479-1.01726,93.33139-43.12958,94.04775-94.61366A96.00033,96.00033,0,0,0,128,32h-8V64L16,128l13.78709,19.11608a24.02393,24.02393,0,0,0,23.51449,9.61538c17.46763-2.95714,48.06093-4.71406,74.69861,11.26833L128,168,92.76585,217.32781" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="128" cy="104" r="16"/>`}
      ${weight === "duotone" &&
      svg`<path d="M92.76616,217.32808a95.841,95.841,0,0,0,37.17657,6.65271c51.479-1.01726,93.33139-43.12958,94.04775-94.61366A96.00033,96.00033,0,0,0,128,32h-8V64L16,128l13.78709,19.11608a24.02393,24.02393,0,0,0,23.51449,9.61538c17.46763-2.95714,48.06093-4.71406,74.69861,11.26833L128,168Z" opacity="0.2"/>
  <path d="M176,120a48,48,0,0,1-48,48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M63.99958,199.555a95.66337,95.66337,0,0,0,65.94315,24.42575c51.479-1.01726,93.33139-43.12958,94.04775-94.61366A96.00033,96.00033,0,0,0,128,32h-8V64L16,128l13.78709,19.11608a24.02393,24.02393,0,0,0,23.51449,9.61538c17.46763-2.95714,48.06093-4.71406,74.69861,11.26833L128,168,92.76585,217.32781" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="124" cy="100" r="12"/>`}
      ${weight === "fill" &&
      svg`<path d="M202.05273,54.97754A103.25474,103.25474,0,0,0,128,24h-8a8.00008,8.00008,0,0,0-8,8V59.52979L11.80762,121.18652a8.00037,8.00037,0,0,0-2.2959,11.49317L23.29883,151.7959a31.83519,31.83519,0,0,0,31.33789,12.82324c13.65137-2.31055,38.5918-4.23193,61.52441,6.19092L90.02246,207.40479a87.94423,87.94423,0,0,1-20.68652-13.81055,8.00031,8.00031,0,0,0-10.67188,11.92187A103.66141,103.66141,0,0,0,128.0127,232q1.043,0,2.08789-.02051A104.0011,104.0011,0,0,0,202.05273,54.97754ZM123.99976,112a12,12,0,1,1,12-12A12,12,0,0,1,123.99976,112Z"/>`}
      ${weight === "light" &&
      svg`<path d="M176,120a48,48,0,0,1-48,48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M63.99958,199.555a95.66337,95.66337,0,0,0,65.94315,24.42575c51.479-1.01726,93.33139-43.12958,94.04775-94.61366A96.00033,96.00033,0,0,0,128,32h-8V64L16,128l13.78709,19.11608a24.02393,24.02393,0,0,0,23.51449,9.61538c17.46763-2.95714,48.06093-4.71406,74.69861,11.26833L128,168,92.76585,217.32781" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="124" cy="100" r="10"/>`}
      ${weight === "thin" &&
      svg`<path d="M176,120a48,48,0,0,1-48,48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M63.99958,199.555a95.66337,95.66337,0,0,0,65.94315,24.42575c51.479-1.01726,93.33139-43.12958,94.04775-94.61366A96.00033,96.00033,0,0,0,128,32h-8V64L16,128l13.78709,19.11608a24.02393,24.02393,0,0,0,23.51449,9.61538c17.46763-2.95714,48.06093-4.71406,74.69861,11.26833L128,168,92.76585,217.32781" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="124" cy="100" r="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M176,120a48,48,0,0,1-48,48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M63.99958,199.555a95.66337,95.66337,0,0,0,65.94315,24.42575c51.479-1.01726,93.33139-43.12958,94.04775-94.61366A96.00033,96.00033,0,0,0,128,32h-8V64L16,128l13.78709,19.11608a24.02393,24.02393,0,0,0,23.51449,9.61538c17.46763-2.95714,48.06093-4.71406,74.69861,11.26833L128,168,92.76585,217.32781" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="124" cy="100" r="12"/>`}
    </svg>
  `,
};

define("ph-horse", PhHorse);
export default PhHorse;
