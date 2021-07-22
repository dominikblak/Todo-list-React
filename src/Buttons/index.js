import { Section, Toggle } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <Section>
    {tasks.length > 0 && (
      <>
        <Toggle onClick={toggleHideDone}>{hideDone ? "Pokaż" : "Ukryj"} ukończone</Toggle>
        <Toggle onClick={setAllDone} disabled={tasks.every(({ done }) => done)}>
          Ukończ wszytskie
        </Toggle>
      </>
    )}
  </Section>
);

export default Buttons;
