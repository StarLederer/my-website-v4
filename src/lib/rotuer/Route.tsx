import { ParentComponent } from "solid-js";
import Route, { RouteProps } from "@ui/router/Route";

const Main: ParentComponent<RouteProps & {
  scroll?: boolean
}> = (props) => (
  <Route
    path={props.path}
    strict={props.strict}
    class={props.scroll ? "overflow-auto" : "overflow-hidden"}
    enter="animate-in"
    leave="animate-out"
  >
    {props.children}
  </Route>
);

export default Main;
