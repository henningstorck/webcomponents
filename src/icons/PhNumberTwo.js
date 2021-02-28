/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhNumberTwo = {
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
      svg`<path d="M83.77207,61.31625a48.00774,48.00774,0,1,1,84.03029,45.521v0L80,224v-.01149h96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M83.77207,61.31625a48.00774,48.00774,0,1,1,84.03029,45.521v0L80,224v-.01149h96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M184,223.98828a8.00008,8.00008,0,0,1-8,8H80.43555q-.21827.01245-.43653.01221a8.00346,8.00346,0,0,1-6.26757-12.9751l87.54687-116.82178a40.00778,40.00778,0,1,0-70.1377-37.771A8,8,0,1,1,76.4043,58.2002a56.00758,56.00758,0,1,1,98.02734,53.11523c-.07324.1084-.14844.21484-.22754.31934L96.001,215.98828H176A8.00039,8.00039,0,0,1,184,223.98828Z"/>`}
      ${weight === "light" &&
      svg`<path d="M83.77207,61.31625a48.00774,48.00774,0,1,1,84.03029,45.521v0L80,224v-.01149h96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M83.77207,61.31625a48.00774,48.00774,0,1,1,84.03029,45.521v0L80,224v-.01149h96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M83.77207,61.31625a48.00774,48.00774,0,1,1,84.03029,45.521v0L80,224v-.01149h96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-number-two", PhNumberTwo);
export default PhNumberTwo;
