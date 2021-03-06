import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../../tasksSlice";
import { Wrapper, Button } from "./styled";
import Input from "../../Input";

const Form = () => {
  const inputRef = useRef(null);
  const [newTaskConent, setNewTaskContent] = useState("");
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const contetTrimmed = newTaskConent.trim();
    if (!contetTrimmed) {
      return;
    }

    dispatch(
      addTask({
        content: contetTrimmed,
        done: false,
        id: nanoid(),
      })
    );

    setNewTaskContent(" ");
    inputRef.current.focus();
  };

  return (
    <Wrapper onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskConent}
        autoFocus
        required
        placeholder="Co jest do zrobienia?"
        onChange={(event) => setNewTaskContent(event.target.value)}
      />
      <Button>Dodaj zadanie</Button>
    </Wrapper>
  );
};

export default Form;
