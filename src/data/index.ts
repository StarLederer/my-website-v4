import { Database, fromProjects } from "./database";

import bevy from "./projects/bevy";
import interfacer from "./projects/interfacer";
import mediacrate from "./projects/mediacrate";
import metashine from "./projects/metashine";
import mwgsl from "./projects/mwgsl";
import townsAndHeroes from "./projects/townsAndHeroes";
import vitePluginFs from "./projects/vitePluginFs";
import windblade from "./projects/windblade";

// Open source

let oss: Database | undefined = undefined;

const getOss = (): Database => {
  if (Array.isArray(oss)) return oss;

  oss = fromProjects([
    bevy,
    vitePluginFs,
    interfacer,
    metashine,
    mwgsl,
    // windblade,
    // mediacrate
  ]);
  return oss;
};

// Corporate

let corporate: Database | undefined = undefined;

const getCorporate = (): Database => {
  if (Array.isArray(corporate)) return corporate;

  corporate = fromProjects([
    vitePluginFs,
    metashine,
    bevy,
    interfacer,
    windblade,
    // urpVolumetricLight
  ]);
  return corporate;
};

export { getOss, getCorporate };
export * from "./utils";
export * from "./database";
export * from "./projects/types";
