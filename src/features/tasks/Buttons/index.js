import { Wrapper, Toggle } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone } from "../tasksSlice";

const Buttons = ({ setAllDone }) => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const disptach = useDispatch();
  return (
    <Wrapper>
      {tasks.length > 0 && (
        <>
          <Toggle onClick={() => disptach(toggleHideDone())}>{hideDone ? "Pokaż" : "Ukryj"} ukończone</Toggle>
          <Toggle onClick={setAllDone} disabled={tasks.every(({ done }) => done)}>
            Ukończ wszytskie
          </Toggle>
        </>
      )}
    </Wrapper>
  );
};

export default Buttons;
