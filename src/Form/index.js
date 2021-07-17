import { useState, useRef } from "react";
import { FormInput, FormSection, FormButton } from "./styled";

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
    <FormSection onSubmit={onFormSubmit}>
      <FormInput
        ref={inputRef}
        value={newTaskConent}
        autoFocus
        required
        placeholder="Co jest do zrobienia ?"
        onChange={(event) => setNewTaskContent(event.target.value)}
      />
      <FormButton>Dodaj zadanie</FormButton>
    </FormSection>
  );
};

export default Form;
