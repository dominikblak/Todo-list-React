import { List, Item, Content, Button } from "./styled.js";

const Tasks = (props) => (
  <List>
    {props.tasks.map((task) => (
      <Item key={task.id} hidden={task.done && props.hideDone}>
        <Button toggleDone onClick={() => props.toggleTaskDone(task.id)}>
          {task.done ? "✔" : ""}
        </Button>
        <Content done={task.done}>{task.content}</Content>
        <Button remove onClick={() => props.removeTask(task.id)}>
          🗑{" "}
        </Button>
      </Item>
    ))}
  </List>
);

export default Tasks;
