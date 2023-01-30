import { Project } from "./types";
import vitePluginFs from "./logos/vite-plufin-fs";
import banner from "./featureImages/vite-plugin-fs.svg";

const project: Project = {
  name: "vite-plugin-fs",
  description: "Interact with fs directly from the browser in dev mode",
  logo: vitePluginFs,
  sourceCodeUrl: "https://github.com/StarLederer/vite-plugin-fs",
  homepageUrl: "https://www.npmjs.com/package/vite-plugin-fs",
  features: [
    {
      imageUrl: banner,
      imageFit: "contain",
      bgColor: "#41d1ff44"
    }
  ],
  story: {
    hue: 300,
    description: [
      "This is a Vite plugin that allows developers to interact with Node's fs/promises module from the browser.",
      "The plugin runs a local server that works as a proxy to fs/promises and provides developers with an easy-to-use wrapper for supported requests to make it look like they are interacting with the regular fs/promises.",
      "vite-plugin-fs was initially created to power a visual website content editor but when I realized it could be useful in many situations I released it separately.",
    ],
    achievements: [
      {
        icon: <div class="i-simple-icons-vite" />,
        type: "Learned",
        title: "Vite plugins",
        description: "Vite is a powerful ecosystem that uses Rollup's excellent plugin model. Knowing how to make Vite plugins now helps me improve the DX of my Vite apps without sacrificing bundle size or performance",
        viewUrl: "https://vitejs.dev/plugins/",
      },
      {
        icon: <div class="i-simple-icons-express" />,
        type: "Learned",
        title: "Express",
        description: "The original implementation of the proxy server was made with Express which has since served me multiple times in situations when I needed to prototype a backend.",
        viewUrl: "https://expressjs.com/",
      },
      {
        icon: <div class="i-simple-icons-koa" />,
        type: "Learned",
        title: "Koa",
        description: "Originally written with Express, Koa replaced the backend framework because it was a cleaner and more up-to-date solution.",
        viewUrl: "https://koajs.com/",
      },
      {
        icon: <div class="i-simple-icons-jest" />,
        type: "Learned",
        title: "Jest",
        description: "A bug in the proxy server can lead to a catastrophe resulting in loss of files and was therefore needed to be tested well. I used Jest to automate the execution of tests that covered most correct and incorrect use cases.",
        viewUrl: "https://jestjs.io/",
      },
      {
        icon: <div class="i-simple-icons-npm" />,
        type: "Significant event",
        title: "100+ weekly downloads on NPM",
        description: "Since the release of v1.0.0-beta, the plugin has been consistently getting 100+ downloads weekly on NPM.",
        viewUrl: "https://www.npmjs.com/package/vite-plugin-fs",
      },
      {
        icon: <div class="i-simple-icons-github" />,
        type: "Significant event",
        title: "8 stars on Github",
        description: "This plugin's source code is my most popular GitHub repo with 8 stars",
        viewUrl: "https://github.com/StarLederer/vite-plugin-fs",
      },
    ],
  },
  children: [
    {
      name: "Update to Vite 4",
      description: "The plugin requires maintenance.",
      homepageUrl: "https://github.com/StarLederer/vite-plugin-fs/issues/12",
      term: {
        start: new Date(2023, 1, 29),
        end: new Date(2023, 1, 29),
      }
    }
  ],
};

export default project;
