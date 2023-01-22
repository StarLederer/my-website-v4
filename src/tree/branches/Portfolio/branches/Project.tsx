import { Component, For, ParentComponent, Show } from "solid-js";
import { Story, Entry, findLogo, getCorporate as getDatabase, EntryID } from "~/data";
import Link from "@/ui/primitives/Button/Link";
import Container from "~/lib/Container";
import ProjectLogo from "~/lib/ProjectLogo";
import Feature from "~/lib/Feature";
import Card from "~/lib/Card";
import VeryBigTitle from "~/lib/VeryBigTitle";
import Headerbar from "~/components/MainHeaderbar";
import Footer from "~/components/Footer";
import FeatureCTA from "../components/FeatureCTA";
import Glow from "~/components/Glow";
import Starfield from "~/components/Starfield";
import Button from "@/ui/primitives/Button";
import navigate from "~/tree/navigate";
import PreFooterCTA from "../components/PreFooterCTA";

const Nav: Component<{
  currentEntryId: EntryID
}> = (props) => {
  const topLevels = () => getDatabase().filter((entry) => !!entry.project.story && entry.id !== props.currentEntryId);

  return (
    <nav class="grid grid-fit-cols-l.2 gap-s.4 text-s">
      <For each={topLevels()}>
        {(entry) => (
          <Feature
            database={getDatabase()}
            entry={entry}
            class="size-b-l.2"
            overlayClass="items-start"
            compose={({ Root, Card, Overlay, OverlayInfo, Info }) => (
              <Root>
                <Card>
                  <Overlay>
                    <OverlayInfo />
                    <FeatureCTA entry={entry} style="solid" />
                  </Overlay>
                </Card>
                <Info />
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
  entry: Entry
};

const Main: Component<IMainProps> = (props) => {
  const entry = (): Entry => props.entry;
  const proj = () => entry()?.project;
  const story = () => proj().story as Story;

  return (
    <>
      <header class="relative bg-srf overflow-hidden">
        <Starfield />

        <Container class="relative flex flex-col gap-m.8 p-b-s p-be-m.6">
          <Headerbar />

          <div class="flex flex-col items-center text-center gap-m.2 font-semibold">
            <ProjectLogo logo={findLogo(getDatabase(), entry())} innerClass="text-fg-0" />
            <div class="text-fg-2 size-i-full">
              <Show when={proj().term} fallback="Ongoing project" keyed>
                {(term) => (<>
                  {term.start.toLocaleDateString('en', { day: "2-digit", month: "short", year: "numeric" })}
                  &nbsp;-&nbsp;
                  <Show when={term.end} fallback="Present" keyed>
                    {(end) => end.toLocaleDateString('en', { day: "2-digit", month: "short", year: "numeric" })}
                  </Show>
                </>)}
              </Show>
            </div>
            <VeryBigTitle>{proj()?.name}</VeryBigTitle>
            <div class="text-(s+s.2) text-fg-1">{proj().description}</div>
          </div>

          <div class="relative">
            <Glow hue={proj().story?.hue ?? 45} class="absolute inset-(-m.2)" />
            <Feature database={getDatabase()} entry={entry()} noOverlay noInfo noCover cardClass="min-size-b-0" />
          </div>
        </Container>
      </header>

      <Container class="flex flex-col gap-m.6 p-b-m.6">
        <Section title="Description">
          <div class="flex flex-col gap-s">
            <For each={story().description}>
              {(element) => (
                <p class="line-height-(m.2*1.2)">{element}</p>
              )}
            </For>
          </div>
        </Section>

        <section class="text-s gap-s.2 grid grid-fit-cols-l.2">
          <Link class="rounded-full p-m.2" style="solid" href={proj().homepageUrl}><div class="i-mdi-web" />Project homepage </Link>
          <Link class="rounded-full p-m.2" style="solid" href={proj().sourceCodeUrl ?? "#"}><div class="i-mdi-git" />Source code </Link>
        </section>

        {/* <Section
          title="Look inside"
          subtitle="See how this project was made."
        >
          <div class="grid grid-fit-cols-l.2 gap-s.4">
            <For each={Array(2).fill("Technology")}>
              {(element) => (
                <div class="rounded-s size-b-m bg-abs"></div>
              )}
            </For>
          </div>
        </Section> */}

        <Section
          title="Big achievements"
        >
          <div class="grid grid-fit-cols-l.2 gap-s.4 text-s">
            <For each={story()?.achievements}>
              {(element) => (
                <Card
                  header={<ProjectLogo logo={() => (element.icon)} />}
                  title={
                    <div class="flex flex-col gap-s.4">
                      <div class="font-semibold text-fg-1">{element.type}:</div>
                      <div class="font-bold text-m.2">{element.title}</div>
                    </div>
                  }
                  texts={[element.description]}
                  actions={
                    <div class="flex flex-col gap-s items-start">

                      <Link href={element.viewUrl} style="secondary">View <div class="i-mdi-open-in-new" /></Link>
                    </div>
                  }
                />
              )}
            </For>
          </div>
        </Section>

        {/* <HR2 /> */}
      </Container>

      <div class="bg-def2">
        <Container class="p-b-m.6">
          <Section
            title="More projects"
            subtitle="Check out the other projects to discover what else I can do."
          >
            <Nav currentEntryId={entry().id} />
          </Section>
        </Container>
      </div>

      <PreFooterCTA emoji="🤯" question="Seen enough?" />

      <Footer />
    </>
  )
};

export default Main;
