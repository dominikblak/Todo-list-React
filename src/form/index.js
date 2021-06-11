import "./style.css";
const Form = (props) => (
  <form className="form">
    <input className="form__input " autoFocus required placeholder="Co jest do zrobienia ?" />
    <button className="form__button">Dodaj zadanie</button>
  </form>
);

export default Form;
