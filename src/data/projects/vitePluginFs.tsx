import { Project } from "./types";
import vitePluginFs from "./logos/vite-plufin-fs";
import banner from "./featureImages/vite-plugin-fs.svg";

const project: Project = {
  name: "vite-plugin-fs",
  description: "Interact with fs directly from the browser in dev mode.",
  logo: vitePluginFs,
  sourceCodeUrl: "https://github.com/StarLederer/vite-plugin-fs",
  homepageUrl: "https://www.npmjs.com/package/vite-plugin-fs",
  features: [
    {
      imageUrl: banner,
      imageFit: "contain",
      bgColor: "hsl(220, 90%, 50%, 20%)"
    }
  ],
  children: [
    {
      name: "Update to Vite 4",
      description: "The plugin requires maintenance.",
      homepageUrl: "https://github.com/StarLederer/vite-plugin-fs/issues/12",
      priority: true,
    }
  ],
};

export default project;
