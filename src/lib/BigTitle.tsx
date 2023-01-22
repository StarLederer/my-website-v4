import { ParentComponent } from "solid-js";
import Container from "./Container";

const Main: ParentComponent<{
  title: string;
  subtitle: string;
}> = (props) => {
  return (
    <Container class="flex flex-col gap-s.4">
      <h2 class="font-extrabold text-m.2">{props.title}</h2>
      <p class="text-fg-2 m-be-m.2">{props.subtitle}</p>
    </Container>
  )
};

export default Main;
