import { Entry, EntryID } from ".";

const getOldestId = (data: Entry[]): EntryID | undefined => {
  let oldestTime = Number.MAX_VALUE;
  let oldestEntry: EntryID | undefined = undefined;

  data.forEach(({ project }, id) => {
    if (project.term === undefined) return;
    let date = project.term.end ?? project.term.start;
    let time = date.getTime();

    if (time <= oldestTime) {
      oldestTime = time;
      oldestEntry = id;
    }
  });

  return oldestEntry;
};

const getNewestId = (data: Entry[]): EntryID | undefined => {
  let newestTime = 0;
  let newestEntry: EntryID | undefined = undefined;

  data.forEach(({ project }, id) => {
    if (project.term === undefined) return;
    let date = project.term.start;
    let time = date.getTime();

    if (time >= newestTime) {
      newestTime = time;
      newestEntry = id;
    }
  });

  return newestEntry;
};

const findLogo = (data: Entry[], entry: Entry) => {
  let logo = entry.project.logo;
  while (!logo && entry.parents.length > 0) {
    logo = findLogo(data, data[entry.parents[entry.parents.length - 1]]);
  }

  return logo;
};

export { getOldestId, getNewestId, findLogo };
