import { Project } from "./types";
import logo from "./logos/mwgsl";

const project: Project = {
  name: "MWGSL",
  description: "WGSL with compile-time super-powers",
  homepageUrl: "https://github.com/StarLederer/mwgsl",
  logo: logo,
  children: [
    {
      name: "Validate the design",
      description: "Need to talk to people over at WGPU and various shader developers to validate the need for and the quality of the design.",
      homepageUrl: "https://github.com/StarLederer/mwgsl/discussions/1",
      priority: true,
    },
  ],
};

export default project;
