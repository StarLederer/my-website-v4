import { Component, For, onCleanup, onMount } from "solid-js";
import router, { Route } from "@/ui/router";
import Portfolio from "./branches/Portfolio";
import Project from "./branches/Portfolio/branches/Project";
import AboutMe from "./branches/AboutMe";
import Overview from "./branches/Overview";
import { getCorporate } from "~/data";
import { addNavigationHandler, removeNavigationHandler } from "./navigate";

const Main: Component = () => {
  onMount(() => { addNavigationHandler("/overview"); })
  onCleanup(() => { removeNavigationHandler(); })

  const featuredEntries = () => getCorporate().filter(({ project }) => !!project.story);

  return (
    <main class="size-i-full size-b-full relative overflow-hidden">
      <Route path="/portfolio">
        <Route path="/portfolio/all" scroll>
          <Portfolio />
        </Route>
        <For each={featuredEntries()}>
          {(entry) => (
            <Route path={`/portfolio/${entry.id}`} scroll>
              <Project entry={entry} />
            </Route>
          )}
        </For>
      </Route>
      <Route path="/overview" scroll>
        <Overview />
      </Route>
      {/* <Route path="/about-mr">
        <AboutMe />
      </Route> */}
    </main>
  );
};

export default Main;
