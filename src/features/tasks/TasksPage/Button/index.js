import { useDispatch, useSelector } from "react-redux";
import { Toggle, Wrapper } from "../Buttons/styled";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";

export const Button = () => {
  const disptach = useDispatch();
  const loading = useSelector(selectLoading);
  return (
    <Wrapper>
      <Toggle disabled={loading} onClick={() => disptach(fetchExampleTasks())}>
        {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
      </Toggle>
    </Wrapper>
  );
};
