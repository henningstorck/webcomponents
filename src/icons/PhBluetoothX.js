/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhBluetoothX = {
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
      svg`<polygon points="120 128.003 184 176.003 120 224.003 120 128.003" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="56" y1="80.00256" x2="120" y2="128.00256" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="56" y1="176.00256" x2="120" y2="128.00256" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="232" y1="56" x2="184" y2="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="232" y1="104" x2="184" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="144.406 109.698 120 128.003 120 32.003 144.405 50.307" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<polygon points="119.971 32.003 183.971 80.003 119.971 128.003 119.971 32.003" opacity="0.2"/>
  <polygon points="119.971 128 183.971 176 119.971 224 119.971 128" opacity="0.2"/>
  <polygon points="120 128.003 184 176.003 120 224.003 120 128.003" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="56" y1="80.00256" x2="120" y2="128.00256" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="56" y1="176.00256" x2="120" y2="128.00256" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="232" y1="56" x2="184" y2="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="232" y1="104" x2="184" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="152 104.002 120 128.003 120 32.003 151.999 56.002" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <path d="M188.7998,169.60254,133.333,128.00244l23.46679-17.6001a7.9998,7.9998,0,1,0-9.59961-12.7998L128,112.00244v-64l19.19922,14.39893a7.99981,7.99981,0,0,0,9.59961-12.79981l-31.999-23.999A8,8,0,0,0,112,32.00244v80.00025L60.7998,73.60254a7.9998,7.9998,0,0,0-9.59961,12.7998l55.4668,41.6001-55.4668,41.6001a7.9998,7.9998,0,1,0,9.59961,12.7998L112,144.0022v80.00024a7.99975,7.99975,0,0,0,12.7998,6.3999l64-48a7.9995,7.9995,0,0,0,0-12.7998ZM128,208.00244v-64l42.6665,32Z"/>
    <path d="M219.31348,80l18.34326-18.34326a7.99984,7.99984,0,0,0-11.31348-11.31348L208,68.68652,189.65674,50.34326a7.99984,7.99984,0,0,0-11.31348,11.31348L196.68652,80,178.34326,98.34326a7.99984,7.99984,0,1,0,11.31348,11.31348L208,91.31348l18.34326,18.34326a7.99984,7.99984,0,1,0,11.31348-11.31348Z"/>
  </g>`}
      ${weight === "light" &&
      svg`<polygon points="120 128.003 184 176.003 120 224.003 120 128.003" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="56" y1="80.00256" x2="120" y2="128.00256" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="56" y1="176.00256" x2="120" y2="128.00256" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="232" y1="56" x2="184" y2="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="232" y1="104" x2="184" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="152 104.002 120 128.003 120 32.003 151.999 56.002" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<polygon points="120 128.003 184 176.003 120 224.003 120 128.003" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="56" y1="80.00256" x2="120" y2="128.00256" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="56" y1="176.00256" x2="120" y2="128.00256" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="232" y1="56" x2="184" y2="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="232" y1="104" x2="184" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="152 104.002 120 128.003 120 32.003 151.999 56.002" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<polygon points="120 128.003 184 176.003 120 224.003 120 128.003" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="56" y1="80.00256" x2="120" y2="128.00256" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="56" y1="176.00256" x2="120" y2="128.00256" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="232" y1="56" x2="184" y2="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="232" y1="104" x2="184" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="152 104.002 120 128.003 120 32.003 151.999 56.002" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-bluetooth-x", PhBluetoothX);
export default PhBluetoothX;
