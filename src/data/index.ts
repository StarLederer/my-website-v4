import { Database, fromProjects } from "./database";

import bevy from "./projects/bevy";
import interfacer from "./projects/interfacer";
import metashine from "./projects/metashine";
import mwgsl from "./projects/mwgsl";
import vitePluginFs from "./projects/vitePluginFs";

let oss: Database | undefined = undefined;

const getOss = (): Database => {
  if (Array.isArray(oss)) return oss;

  oss = fromProjects([
    bevy,
    vitePluginFs,
    interfacer,
    metashine,
    mwgsl,
  ]);
  return oss;
};

export { getOss };
export * from "./utils";
export * from "./database";
export * from "./projects/types";
