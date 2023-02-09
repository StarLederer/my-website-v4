import { theme } from "windblade/index";
import { getLCA } from "windblade/core";
import { JSX, Component, For, createSignal, createEffect } from "solid-js";
import styles from "./style.module.css";
import themeStore from "~/stores/themeStore";
import { formatHex8, clampChroma } from "culori";

const Main: Component<{
  hue: number;
  class?: string;
}> = (props) => {
  const [color, setColor] = createSignal('');

  createEffect(() => {
    const colors = getLCA(theme.windblade.colors['accent'].base);
    let lca;
    switch (themeStore.scheme()) {
      case "light":
        lca = colors.light;
        break;
      default:
        lca = colors.dark;
    }

    setColor(formatHex8(clampChroma({
      mode: 'oklch',
      l: lca.l,
      c: lca.c,
      h: props.hue,
      alpha: 0.2
    })));
  });

  return (
    <div class={props.class} style={`--color: ${color()}`}>
      <div class={styles.sphere} />
    </div>
  );
};

export default Main;
