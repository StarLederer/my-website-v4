import { Project } from "./types";
import logo from "./logos/bevy";
import featureMain from "./featureImages/bevyBloom/main.png";

const project: Project = {
  name: "Bevy",
  description: "A refreshingly simple data-driven game engine.",
  logo: logo,
  sourceCodeUrl: "https://github.com/bevyengine/bevy",
  homepageUrl: "https://bevyengine.org/",
  role: "occasional contributor",
  children: [
    {
      name: "Revamped bloom",
      description: "Improve the look and expand artistic capabilities of Bevy's bloom effect.",
      homepageUrl: "https://github.com/bevyengine/bevy/pull/6677",
      features: [
        {
          imageUrl: featureMain,
          imageFit: "cover",
        },
      ],
      term: {
        track: 0,
        start: new Date(2022, 10, 21),
        end: new Date(2023, 0, 4),
        completed: true,
      },
    },
  ],
};

export default project;
