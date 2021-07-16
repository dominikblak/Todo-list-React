import { ButtonsSection, ButtonsToggle } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <ButtonsSection>
    {tasks.length > 0 && (
      <>
        <ButtonsToggle onClick={toggleHideDone}>{hideDone ? "Pokaż" : "Ukryj"} ukończone</ButtonsToggle>
        <ButtonsToggle onClick={setAllDone} disabled={tasks.every(({ done }) => done)}>
          Ukończ wszytskie
        </ButtonsToggle>
      </>
    )}
  </ButtonsSection>
);

export default Buttons;
