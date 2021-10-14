import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import tasksReducer from "./features/tasks/tasksSlice";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);
export default store;
