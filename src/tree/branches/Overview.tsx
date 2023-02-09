import { Component, For } from "solid-js";
import { Route } from "@ui/router";
import Button from "@ui/primitives/Button";
import Link from "@ui/primitives/Button/Link";
import me from "@me/src";
import Container from "~/lib/Container";
import BigTitle from "~/lib/BigTitle";
import Feature from "~/lib/Feature";
import NextUp from "~/components/NextUp";
import Projects from "~/components/Projects";
import { Entry, getOss as getDatabase } from "~/data";
import Headerbar from "~/components/MainHeaderbar";
import Footer from "~/components/Footer";
import Starfield from "~/components/Starfield";
import navigate from "~/lib/rotuer";

const OverviewFeature: Component<{
  entry: Entry;
  hero?: boolean
}> = (props) => (
  <Feature
    database={getDatabase()}
    entry={props.entry}
    class={props.hero ? "size-b-l.4" : "size-b-l.2"}
    compose={({ Root, Card, Overlay, OverlayInfo, Info }) => (
      <Root>
        <Card>
          <Overlay>
            <OverlayInfo />
            <div class="flex gap-s.2">
              {/* <Button class="p-s rounded-s bg-blur" style="solid">Celebrate<div class="i-mdi-party-popper" /></Button> */}
              <Link class="p-s rounded-s bg-blur" style="solid" href={props.entry.project.homepageUrl}>View<div class="i-mdi-open-in-new" /></Link>
            </div>
          </Overlay>
        </Card>
        <Info />
      </Root>
    )}
  />
);

const Main: Component = () => {
  const featuredEntries = () => {
    let entries = getDatabase().filter(({ project }) => !!project.features);
    return {
      first: entries.shift() as Entry,
      others: entries,
    };
  }

  return (
    <>
      <div class="relative overflow-hidden">
        <Starfield />

        <Container class="p-bs-s">
          <Headerbar />
        </Container>

        <header class="p-s p-b-l.2 flex justify-center">
          <div class="relative">
            <div class="absolute inset-(-m.4) bg-normal-3 rounded-full" style="filter: blur(2rem);" />
            <div class="relative flex flex-col gap-s items-center text-center font-semibold">
              <div class="text-m.2">
                Hello, I'm
                <h1 class="font-extrabold text-fg-1">{me.name}</h1>
              </div>
              <p class="text-(s+s.2)">{me.subtitle}</p>
              <div class="flex bg-surface justify-center items-center gap-s p-s rounded-m.2 text-s2">
                <span>I'm looking for a job</span>
                <Button style="solid" onClick={() => navigate("/portfolio/all")} >See portfolio <div class="i-mdi-book-open" /></Button>
              </div>
              {/* <div class="flex bg-surface items-center gap-s p-s rounded-m.2">
              <div>Want to support?</div>
              <Button style="solid">Sponsor <div class="i-mdi-plus-circle-multiple" /></Button>
            </div> */}
            </div>
          </div>
        </header>
      </div>

      <div class="flex flex-col gap-m p-be-m size-i-full">
        <section>
          <BigTitle
            // title="Project poll"
            // subtitle="Vote for the project I should complete next"
            title="Current tasks"
            subtitle="These are the projects I'm completing next"
          />
          <Container>
            <NextUp />
          </Container>
        </section>

        <section>
          <BigTitle
            title="Featured work"
            subtitle="My proudest creations"
          />
          <Container class="flex flex-col gap-s">
            <OverviewFeature entry={featuredEntries().first} hero />
            <div class="gap-s grid grid-fit-cols-l.2">
              <For each={featuredEntries().others}>
                {(entry) => <OverviewFeature entry={entry}/>}
              </For>
            </div>
          </Container>
        </section>

        {/* <section>
          <BigTitle
            title="Timeline"
            subtitle="Estimated progress and release dates of actively developed proejcts"
          />
          <HR />
          <Timeline />
          <HR />
        </section> */}

        <section>
          <BigTitle
            title="What I'm part of"
            subtitle="Projects I created or actively contribute to"
          />
          <Container>
            <Projects />
          </Container>
        </section>
      </div>

      <Footer />
    </>
  )
};

export default Main;
