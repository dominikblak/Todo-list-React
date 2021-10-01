import React from "react";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";

function Tasks() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" sectionContent={<Form />} />
      <Section title="Lista zadań" sectionContent={<TaskList />} extraHeaderContent={<Buttons />} />
    </Container>
  );
}

export default Tasks;
