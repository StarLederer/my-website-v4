import Button from "@ui/primitives/Button";
import { Component, createEffect, For, Show } from "solid-js";
import { getOss as getDatabase, Entry, getOldestId, getNewestId, EntryID } from "~/data";
import ProjectParents from "~/lib/ProjectParents";
import styles from "./style.module.css";

const Event: Component<{
  name: string;
  start: Date;
  end: Date;
  earliest: Date,
}> = (props) => (
  <div
    class={styles.project}
    style={`grid-column: ${dateRange(props.start, props.earliest)} / span ${dateRange(props.end, props.start)}`}
  >
    <div class="sticky inset-is-s flex-row items-center gap-s">
      {/* <div class="size-i-s.5 size-b-s.5 rounded-full bg-accent" /> */}
      <div>
        <div class="text-fg-4">
          {props.start.toLocaleDateString()} - {props.end.toLocaleDateString()}
        </div>
        <div class="font-bold">{props.name}</div>
      </div>
    </div>
  </div>
);

const PotentialEvent: Component<{
  name: string;
  parents: EntryID[];
  start: Date;
  end: Date;
  earliest: Date,
}> = (props) => (
  <div
    class="flex relative bg-surface rounded-full"
    style={`grid-column: ${dateRange(props.start, props.earliest)} / span ${dateRange(props.end, props.start)}`}
  >
    <div class="sticky inset-is-0 flex gap-s items-center justify-start p-s.5">
      <div class="flex gap-s.5">
        <Button
          style="solid"
          class="p-s rounded-full"
        >
          Fund <div class="i-mdi-plus-circle-multiple" />
        </Button>

        <Button
          style="ghost"
          class="p-s rounded-full"
        >
          <div class="i-mdi-favorite-outline" />
        </Button>
      </div>

      <ProjectParents database={getDatabase()} parents={props.parents}>
        <div class="font-extrabold text-fg-1">{props.name}</div>
      </ProjectParents>
    </div>
  </div>
);

const Today: Component<{ date: Date; }> = (props) => (
  <div class={`${styles.cell} flex justify-center relative`}>
    <div class="absolute inset-bs-$(-$s.5/2) size-i-s.5 size-b-s.5 bg-accent rounded-full" />
    <div class="size-i-px size-b-full bg-accent-2" />
  </div>
);

const Day: Component<{ date: Date, first?: boolean }> = (props) => {
  const first = () => props.date.getDate() === 1;
  const lineHeight = () => first() ? "size-b-full" : "size-b-s.5";
  const lineClass = () => `size-i-px ${lineHeight()} absolute bg-fg-4`

  return (
    <div class="relative flex justify-center items-center">
      {!props.first && <div class={lineClass() + " inset-is-0 inset-be-0"} />}
      {/* {props.last && <div class={lineClass() + " inset-be-0 inset-ie-0"} />} */}
      <div class="text-fg-4 flex flex-col items-center gap-s.2">
        <div class="font-bold text-fg-3">{props.date.toLocaleString('default', { day: '2-digit' })}</div>
        <Show when={first()}>
          <div class="text-fg-4">{props.date.toLocaleString('default', { month: 'short' })}</div>
        </Show>
      </div>
    </div>
  )
};

const dateRange = (a: Date, b: Date) => Math.ceil((a.getTime() - b.getTime()) / 86400000) + 1;

const Main: Component = (props) => {
  const past = () => {
    let d = new Date(present());
    d.setMonth(d.getMonth() - 3)
    d.setHours(0, 0, 0, 0);
    return d;
  };
  const present = () => {
    let d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  };
  const future = () => {
    let d = new Date(present());
    d.setMonth(d.getMonth() + 1);
    d.setHours(0, 0, 0, 0);
    return d;
  };

  const earliestDate = () => {
    const id = getOldestId(timedProjects());
    if (id === undefined) return past();
    const { term } = getDatabase()[id].project;
    if (term === undefined) return past();
    const date = term.start;
    if (date.getTime() > past().getTime()) return past();
    return date;
  };
  const latestDate = () => {
    const id = getNewestId(timedProjects());
    if (id === undefined) return future();
    const { term } = getDatabase()[id].project;
    if (term === undefined) return future();
    const date = term.end ?? term.start;
    if (date.getTime() < future().getTime()) return future();
    return date;
  };
  const range = () => dateRange(latestDate(), earliestDate());

  const timedProjects = () => getDatabase().filter(({project}) => !!project.term && !!project.term.track);
  const priorityProjects = () => getDatabase().filter(({project}) => !!project.priority);

  return (
    <div class="relative overflow-scroll">
      <div class="flex flex-col items-stretch size-i-max-content">
        {/* Dates */}
        <div class={styles.dates}>
          <For each={Array(range())}>
            {(_, i) => {
              let date = new Date(earliestDate());
              date.setDate(date.getDate() + i());
              return <Day date={date} first={i() === 0} />
            }}
          </For>
        </div>

        {/* Inline line */}
        <div class="bg-fg-4 size-b-px" />

        {/* Day lines */}
        <div class={styles.bg}>
          <For each={Array(range())}>
            {(_, i) => (
              dateRange(present(), earliestDate()) - 1 === i()
                ? <Today date={present()} />
                : <div class={styles.cell} />
            )}
          </For>
        </div>

        {/* Content */}
        <div class={styles.content}>
          <For each={timedProjects()}>
            {({project}) => (
              project.term && <div class={styles.contentTrack}>
                <Event
                  name={project.name}
                  start={project.term?.start}
                  end={project.term?.end ?? future()}
                  earliest={earliestDate()}
                />
              </div>
            )}
          </For>
          <For each={priorityProjects()}>
            {(event) => (
              <div class={styles.contentTrack}>
                <PotentialEvent
                  parents={event.parents}
                  name={event.project.name}
                  start={present()}
                  end={future()}
                  earliest={earliestDate()}
                />
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  )
};

export default Main;
