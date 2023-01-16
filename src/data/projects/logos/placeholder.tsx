import { Component } from "solid-js";

const Main: Component<{class?: string}> = (props) => (
  <svg viewBox="0 0 2 2" xmlns="http://www.w3.org/2000/svg" class={props.class ?? ""} style="fill: currentColor">
    <circle cx="1" cy="1" r="1" />
  </svg>
);

export default Main;
