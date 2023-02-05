import { Component } from "solid-js";
import Button, { IButtonStyle } from "@ui/primitives/Button";
import router from "@ui/router";
import { Entry } from "~/data";
import navigate from "~/tree/navigate";

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
