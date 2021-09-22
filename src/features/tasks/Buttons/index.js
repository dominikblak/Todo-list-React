import { Wrapper, Toggle } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <Wrapper>
    {tasks.length > 0 && (
      <>
        <Toggle onClick={toggleHideDone}>{hideDone ? "Pokaż" : "Ukryj"} ukończone</Toggle>
        <Toggle onClick={setAllDone} disabled={tasks.every(({ done }) => done)}>
          Ukończ wszytskie
        </Toggle>
      </>
    )}
  </Wrapper>
);

export default Buttons;
