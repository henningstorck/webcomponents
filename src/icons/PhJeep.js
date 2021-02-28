/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhJeep = {
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
      svg`<path d="M220,176v32a8,8,0,0,1-8,8H188a8,8,0,0,1-8-8V176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M76,176v32a8,8,0,0,1-8,8H44a8,8,0,0,1-8-8V176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="16" y1="96" x2="240" y2="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="128" y1="136" x2="128" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="168" y1="136" x2="168" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="88" y1="136" x2="88" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M220,176H36V96.00005l7.01877-49.13142A8,8,0,0,1,50.93836,40H205.06164a8,8,0,0,1,7.91959,6.86863L220,96.00005Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M220,176v32a8,8,0,0,1-8,8H188a8,8,0,0,1-8-8V176Z" opacity="0.2"/>
  <path d="M76,176v32a8,8,0,0,1-8,8H44a8,8,0,0,1-8-8V176Z" opacity="0.2"/>
  <path d="M36,96.00005l7.01877-49.13142A8,8,0,0,1,50.93836,40H205.06164a8,8,0,0,1,7.91959,6.86863L220,96.00005Z" opacity="0.2"/>
  <path d="M220,176v32a8,8,0,0,1-8,8H188a8,8,0,0,1-8-8V176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M76,176v32a8,8,0,0,1-8,8H44a8,8,0,0,1-8-8V176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="16" y1="96" x2="240" y2="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="144" y1="128" x2="144" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="112" y1="128" x2="112" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M220,176H36V96.00005l7.01877-49.13142A8,8,0,0,1,50.93836,40H205.06164a8,8,0,0,1,7.91959,6.86863L220,96.00005Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="72" cy="132" r="12"/>
  <circle cx="184" cy="132" r="12"/>`}
      ${weight === "fill" &&
      svg`<path d="M240,88H226.93848l-6.03809-42.26465A16.07879,16.07879,0,0,0,205.06152,32H50.93848A16.08053,16.08053,0,0,0,35.09863,45.7373L29.06128,88H16a8,8,0,0,0,0,16H28V208a16.01833,16.01833,0,0,0,16,16H68a16.01833,16.01833,0,0,0,16-16V184h20V128a8,8,0,0,1,16,0v56h16V128a8,8,0,0,1,16,0v56h20v24a16.01833,16.01833,0,0,0,16,16h24a16.01833,16.01833,0,0,0,16-16V104h12a8,8,0,0,0,0-16ZM68,208H44V184H68Zm4-64a12,12,0,1,1,12-12A12,12,0,0,1,72,144Zm112,0a12,12,0,1,1,12-12A12,12,0,0,1,184,144Zm28,64H188V184h24Z"/>`}
      ${weight === "light" &&
      svg`<path d="M220,176v32a8,8,0,0,1-8,8H188a8,8,0,0,1-8-8V176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M76,176v32a8,8,0,0,1-8,8H44a8,8,0,0,1-8-8V176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="16" y1="96" x2="240" y2="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="144" y1="128" x2="144" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="112" y1="128" x2="112" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M220,176H36V96.00005l7.01877-49.13142A8,8,0,0,1,50.93836,40H205.06164a8,8,0,0,1,7.91959,6.86863L220,96.00005Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="184" cy="132" r="10"/>
  <circle cx="72" cy="132" r="10"/>`}
      ${weight === "thin" &&
      svg`<path d="M220,176v32a8,8,0,0,1-8,8H188a8,8,0,0,1-8-8V176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M76,176v32a8,8,0,0,1-8,8H44a8,8,0,0,1-8-8V176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="16" y1="96" x2="240" y2="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="144" y1="128" x2="144" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="112" y1="128" x2="112" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M220,176H36V96.00005l7.01877-49.13142A8,8,0,0,1,50.93836,40H205.06164a8,8,0,0,1,7.91959,6.86863L220,96.00005Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="72" cy="132" r="8"/>
  <circle cx="184" cy="132" r="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M220,176v32a8,8,0,0,1-8,8H188a8,8,0,0,1-8-8V176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M76,176v32a8,8,0,0,1-8,8H44a8,8,0,0,1-8-8V176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="16" y1="96" x2="240" y2="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="144" y1="128" x2="144" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="112" y1="128" x2="112" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M220,176H36V96.00005l7.01877-49.13142A8,8,0,0,1,50.93836,40H205.06164a8,8,0,0,1,7.91959,6.86863L220,96.00005Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="72" cy="132" r="12"/>
  <circle cx="184" cy="132" r="12"/>`}
    </svg>
  `,
};

define("ph-jeep", PhJeep);
export default PhJeep;
