import { Wrapper, Toggle } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleHideDone,
  setAllDone,
  selectHideDone,
  selectAreTaskEmpty,
  selectIsEveryTaskDone,
} from "../../tasksSlice";

const Buttons = () => {
  const areTaskEmpty = useSelector(selectAreTaskEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);

  const disptach = useDispatch();
  return (
    <Wrapper>
      {!areTaskEmpty && (
        <>
          <Toggle onClick={() => disptach(toggleHideDone())}>{hideDone ? "Pokaż" : "Ukryj"} ukończone</Toggle>
          <Toggle onClick={() => disptach(setAllDone())} disabled={isEveryTaskDone}>
            Ukończ wszytskie
          </Toggle>
        </>
      )}
    </Wrapper>
  );
};

export default Buttons;
