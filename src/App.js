import Form from "./Form";
import Tasks from "./Tasks";
const tasks = [
  { id: 1, content: "przejść na React", done: false },
  { id: 2, content: "zjeść obiad", done: true },
];
const hideDoneTasks = false;
function App() {
  return (
    <main className="container">
      <h1 className="container__header">Lista zadań</h1>
      <section className="section">
        <h2 className="section__header">Dodaj nowe zadanie</h2>
        <Form />
      </section>
      <section className="section">
        <h2 className="section__header">
          Lista zadań
          <span className="section_buttonsCompleted"></span>
        </h2>
        <div className="section__content">
          <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
        </div>
      </section>
    </main>
  );
}

export default App;
