import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { List, Item, Content, Button } from "./styled.js";
import { selectTasks,toogleTaskDone } from "../tasksSlice.js";


const TasksList = ({ removeTask}) => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button toggleDone onClick={() => dispatch(toogleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </Button>
          <Content done={task.done}>{task.content}</Content>
          <Button remove onClick={() => removeTask(task.id)}>
            🗑{" "}
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TasksList;
