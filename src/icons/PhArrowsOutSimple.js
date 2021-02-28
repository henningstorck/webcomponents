/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhArrowsOutSimple = {
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
      svg`<polyline points="160 48 208 48 208 96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="152" y1="104" x2="208" y2="48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="96 208 48 208 48 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="104" y1="152" x2="48" y2="208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<polyline points="160 48 208 48 208 96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="152" y1="104" x2="208" y2="48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="96 208 48 208 48 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="104" y1="152" x2="48" y2="208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <path d="M215.96,47.208c-.01074-.10767-.03125-.21216-.0459-.31861-.02148-.1521-.03955-.30444-.06933-.45532-.02539-.12646-.06006-.24853-.09131-.37256-.03174-.12915-.06055-.259-.09912-.38672-.03711-.12255-.0835-.24072-.126-.36059-.04541-.12647-.0874-.25366-.13867-.37842-.0459-.11108-.10059-.21728-.15137-.32568-.06006-.12866-.11719-.25806-.18506-.384-.05517-.10278-.11767-.20019-.17724-.30029-.07373-.124-.144-.24927-.22461-.36987-.07373-.10962-.15576-.21265-.23438-.31836-.07666-.10352-.14892-.20947-.23193-.31006-.14844-.18091-.30664-.35327-.47022-.52026-.02-.02076-.03711-.04346-.05761-.064-.01612-.01611-.03418-.0293-.0503-.04541-.17138-.1687-.34912-.331-.53564-.48389-.09375-.07714-.19287-.14453-.28955-.21679-.11279-.084-.22266-.17139-.33985-.24951-.11279-.07569-.23046-.14136-.34668-.2107-.10791-.06469-.21386-.13257-.32519-.19214-.1167-.0625-.23682-.11523-.356-.17138-.11767-.05591-.2334-.1145-.35449-.16455-.11377-.04712-.22949-.085-.34473-.12647-.13134-.04736-.26074-.09741-.395-.13794-.11377-.03442-.22949-.05932-.34423-.08862-.1377-.03516-.27442-.07324-.41455-.10107-.13038-.02588-.26221-.04078-.39356-.06006-.127-.01856-.252-.04248-.38086-.05494-.23193-.02294-.46484-.03271-.69824-.0354C208.05859,40.00415,208.02979,40,208,40H160a8,8,0,0,0,0,16h28.686L146.34277,98.34326a8.00018,8.00018,0,0,0,11.31446,11.31348L200,67.314V96a8,8,0,0,0,16,0V48.00513Q216,47.606,215.96,47.208Z"/>
    <path d="M98.34277,146.34326,56,188.686V160a8,8,0,0,0-16,0v47.99487q0,.39918.04.79712c.01074.10767.03125.21216.0459.31861.02148.1521.03955.30444.06933.45532.02539.12646.06006.24853.09131.37256.03174.12915.06055.259.09912.38672.03711.12255.0835.24072.126.36059.04541.12647.0874.25366.13867.37842.0459.11108.10059.21728.15137.32568.06006.12866.11719.25806.18506.384.05517.10278.11767.20019.17724.30029.07373.124.14405.24927.22461.36987.07373.10962.15576.21265.23438.31836.07666.10352.14892.20947.23193.31006.14844.18091.30664.35327.47022.52026.02.02076.03711.04346.05761.064.01612.01611.03418.0293.0503.04541.17138.1687.34912.33105.53564.48389.09424.07763.19385.145.291.21777.11181.08374.22168.17041.33789.24853.11474.07666.23388.14331.35156.21363.10644.06347.21045.13012.31934.18872.12011.06421.24365.11865.36621.17627.11425.05395.22656.11084.34375.15942.11816.04907.23877.08862.35888.13159.12647.04541.25147.09375.38037.13306.12012.03613.2417.06274.36231.093.13184.0332.26221.07031.39648.09692.14063.02783.28321.04443.42481.0647.1167.0166.231.03882.34912.05029.26221.02588.52588.04.78955.04H96a8,8,0,0,0,0-16H67.314l42.34327-42.34326a8.00018,8.00018,0,0,0-11.31446-11.31348Z"/>
  </g>`}
      ${weight === "light" &&
      svg`<polyline points="160 48 208 48 208 96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="152" y1="104" x2="208" y2="48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="96 208 48 208 48 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="104" y1="152" x2="48" y2="208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<polyline points="160 48 208 48 208 96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="152" y1="104" x2="208" y2="48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="96 208 48 208 48 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="104" y1="152" x2="48" y2="208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<polyline points="160 48 208 48 208 96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="152" y1="104" x2="208" y2="48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="96 208 48 208 48 160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="104" y1="152" x2="48" y2="208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-arrows-out-simple", PhArrowsOutSimple);
export default PhArrowsOutSimple;
