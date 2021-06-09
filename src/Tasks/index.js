const Tasks = (props) => (
  <ul class="tasks js-tasks">
    {props.tasks.map((task) => (
      <li>{task.content}</li>
    ))}
  </ul>
);
export default Tasks;
