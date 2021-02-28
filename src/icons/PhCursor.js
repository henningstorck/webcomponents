/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhCursor = {
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
      svg`<path d="M38.18466,48.47939l58.21413,155.2377a8,8,0,0,0,15.009-.075L134.729,139.50856a8,8,0,0,1,4.78441-4.7844l64.13348-23.32127a8,8,0,0,0,.07505-15.009L48.48428,38.17977A8,8,0,0,0,38.18466,48.47939Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="136.59053" y1="136.58564" x2="208.00488" y2="208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M38.18466,48.47939l58.21413,155.2377a8,8,0,0,0,15.009-.075L134.729,139.50856a8,8,0,0,1,4.78441-4.7844l64.13348-23.32127a8,8,0,0,0,.07505-15.009L48.48428,38.17977A8,8,0,0,0,38.18466,48.47939Z" opacity="0.2"/>
  <path d="M38.18466,48.47939l58.21413,155.2377a8,8,0,0,0,15.009-.075L134.729,139.50856a8,8,0,0,1,4.78441-4.7844l64.13348-23.32127a8,8,0,0,0,.07505-15.009L48.48428,38.17977A8,8,0,0,0,38.18466,48.47939Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="136.59053" y1="136.58564" x2="208.00488" y2="208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M150.54443,139.22559l55.83594-20.30469a15.99964,15.99964,0,0,0,.15039-30.01758L51.29346,30.68945A15.99937,15.99937,0,0,0,30.69482,51.28906v-.00049L88.90869,206.52588a15.85524,15.85524,0,0,0,14.97656,10.38232h.084a15.86,15.86,0,0,0,14.957-10.53222L139.23047,150.54l63.11767,63.11719a8.00053,8.00053,0,0,0,11.31446-11.31446Z"/>`}
      ${weight === "light" &&
      svg`<path d="M38.18466,48.47939l58.21413,155.2377a8,8,0,0,0,15.009-.075L134.729,139.50856a8,8,0,0,1,4.78441-4.7844l64.13348-23.32127a8,8,0,0,0,.07505-15.009L48.48428,38.17977A8,8,0,0,0,38.18466,48.47939Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="136.59053" y1="136.58564" x2="208.00488" y2="208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M38.18466,48.47939l58.21413,155.2377a8,8,0,0,0,15.009-.075L134.729,139.50856a8,8,0,0,1,4.78441-4.7844l64.13348-23.32127a8,8,0,0,0,.07505-15.009L48.48428,38.17977A8,8,0,0,0,38.18466,48.47939Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="136.59053" y1="136.58564" x2="208.00488" y2="208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M38.18466,48.47939l58.21413,155.2377a8,8,0,0,0,15.009-.075L134.729,139.50856a8,8,0,0,1,4.78441-4.7844l64.13348-23.32127a8,8,0,0,0,.07505-15.009L48.48428,38.17977A8,8,0,0,0,38.18466,48.47939Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="136.59053" y1="136.58564" x2="208.00488" y2="208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-cursor", PhCursor);
export default PhCursor;
