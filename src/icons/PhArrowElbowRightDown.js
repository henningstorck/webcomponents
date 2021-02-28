/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhArrowElbowRightDown = {
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
      svg`<polyline points="128 160 176 208 224 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="32 64 176 64 176 208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<polyline points="128 160 176 208 224 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="32 64 176 64 176 208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M229.65723,154.34326a8.00122,8.00122,0,0,0-11.31446,0L184,188.6864V64a8.00008,8.00008,0,0,0-8-8H32a8,8,0,0,0,0,16H168V188.6864l-34.34277-34.34314a8.00018,8.00018,0,0,0-11.31446,11.31348l48,48c.01612.01611.03418.02936.0503.04529.17138.16882.34912.33123.53564.48413.09424.07757.19385.145.291.21765.11181.08374.22168.17053.33789.24847.11474.07685.23388.14344.35156.21369.10644.06341.21045.13012.31934.18866.12011.06421.24365.11865.36621.17627.11425.054.22656.111.34375.15954.11816.04895.23877.08844.35888.13141.12647.04547.25147.09393.38037.13312.12012.03619.2417.06268.36231.09314.13183.03326.26221.07019.39648.0968.14063.02789.28321.04456.42481.06482.1167.01666.231.03876.34912.05035.26221.02588.52588.03992.78955.03992s.52734-.014.78955-.03992c.11816-.01159.23242-.03369.34912-.05035.1416-.02026.28418-.03693.42481-.06482.13427-.02661.26464-.06354.39648-.0968.12061-.03046.24219-.057.36231-.09314.1289-.03919.2539-.08765.38037-.13312.12011-.043.24072-.08246.35888-.13141.11719-.04858.2295-.10559.34375-.15954.12256-.05762.2461-.11206.36621-.17627.10889-.05854.21289-.12525.31934-.18866.11768-.07025.23682-.13684.35156-.21369.11621-.07794.22608-.16473.33789-.24847.09717-.07263.19678-.14008.291-.21765.18652-.1529.36426-.31531.53564-.48413.01612-.01593.03418-.02918.0503-.04529l48-48A8,8,0,0,0,229.65723,154.34326Z"/>`}
      ${weight === "light" &&
      svg`<polyline points="128 160 176 208 224 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="32 64 176 64 176 208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<polyline points="128 160 176 208 224 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="32 64 176 64 176 208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<polyline points="128 160 176 208 224 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="32 64 176 64 176 208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-arrow-elbow-right-down", PhArrowElbowRightDown);
export default PhArrowElbowRightDown;
