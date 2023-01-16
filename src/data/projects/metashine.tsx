import { Project } from "./types";
import logo from "./logos/metashine";
import image from "./featureImages/metashine.png";

const project: Project = {
  name: "Metashine",
  description: "Modern and good-looking media meta-tag editor.",
  sourceCodeUrl: "https://github.com/StarLederer/metashine",
  homepageUrl: "https://github.com/StarLederer/metashine/releases",
  logo: logo,
  term: {
    start: new Date(24, 3, 2021)
  },
  features: [
    {
      imageUrl: image,
      imageFit: "contain",
      bgColor: "hsl(258, 80%, 50%, 40%)",
    }
  ],
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
