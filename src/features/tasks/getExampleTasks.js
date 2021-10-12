export const getExampleTasks = async () => {
  const respone = await fetch("/Todo-list-React/exampleTasks.json");
  if (!respone.ok) {
    new Error(respone.statusText);
  }
  return await respone.json();
};
