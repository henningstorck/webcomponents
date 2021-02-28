/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhSpeakerLow = {
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
      svg`<path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="79.98242" y1="88" x2="79.98242" y2="168" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M190.61551,105.37258a32,32,0,0,1,0,45.25484" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80Z" opacity="0.2"/>
  <path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="79.9707" y1="88" x2="79.9707" y2="168" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M190.62723,105.37258a32,32,0,0,1,0,45.25484" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <path d="M155.51465,24.81927a7.99655,7.99655,0,0,0-8.42578.87207l-69.834,54.31445H32a16.01833,16.01833,0,0,0-16,16v64a16.01833,16.01833,0,0,0,16,16H77.25488l69.834,54.31446A7.99958,7.99958,0,0,0,160,224.00579v-192A7.9997,7.9997,0,0,0,155.51465,24.81927ZM32,96.00579H71.9707v64H32Z"/>
    <path d="M196.2832,99.72161a7.99984,7.99984,0,0,0-11.3125,11.31446,23.99831,23.99831,0,0,1,0,33.93945A7.99983,7.99983,0,1,0,196.2832,156.29a39.99719,39.99719,0,0,0,0-56.56836Z"/>
  </g>`}
      ${weight === "light" &&
      svg`<path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="79.98828" y1="88" x2="79.98828" y2="168" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M190.60965,105.37258a32,32,0,0,1,0,45.25484" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="79.99414" y1="88" x2="79.99414" y2="168" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M190.60379,105.37258a32,32,0,0,1,0,45.25484" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="80" y1="88" x2="80" y2="168" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M190.59793,105.37258a32,32,0,0,1,0,45.25484" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-speaker-low", PhSpeakerLow);
export default PhSpeakerLow;
