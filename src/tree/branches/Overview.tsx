import { Component, For } from "solid-js";
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

const OverviewFeature: Component<{
  entry: Entry;
  hero?: boolean
}> = (props) => (
  <Feature
    database={getDatabase()}
    entry={props.entry}
    class={props.hero ? "height-l.4" : ""}
    compose={({ Root, Card, Overlay, OverlayInfo, Info }) => (
      <Root>
        <Card>
          <Overlay>
            <OverlayInfo />
            <div class="flex gap-s.2">
              {/* <Button class="pd-s round-s bg-blur" style="solid">Celebrate<div class="i-mdi-party-popper" /></Button> */}
              <Link class="pd-s round-s bg-blur" style="solid" href={props.entry.project.homepageUrl}>View<div class="i-mdi-open-in-new" /></Link>
            </div>
          </Overlay>
        </Card>
        <Info />
      </Root>
    )}
  />
);

type IMainProps = {
  path: string;
};

const Main: Component<IMainProps> = (props) => {
  const featuredEntries = () => {
    let entries = getDatabase().filter(({ project }) => !!project.features);
    return {
      first: entries.shift() as Entry,
      others: entries,
    };
  }

  return (
    <Route path={props.path} scroll>
      <Container class="pd-bs-s">
        <Headerbar />
      </Container>

      <header class="flex flex-col gap-s pd-s pd-b-l.2 items-center text-center">
        <div class="text-m.2">
          Hello, I'm
          <h1 class="font-extrabold text-fg-0">Star Lederer</h1>
        </div>
        <p>Innovator, open-source enthusiast, UX/DX perfectionist.</p>
        {/* <div class="flex bg-srf items-center gap-s pd-s round-m.2">
          <div>Want to support?</div>
          <Button style="solid">Sponsor <div class="i-mdi-plus-circle-multiple" /></Button>
        </div> */}
      </header>

      <div class="flex flex-col gap-m pd-be-m width-full">
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
            <div class="gap-s grid grid-auto-fit-l.2">
              <For each={featuredEntries().others}>
                {(entry) => <OverviewFeature entry={entry} />}
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
    </Route>
  )
};

export default Main;
