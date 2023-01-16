import { Component } from "solid-js";
import router from "@/ui/router";
import Overview from "./branches/Overview";

const Main: Component = () => {
  router.navigate("/overview")

  return (
    <main class="width-full height-full relative overflow-hidden">
      <Overview path="/overview" />
    </main>
  );
};

export default Main;
