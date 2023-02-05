import { Component } from "solid-js";
import Button, { IButtonStyle } from "@ui/primitives/Button";
import { Entry } from "~/data";
import navigate from "~/lib/rotuer";

const Main: Component<{
  entry: Entry;
  class?: string;
  style?: IButtonStyle;
}> = (props) => (
  <Button
    class={props.class}
    style={props.style}
    onClick={() => {
      navigate(`/portfolio/${props.entry.id}`);
    }}
  >
    View project
    <div class="i-mdi-book-open" />
  </Button>
);

export default Main;
