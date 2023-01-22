import { Component, For, ParentComponent, Show } from "solid-js";
import { Route } from "@/ui/router";
import Button from "@/ui/primitives/Button";
import Container from "~/lib/Container";
import Headerbar from "~/components/MainHeaderbar";
import BigTitle from "~/lib/BigTitle";
import navigate from "../navigate";
import Starfield from "~/components/Starfield";
import Footer from "~/components/Footer";

const Skills: Component<{
  skills: string[];
}> = (props) => (
  <div class="flex flex-wrap gap-s.4">
    <For each={props.skills}>
      {(skill) => (
        <div class="bg-srf bprder bprder-color-srf p-s rounded-full font-semibold items-center justify-center" style="white-space: nowrap;">
          {skill}
        </div>
      )}
    </For>
  </div>
);

const Main: Component = (props) => {
  const skills = [
    {
      level: "Comfortable with",
      skills: [
        "Node",
        "Typescript",
        "WebView",
        "Solid JS",
        "Tauri",
        "Git",
        "Atomic CSS",
        "Tailwind",
        "UI design",
        "Interaction design",
        "Internationalization",
        // "VR development",
      ],
    },
    {
      level: "Learning and improving at",
      skills: [
        "Deno",
        "Rust",
        "Backend",
        "Bevy engine",
        "Graphics programming",
        "User research",
        "Open-source mainteinership",
        "Linux",
        "Nix",
        "Docker",
      ],
    },
    {
      level: "Can't / don't want to do anymore",
      skills: [
        "Wordpress",
        "Svelte",
        "Vue",
        "Nuxt",
        "React",
        "Electron",
        "Java",
        "C++",
        "C#",
        "Godot engine",
        "Unity engine",
      ],
    }
  ];

  return (
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
                  <div class="absolute bg-def3 inset-(-m.2) rounded-full" style="filter: blur(2rem)" />
                  <div class="relative flex flex-col gap-s.4 font-semibold">
                    <h1 class="font-extrabold text-m.2">Star Lederer</h1>
                    <p class="text-fg-1 text-(s+s.2)">Innovator, open-source enthusiast, UX/DX perfectionist.</p>
                    <p class="text-fg-2 line-height-(s+s.2)" style="max-width: 48ch">I love exploring abstract ideas and discovering new things. I see opportunities in everything and use them to improve the world.</p>
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
          <section>
            <BigTitle
              title="Good at"
              subtitle="Here is a list of things I can do well."
            />
            <Container>
              <Skills skills={skills[0].skills} />
            </Container>
          </section>

          <section>
            <BigTitle
              title="Improving at"
              subtitle="There are the things I am learning and want to to better."
            />
            <Container>
              <Skills skills={skills[1].skills} />
            </Container>
          </section>

          <section>
            <BigTitle
              title="Won't do anymore"
              subtitle="At some point I was interested but I don't find these useful anymore."
            />
            <Container class="hue-0">
              <Skills skills={skills[2].skills} />
            </Container>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  )
};

export default Main;
