/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhBuildings = {
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
      svg`<path d="M143.99414,223.98316v-184a8,8,0,0,0-8-8h-96a8,8,0,0,0-8,8v184" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M223.99414,223.98316v-120a8,8,0,0,0-8-8h-72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="67.99414" y1="71.98316" x2="95.99414" y2="71.98316" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="79.99414" y1="151.98316" x2="107.99414" y2="151.98316" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="67.99414" y1="191.98316" x2="95.99414" y2="191.98316" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="179.99414" y1="175.98316" x2="187.99414" y2="175.98316" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="179.99414" y1="135.98316" x2="187.99414" y2="135.98316" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M143.99414,223.98316v-184a8,8,0,0,0-8-8h-96a8,8,0,0,0-8,8v184" opacity="0.2"/>
  <path d="M143.99414,223.98316v-184a8,8,0,0,0-8-8h-96a8,8,0,0,0-8,8v184" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M223.99414,223.98316v-120a8,8,0,0,0-8-8h-72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="63.99414" y1="71.98316" x2="95.99414" y2="71.98316" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="79.99414" y1="151.98316" x2="111.99414" y2="151.98316" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="63.99414" y1="191.98316" x2="95.99414" y2="191.98316" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="175.99414" y1="175.98316" x2="191.99414" y2="175.98316" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="175.99414" y1="135.98316" x2="191.99414" y2="135.98316" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M191.99414,167.98316h-16a8,8,0,0,0,0,16h16a8,8,0,1,0,0-16Z"/>
  <path d="M191.99414,127.98316h-16a8,8,0,0,0,0,16h16a8,8,0,1,0,0-16Z"/>
  <path d="M215.99414,87.98316h-64v-48a16.01833,16.01833,0,0,0-16-16h-96a16.01833,16.01833,0,0,0-16,16v184a8.00009,8.00009,0,0,0,8,8h112a8.00009,8.00009,0,0,0,8-8v-120h64v120a8,8,0,0,0,16,0v-120A16.01833,16.01833,0,0,0,215.99414,87.98316Zm-152-24h32a8,8,0,1,1,0,16h-32a8,8,0,0,1,0-16Zm32,136h-32a8,8,0,0,1,0-16h32a8,8,0,1,1,0,16Zm16-40h-32a8,8,0,0,1,0-16h32a8,8,0,1,1,0,16Z"/>`}
      ${weight === "light" &&
      svg`<path d="M143.99414,223.98316v-184a8,8,0,0,0-8-8h-96a8,8,0,0,0-8,8v184" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M223.99414,223.98316v-120a8,8,0,0,0-8-8h-72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="63.99414" y1="71.98316" x2="95.99414" y2="71.98316" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="79.99414" y1="151.98316" x2="111.99414" y2="151.98316" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="63.99414" y1="191.98316" x2="95.99414" y2="191.98316" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="175.99414" y1="175.98316" x2="191.99414" y2="175.98316" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="175.99414" y1="135.98316" x2="191.99414" y2="135.98316" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M143.99414,223.98316v-184a8,8,0,0,0-8-8h-96a8,8,0,0,0-8,8v184" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M223.99414,223.98316v-120a8,8,0,0,0-8-8h-72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="63.99414" y1="71.98316" x2="95.99414" y2="71.98316" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="79.99414" y1="151.98316" x2="111.99414" y2="151.98316" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="63.99414" y1="191.98316" x2="95.99414" y2="191.98316" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="175.99414" y1="175.98316" x2="191.99414" y2="175.98316" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="175.99414" y1="135.98316" x2="191.99414" y2="135.98316" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M143.99414,223.98316v-184a8,8,0,0,0-8-8h-96a8,8,0,0,0-8,8v184" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M223.99414,223.98316v-120a8,8,0,0,0-8-8h-72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="63.99414" y1="71.98316" x2="95.99414" y2="71.98316" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="79.99414" y1="151.98316" x2="111.99414" y2="151.98316" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="63.99414" y1="191.98316" x2="95.99414" y2="191.98316" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="175.99414" y1="175.98316" x2="191.99414" y2="175.98316" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="175.99414" y1="135.98316" x2="191.99414" y2="135.98316" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-buildings", PhBuildings);
export default PhBuildings;
