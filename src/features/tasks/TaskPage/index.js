import React from "react";
import { useParams } from "react-router-dom";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));
  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : "Nie znaleziono zadania 😥"}
        sectionContent={<>{task ? <strong>Ukończono : {task.done ? "Tak" : "Nie"}</strong> : ""}</>}
      />
    </Container>
  );
}

export default TaskPage;
