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
    buttonClass="pd-s round-s"
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
    <div class="flex flex-col gap-m">
      <header class="bg-srf">
        <Container class="flex flex-col gap-m.4 pd-b-m.4 pd-bs-s">
          <Headerbar />

          {/* Titles */}
          <div class="flex flex-col gap-m.2 items-center text-center">
            <ProjectLogo logo={findLogo(getDatabase(), featuredEntries().first)} />
            <div class="text-fg-1">{featuredEntries().first.project.name}</div>
            <VeryBigTitle>Proudest creation</VeryBigTitle>
            <span class="font-semibold text-(s+s.2) text-fg-2">{featuredEntries().first.project.description}</span>
          </div>

          {/* Feature and buttons */}
          <div class="flex flex-col gap-m.2 items-center">
            {/* Feature */}
            <Feature database={getDatabase()} entry={featuredEntries().first} hero noInfo class="width-full" noOverlay />

            {/* Buttons */}
            <div class="flex gap-s.2">
              <PropjectButtons
                entry={featuredEntries().first}
                firstButtonStyle="solid"
                otherButtonStyle="secondary"
                buttonClass="round-full pd-m.2"
              />
            </div>
          </div>
        </Container>
      </header>

      <section>
        <BigTitle
          title={`${featuredEntries().others.length} more awesome projects`}
          subtitle=""
        />
        <Container>
          <div class="gap-s grid grid-auto-fit-l.4">
            <For each={featuredEntries().others}>
              {(entry) => (
                <Feature
                  database={getDatabase()}
                  entry={entry}
                  class="height-l.4"
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

      <Footer />
    </div>
  )
};

export default Main;
