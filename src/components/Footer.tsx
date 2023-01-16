import { Component } from "solid-js";
import Container from "~/lib/Container";
import Link from "@/ui/primitives/Button/Link";

const Main: Component = () => {
  return (
    <footer class="bg-def2 text-fg-2 font-semibold">
      <Container class="pd-m.2">
        <div class="flex gap-s flex-wrap justify-between items-center">
          <div class="font-bold">Star Lederer</div>
          <Link href="https://github.com/StarLederer"><div class="i-simple-icons-github" /></Link>
        </div>
      </Container>
    </footer>
  )
};

export default Main;
