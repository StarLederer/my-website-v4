import { Component, For, Show } from "solid-js";
import Button from "@/ui/primitives/Button";
import Link from "@/ui/primitives/Button/Link";
import { getOss as getDatabase, Project } from "~/data"
import ProjectLogo from "~/lib/ProjectLogo";
import { IButtonStyle } from "@/ui/primitives/Button";
import Card from "~/lib/Card";

const Child: Component<{
  data: Project;
  class?: string;
}> = (props) => {
  return (
    <>
      {/* <div class={`${props.class} gap-.02s items-stretch`}> */}
      {/* Main */}
      <Card
        header={<ProjectLogo logo={props.data.logo} />}
        title={<h4 class="font-bold text-fg-1 text-(s+s.2)">{props.data.name}</h4>}
        texts={[
          props.data.description,
          // `Open source: ${props.data.closedSource ? "no" : "yes"}`,
          `My role: ${props.data.role ?? "creator"}`,
        ]}
        actions={
          <div class="flex flex-wrap gap-s.4">
            <Link href={props.data.homepageUrl} style="secondary"><div class="i-mdi-web" /></Link>
            {props.data.sourceCodeUrl && <Link href={props.data.sourceCodeUrl} style="ghost"><div class="i-mdi-git" /></Link>}
          </div>
        }
      />

      {/* Children */}
      {/* <Show when={props.data.children}>
          <div class="flex-row p-is-s gap-s">
            <div class="size-i-px bg-fg-5 m-b-s rounded-full" />
            <div class="gap-s.2 flex-1">
              <For each={props.data.children}>
                {(child) => (
                  <Child data={child} />
                )}
              </For>
            </div>
          </div>
        </Show> */}
      {/* </div> */}
    </>
  )
};

const Main: Component<{ class?: string }> = (props) => {
  const topLevels = () => getDatabase().filter(({ parents }) => parents.length == 0);

  return (
    <div class={`${props.class} grid grid-fit-cols-m gap-s.4`}>
      <For each={topLevels()} fallback={<div>No items</div>}>
        {(item) => <Child data={item.project} class="size-b-full" />}
      </For>
    </div>
  )
};

export default Main;
