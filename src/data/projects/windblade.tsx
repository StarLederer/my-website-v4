import { Project } from "./types";
import logo from "./logos/windblade";
import banner from "./featureImages/windblade.svg";

const project: Project = {
  name: "Windblade",
  description: "Tailwind but built with cutting edge CSS only and powered by UnoCSS",
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
    description: [
      "Windblade is an atomic CSS library powered by UnoCSS with classes similar to Tailwind but with a color system that adapts to any hue and automatically handles light / dark color schemes, as well as with a legacy CSS (like non-logical properties) removed.",
      "This UnoCSS preset is still unstable and only serves my personal use cases but I am working towards completing its features, documenting it, and getting it on the official list of UnoCSS presets."
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
};

export default project;
