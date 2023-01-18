import { Component, createEffect, createSignal } from "solid-js";
import router from "@/ui/router";
import Button from "@/ui/primitives/Button";
import Headerbar from "~/lib/Headerbar";
import themeStore from "~/stores/themeStore";
import Link from "@/ui/primitives/Button/Link";

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

  const onBack = () => {
    if (router.route().current.startsWith("/overview")) {
      return undefined;
    }
    else {
      return () => { router.navigate("/overview") };
    }
  };

  return (
    <Headerbar onBack={onBack()}>
      {/* <Button onClick={() => { router.navigate("/about-me") }}>About me</Button> */}
      <Button style="secondary" onClick={() => { router.navigate("/portfolio/all") }}>Portfolio</Button>
      <Link href="https://github.com/StarLederer"><div class="i-simple-icons-github" /></Link>
      <Button onClick={themeStore.toggleScheme} class="pd-s round-s relative">
        <div class="i-mdi-brightness-4 transition" style={`opacity: ${themeStore.enforceScheme() === undefined ? 1 : 0}`} />
        <div class="absolute i-mdi-brightness-7 transition" style={`opacity: ${themeStore.enforceScheme() === "light" ? 1 : 0}`} />
        <div class="absolute i-mdi-brightness-2 transition" style={`opacity: ${themeStore.enforceScheme() === "dark" ? 1 : 0}`} />
      </Button>
    </Headerbar>
  )
};

export default Main;
