import { ParentComponent } from "solid-js";

const Main: ParentComponent<{class?: string}> = (props) => {
  return (
    <div class="flex flex-col items-center pd-i-s width-full">
      <div class={`width-full max-width-l ${props.class}`}>
        {props.children}
      </div>
    </div>
  )
};

export default Main;
