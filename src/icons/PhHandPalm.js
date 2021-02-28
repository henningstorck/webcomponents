/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhHandPalm = {
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
      svg`<path d="M128,104V52a20,20,0,0,1,40,0v80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M88,112V36a20,20,0,0,1,40,0v68" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M128,172a40,40,0,0,1,40-40V112a20,20,0,0,1,40,0v40a80,80,0,0,1-160,0V76a20,20,0,0,1,40,0v36" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M168,112a20,20,0,0,1,40,0v40a80,80,0,0,1-160,0V76a20,20,0,0,1,40,0V36a20,20,0,0,1,40,0V52a20,20,0,0,1,40,0Z" opacity="0.2"/>
  <path d="M128,104V52a20,20,0,0,1,40,0v80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M88,112V36a20,20,0,0,1,40,0v68" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M128,172a40,40,0,0,1,40-40V112a20,20,0,0,1,40,0v40a80,80,0,0,1-160,0V76a20,20,0,0,1,40,0v36" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M188,84a27.83152,27.83152,0,0,0-12,2.707V52a27.992,27.992,0,0,0-41.35791-24.60278A27.99792,27.99792,0,0,0,80,36V50.707A27.991,27.991,0,0,0,40,76v76a88,88,0,0,0,176,0V112A28.03146,28.03146,0,0,0,188,84Zm12,68a72,72,0,0,1-144,0V76a12,12,0,0,1,24,0v36a8,8,0,0,0,16,0V36a12,12,0,0,1,24,0v68a8,8,0,0,0,16,0V52a12,12,0,0,1,24,0v72.6665A48.07871,48.07871,0,0,0,120,172a8,8,0,0,0,16,0,32.03635,32.03635,0,0,1,32-32,8.00008,8.00008,0,0,0,8-8V112a12,12,0,0,1,24,0Z"/>`}
      ${weight === "light" &&
      svg`<path d="M128,104V52a20,20,0,0,1,40,0v80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M88,112V36a20,20,0,0,1,40,0v68" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M128,172a40,40,0,0,1,40-40V112a20,20,0,0,1,40,0v40a80,80,0,0,1-160,0V76a20,20,0,0,1,40,0v36" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M128,104V52a20,20,0,0,1,40,0v80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M88,112V36a20,20,0,0,1,40,0v68" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M128,172a40,40,0,0,1,40-40V112a20,20,0,0,1,40,0v40a80,80,0,0,1-160,0V76a20,20,0,0,1,40,0v36" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M128,104V52a20,20,0,0,1,40,0v80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M88,112V36a20,20,0,0,1,40,0v68" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M128,172a40,40,0,0,1,40-40V112a20,20,0,0,1,40,0v40a80,80,0,0,1-160,0V76a20,20,0,0,1,40,0v36" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-hand-palm", PhHandPalm);
export default PhHandPalm;
