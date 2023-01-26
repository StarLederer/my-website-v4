import { ParentComponent } from "solid-js";
import Container from "~/lib/Container";
import Link from "@/ui/primitives/Button/Link";
import Button from "@/ui/primitives/Button";
import navigate from "~/tree/navigate";

const Main: ParentComponent = (props) => {
  return (
    <footer class="bg-def2 text-fg-3 font-semibold">
      {props.children}
      <Container class="p-b-m.2">
        <div class="flex gap-s flex-wrap justify-between items-center">
          <div class="font-bold">Star Lederer</div>
          <div class="flex gap-s.4">
            <Button onClick={() => navigate("/contact")}>Contact</Button>
            <Link href="https://github.com/StarLederer"><div class="i-simple-icons-github" /></Link>
          </div>
        </div>
      </Container>
    </footer>
  )
};

export default Main;
