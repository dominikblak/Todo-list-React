import "./style.css";

const Buttons = (props) => (
  <div className="buttons">
    {props.tasks.length > 0 && (
      <>
        <button className="buttons__button">{props.hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone</button>
        <button className="buttons__button" disabled={props.tasks.every(({ done }) => done)}>
          Ukończ wszytskie
        </button>
      </>
    )}
  </div>
);
export default Buttons;
