import { ParentComponent, Show } from "solid-js";
import Button from "@/ui/primitives/Button";

const Main: ParentComponent<{
  onBack?: () => void;
}> = (props) => {
  return (
    <header class="size-i-full flex justify-center">
      <div class="flex-1 flex justify-between items-center max-size-i-l">
        <div class="flex gap-s items-center">
          <Show when={props.onBack}>
            <Button onClick={props.onBack}><div class="i-mdi-chevron-left" /></Button>
          </Show>
          <h1 class="font-semibold">Star Lederer</h1>
        </div>

        <div class="flex items-center gap-s.4">
          {props.children}
        </div>
      </div>
    </header>
  )
};

export default Main;
