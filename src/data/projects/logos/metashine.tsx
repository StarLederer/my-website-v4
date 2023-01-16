import { Component } from "solid-js";

const Main: Component<{ class?: string }> = (props) => (
  <svg
    class={props.class}
    viewBox="0 0 10 10"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs id="defs2">
      <linearGradient id="linearGradient2712">
        <stop
          style="stop-color:currentColor;stop-opacity:0.2;"
          offset="0"
        />
        <stop
          style="stop-color:currentColor;stop-opacity:0.1;"
          offset="1"
        />
      </linearGradient>
      <linearGradient
        xlink:href="#linearGradient2712"
        id="linearGradient2714"
        x1="0"
        y1="10"
        x2="10"
        y2="0"
        gradientUnits="userSpaceOnUse"
      />
    </defs>
    <circle
      style="display:inline;fill:url(#linearGradient2714);"
      cx="5"
      cy="5"
      r="5"
    />
    <g style="fill:currentColor;">
      <path
        d="m 5.2798227,-1.0344199 c -0.079026,0.0907575 -0.1226676,0.20697212 -0.122915,0.32731312 V 0.70710678 C 5.1569372,0.98320742 5.3807536,1.2070239 5.6568542,1.2070534 5.9329549,1.2070239 6.1567713,0.98320746 6.1568008,0.70710678 V -0.70710678 C 6.1567713,-0.98320746 5.9329549,-1.2070239 5.6568542,-1.2070534 c -0.1447402,2.603e-4 -0.2822654,0.06323 -0.3770315,0.1726335 z"
        transform="rotate(45)"
      />
      <path
        d="M 6.6940363 -2.4486334 A 0.5 0.5 0 0 0 6.5711212 -2.1213203 L 6.5711212 2.1213203 A 0.5 0.5 0 0 0 7.0710678 2.6212669 A 0.5 0.5 0 0 0 7.5710144 2.1213203 A 0.5 0.5 0 0 0 7.5710144 2.0964611 L 7.5710144 -2.1213203 A 0.5 0.5 0 0 0 7.0710678 -2.6212669 A 0.5 0.5 0 0 0 6.6940363 -2.4486334 z "
        transform="rotate(45)"
      />
      <path
        d="m 8.1082498,-1.0344199 c -0.079026,0.0907575 -0.1226676,0.20697212 -0.122915,0.32731312 V 0.70710678 C 7.9853643,0.98320746 8.2091807,1.2070239 8.4852814,1.2070534 8.7613821,1.2070239 8.9851985,0.98320746 8.985228,0.70710678 V -0.70710678 C 8.9851985,-0.98320746 8.7613821,-1.2070239 8.4852814,-1.2070534 c -0.1447402,2.603e-4 -0.2822655,0.06323 -0.3770316,0.1726335 z"
        transform="rotate(45)"
      />
    </g>
  </svg>

);

export default Main;
