/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhArrowElbowRight = {
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
      svg`<polyline points="160 80 232 80 232 152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="24 96 120 192 232 80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<polyline points="160 80 232 80 232 152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="24 96 120 192 232 80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M239.96,79.208c-.0105-.10718-.031-.21118-.04565-.31714-.02124-.15259-.0398-.30567-.06983-.457-.0249-.12525-.05957-.24634-.09009-.36939-.03247-.13037-.06127-.26123-.10034-.39013-.03662-.12073-.08227-.23706-.12426-.35523-.04566-.12866-.08838-.25781-.14063-.38428-.04492-.10791-.09766-.21118-.147-.31665-.06153-.132-.12061-.26464-.1897-.39379-.052-.09693-.11157-.18873-.16724-.28309-.0769-.13024-.15088-.26147-.23584-.38806-.06616-.09887-.14038-.19116-.21093-.28686-.08423-.11438-.16431-.23084-.25537-.34156-.116-.14111-.242-.27368-.36719-.40649-.05445-.05762-.1023-.11914-.15869-.17554-.05347-.05334-.11158-.09851-.166-.15-.13623-.12879-.27222-.25769-.417-.37671-.10449-.08582-.21411-.16077-.32178-.24048-.10229-.07593-.2019-.15539-.3081-.22644-.11817-.0791-.24073-.14795-.36206-.22-.10352-.06177-.20459-.12671-.311-.18359-.11816-.06324-.23975-.117-.36035-.17383-.1167-.05518-.23169-.11328-.35132-.16284-.11255-.04663-.22754-.084-.3418-.12525-.13256-.04785-.26367-.09839-.39917-.1394-.10962-.03308-.22094-.057-.3313-.08521-.14233-.0365-.2832-.07592-.42846-.10461-.12134-.02405-.24414-.0376-.36621-.05591-.136-.02039-.27027-.04553-.40845-.059-.2019-.01977-.40454-.02612-.60718-.03064C232.11743,72.00757,232.05981,72,232,72H160a8,8,0,0,0,0,16h52.68555L120,180.68652,29.65723,90.34277a8.00053,8.00053,0,0,0-11.31446,11.31446l96,96a8.00181,8.00181,0,0,0,11.31446,0L224,99.31445V152a8,8,0,0,0,16,0V80.00513A7.97965,7.97965,0,0,0,239.96,79.208Z"/>`}
      ${weight === "light" &&
      svg`<polyline points="160 80 232 80 232 152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="24 96 120 192 232 80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<polyline points="160 80 232 80 232 152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="24 96 120 192 232 80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<polyline points="160 80 232 80 232 152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="24 96 120 192 232 80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-arrow-elbow-right", PhArrowElbowRight);
export default PhArrowElbowRight;
