import { Wrapper, Toggle } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const disptach = useDispatch();
  return (
    <Wrapper>
      {tasks.length > 0 && (
        <>
          <Toggle onClick={() => disptach(toggleHideDone())}>{hideDone ? "Pokaż" : "Ukryj"} ukończone</Toggle>
          <Toggle onClick={() => disptach(setAllDone())}>Ukończ wszytskie</Toggle>
        </>
      )}
    </Wrapper>
  );
};

export default Buttons;
