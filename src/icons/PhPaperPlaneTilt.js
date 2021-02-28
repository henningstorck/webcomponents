/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhPaperPlaneTilt = {
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
      svg`<path d="M210.25072,35.878,23.923,88.432a8,8,0,0,0-1.253,14.9295l85.61084,40.5525a8.00008,8.00008,0,0,1,3.80521,3.80521L152.63852,233.33a8,8,0,0,0,14.9295-1.253L220.122,45.74928A8,8,0,0,0,210.25072,35.878Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="110.86292" y1="145.13708" x2="156.11775" y2="99.88225" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M210.25072,35.878,23.923,88.432a8,8,0,0,0-1.253,14.9295l85.61084,40.5525a8.00008,8.00008,0,0,1,3.80521,3.80521L152.63852,233.33a8,8,0,0,0,14.9295-1.253L220.122,45.74928A8,8,0,0,0,210.25072,35.878Z" opacity="0.2"/>
  <path d="M210.25072,35.878,23.923,88.432a8,8,0,0,0-1.253,14.9295l85.61084,40.5525a8.00008,8.00008,0,0,1,3.80521,3.80521L152.63852,233.33a8,8,0,0,0,14.9295-1.253L220.122,45.74928A8,8,0,0,0,210.25072,35.878Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="110.86292" y1="145.13708" x2="156.11775" y2="99.88225" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M223.73633,32.26367a16.01051,16.01051,0,0,0-15.65723-4.085L21.751,80.73242a15.9995,15.9995,0,0,0-2.50586,29.8584l77.93359,36.916,53.28223-53.28223a8.00052,8.00052,0,0,1,11.31445,11.31445l-53.28223,53.28223,36.916,77.93359a15.85235,15.85235,0,0,0,14.41406,9.15235q.687,0,1.38379-.05762A15.86994,15.86994,0,0,0,175.26758,234.249L227.82129,47.9209A16.0173,16.0173,0,0,0,223.73633,32.26367Z"/>`}
      ${weight === "light" &&
      svg`<path d="M210.25072,35.878,23.923,88.432a8,8,0,0,0-1.253,14.9295l85.61084,40.5525a8.00008,8.00008,0,0,1,3.80521,3.80521L152.63852,233.33a8,8,0,0,0,14.9295-1.253L220.122,45.74928A8,8,0,0,0,210.25072,35.878Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="110.86292" y1="145.13708" x2="156.11775" y2="99.88225" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M210.25072,35.878,23.923,88.432a8,8,0,0,0-1.253,14.9295l85.61084,40.5525a8.00008,8.00008,0,0,1,3.80521,3.80521L152.63852,233.33a8,8,0,0,0,14.9295-1.253L220.122,45.74928A8,8,0,0,0,210.25072,35.878Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="110.86292" y1="145.13708" x2="156.11775" y2="99.88225" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M210.25072,35.878,23.923,88.432a8,8,0,0,0-1.253,14.9295l85.61084,40.5525a8.00008,8.00008,0,0,1,3.80521,3.80521L152.63852,233.33a8,8,0,0,0,14.9295-1.253L220.122,45.74928A8,8,0,0,0,210.25072,35.878Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="110.86292" y1="145.13708" x2="156.11775" y2="99.88225" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-paper-plane-tilt", PhPaperPlaneTilt);
export default PhPaperPlaneTilt;
