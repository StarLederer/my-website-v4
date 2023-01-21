import { Component, For, JSX } from "solid-js";
import { Route } from "@/ui/router";
import Button from "@/ui/primitives/Button";
import Link from "@/ui/primitives/Button/Link";
import Container from "~/lib/Container";
import BigTitle from "~/lib/BigTitle";
import Feature from "~/lib/Feature";
import NextUp from "~/components/NextUp";
import Projects from "~/components/Projects";
import { Entry, getOss as getDatabase } from "~/data";
import Headerbar from "~/components/MainHeaderbar";
import Footer from "~/components/Footer";
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

      <Container class="flex justify-center pd-b-s">
        <div class="relative bg-blur border border-color-srf bg-srf pd-m.2 pd-b-m.4 rounded-m.2 flex flex-col gap-m.4 overflow-auto">
          <h1 class="flex flex-col gap-s.4 font-bold">
            <span>Contact</span>
            <span class="font-extrabold text-m.2">Star Lederer</span>
          </h1>

          <div class="grid gap-s items-center font-semibold" style="grid-template-columns: auto auto;">
            <For each={details}>
              {(detail) => (<>
                <div class="flex gap-s items-center bg-srf pd-s rounded-full">
                  <div class="">
                  {detail.icon}
                  </div>
                  <span>{detail.title}:</span>
                </div>
                <div class="flex justify-between items-center gap-s">
                  <span class="text-fg-2">{detail.data}</span>
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