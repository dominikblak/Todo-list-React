import { useState } from "react";
import "./style.css";
import { FormSection } from "./styled";

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
      <input
        value={newTaskConent}
        className="form__input "
        autoFocus
        required
        placeholder="Co jest do zrobienia ?"
        onChange={(event) => setNewTaskContent(event.target.value)}
      />
      <button className="form__button">Dodaj zadanie</button>
    </FormSection>
  );
};

export default Form;
