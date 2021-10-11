export const getExampleTasks = async () => {
  const respone = await fetch("/Todo-list-React/exampleTaks.json");
  if (!respone.ok) {
    new Error(respone.statusText);
  }
  return await respone.json();
};
