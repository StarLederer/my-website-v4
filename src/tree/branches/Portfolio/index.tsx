import { Component, For, ParentComponent, Show } from "solid-js";
import router, { Route } from "@/ui/router";
import Button, { IButtonStyle } from "@/ui/primitives/Button";
import Link from "@/ui/primitives/Button/Link";
import { Entry, findLogo, getCorporate as getDatabase } from "~/data";
import ProjectLogo from "~/lib/ProjectLogo";
import Headerbar from "~/components/MainHeaderbar";
import Container from "~/lib/Container";
import BigTitle from "~/lib/BigTitle";
import Feature from "~/lib/Feature";
import VeryBigTitle from "~/lib/VeryBigTitle";
import Footer from "~/components/Footer";
import FeatureCTA from "./components/FeatureCTA";
import Starfield from "~/components/Starfield";
import Glow from "~/components/Glow";
import PreFooterCTA from "./components/PreFooterCTA";

const PropjectButtons: Component<{
  entry: Entry;
  buttonClass?: string;
  firstButtonClass?: string;
  otherButtonClass?: string;
  firstButtonStyle?: IButtonStyle;
  otherButtonStyle?: IButtonStyle;
}> = (props) => (<>
  <FeatureCTA
    entry={props.entry}
    class={`${props.buttonClass} ${props.firstButtonClass}`}
    style={props.firstButtonStyle}
  />
  <Link
    class={`${props.buttonClass} ${props.otherButtonClass}`}
    style={props.otherButtonStyle}
    href={props.entry.project.homepageUrl}
  >
    <div class="i-mdi-web" />
  </Link>
  {props.entry.project.sourceCodeUrl && <Link
    class={`${props.buttonClass} ${props.otherButtonClass}`}
    style={props.otherButtonStyle}
    href={props.entry.project.sourceCodeUrl}
  >
    <div class="i-mdi-git" />
  </Link>}
</>);

const FeatureButtons: Component<{ entry: Entry }> = (props) => (
  <PropjectButtons
    entry={props.entry}
    buttonClass="pd-s rounded-s"
    firstButtonStyle="solid"
    otherButtonStyle="secondary"
    otherButtonClass="bg-blur"
  />
);

const Main: Component = () => {
  const featuredEntries = () => {
    let entries = getDatabase().filter(({ project }) => !!project.story);
    return {
      first: entries.shift() as Entry,
      others: entries,
    };
  }

  return (
    <div >
      <header class="relative bg-srf overflow-hidden">
        <Starfield />

        <Container class="relative flex flex-col gap-m.4 pd-b-m.6 pd-bs-s">
          <Headerbar />

          {/* Titles */}
          <div class="flex flex-col gap-m.2 items-center text-center">
            <ProjectLogo logo={findLogo(getDatabase(), featuredEntries().first)} />
            <span class="text-fg-1">{featuredEntries().first.project.name}</span>
            <VeryBigTitle>Proudest creation</VeryBigTitle>
            <span class="font-semibold text-(s+s.2) text-fg-2 size-i-full">{featuredEntries().first.project.description}</span>
          </div>

          {/* Feature and buttons */}
          <div class="flex flex-col gap-m.2 items-center">
            {/* Glow and feature */}
            <div class="relative size-i-full">
              <Glow hue={featuredEntries().first.project.story?.hue ?? 45} class="absolute inset-(-m.2)" />
              <Feature database={getDatabase()} entry={featuredEntries().first} noInfo noOverlay />
            </div>

            {/* Buttons */}
            <div class="relative flex gap-s.2">
              <PropjectButtons
                entry={featuredEntries().first}
                firstButtonStyle="solid"
                otherButtonStyle="secondary"
                buttonClass="rounded-full pd-m.2"
              />
            </div>
          </div>
        </Container>
      </header>

      <section class="pd-b-m.6">
        <BigTitle
          title={`${featuredEntries().others.length} more awesome projects`}
          subtitle=""
        />
        <Container>
          <div class="gap-m.2 flex flex-col">
            <For each={featuredEntries().others}>
              {(entry) => (
                <Feature
                  database={getDatabase()}
                  entry={entry}
                  class="size-b-l.4"
                  compose={({ Root, Card, Overlay, OverlayInfo, Info }) => (
                    <Root>
                      <Card>
                        <Overlay>
                          <OverlayInfo />
                          <div class="flex gap-s.2">
                            <FeatureButtons entry={entry} />
                          </div>
                        </Overlay>
                      </Card>
                      <Info />
                    </Root>
                  )}
                />
              )}
            </For>
          </div>
        </Container>
      </section>

      <PreFooterCTA emoji="📬" question="Ready to talk?" />

      <Footer />
    </div>
  )
};

export default Main;
