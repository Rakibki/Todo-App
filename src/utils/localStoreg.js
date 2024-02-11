export const getLocalStor = (lsName) => {
  let tasks = [];
  let lsTasks = localStorage.getItem(lsName);
  if (lsTasks) {
    return JSON.parse(lsTasks);
  }
  return tasks;
};
