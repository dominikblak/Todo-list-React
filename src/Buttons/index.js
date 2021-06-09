import "./style.css";
const Buttons = (props) => {
  if (props.tasks.length === 0) {
    return null;
  }
  return (
    <div className="section_buttonsCompleted">
      <button className="section__button">{props.hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone</button>
      <button className="section__button" disabled={props.tasks.every(({ done }) => done)}>
        Ukończ wszytskie
      </button>
    </div>
  );
};
export default Buttons;
