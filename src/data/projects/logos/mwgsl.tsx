import { Component } from "solid-js";

const Main: Component<{ class?: string }> = (props) => (
  <svg
    class={props.class ?? ""}
    viewBox="0 0 10 10"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g style="stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0.5;">
      {/* <g>
        <path
          style="fill:#808000;fill-opacity:0.6"
          d="m 1,5 2,1 2,-1 -2,-1 z"
        />
        <path
          style="fill:red;fill-opacity:0.6"
          d="m 3,2 1e-7,2 2,1 -1e-7,-2 z"
        />
      </g> */}
      <g style="stroke:currentColor;">
        <path
          style="fill:none;"
          d="m 3,2 v 2 L 1,5"
        />
        <path
          style="fill:currentColor;fill-opacity:0.2"
          d="m 5,3 -2,1 2,1 L 9,3 5,1 3,2 Z"
        />
        <path
          style="fill:currentColor;fill-opacity:0.6"
          d="m 3,6 0,-2 2,1 -2e-7,4 -4,-2 0,-2 z"
        />
        <path
          style="fill:currentColor;"
          d="m 5,5 1e-7,4 4,-2 -10e-8,-4 z"
        />
      </g>
    </g>
  </svg>
);

export default Main;
