/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhWarning = {
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
      svg`<line x1="128" y1="96" x2="128" y2="136" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M114.15243,39.98472,26.17616,191.977a16.00005,16.00005,0,0,0,13.84762,24.01535H215.97625A16,16,0,0,0,229.82386,191.977L141.84757,39.98472A16,16,0,0,0,114.15243,39.98472Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="128" cy="176" r="16"/>`}
      ${weight === "duotone" &&
      svg`<path d="M114.15243,39.98472,26.17616,191.977a16.00005,16.00005,0,0,0,13.84762,24.01535H215.97625A16,16,0,0,0,229.82386,191.977L141.84757,39.98472A16,16,0,0,0,114.15243,39.98472Z" opacity="0.2"/>
  <line x1="128" y1="96" x2="128" y2="144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M114.15243,39.98472,26.17616,191.977a16.00005,16.00005,0,0,0,13.84762,24.01535H215.97625A16,16,0,0,0,229.82386,191.977L141.84757,39.98472A16,16,0,0,0,114.15243,39.98472Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128" cy="180" r="12"/>`}
      ${weight === "fill" &&
      svg`<path d="M236.74414,187.96585l-87.96875-152a24.012,24.012,0,0,0-41.54687,0v.00782L19.25977,187.96585a23.9982,23.9982,0,0,0,20.76562,36.02344H215.97852a23.9982,23.9982,0,0,0,20.76562-36.02344Zm-116.75-91.96875a8,8,0,1,1,16,0v48a8,8,0,1,1-16,0ZM128,192a12,12,0,1,1,12-12A12.00059,12.00059,0,0,1,128,192Z"/>`}
      ${weight === "light" &&
      svg`<line x1="128" y1="96" x2="128" y2="144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M114.15243,39.98472,26.17616,191.977a16.00005,16.00005,0,0,0,13.84762,24.01535H215.97625A16,16,0,0,0,229.82386,191.977L141.84757,39.98472A16,16,0,0,0,114.15243,39.98472Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="128" cy="180" r="10"/>`}
      ${weight === "thin" &&
      svg`<line x1="128" y1="96" x2="128" y2="144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M114.15243,39.98472,26.17616,191.977a16.00005,16.00005,0,0,0,13.84762,24.01535H215.97625A16,16,0,0,0,229.82386,191.977L141.84757,39.98472A16,16,0,0,0,114.15243,39.98472Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="128" cy="180" r="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="128" y1="96" x2="128" y2="144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M114.15243,39.98472,26.17616,191.977a16.00005,16.00005,0,0,0,13.84762,24.01535H215.97625A16,16,0,0,0,229.82386,191.977L141.84757,39.98472A16,16,0,0,0,114.15243,39.98472Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128" cy="180" r="12"/>`}
    </svg>
  `,
};

define("ph-warning", PhWarning);
export default PhWarning;
