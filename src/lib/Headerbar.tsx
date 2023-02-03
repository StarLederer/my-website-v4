import { ParentComponent, Show } from "solid-js";
import me from "@/me/src";
import Button from "@/ui/primitives/Button";
import navigate from "~/tree/navigate";

const Main: ParentComponent = (props) => {
  return (
    <header class="relative size-i-full flex justify-center">
      <div class="flex-1 flex justify-between items-center max-size-i-l">
        <h1>
          <Button onClick={() => navigate("/overview")}>
            <span class="text-fg-1">{me.name}</span>
          </Button>
        </h1>

        <div class="flex items-center gap-s.4">
          {props.children}
        </div>
      </div>
    </header>
  )
};

export default Main;
