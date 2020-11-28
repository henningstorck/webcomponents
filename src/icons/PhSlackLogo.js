/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhSlackLogo = {
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
      <slot></slot>
      ${weight === "bold" &&
      svg`<path d="M80,56.00005h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V80a24,24,0,0,1,24-24Z" transform="translate(184.00005 24.00003) rotate(90)" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M128,80H104a24,24,0,0,1-24-24V56a24,24,0,0,1,24-24h0a24,24,0,0,1,24,24Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M152,32.00007h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V56A24,24,0,0,1,152,32.00007Z" transform="translate(304 160.00011) rotate(180)" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M176,128V104a24,24,0,0,1,24-24h0a24,24,0,0,1,24,24v0a24,24,0,0,1-24,24Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M176,104.00005h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V128a24,24,0,0,1,24-24Z" transform="translate(23.99995 328.00003) rotate(-90)" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M128,176h24a24,24,0,0,1,24,24v0a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M104,128h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V152A24,24,0,0,1,104,128Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M80,128v24a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24v0a24,24,0,0,1,24-24Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M176,104.00005h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V128a24,24,0,0,1,24-24Z" transform="translate(23.99995 328.00003) rotate(-90)" opacity="0.2"/>
  <path d="M128,176h24a24,24,0,0,1,24,24v0a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24Z" opacity="0.2"/>
  <path d="M80,56.00005h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V80a24,24,0,0,1,24-24Z" transform="translate(184.00005 24.00003) rotate(90)" opacity="0.2"/>
  <path d="M128,80H104a24,24,0,0,1-24-24V56a24,24,0,0,1,24-24h0a24,24,0,0,1,24,24Z" opacity="0.2"/>
  <path d="M80,56.00005h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V80a24,24,0,0,1,24-24Z" transform="translate(184.00005 24.00003) rotate(90)" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M128,80H104a24,24,0,0,1-24-24V56a24,24,0,0,1,24-24h0a24,24,0,0,1,24,24Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M152,32.00007h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V56A24,24,0,0,1,152,32.00007Z" transform="translate(304 160.00011) rotate(180)" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M176,128V104a24,24,0,0,1,24-24h0a24,24,0,0,1,24,24v0a24,24,0,0,1-24,24Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M176,104.00005h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V128a24,24,0,0,1,24-24Z" transform="translate(23.99995 328.00003) rotate(-90)" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M128,176h24a24,24,0,0,1,24,24v0a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M104,128h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V152A24,24,0,0,1,104,128Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M80,128v24a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24v0a24,24,0,0,1,24-24Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M221.13184,128A31.97762,31.97762,0,0,0,184,76.30522V56a31.97939,31.97939,0,0,0-56-21.132A31.97768,31.97768,0,0,0,76.30518,72H56a31.97928,31.97928,0,0,0-21.13184,56A31.97763,31.97763,0,0,0,72,179.69487V200a31.97939,31.97939,0,0,0,56,21.132A31.97768,31.97768,0,0,0,179.69482,184H200a31.97928,31.97928,0,0,0,21.13184-56ZM88,56a16,16,0,0,1,32,0V72H104A16.01833,16.01833,0,0,1,88,56ZM40,104A16.01833,16.01833,0,0,1,56,88h48a16.01833,16.01833,0,0,1,16,16v16H56A16.01833,16.01833,0,0,1,40,104Zm128,96a16,16,0,0,1-32,0V184h16A16.01833,16.01833,0,0,1,168,200Zm32-32H152a16.01833,16.01833,0,0,1-16-16V136h64a16,16,0,0,1,0,32Z"/>`}
      ${weight === "light" &&
      svg`<path d="M80,56.00005h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V80a24,24,0,0,1,24-24Z" transform="translate(184.00005 24.00003) rotate(90)" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M128,80H104a24,24,0,0,1-24-24V56a24,24,0,0,1,24-24h0a24,24,0,0,1,24,24Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M152,32.00007h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V56a24,24,0,0,1,24-24Z" transform="translate(304 160.00011) rotate(180)" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M176,128V104a24,24,0,0,1,24-24h0a24,24,0,0,1,24,24v0a24,24,0,0,1-24,24Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M176,104.00005h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V128A24,24,0,0,1,176,104.00005Z" transform="translate(23.99995 328.00003) rotate(-90)" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M128,176h24a24,24,0,0,1,24,24v0a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M104,128h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V152A24,24,0,0,1,104,128Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M80,128v24a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24v0a24,24,0,0,1,24-24Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M80,56.00005h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V80a24,24,0,0,1,24-24Z" transform="translate(184.00005 24.00003) rotate(90)" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M128,80H104a24,24,0,0,1-24-24V56a24,24,0,0,1,24-24h0a24,24,0,0,1,24,24Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M152,32.00007h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V56A24,24,0,0,1,152,32.00007Z" transform="translate(304 160.00011) rotate(180)" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M176,128V104a24,24,0,0,1,24-24h0a24,24,0,0,1,24,24v0a24,24,0,0,1-24,24Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M176,104.00005h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V128a24,24,0,0,1,24-24Z" transform="translate(23.99995 328.00003) rotate(-90)" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M128,176h24a24,24,0,0,1,24,24v0a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M104,128h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V152a24,24,0,0,1,24-24Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M80,128v24a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24v0a24,24,0,0,1,24-24Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M80,56.00005h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V80a24,24,0,0,1,24-24Z" transform="translate(184.00005 24.00003) rotate(90)" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M128,80H104a24,24,0,0,1-24-24V56a24,24,0,0,1,24-24h0a24,24,0,0,1,24,24Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M152,32.00007h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V56a24,24,0,0,1,24-24Z" transform="translate(304 160.00011) rotate(180)" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M176,128V104a24,24,0,0,1,24-24h0a24,24,0,0,1,24,24v0a24,24,0,0,1-24,24Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M176,104.00005h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V128a24,24,0,0,1,24-24Z" transform="translate(23.99995 328.00003) rotate(-90)" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M128,176h24a24,24,0,0,1,24,24v0a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M104,128h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V152a24,24,0,0,1,24-24Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M80,128v24a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24v0a24,24,0,0,1,24-24Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-slack-logo", PhSlackLogo);
export default PhSlackLogo;
