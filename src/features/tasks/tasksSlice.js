import { createSlice } from "@reduxjs/toolkit";
const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload: newTask }) => {
      tasks.push(newTask);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toogleTaskDone: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      state.tasks[index].done = !state.tasks[index].done;
    },
    removeTask: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      state.tasks.splice(index, 1);
    },
    setAllDone: (state) => {
      state.tasks.forEach((task) => {
        task.done = true;
      });
    },
  },
});
export const { addTask, toggleHideDone, toogleTaskDone, removeTask, setAllDone } = tasksSlice.actions;
export const selectTasks = (state) => state.tasks;
export default tasksSlice.reducer;
