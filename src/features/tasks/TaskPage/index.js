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
        title={task.content}
        sectionContent={
          <>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex dolorum mollitia, optio minima nemo odit
            temporibus repudiandae tenetur fuga adipisci magnam ab alias architecto inventore, atque consequuntur sint
            tempore totam!
          </>
        }
      />
    </Container>
  );
}

export default TaskPage;
