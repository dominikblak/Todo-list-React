import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Sections from "./Sections";
import Header from "./Header";

const tasks = [
  { id: 1, content: "przejść na React", done: false },
  { id: 2, content: "zjeść obiad", done: true },
];
const hideDoneTasks = false;
function App() {
  return (
    <main className="container">
      <Header title="Lista zadań" />
      <Sections title="Dodaj nowe zadanie" sectionContent={<Form />} />
      <Sections
        title="Lista zadań"
        sectionContent={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
    </main>
  );
}

export default App;
