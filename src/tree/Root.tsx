import { Component, For, onCleanup, onMount } from "solid-js";
import Portfolio from "./branches/Portfolio";
import Project from "./branches/Portfolio/branches/Project";
import AboutMe from "./branches/AboutMe";
import Contact from "./branches/Contact";
import Overview from "./branches/Overview";
import { getCorporate } from "~/data";
import { addNavigationHandler, removeNavigationHandler, Route } from "~/lib/rotuer";

const Main: Component = () => {
  onMount(() => { addNavigationHandler("/overview"); })
  onCleanup(() => { removeNavigationHandler(); })

  window.addEventListener('mousemove', (ev) => {
    document.body.style.setProperty('--mouse-x', "" + ev.clientX / window.innerWidth);
    document.body.style.setProperty('--mouse-y', "" + ev.clientY / window.innerHeight);
  });

  const featuredEntries = () => getCorporate().filter(({ project }) => !!project.story);

  return (
    <>
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
      <Route path="/contact" scroll>
        <Contact />
      </Route>
      <Route path="/overview" scroll>
        <Overview />
      </Route>
      <Route path="/about-me" scroll>
        <AboutMe />
      </Route>
    </>
  );
};

export default Main;
