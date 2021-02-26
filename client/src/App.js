import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";
import CompletedTodos from "./components/CompletedTodos";
import { getTodos } from "./redux/actions";

const App = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="container">
        <h1 className="container__heading">Todo App</h1>
        <TodoForm />
        <Todos todos={todos} />
        <CompletedTodos todos={todos} />
      </div>
    </div>
  );
};

export default App;
