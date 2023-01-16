import { Component } from "solid-js";

const Main: Component<{
  logo?: Component<{class?: string}>;
  class?: string;
  innerClass?: string;
}> = (props) => (
  <div class={`${props.class ?? "bg-srf pd-s"} flex round-full items-cetner justify-center`} style="aspect-ratio: 1/1">
    {props.logo?.({ class: `width-m.2 ${props.innerClass ?? "text-fg-1"}` })}
  </div>
);

export default Main;
