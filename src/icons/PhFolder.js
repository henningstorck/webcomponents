/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhFolder = {
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
      svg`<path d="M216.88889,208H39.38462A7.40633,7.40633,0,0,1,32,200.61538V80H216a8,8,0,0,1,8,8V200.88889A7.11111,7.11111,0,0,1,216.88889,208Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M98.38675,46.68509,128,80H32V52a8,8,0,0,1,8-8H92.40747A8,8,0,0,1,98.38675,46.68509Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M98.34315,50.34315,128,80H32V56a8,8,0,0,1,8-8H92.68629A8,8,0,0,1,98.34315,50.34315Z" opacity="0.2"/>
  <path d="M216.88889,208H39.38462A7.40633,7.40633,0,0,1,32,200.61538V80H216a8,8,0,0,1,8,8V200.88889A7.11111,7.11111,0,0,1,216.88889,208Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M32,80V56a8,8,0,0,1,8-8H92.68629a8,8,0,0,1,5.65686,2.34315L128,80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M215.99512,71.99805h-84.6875l-27.3125-27.3125a15.8907,15.8907,0,0,0-11.3125-4.6875H39.99512a16.01581,16.01581,0,0,0-16,16V200.61523a15.404,15.404,0,0,0,15.39062,15.38282h177.5a15.13062,15.13062,0,0,0,15.10938-15.10938V87.99805A16.01582,16.01582,0,0,0,215.99512,71.99805Zm-176-16h52.6875l16,16H39.99512Z"/>`}
      ${weight === "light" &&
      svg`<path d="M216.88889,208H39.38462A7.40633,7.40633,0,0,1,32,200.61538V80H216a8,8,0,0,1,8,8V200.88889A7.11111,7.11111,0,0,1,216.88889,208Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M32,80V56a8,8,0,0,1,8-8H92.68629a8,8,0,0,1,5.65686,2.34315L128,80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M216.88889,208H39.38462A7.40633,7.40633,0,0,1,32,200.61538V80H216a8,8,0,0,1,8,8V200.88889A7.11111,7.11111,0,0,1,216.88889,208Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M32,80V56a8,8,0,0,1,8-8H92.68629a8,8,0,0,1,5.65686,2.34315L128,80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M216.88889,208H39.38462A7.40633,7.40633,0,0,1,32,200.61538V80H216a8,8,0,0,1,8,8V200.88889A7.11111,7.11111,0,0,1,216.88889,208Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M32,80V56a8,8,0,0,1,8-8H92.68629a8,8,0,0,1,5.65686,2.34315L128,80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-folder", PhFolder);
export default PhFolder;
