import { ParentComponent } from "solid-js";

const Main: ParentComponent<{class?: string}> = (props) => {
  return (
    <div class="flex flex-col items-center p-i-s size-i-full">
      <div class={`size-i-full max-size-i-l ${props.class}`}>
        {props.children}
      </div>
    </div>
  )
};

export default Main;
