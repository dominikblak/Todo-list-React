import "./style.css";

const Tasks = (props) => (
  <ul className="tasks">
    {props.tasks.map((task) => (
      <li key={task.id} className={`tasks__list ${task.done && props.hideDone ? "tasks__list--hiden" : ""}`}>
        <button onClick={() => props.toggleTaskDone(task.id)} className="task__button">
          {task.done ? "✔" : ""}
        </button>
        <span className={`task__content ${task.done ? "task__content--done" : ""}`}>{task.content}</span>
        <button className=" task__button  task__button--remove" onClick={() => props.removeTask(task.id)}>
          🗑{" "}
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
