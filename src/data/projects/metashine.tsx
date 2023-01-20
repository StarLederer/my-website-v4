import { Project } from "./types";
import logo from "./logos/metashine";
import image from "./featureImages/metashine.png";

const project: Project = {
  name: "Metashine",
  description: "Modern and good-looking media metadata editor",
  sourceCodeUrl: "https://github.com/StarLederer/metashine",
  homepageUrl: "https://github.com/StarLederer/metashine/releases",
  logo: logo,
  term: {
    start: new Date(2021, 3, 24),
  },
  features: [
    {
      imageUrl: image,
      imageFit: "contain",
      bgColor: "hsl(258, 80%, 50%, 40%)",
    },
  ],
  story: {
    hue: 258,
    description: [
      "Metashine was born out of my personal need to edit MP3 files but evolved into a general-purpose metadata editor. I am continually improving the app to let other people in on the experience.",
      "At the time of creation, existing solutions did not satisfy my strict aesthetic demands, did not comply with established specifications, presented them confusingly, or had a UX that encouraged making mistakes. Metashine recognizes the convoluted nature and history of media metadata and helps users put that shine on their files by helping them find, write and format metadata correctly.",
      "While Metashine v2 is still focused on my personal needs, the upcoming v3 aims for complete ID3 compliance.",
    ],
    achievements: [
      {
        icon: <div class="i-simple-icons-electron"/>,
        type: "Learned",
        title: "Electron",
        description: "Electron powers the WebView frontend and JavaScript backend of Metashine.",
        viewUrl: "https://www.electronjs.org/",
      },
      {
        icon: <div class="i-simple-icons-sass"/>,
        type: "Learned",
        title: "SASS",
        description: "Plain CSS at the time was hard to read due to the lack of native nesting, a problem that SASS dealt with excellently.",
        viewUrl: "https://sass-lang.com/",
      },
      {
        icon: <div class="i-simple-icons-svelte"/>,
        type: "Learned",
        title: "Svelte",
        description: "Originally written using jQuery, Svelte made the UI code scalable and maintainable",
        viewUrl: "https://svelte.dev/",
      },
      {
        icon: <div class="i-simple-icons-esbuild"/>,
        type: "Learned",
        title: "ESBuild",
        description: "ESBuild was used to transpile and live-reload the app's TypeScript core.",
        viewUrl: "https://esbuild.github.io/",
      },
      {
        icon: <div class="i-simple-icons-docker"/>,
        type: "Discovered",
        title: "Docker",
        description: "Cross-compiling Metashine for multiple operating systems was my first experience with Docker, which to this day is a massive help compiling this application, even natively on Linux",
        viewUrl: "https://www.docker.com/",
      },
      {
        icon: <div class="i-simple-icons-github"/>,
        type: "Significant event",
        title: "First bug report",
        description: "Metashine is my first project to have received a bug report. While bugs are a pain to discover, it was great to know someone wanted to use the app.",
        viewUrl: "https://github.com/StarLederer/metashine/issues/1",
      },
    ],
  },
  children: [
    {
      name: "Rewrite backend in Rust + Tauri",
      description: "Metashine already uses Rust code anyway. Rewriting the backend in Rust using Tauri will ease the development.",
      homepageUrl: "https://github.com/StarLederer/metashine/issues/2",
      priority: true,
    }
  ],
};

export default project;
