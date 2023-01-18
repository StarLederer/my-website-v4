import { Component } from "solid-js";
import router from "@/ui/router";
import Portfolio from "./branches/Portfolio";
import AboutMe from "./branches/AboutMe";
import Overview from "./branches/Overview";

const Main: Component = () => {
  router.navigate("/overview")

  return (
    <main class="width-full height-full relative overflow-hidden">
      <Portfolio path="/portfolio" />
      {/* <AboutMe path="/about-me" /> */}
      <Overview path="/overview" />
    </main>
  );
};

export default Main;
