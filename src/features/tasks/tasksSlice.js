import { createSlice } from "@reduxjs/toolkit";
const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toogleTaskDone : (state, action)=>{
      const index = state.tasks.findIndex(task=>task.id === action.payload);
      state.tasks[index].done = !state.tasks[index].done;
    }
  },
});
export const { addTask, toggleHideDone,toogleTaskDone } = tasksSlice.actions;
export const selectTasks = (state) => state.tasks;
export default tasksSlice.reducer;
