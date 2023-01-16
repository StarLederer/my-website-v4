import { ParentComponent, For } from "solid-js";
import { Database, EntryID } from "~/data";

const Main: ParentComponent<{
  database: Database,
  parents: EntryID[];
}> = (props) => (
  <div class="flex gap-s.5 text-fg-2">
    <For each={props.parents}>
      {(parent) => (
        <>
          <div class="text-fg-1 font-semibold">{props.database[parent].project.name}</div>
          <div class="i-mdi-chevron-right" />
        </>
      )}
    </For>
    {props.children}
  </div>
);

export default Main;
