import { JSX, Component, For } from "solid-js";
import styles from "./style.module.css";

const Main: Component<{
  header: JSX.Element;
  title: JSX.Element;
  actions: JSX.Element;
  texts: JSX.Element[];
}> = (props) => (
  <div class="bg-srf border border-color-srf p-m.2 rounded-m.2 flex flex-col items-start justify-between gap-m.2">
    {props.header}

    <div class="flex flex-col gap-s size-i-full">
      <div class="flex flex-col gap-s.8">
        {props.title}
        <div class="flex flex-col gap-s.6">
          <For each={props.texts}>
            {(text) => <p class="text-fg-2 leading-(s+s.2)" style="max-width: 36ch">{text}</p>}
          </For>
        </div>
      </div>

      {props.actions}
    </div>
  </div>
);

export default Main;
