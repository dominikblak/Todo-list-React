import { useState } from "react";
import { FormInput, FormSection, FormButton } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskConent, setNewTaskContent] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    const contetTrimmed = newTaskConent.trim();
    if (!contetTrimmed) {
      return;
    }

    addNewTask(contetTrimmed);
    setNewTaskContent(" ");
  };

  return (
    <FormSection onSubmit={onFormSubmit}>
      <FormInput
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
