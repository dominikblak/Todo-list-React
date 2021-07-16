import "./style.css";
import { SectionButtons, ToggleButtons } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <SectionButtons>
    {tasks.length > 0 && (
      <>
        <ToggleButtons onClick={toggleHideDone}>{hideDone ? "Pokaż" : "Ukryj"} ukończone</ToggleButtons>
        <ToggleButtons onClick={setAllDone} disabled={tasks.every(({ done }) => done)}>
          Ukończ wszytskie
        </ToggleButtons>
      </>
    )}
  </SectionButtons>
);

export default Buttons;
