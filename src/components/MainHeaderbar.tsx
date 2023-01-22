import { Component, createSignal, For } from "solid-js";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
  Menu,
  MenuItem,
} from 'solid-headless';
import router from "@/ui/router";
import Button from "@/ui/primitives/Button";
import ButtonBase from "@/ui/primitives/Button/Base";
import Headerbar from "~/lib/Headerbar";
import themeStore from "~/stores/themeStore";
import Link from "@/ui/primitives/Button/Link";
import navigate from "~/tree/navigate";
import styles from "./styles.module.css";

type IMainProps = {
};

const Main: Component<IMainProps> = (props) => {
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
      },
      {
        title: "About me",
        url: "/about-me",
      },
      {
        title: "Contact",
        url: "/contact",
      },
    ];

  return (
    <Headerbar>
      <Link href="https://github.com/StarLederer"><div class="i-simple-icons-github" /></Link>
      <Button onClick={themeStore.toggleScheme} class="pd-s rounded-s relative">
        <div class="i-mdi-brightness-4 transition" style={`opacity: ${themeStore.enforceScheme() === undefined ? 1 : 0}`} />
        <div class="absolute i-mdi-brightness-7 transition" style={`opacity: ${themeStore.enforceScheme() === "light" ? 1 : 0}`} />
        <div class="absolute i-mdi-brightness-2 transition" style={`opacity: ${themeStore.enforceScheme() === "dark" ? 1 : 0}`} />
      </Button>
      <div class="relative">
        <Popover defaultOpen={false}>
          {({ isOpen }) => (<>
            <ButtonBase
              as={(baseProps) => (
                <PopoverButton class={baseProps.class} style={baseProps.style}>
                  {baseProps.children}
                </PopoverButton>
              )}>
              <div class="i-mdi-menu" />
            </ButtonBase>
            <div class="absolute inset-bs-full inset-ie-0 transition" style={`opacity: ${isOpen() ? 1 : 0}; pointer-events: ${isOpen() ? 'all' : 'none'}`}>
              <PopoverPanel class="bg-blur bg-srf border border-color-srf pd-s.2 mg-b-s.2 rounded-s flex flex-col size-i-max-content gap-s.2">
                <For each={links}>
                  {(link) => {
                    const isCurrent = () => router.route().current.startsWith(link.url);
                    return (
                      <Button
                        class={`relative pd-s rounded-s`}
                        onClick={() => { if (!isCurrent()) navigate(link.url) }}
                      >
                        <span style="white-space: nowrap;">{link.title}</span>
                        <div class="absolute inset-be-(s.5-(s.2/2)) size-i-s.2 size-b-s.2 rounded-full transition" style={`background: currentColor; opacity: ${isCurrent() ? 1 : 0};`} />
                      </Button>
                    );
                  }}
                </For>
              </PopoverPanel>
            </div>
          </>)}
        </Popover>
      </div>
    </Headerbar>
  )
};

export default Main;
