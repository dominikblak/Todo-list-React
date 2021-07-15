import "./style.css";
import { List, Item } from "./styled.js";

const Tasks = (props) => (
  <List>
    {props.tasks.map((task) => (
      <Item key={task.id} hidden={task.done && props.hideDone}>
        <button onClick={() => props.toggleTaskDone(task.id)} className="task__button">
          {task.done ? "✔" : ""}
        </button>
        <span className={`task__content ${task.done ? "task__content--done" : ""}`}>{task.content}</span>
        <button className=" task__button  task__button--remove" onClick={() => props.removeTask(task.id)}>
          🗑{" "}
        </button>
      </Item>
    ))}
  </List>
);

export default Tasks;
