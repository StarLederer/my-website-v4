import { Component } from "solid-js";

const Main: Component<{ class?: string }> = (props) => (
  <svg
    class={props.class ?? ""}
    viewBox="0 0 10 10"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g style="fill:none;stroke:currentColor;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round">
      <path d="M 6,3 H 8 Z" />
      <path d="m 6,7 c 0.5,0 1,0 2,0 z" />
      <path d="m 2,5 2,1e-7 z" />
    </g>

    <g>
      <path style="fill:currentColor;fill-opacity:0.1;" d="M 1,8.5 V 1.5 A 0.5,0.5 135 0 1 1.5,1 L 4.5,1 a 0.5,0.5 45 0 1 0.5,0.5 v 7 a 5,0.5 135 0 1 -0.5,0.5 l -3,-10e-8 a 0.5,0.5 45 0 1 -0.5,-0.5 z" />
      <path style="fill:currentColor;fill-opacity:0.2;" d="m 5,1.5 v 3 a 0.5,0.5 45 0 0 0.5,0.5 l 3,-10e-8 a 0.5,0.5 135 0 0 0.5,-0.5 V 1.5 a 0.5,0.5 45 0 0 -0.5,-0.5 L 5.5,1 a 0.5,0.5 135 0 0 -0.5,0.5 z" />
      <path style="fill:currentColor;fill-opacity:0.4;" d="m 5,5.5 v 3 a 0.5,0.5 45 0 0 0.5,0.5 h 3 a 0.5,0.5 135 0 0 0.5,-0.5 V 5.5 a 0.5,0.5 45 0 0 -0.5,-0.5 H 5.5 a 0.5,0.5 135 0 0 -0.5,0.5 z" />
    </g>
  </svg>


);

export default Main;
