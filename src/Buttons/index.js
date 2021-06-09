import "./style.css";
const Buttons = (props) =>
  props.tasks.length > 0 && (
    <div className="section_buttonsCompleted">
      <button className="section__button">{props.hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone</button>
      <button className="section__button" disabled={props.tasks.every(({ done }) => done)}>
        Ukończ wszytskie
      </button>
    </div>
  );
export default Buttons;
