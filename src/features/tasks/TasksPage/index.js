import React from "react";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import { Button } from "./Button";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Search from "./Search";

function TasksPage() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" sectionContent={<Form />} extraHeaderContent={<Button />} />
      <Section title="Wyszukiwarka" sectionContent={<Search />} />
      <Section title="Lista zadań" sectionContent={<TaskList />} extraHeaderContent={<Buttons />} />
    </Container>
  );
}

export default TasksPage;
