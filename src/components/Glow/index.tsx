import { theme } from "windblade/index";
import { getSLA } from "windblade/core";
import { JSX, Component, For, createSignal, createEffect } from "solid-js";
import styles from "./style.module.css";
import themeStore from "~/stores/themeStore";

const Main: Component<{
  hue: number;
  class?: string;
}> = (props) => {
  const [color, setColor] = createSignal('');

  createEffect(() => {
    const colors = getSLA(theme.windblade.colors['accent'].base);
    let sla;
    switch (themeStore.scheme()) {
      case "light":
        sla = colors.light;
        break;
      default:
        sla = colors.dark;
    }

    setColor(`hsla(${props.hue}, ${sla.s}%, ${sla.l}%, 20%)`)
  });

  return (
    <div class={props.class} style={`--color: ${color()}`}>
      <div class={styles.sphere} />
    </div>
  );
};

export default Main;
