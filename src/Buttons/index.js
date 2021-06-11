import "./style.css";
import React from "react";
const Buttons = (props) => (
  <div className="section_buttonsCompleted">
    {props.tasks.length > 0 && (
      <React.Fragment>
        <button className="section__button">{props.hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone</button>
        <button className="section__button" disabled={props.tasks.every(({ done }) => done)}>
          Ukończ wszytskie
        </button>
      </React.Fragment>
    )}
  </div>
);
export default Buttons;
