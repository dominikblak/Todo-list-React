const localStorageKey = "tasks";
export const saveTasksInLocalStorage = (localStorageKey) =>
  localStorage.setItem(localStorageKey, JSON.stringify(localStorageKey));

export const getTasksFromLocalStorage = () => JSON.parse(localStorage.getItem(localStorageKey)) || [];
