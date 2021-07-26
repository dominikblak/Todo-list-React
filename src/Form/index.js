import { useState, useRef } from "react";
import { Input, Section, Button } from "./styled";

const Form = ({ addNewTask }) => {
  const inputRef = useRef(null);
  const [newTaskConent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    const contetTrimmed = newTaskConent.trim();
    if (!contetTrimmed) {
      return;
    }

    addNewTask(contetTrimmed);
    setNewTaskContent(" ");
    inputRef.current.focus();
  };

  return (
    <Section onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskConent}
        autoFocus
        required
        placeholder="Co jest do zrobienia ?"
        onChange={(event) => setNewTaskContent(event.target.value)}
      />
      <Button>Dodaj zadanie</Button>
    </Section>
  );
};

export default Form;
