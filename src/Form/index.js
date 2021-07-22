import { useState, useRef } from "react";
import { Input, Section, Button } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskConent, setNewTaskContent] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    inputRef.current.focus();
    const contetTrimmed = newTaskConent.trim();
    if (!contetTrimmed) {
      return;
    }

    addNewTask(contetTrimmed);
    setNewTaskContent(" ");
  };
  const inputRef = useRef(null);
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
