import { useState, useEffect } from "react";

export const useTasks = () => {
  const getInitialTasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks")) || [];

  const [tasks, setTasks] = useState(getInitialTasksFromLocalStorage);
  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            done: !task.done,
          };
        }
        return task;
      })
    );
  };

  const setAllDone = () => {
    setTasks((tasks) =>
      tasks.map((task) => ({
        ...task,
        done: true,
      }))
    );
  };

  const addNewTask = (newTaskConent) => {
    setTasks((tasks) => [
      ...tasks,
      {
        content: newTaskConent,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      },
    ]);
  };
  return { tasks, removeTask, toggleTaskDone, setAllDone, addNewTask };
};
