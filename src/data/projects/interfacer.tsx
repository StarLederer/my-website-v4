import { Project } from "./types";
import logo from "./logos/interfacer";
import imgMain from "./featureImages/interfacer/main.png";
import imgProjectSetup1 from "./featureImages/interfacer/projectSetup1.png";
import imgProjectSetup12 from "./featureImages/interfacer/projectSetup2.png";
import imgSettings1 from "./featureImages/interfacer/settings1.png";
import imgSettings2 from "./featureImages/interfacer/settings2.png";
import imgSetup from "./featureImages/interfacer/setup.png";

const bgColor = "hsl(200, 80%, 50%, 40%)";

const project: Project = {
  name: "Interfacer",
  description: "A GUI that helps non-developers execute shell commands and use git.",
  sourceCodeUrl: "https://github.com/StarLederer/interfacer",
  homepageUrl: "https://github.com/StarLederer/interfacer",
  logo: logo,
  features: [
    {
      imageUrl: imgMain,
      imageFit: "contain",
      bgColor,
    },
    {
      imageUrl: imgSetup,
      imageFit: "contain",
      bgColor,
    },
    {
      imageUrl: imgProjectSetup1,
      imageFit: "contain",
      bgColor,
    },
    {
      imageUrl: imgProjectSetup12,
      imageFit: "contain",
      bgColor,
    },
    {
      imageUrl: imgSettings1,
      imageFit: "contain",
      bgColor,
    },
    {
      imageUrl: imgSettings2,
      imageFit: "contain",
      bgColor,
    }
  ],
  story: {
    description: [
      "Interfacter started as a graphical editor for my experimental Vite template but evolved into a general command line automator that can help bring non-developers into the development process with no learning curve.",
      "This app lets users use git and configure graphical buttons that execute shell commands so that non-developers can easily execute tasks like pulling a git remote, installing dependencies, and starting dev servers.",
    ],
    achievements: [
      {
        icon: <div class="i-simple-icons-tauri" />,
        type: "Learned",
        title: "Tauri",
        description: "While I have made WebView-powered apps with Electron before, Tauri offered many benefits over it and allowed me to use faster technology and practice with Rust.",
        viewUrl: "https://tauri.app/",
      },
      {
        icon: <div class="i-simple-icons-rust" />,
        type: "Learned",
        title: "Rust",
        description: "Having mainly used garbage-collected languages before, I wanted to explore what I was missing out on and this project was a perfecto opportunity for that.",
        viewUrl: "https://www.rust-lang.org/",
      },
      {
        icon: <div class="i-simple-icons-git" />,
        type: "Learned",
        title: "LibGit2",
        description: "Interfacer's git features are powered by a Rust wrapper of libgit2 which means that interfacer is a limited, but nonetheless functioning Git GUI.",
        viewUrl: "https://libgit2.org/",
      },
      {
        icon: <div class="i-simple-icons-unocss" />,
        type: "Discovered",
        title: "UnoCSS",
        description: "Interfacer's frontend uses a scalable and maintainable atomic CSS that is powered by a custom Tailwind-inspired UnoCSS preset.",
        viewUrl: "https://github.com/unocss/unocss",
      },
      {
        icon: <div class="i-simple-icons-nixos" />,
        type: "Discovered",
        title: "Nix",
        description: "Nix is an incredible package manager for Unix that powers the fully reproducible development environment of Interfacer",
        viewUrl: "https://github.com/NixOS/nix",
      }
    ],
  },
  children: [
    {
      name: "Fix test fixtures",
      description: "Tests that rely on git fixtures are not reproducible because test repos are not in the code repo.",
      homepageUrl: "https://github.com/StarLederer/interfacer/issues/3",
      priority: true,
    },
    {
      name: "Fix processes not exiting",
      description: "This bug is one of the major obstacles in the way of the first release.",
      homepageUrl: "https://github.com/StarLederer/interfacer/issues/1",
      // priority: true,
    },
    {
      name: "Implement hooks",
      description: "Execute commands automatically when the user takes certain actions.",
      homepageUrl: "https://github.com/StarLederer/interfacer/issues/2",
    },
    // {
    //   name: "Refactor numerous Signals as a Store",
    //   description: "",
    // }
  ],
};

export default project;
