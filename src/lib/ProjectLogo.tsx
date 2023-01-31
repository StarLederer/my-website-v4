import { Component } from "solid-js";

const Main: Component<{
  logo?: Component<{class?: string}>;
  class?: string;
  innerClass?: string;
}> = (props) => (
  <div class={`${props.class ?? "bg-srf p-s"} flex rounded-full items-cetner justify-center aspect-1/1`}>
    {props.logo?.({ class: `size-i-m.2 ${props.innerClass ?? "text-fg-2"}` })}
  </div>
);

export default Main;
