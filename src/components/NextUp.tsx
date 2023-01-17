import { Component, For } from "solid-js";
import { Entry, findLogo, getOss as getDatabase } from "~/data";
import ProjectLogo from "~/lib/ProjectLogo";
import ProjectParents from "~/lib/ProjectParents";
import Link from "@/ui/primitives/Button/Link";

const Post: Component<{ entry: Entry }> = (props) => (
  <div class="bg-srf border border-color-srf pd-m.2 round-m.2 flex flex-col items-start justify-between gap-m.2">
    <ProjectLogo logo={findLogo(getDatabase(), props.entry)} />
    <div class="flex flex-col gap-s items-start">
      <div class="flex flex-col gap-s.2">
        <ProjectParents database={getDatabase()} parents={props.entry.parents} />
        <div class="font-bold text-m.2">{props.entry.project.name}</div>
        <div class="text-fg-2">{props.entry.project.description}</div>
      </div>

      <div class="flex justify-between">
        <Link href={props.entry.project.homepageUrl} style="solid"><div class="i-mdi-open-in-new" /></Link>
      </div>
    </div>
  </div>
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