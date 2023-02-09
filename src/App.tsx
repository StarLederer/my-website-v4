import { Component } from "solid-js";
import themeStore from "./stores/themeStore";
import Root from "./tree/Root";

const Main: Component = () => {
  const themeStyles = () => themeStore.scheme() === "light" ? "scheme-light-270" : "scheme-dark-90";

  return (
    <main class={`${themeStyles()} size-i-full size-b-full relative bg-normal-3 text-fg-2 overflow-hidden`}>
      <Root />
    </main>
  );
};

export default Main;
