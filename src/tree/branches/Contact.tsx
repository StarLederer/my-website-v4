import { Component, For, JSX } from "solid-js";
import Button from "@/ui/primitives/Button";
import Link from "@/ui/primitives/Button/Link";
import Container from "~/lib/Container";
import Starfield from "~/components/Starfield";

const Main: Component = () => {
  const details: {
    icon: JSX.Element;
    title: string;
    url?: string;
    data: string;
  }[] = [
      {
        icon: <div class="i-simple-icons-matrix" />,
        title: "Matrix",
        url: "https://matrix.to/#/@starlederer:matrix.org",
        data: "@starlederer:matrix.org",
      },
      {
        icon: <div class="i-mdi-phone" />,
        title: "Phone",
        data: "+31 6 83968615",
        url: "tel: +31 6 83968615"
      },
      {
        icon: <div class="i-mdi-email" />,
        title: "Email",
        url: "mailto: germans.lederers@gmail.com",
        data: "germans.lederers@gmail.com",
      }
    ];

  return (
    <div class="absolute inset-0 bg-def3 flex items-center overflow-hidden">
      <Starfield />

      <Container class="flex justify-center p-b-s">
        <div class="relative bg-blur border border-color-srf bg-srf p-m.2 p-b-m.4 rounded-m.2 flex flex-col gap-m.4 overflow-auto">
          <h1 class="flex flex-col gap-s.4 font-bold">
            <span>Contact</span>
            <span class="font-extrabold text-m.2">Star Lederer</span>
          </h1>

          <div class="grid gap-s items-center font-semibold" style="grid-template-columns: auto auto;">
            <For each={details}>
              {(detail) => (<>
                <div class="flex gap-s items-center bg-srf p-s rounded-full">
                  <div class="">
                  {detail.icon}
                  </div>
                  <span>{detail.title}:</span>
                </div>
                <div class="flex justify-between items-center gap-s">
                  <span class="text-fg-3">{detail.data}</span>
                  <div class="flex gap-s.4">
                  <Button style="ghost" onClick={() => navigator.clipboard.writeText(detail.data)}>
                    <div class="i-mdi-clipboard-outline" />
                  </Button>
                  <Link style="solid" href={detail.url ?? ""}>
                    <div class="i-mdi-arrow-right" />
                  </Link>
                </div>
                </div>
              </>)}
            </For>
          </div>

          <div class="flex">
            <Button style="half" onClick={() => history.back()}>
              Got it <div class="i-mdi-check" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
};

export default Main;
