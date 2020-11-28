/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhPrinter = {
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
      ${weight === "bold" && svg`<rect x="63.99414" y="40" width="128" height="40" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="63.99414" y="156" width="128" height="64" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M63.99414,176h-36V96c0-8.83656,7.7604-16,17.33333-16H210.66081c9.57293,0,17.33333,7.16344,17.33333,16v80h-36" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="188" cy="116" r="16"/>`}
      ${weight === "duotone" && svg`<path d="M210.66083,80H45.32751c-9.57293,0-17.33337,7.16357-17.33337,16v80h36V152h128v24h36V96C227.99414,87.16357,220.23376,80,210.66083,80Z" opacity="0.2"/>
  <rect x="63.99414" y="40" width="128" height="40" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="63.99414" y="152" width="128" height="68" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M63.99414,176h-36V96c0-8.83656,7.7604-16,17.33333-16H210.66081c9.57293,0,17.33333,7.16344,17.33333,16v80h-36" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="188" cy="116" r="12"/>`}
      ${weight === "fill" && svg`<path d="M210.66064,72h-10.6665V40a8.00008,8.00008,0,0,0-8-8h-128a8.00008,8.00008,0,0,0-8,8V72H45.32764c-13.96875,0-25.3335,10.7666-25.3335,24v80a8.00008,8.00008,0,0,0,8,8h28v36a8.00008,8.00008,0,0,0,8,8h128a8.00008,8.00008,0,0,0,8-8V184h28a8.00008,8.00008,0,0,0,8-8V96C235.99414,82.7666,224.62939,72,210.66064,72ZM71.99414,48h112V72h-112Zm112,164h-112V160h112Zm4-84a12,12,0,1,1,12-12A12,12,0,0,1,187.99414,128Z"/>`}
      ${weight === "light" && svg`<polyline points="63.994 80 63.994 40 191.994 40 191.994 80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="63.99414" y="152" width="128" height="68" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M63.99414,176h-36V96c0-8.83656,7.7604-16,17.33333-16H210.66081c9.57293,0,17.33333,7.16344,17.33333,16v80h-36" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="188" cy="116" r="10"/>`}
      ${weight === "thin" && svg`<polyline points="63.994 80 63.994 40 191.994 40 191.994 80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="63.99414" y="152" width="128" height="68" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M63.99414,176h-36V96c0-8.83656,7.7604-16,17.33333-16H210.66081c9.57293,0,17.33333,7.16344,17.33333,16v80h-36" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="188" cy="116" r="8"/>`}
      ${weight === "regular" && svg`<polyline points="63.994 80 63.994 40 191.994 40 191.994 80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="63.99414" y="152" width="128" height="68" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M63.99414,176h-36V96c0-8.83656,7.7604-16,17.33333-16H210.66081c9.57293,0,17.33333,7.16344,17.33333,16v80h-36" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="188" cy="116" r="12"/>`}
    </svg>
  `,
};

define("ph-printer", PhPrinter);
export default PhPrinter;
