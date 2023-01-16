import { Project } from "./types";
import logo from "./logos/interfacer";
import imgMain from "./featureImages/interfacer/main.png";

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
  ],
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
      description: "Execute commands automatically when user takes certain actions.",
      homepageUrl: "https://github.com/StarLederer/interfacer/issues/2",
    },
    // {
    //   name: "Refactor numerous Signals as a Store",
    //   description: "",
    // }
  ],
};

export default project;
