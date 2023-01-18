import { Component, For } from "solid-js";
import Button from "@/ui/primitives/Button";
import { Entry, findLogo, getOss as getDatabase } from "~/data";
import ProjectLogo from "~/lib/ProjectLogo";
import ProjectParents from "~/lib/ProjectParents";
import Link from "@/ui/primitives/Button/Link";
import Card from "~/lib/Card";

const Post: Component<{ entry: Entry }> = (props) => (
  <Card
    header={<ProjectLogo logo={findLogo(getDatabase(), props.entry)} />}
    title={<>
      <ProjectParents database={getDatabase()} parents={props.entry.parents} />
      <div class="font-bold text-m.2">{props.entry.project.name}</div>
    </>}
    texts={[props.entry.project.description]}
    actions={
      <div class="flex justify-between">
        {/* <div class="flex gap-s.4">
            <Button style="solid">Fund <div class="i-mdi-plus-circle-multiple" /></Button>
            <Button>Vote <div class="i-mdi-favourite-outline" /></Button>
          </div> */}

        <Link href={props.entry.project.homepageUrl} style="solid">View <div class="i-mdi-open-in-new" /></Link>
      </div>
    }
  />
);

const Main: Component = () => {
  const projects = () => getDatabase().filter(({ project }) => project.priority);

  return (
    <div class="grid grid-auto-fit-l.2 gap-s.5">
      <For each={projects()}>
        {(entry) => (
          <Post entry={entry} />
        )}
      </For>
    </div>
  )
};

export default Main;
