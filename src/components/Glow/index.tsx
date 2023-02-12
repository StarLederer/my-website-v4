import { getLCA, LCHToCSSColor } from "windblade/core";
import { Component } from "solid-js";
import styles from "./style.module.css";
import themeStore from "~/stores/themeStore";

const Main: Component<{
  hue: number;
  class?: string;
}> = (props) => {
  const color = () => {
    const colors = getLCA({ dark: { l: 0.84, c: 0.16 }, light: { l: 0.6, c: 0.2 } });
    let lca;
    switch (themeStore.scheme()) {
      case "light":
        lca = colors.light;
        break;
      default:
        lca = colors.dark;
    }

    return LCHToCSSColor(lca.l, lca.c, props.hue, 0.2).rgba;
  };

  return (
    <div class={`transition ${props.class}`} style={`--color: ${color()};`}>
      <div class={styles.sphere} />
    </div>
  );
};

export default Main;
