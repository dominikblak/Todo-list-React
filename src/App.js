import React from "react";
import { HashRouter, Link, Switch, Route } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import Author from "./features/author/Author";

export const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to="/zadania">Zadania</Link>
        </li>
        <li>
          <Link to="/autor">O autorze</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          Strona główna
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <Author />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);
