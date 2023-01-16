import { Component, JSXElement } from "solid-js";

type Story = {
  description: string[];
  achievements: {
    icon: JSXElement;
    type: "Singificant event" | "Learned" | "Discovered" | "Developed"
    title: string,
    description: string,
    viewUrl: string
  }[];
};

type Project = {
  name: string;
  description: string;
  logo?: Component;
  homepageUrl: string;
  sourceCodeUrl?: string;
  priority?: boolean;
  features?: {
    imageUrl: string;
    imageFit: "cover" | "contain",
    bgColor?: string;
  }[];
  story?: Story,
  role?: "creator" | "team member" | "contributor" | "occasional contributor" | "past contributor";
  closedSource?: boolean;
  term?: {
    track?: number;
    start: Date;
    end?: Date;
    completed?: boolean;
  };
  children?: Project[];
};

export type { Story, Project };
