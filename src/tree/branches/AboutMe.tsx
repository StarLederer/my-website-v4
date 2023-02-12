import { Component, For } from "solid-js";
import me from "@me/src";
import Button from "@ui/primitives/Button";
import Container from "~/lib/Container";
import Headerbar from "~/components/MainHeaderbar";
import BigTitle from "~/lib/BigTitle";
import navigate from "~/lib/rotuer";
import Starfield from "~/components/Starfield";
import Footer from "~/components/Footer";

const Skills: Component<{
  skills: string[];
}> = (props) => (
  <div class="flex flex-wrap gap-s.4">
    <For each={props.skills}>
      {(skill) => (
        <div class="bg-surface bprder bprder-color-surface p-s rounded-full font-semibold items-center justify-center" style="white-space: nowrap;">
          {skill}
        </div>
      )}
    </For>
  </div>
);

const Main: Component = (props) => (
  <div class="size-b-full overflow-auto flex flex-col justify-between gap-m bg-srf3">
    <div>
      <header class="relative overflow-hidden">
        <Starfield />

        <Container class="relative flex flex-col gap-m p-be-m p-b-s">
          <Headerbar />

          <div class="flex flex-col gap-m.2 ">
            <img src="https://avatars.githubusercontent.com/u/55361752" alt="Picture of me" class="relative rounded-full size-i-m" style="z-index: 1;" />
            <div class="flex flex-col items-start gap-m.2">
              <div class="relative">
                <div class="absolute bg-normal-3 -inset-m.2 rounded-full" style="filter: blur(2rem)" />
                <div class="relative flex flex-col gap-s.4 font-semibold">
                  <h1 class="font-extrabold text-m.2">{me.name}</h1>
                  <p class="text-fg-2 text-$($s+$s.2)">{me.subtitle}</p>
                  <p class="text-fg-3 leading-$($s+$s.2)" style="max-width: 48ch">I love exploring abstract ideas and discovering new things. I see opportunities in everything and use them to improve the world.</p>
                </div>
              </div>
              <div class="relative">
                <Button class="rounded-s p-s bg-blur" style="secondary" onClick={() => navigate("/contact")}>Contact me <div class="i-mdi-envelope" /></Button>
              </div>
            </div>
          </div>
        </Container>
      </header>

      <div class="flex flex-col gap-m.4">
        <For each={[0, 1, 2]}>
          {(i) => (
            <section>
              <BigTitle
                title={me.skills[i].level}
                subtitle={me.skills[i].description + "."}
              />
              <Container>
                <Skills skills={me.skills[i].skills} />
              </Container>
            </section>
          )}
        </For>
      </div>
    </div>

    <Footer />
  </div>
);

export default Main;
