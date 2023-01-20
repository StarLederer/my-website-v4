import { Component, createEffect, For } from "solid-js";
import router from "@/ui/router";
import Button from "@/ui/primitives/Button";
import Headerbar from "~/lib/Headerbar";
import themeStore from "~/stores/themeStore";
import Link from "@/ui/primitives/Button/Link";
import navigate from "~/tree/navigate";

type IMainProps = {
};

const Main: Component<IMainProps> = (props) => {
  const classes = {
    light: ["theme-light", "hue-225"],
    dark: ["theme-dark", "hue-45"]
  };

  createEffect(() => {
    switch (themeStore.scheme()) {
      case "dark":
        document.body.classList.remove(...classes.light);
        document.body.classList.add(...classes.dark);
        break;
      case "light":
        document.body.classList.remove(...classes.dark);
        document.body.classList.add(...classes.light);
        break;
      default:
        document.body.classList.remove(...classes.dark, ...classes.light);
    }
  })

  const links: {
    title: string,
    url: string;
  }[] = [
      {
        title: "Overview",
        url: "/overview",
      },
      {
        title: "Portfolio",
        url: "/portfolio/all",
      }
    ];

  return (
    <Headerbar>
      <For each={links}>
        {(link) => {
          const open = router.route().current.startsWith(link.url);
          return (
            <Button
              class={`relative pd-s rounded-s bg-blur`}
              onClick={() => { if (!open) navigate(link.url) }}
              // disabled={open}
            >
              {link.title}
              <div class="absolute inset-be-(s.5-(s.2/2)) size-i-s.2 size-b-s.2 rounded-full transition" style={`background: currentColor; opacity: ${open ? 1 : 0};`} />
            </Button>
          );
        }}
      </For>
      <Link href="https://github.com/StarLederer"><div class="i-simple-icons-github" /></Link>
      <Button onClick={themeStore.toggleScheme} class="pd-s rounded-s relative bg-blur">
        <div class="i-mdi-brightness-4 transition" style={`opacity: ${themeStore.enforceScheme() === undefined ? 1 : 0}`} />
        <div class="absolute i-mdi-brightness-7 transition" style={`opacity: ${themeStore.enforceScheme() === "light" ? 1 : 0}`} />
        <div class="absolute i-mdi-brightness-2 transition" style={`opacity: ${themeStore.enforceScheme() === "dark" ? 1 : 0}`} />
      </Button>
    </Headerbar>
  )
};

export default Main;
