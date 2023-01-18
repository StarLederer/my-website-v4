import { Component, For, ParentComponent, Show } from "solid-js";
import router, { Route } from "@/ui/router";
import Button, { IButtonStyle } from "@/ui/primitives/Button";
import Link from "@/ui/primitives/Button/Link";
import { Entry, findLogo, getCorporate as getDatabase } from "~/data";
import ProjectLogo from "~/lib/ProjectLogo";
import Headerbar from "~/components/MainHeaderbar";
import Container from "~/lib/Container";
import BigTitle from "~/lib/BigTitle";
import Feature from "~/lib/Feature";
import VeryBigTitle from "~/lib/VeryBigTitle";
import Footer from "~/components/Footer";
import FeatureCTA from "./components/FeatureCTA";
import Portfolio from "./Portfolio";
import Project from "./branches/Project";

type IMainProps = {
  path: string;
};

const Main: Component<IMainProps> = (props) => {
  const featuredEntries = () => getDatabase().filter(({ project }) => !!project.story);

  return (<>
    <Route path={props.path}>
      <Route path={`${props.path}/all`} scroll>
        <Portfolio />
      </Route>
      <For each={featuredEntries()}>
        {(entry) => <Project path={`${props.path}/${entry.id}`} entry={entry} />}
      </For>
    </Route>
  </>)
};

export default Main;
