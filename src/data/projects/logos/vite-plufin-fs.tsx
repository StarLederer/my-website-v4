import { Component } from "solid-js";

const Main: Component<{ class?: string }> = (props) => (
  <svg
    class={props.class ?? ""}
    viewBox="0 0 10 11"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg">
    <g>
      <path
        style="fill:currentColor;fill-opacity:0.2;"
        d="m 1,7.75 v 1.5 A 0.5855823,0.5855823 37.981878 0 0 1.7276069,9.8180983 L 8.2723931,8.1819017 A 0.9605823,0.9605823 127.98188 0 0 9,7.25 V 5.75 A 0.5855823,0.5855823 37.981878 0 0 8.2723931,5.1819017 L 1.7276069,6.8180983 A 0.9605823,0.9605823 127.98188 0 0 1,7.75 Z"
      />
      <path
        style="fill:currentColor;fill-opacity:0.2;"
        d="m 1,3.75 0,1.5 A 0.5855823,0.5855823 37.981878 0 0 1.7276069,5.8180983 L 8.2723931,4.1819017 A 0.9605823,0.9605823 127.98188 0 0 9,3.25 V 1.75 A 0.5855823,0.5855823 37.981878 0 0 8.2723931,1.1819017 L 1.7276069,2.8180983 A 0.9605823,0.9605823 127.98188 0 0 1,3.75 Z"
      />
      <path
        style="fill:currentColor;"
        d="M 1.3721042,6.453487 4.6278958,6.046513 A 0.33104333,0.33104333 41.437492 0 1 5,6.375 v 0.25 A 0.29279115,0.29279115 37.981878 0 0 5.3638034,6.9090491 L 8.6361966,6.0909509 A 0.48029115,0.48029115 127.98188 0 0 9,5.625 V 3.375 A 0.23176275,0.23176275 31.717474 0 0 8.6645898,3.1677051 L 5.3354102,4.8322949 A 0.23176275,0.23176275 31.717474 0 1 5,4.625 V 4.375 A 0.20784287,0.20784287 28.997308 0 0 4.6820006,4.1987496 L 1.3179994,6.3012504 a 0.08272485,0.08272485 70.4348 0 0 0.054105,0.1522366 z"
      />
    </g>
  </svg>
);

export default Main;