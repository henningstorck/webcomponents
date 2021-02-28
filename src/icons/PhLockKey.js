/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhLockKey = {
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
      svg`<rect x="39.99414" y="88" width="176" height="128" rx="8" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M91.99414,88V52a36,36,0,1,1,72,0V88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="127.99414" cy="144" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="127.99414" y1="164" x2="127.99414" y2="180" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M207.99414,88h-160a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8h160a8,8,0,0,0,8-8V96A8,8,0,0,0,207.99414,88Zm-80,72a20,20,0,1,1,20-20A20.00006,20.00006,0,0,1,127.99414,160Z" opacity="0.2"/>
  <circle cx="127.99414" cy="140" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="127.99414" y1="160" x2="127.99414" y2="184" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="39.99414" y="88" width="176" height="128" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M91.99414,88V52a36,36,0,1,1,72,0V88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <circle cx="127.99414" cy="140" r="12"/>
    <path d="M207.99414,80h-36V52a44,44,0,1,0-88,0V80h-36a16.01833,16.01833,0,0,0-16,16V208a16.01833,16.01833,0,0,0,16,16h160a16.01833,16.01833,0,0,0,16-16V96A16.01833,16.01833,0,0,0,207.99414,80Zm-72,86.82935V184a8,8,0,1,1-16,0V166.82935a28,28,0,1,1,16,0Zm20-86.82935h-56V52a28,28,0,1,1,56,0Z"/>
  </g>`}
      ${weight === "light" &&
      svg`<circle cx="127.99414" cy="140" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="127.99414" y1="160" x2="127.99414" y2="184" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="39.99414" y="88" width="176" height="128" rx="8" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M91.99414,88V52a36,36,0,1,1,72,0V88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<circle cx="127.99414" cy="140" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="127.99414" y1="160" x2="127.99414" y2="184" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="39.99414" y="88" width="176" height="128" rx="8" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M91.99414,88V52a36,36,0,1,1,72,0V88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<circle cx="127.99414" cy="140" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="127.99414" y1="160" x2="127.99414" y2="184" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="39.99414" y="88" width="176" height="128" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M91.99414,88V52a36,36,0,1,1,72,0V88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-lock-key", PhLockKey);
export default PhLockKey;
