import { JSX, Component, For } from "solid-js";
import styles from "./style.module.css";

const Main: Component<{
  style?: string;
}> = (props) => (
  <div class="absolute inset-0 overflow-hidden">
    <div class={styles.container} style={props.style}>
      <div class={styles.sphere} />
      {/* <div class={styles.sphere} /> */}
    </div>
  </div>
);

export default Main;
