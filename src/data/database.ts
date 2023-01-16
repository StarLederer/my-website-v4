import { Project } from "./projects/types";

type EntryID = number;

type Entry = {
  id: EntryID;
  project: Project;
  parents: EntryID[];
  children: EntryID[];
};

type Database = Entry[];

const addProjects = (database: Database, projects: Project[], parents: EntryID[] = []): EntryID[] => {
  const newTopLevelEntryIds: EntryID[] = [];

  projects.forEach((project) => {
    if (database === undefined) throw Error("Cannot add proejcts to database before it is initialized");

    let currentId: EntryID = database.length;
    database.push({
      id: currentId,
      project,
      parents,
      children: [], // temporarily put an empty array in
    });
    newTopLevelEntryIds.push(currentId);

    if (!project.children) return;
    let childrenIDs = addProjects(database, project.children, [...parents, currentId]);
    database[currentId].children = childrenIDs;
  });

  return newTopLevelEntryIds;
};

const fromProjects = (projects: Project[]): Database => {
  const database: Database = [];
  addProjects(database, projects);
  return database;
};

export type { EntryID, Entry, Database };
export { fromProjects, addProjects };
