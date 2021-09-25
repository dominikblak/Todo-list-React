import { useState } from "react";
import { useSelector } from "react-redux";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useTasks } from "../../useTasks";
import { selectTasks } from "./tasksSlice";

function Tasks() {
  const [hideDone, setHideDone] = useState(false);
  const { tasks } = useSelector(selectTasks);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const {
    //tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" sectionContent={<Form addNewTask={addNewTask} />} />
      <Section
        title="Lista zadań"
        sectionContent={
          <TasksList tasks={tasks} hideDone={hideDone} removeTask={removeTask} toggleTaskDone={toggleTaskDone} />
        }
        extraHeaderContent={
          <Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} setAllDone={setAllDone} />
        }
      />
    </Container>
  );
}

export default Tasks;
