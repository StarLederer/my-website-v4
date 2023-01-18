import { Component, For, ParentComponent, Show } from "solid-js";
import { Route } from "@/ui/router";
import { Story, Entry, findLogo, getCorporate as getDatabase, EntryID } from "~/data";
import Link from "@/ui/primitives/Button/Link";
import Container from "~/lib/Container";
import ProjectLogo from "~/lib/ProjectLogo";
import Feature from "~/lib/Feature";
import { HR2 } from "~/lib/Lines";
import VeryBigTitle from "~/lib/VeryBigTitle";
import Headerbar from "~/components/MainHeaderbar";
import Footer from "~/components/Footer";
import FeatureCTA from "../components/FeatureCTA";

const Nav: Component<{
  currentEntryId: EntryID
}> = (props) => {
  const topLevels = () => getDatabase().filter((entry) => !!entry.project.story && entry.id !== props.currentEntryId);

  return (
    <nav class="grid grid-auto-fit-l.2 gap-s text-s">
      <For each={topLevels()}>
        {(entry) => (
          <Feature
          database={getDatabase()}
          entry={entry}
          overlayClass="items-start"
          compose={({ Root, Card, Overlay, OverlayInfo, Info }) => (
            <Root>
              <Card>
                <Overlay>
                  <OverlayInfo />
                  <FeatureCTA entry={entry} style="solid" />
                </Overlay>
              </Card>
              {/* <Info /> */}
            </Root>
          )}
        />
        )}
      </For>
    </nav>
  )
};

const Section: ParentComponent<{
  title: string
  subtitle?: string;
}> = (props) => (
  <section class="flex flex-col gap-m.2 text-m.2 text-fg-2">
    <div class="flex flex-col gap-s.4 text-fg-1 font-bold">
      <h3 class="text-s">{props.title}</h3>
      {props.subtitle && <div style="max-width: 24ch">{props.subtitle}</div>}
    </div>
    {props.children}
  </section>
)

type IMainProps = {
  path: string;
  entry: Entry
};

const Main: Component<IMainProps> = (props) => {
  const entry = (): Entry => props.entry;
  const proj = () => entry()?.project;
  const story = () => proj().story as Story;

  return (
    <Route path={props.path}>
      <header class="bg-srf">
        <Container class="flex flex-col gap-m.8 pd-b-s pd-be-m.4">
          <Headerbar />

          <div class="flex flex-col items-center text-center gap-m.2 font-semibold">
            <ProjectLogo logo={findLogo(getDatabase(), entry())} innerClass="text-fg-0" />
            <div class="text-fg-2">
              <Show when={proj().term} fallback="Ongoing project" keyed>
                {(term) => (<>
                  {term.start.toDateString()}
                  &nbsp;-&nbsp;
                  <Show when={term.end} fallback="Present" keyed>
                    {(end) => end.toDateString()}
                  </Show>
                </>)}
              </Show>
            </div>
            <VeryBigTitle>{proj()?.name}</VeryBigTitle>
            <div class="text-(s+s.2) text-fg-1">{proj().description}</div>
          </div>

          {/* <img src={proj().feature?.imageUrl} alt="Project screenshot" class="round-s.5" /> */}
          <Feature database={getDatabase()} entry={entry()} noOverlay noInfo noCover cardClass="min-height-0"></Feature>
        </Container>
      </header>

      <Container class="flex flex-col gap-m pd-b-m">
        <Section title="Description">
          <div class="flex flex-col gap-s">
            <For each={story().description}>
              {(element) => (
                <p>{element}</p>
              )}
            </For>
          </div>
        </Section>

        <section class="text-s gap-s.2 grid grid-auto-fit-l.2">
          <Link class="round-full pd-m.2" style="solid" href={proj().homepageUrl}><div class="i-mdi-web" />Project homepage </Link>
          <Link class="round-full pd-m.2" style="solid" href={proj().sourceCodeUrl ?? "#"}><div class="i-mdi-git" />Source code </Link>
        </section>

        {/* <Section
          title="Look inside"
          subtitle="See how this project was made."
        >
          <div class="grid grid-auto-fit-l.2 gap-s.4">
            <For each={Array(2).fill("Technology")}>
              {(element) => (
                <div class="round-s height-m bg-abs"></div>
              )}
            </For>
          </div>
        </Section> */}

        <Section
          title="Big achievements"
        >
          <div class="grid grid-auto-fit-l.2 gap-s.4 text-s">
            <For each={story()?.achievements}>
              {(element) => (
                <div class="round-m.2 pd-m.2 bg-srf border border-color-srf flex flex-col gap-s justify-between items-start">
                  <ProjectLogo logo={() => (element.icon)} />
                  <div class="flex flex-col gap-s items-start">
                    <div class="flex flex-col gap-s.4">
                      <div class="font-semibold text-fg-1">{element.type}:</div>
                      <div class="font-bold text-m.2">{element.title}</div>
                      <div class="text-fg-2" style="max-width: 36ch">{element.description}</div>
                    </div>
                    <Link href={element.viewUrl} style="secondary">View <div class="i-mdi-open-in-new" /></Link>
                  </div>
                </div>
              )}
            </For>
          </div>
        </Section>

        <HR2 />

        <Section
          title="More projects"
          subtitle="Discover my other skills by checking out these projects."
        >
          <Nav currentEntryId={entry().id}/>
        </Section>
      </Container>

      <Footer />
    </Route>
  )
};

export default Main;
