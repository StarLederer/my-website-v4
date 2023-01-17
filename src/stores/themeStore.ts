import type { Variant } from "@/unocss-preset/core";
import { createSignal, createMemo, createRoot } from "solid-js";

function main() {
  // System sceheme
  const [systemSceheme, setSystemScheme] = createSignal<Variant | undefined>(undefined);
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', event => {
    setSystemScheme(event.matches ? "light" : "dark");
  });

  // Manually selected scheme
  const [enforceScheme, setEnforceScheme] = createSignal<Variant | undefined>(undefined);
  const toggleScheme = () => {
    switch (enforceScheme()) {
      case "dark":
        setEnforceScheme("light");
        break;
      case "light":
        setEnforceScheme("dark");
        break;
      default:
        setEnforceScheme(systemSceheme() ? "dark" : "light");
    }
  };

  // Computed scheme
  const scheme = createMemo(() => enforceScheme() ?? systemSceheme() ?? "dark");

  return { scheme, enforceScheme, setEnforceScheme, toggleScheme };
}

export default createRoot(main);