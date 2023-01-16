import { Component, For, Show } from "solid-js";
import Button from "@/ui/primitives/Button";
import Link from "@/ui/primitives/Button/Link";
import { getOss as getDatabase, Project } from "~/data"
import ProjectLogo from "~/lib/ProjectLogo";
import { IButtonStyle } from "@/ui/primitives/Button";

const Card: Component<{
  data: Project;
  class?: string;
}> = (props) => {
  const styles = {
    card: "flex flex-col pd-m.2 round-s bg-srf text-fg-1 border border-color-srf",
  };

  return (
    <>
      {/* <div class={`${props.class} gap-.02s items-stretch`}> */}
      {/* Main */}
      <div class={styles.card + " gap-s justify-between items-start"}>
        {props.data.logo && <ProjectLogo logo={props.data.logo} />}

        <div class="flex flex-col gap-s items-start">
          <div class="flex flex-col gap-s.5">
            <h4 class="font-bold text-fg-0">{props.data.name}</h4>
            <div>{props.data.description}</div>

            <div class="text-fg-2 gap-s.2">
              {/* <div>Open source: {props.data.closedSource ? "no" : "yes"}</div> */}
              <div>My role: {props.data.role ?? "creator"}</div>
            </div>
          </div>

          <div class="flex flex-wrap gap-s.4">{}
            <Link href={props.data.homepageUrl} style="secondary"><div class="i-mdi-web" /></Link>
            {props.data.sourceCodeUrl && <Link href={props.data.sourceCodeUrl} style="ghost"><div class="i-mdi-git" /></Link>}
          </div>
        </div>
      </div>

      {/* Children */}
      {/* <Show when={props.data.children}>
          <div class="flex-row pd-is-s gap-s">
            <div class="width-min bg-fg-4 mg-b-s round-full" />
            <div class="gap-s.2 flex-1">
              <For each={props.data.children}>
                {(child) => (
                  <Card data={child} />
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
  const topLevels = () => getDatabase().filter(({parents}) => parents.length == 0);

  return (
    <div class={`${props.class} grid grid-auto-fit-m gap-s.4`}>
      <For each={topLevels()} fallback={<div>No items</div>}>
        {(item) => <Card data={item.project} class="height-full" />}
      </For>
    </div>
  )
};

export default Main;
