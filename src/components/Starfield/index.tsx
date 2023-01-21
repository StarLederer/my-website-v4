import { Component, createEffect, createSignal, For } from "solid-js";
import styles from "./style.module.css";

const size = 120;

const Star: Component<{
  twinkle?: boolean;
}> = (props) => (
  <svg
    class={[styles.star, props.twinkle ? styles.twinkles : styles.normal].join(" ")}
    style={`
      grid
      animation-delay: ${Math.random() * 6}s;
      animation-duration: ${Math.random() * 4 + 2}s;
      --depth: ${Math.random()};
      --random: ${Math.random()};
      --translate: translate(
        calc(${Math.random() * size - size / 2}px + var(--mouse-x, 0.5) * 1rem * (1 - var(--depth))),
        calc(${Math.random() * size - size / 2}px + var(--mouse-y, 0.5) * 1rem * (1 - var(--depth)))
      );
    `}
    viewBox="0 0 4 4"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M 4 2 Q 2 2 2 4 Q 2 2 0 2 Q 2 2 2 0 Q 2 2 4 2 Z" />
  </svg>
);

const Main: Component<{
}> = (props) => {
  let container: HTMLDivElement | undefined;

  const [cols, setCols] = createSignal(0);
  const [rows, setRows] = createSignal(0);

  let observer = new ResizeObserver(() => {
    if (!container) return;

    setCols(Math.round(container.offsetWidth / size));
    setRows(Math.round(container.offsetHeight / size));
  });

  createEffect(() => {
    observer.disconnect();
    if (!container) return;
    observer.observe(container);
  })

  return (
    <div class={`absolute inset-0 grid items-center overflow-visible`} ref={container} style={`grid-template-columns: repeat(${cols()}, 1fr); justify-items: center;`}>
      <For each={Array(cols() * rows())}>
        {() => Math.random() > 0.6
          ? <Star twinkle={Math.random() > 0.6} />
          : <div />
        }
      </For>
    </div>
  );
};

export default Main;
