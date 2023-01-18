import { ParentComponent } from "solid-js";
import Container from "./Container";

const Main: ParentComponent = (props) => {
  return (
    <h2 class="font-bold text-m.5 uppercase">{props.children}</h2>
  )
};

export default Main;
