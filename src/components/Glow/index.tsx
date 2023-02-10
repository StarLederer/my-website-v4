import { getLCA } from "windblade/core";
import { Component, createResource } from "solid-js";
import styles from "./style.module.css";
import themeStore from "~/stores/themeStore";

const Main: Component<{
  hue: number;
  class?: string;
}> = (props) => {
  const [culori] = createResource(async () => (await import("culori")));

  const color = () => {
    if (culori.loading || culori.error) return "transaprent";
    const { formatHex8, clampChroma } = culori();

    const colors = getLCA({ dark: { l: 0.84, c: 0.16 }, light: { l: 0.6, c: 0.2 } });
    let lca;
    switch (themeStore.scheme()) {
      case "light":
        lca = colors.light;
        break;
      default:
        lca = colors.dark;
    }

    return formatHex8(clampChroma({
      mode: 'oklch',
      l: lca.l,
      c: lca.c,
      h: props.hue,
      alpha: 0.2
    }));
  };

  return (
    <div class={`transition ${props.class}`} style={`--color: ${color()};`}>
      <div class={styles.sphere} />
    </div>
  );
};

export default Main;
