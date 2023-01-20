import { Project } from "./types";
import Logo from "./logos/bevy";
import featureMain from "./featureImages/bevyBloom/main.png";
import featureSlight from "./featureImages/bevyBloom/slight.png";
import featureBlur1 from "./featureImages/bevyBloom/blur1.png";
import featureBlur2 from "./featureImages/bevyBloom/blur2.png";

const project: Project = {
  name: "Bevy",
  description: "A refreshingly simple data-driven game engine",
  logo: Logo,
  sourceCodeUrl: "https://github.com/bevyengine/bevy",
  homepageUrl: "https://bevyengine.org/",
  role: "occasional contributor",
  children: [
    {
      name: "Revamped bloom",
      description: "Improved the look and expanded the artistic capabilities of Bevy's bloom effect",
      homepageUrl: "https://github.com/bevyengine/bevy/pull/6677",
      features: [
        {
          imageUrl: featureMain,
          imageFit: "cover",
        },
        {
          imageUrl: featureSlight,
          imageFit: "cover",
        },
        {
          imageUrl: featureBlur1,
          imageFit: "cover",
        },
        {
          imageUrl: featureBlur2,
          imageFit: "cover",
        }
      ],
      story: {
        hue: 10,
        description: [
          "The revamped bloom effect is my first contribution to a major open-source project.",
          "The story began in a comment section of a Youtube video that reviewed the Bevy 0.9 update and the first version of the effect that lacked very important to me features. My comment was not entirely correct about the mistakes made by the original developer and I was bullied into proving that my criticism was legitimate.",
          "After getting in touch with the Bevy team on GitHub we collaborated on fixing the implementation mistakes, expanding artistic capabilities to an extent no other major game engine does with the use of a parametric function I designed.",
        ],
        achievements: [
          {
            icon: <Logo class="size-i-s"/>,
            type: "Learned",
            title: "Post-processing in Bevy",
            description: "Post-processing is a critical step in making any image look production-ready. I have implemented post-processing in other engines before; Bevy is the newest addition to the collection.",
            viewUrl: "https://bevyengine.org/news/bevy-0-9/",
          },
          {
            icon: <Logo class="size-i-s"/>,
            type: "Learned",
            title: "Rendering in Bevy",
            description: "Bevy rendering is an innovative and well-architected way that takes the most advantage of their ECS design. With this skill under my belt, I can build very high-performance renderers on top of the Bevy engine.",
            viewUrl: "https://bevy-cheatbook.github.io/gpu/intro.html",
          },
          {
            icon: <div class="i-simple-icons-github" />,
            type: "Significant event",
            title: "Major OSS contribution",
            description: "Although I have developed open-source projects by myself before and have contributed to small projects, this was my first contribution to a major one.",
            viewUrl: "https://github.com/bevyengine/bevy/pull/6677/",
          },
          {
            icon: <div class="i-mdi-lightbulb-on-outline" />,
            type: "Developed",
            title: "Parametric blend function",
            description: "This function allows developers to control the effect better than other known methods and even lets them use bloom as a blur filter.",
            viewUrl: "https://starlederer.github.io/bloom/",
          },
        ],
      },
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
