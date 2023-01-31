import { Component, createEffect, createSignal } from "solid-js";
import themeStore from "./stores/themeStore";
import Root from "./tree/Root";

const Main: Component = () => {
  const themeStyles = () => themeStore.scheme() === "light" ? "scheme-light hue-225" : "scheme-dark hue-45";

  return (
    <main class={`${themeStyles()} size-i-full size-b-full relative bg-def3 text-fg-2 overflow-hidden`}>
      <Root />
    </main>
  );
};

export default Main;
