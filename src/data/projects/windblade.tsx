import { Project } from "./types";
import logo from "./logos/windblade";
import banner from "./featureImages/windblade.svg";

const project: Project = {
  name: "Windblade",
  description: "Unofficial cutting-edge version of Tailwind",
  homepageUrl: "https://github.com/StarLederer/windblade",
  sourceCodeUrl: "https://github.com/StarLederer/windblade",
  logo: logo,
  features: [
    {
      imageUrl: banner,
      imageFit: "contain",
      bgColor: "#818cf844",
    }
  ],
  story: {
    hue: 234,
    description: [
      "Windblade is a Tailwind-inspired UnoCSS preset that does two things better than Tailwind. First, Windblade uses semantic hue-independent colors that automatically adapt to the browser color scheme. Second, it uses logical properties instead of right-to-left, top-to-bottom ones.",
      "Windblade is faster to customize than Tailwind thanks to very few built-in colors, and unlike Tailwind, it is a suitable solution for international layouts.",
      "This UnoCSS preset is unstable at the moment and only serves my personal projects, but I am working towards completing its features, documenting it, and getting it on the official list of UnoCSS presets.",
    ],
    achievements: [
      {
        icon: <div class="i-simple-icons-unocss" />,
        type: "Learned",
        title: "UnoCSS",
        description: "UnoCSS is a great start for any atomic CSS library. It helped me build the foundation of this library in a matter of days and does all heavy lifting in dev and build-time on-demand CSS handling.",
        viewUrl: "https://github.com/unocss/unocss",
      },
      {
        icon: <div class="i-simple-icons-tailwindcss" />,
        type: "Learned",
        title: "Tailwind",
        description: "I based my collection of classes on Tailwind, a popular atomic CSS framework so that it can be easier to learn to an already large number of developers that use Tailwind. Of course, during the process I learned the Tailwind's classes too.",
        viewUrl: "https://tailwindcss.com/",
      },
    ],
  },
  children: [
    {
      name: "Documentation",
      description: "Create a documentation workflow, document utilities that differ from Tailwind counterparts and build a frontend.",
      homepageUrl: "https://github.com/StarLederer/windblade/issues/2",
      priority: true,
    }
  ],
};

export default project;
