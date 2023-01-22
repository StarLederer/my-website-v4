import Button from "@/ui/primitives/Button";
import { Component } from "solid-js";
import Starfield from "~/components/Starfield";
import Container from "~/lib/Container";
import navigate from "~/tree/navigate";

const Main: Component<{
  emoji: string;
  question: string;
}> = (props) => (
  <Button style="solid" class="relative size-i-full p-b-m overflow-hidden" onClick={() => navigate("/contact")}>
    <Starfield />
    <Container class="flex items-center justify-center">
      <div class="relative">
        <div class="absolute bg-int inset-(-m.2) rounded-full transition" style="filter: blur(2rem);" />
        <div class="relative flex flex-col gap-s justify-center">
          <span class="text-m.2">{props.emoji}</span>
          <span class="font-bold">{props.question}</span>
          <span class="font-extrabold text-m.2">Get in touch.</span>
        </div>
      </div>
    </Container>
  </Button>
);

export default Main;
