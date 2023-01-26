import { ParentComponent, For, Show, JSX, Component } from "solid-js";
import Button from "@/ui/primitives/Button";
import router from "@/ui/router";
import Link from "@/ui/primitives/Button/Link";
import { Database, Entry, findLogo } from "~/data";
import styles from "./style.module.css";
import ProjectLogo from "../ProjectLogo";

type ComposableComponent<E = {}, P = {}> = Component<P & {
  compose?: (elements: E) => JSX.Element
}>;

const Main: ComposableComponent<
  {
    Root: ParentComponent;
    Card: ParentComponent;
    Overlay: ParentComponent;
    OverlayInfo: Component;
    Info: Component;
  },
  {
    database: Database,
    entry: Entry;
    class?: string;
    cardClass?: string;
    overlayClass?: string;
    infoClass?: string;
    noOverlay?: boolean;
    noInfo?: boolean;
    noCover?: boolean;
  }
> = (props) => {
  const project = () => props.entry.project;
  const parents = () => props.entry.parents;

  // Composition elements

  const Root: ParentComponent = (elementProps) => (
    <div class={`${styles.root} ${props.class}`}>
      {elementProps.children}
    </div>

  );

  const Card: ParentComponent = (elementProps) => (
    <div
      class={`${styles.imageBg} ${props.class} ${project().features?.[0].bgColor === undefined && "bg-srf2"} ${!props.noCover && project().features?.[0].imageFit == "cover" && styles.isFull}`}
      style={project().features?.[0].bgColor ? `background-color: ${project().features?.[0].bgColor};` : ""}
    >
      {/* Image */}
      <img
        src={project().features?.[0].imageUrl}
        class={styles.image}
      />
      {elementProps.children}
    </div>
  );

  const Overlay: ParentComponent = (elementProps) => (
    <Show when={!props.noOverlay}>
      <div class={`${styles.overlay} ${props.overlayClass}`}>
        {elementProps.children}
      </div>
    </Show>
  );

  const OverlayInfo: Component = () => (
    <p>{project().description}</p>
  );

  const Info: Component = () => (
    <div class={`${styles.info} ${props.infoClass}`}>
      <ProjectLogo class="p-s.4 bg-srf" innerClass="text-fg-4" logo={findLogo(props.database, props.entry)} />

      <div class="font-bold">{project().name}</div>
      {/* <a class="font-bold" href={project().homepageUrl}>{project().name}</a> */}

      <Show when={parents().length > 0}>
        <div class="text-fg-3">for</div>
        <div class="font-bold">{props.database[parents()[0]].project.name}</div>
      </Show>
    </div>
  );

  return props.compose?.({ Root, Card, Overlay, OverlayInfo, Info }) ?? (<>
    <Root>
      <Card>
        <Overlay>
          <OverlayInfo />
        </Overlay>
      </Card>
      <Show when={!props.noInfo}>
        <Info />
      </Show>
    </Root>
  </>)
};

export default Main;
