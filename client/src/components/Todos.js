import React from "react";
import "./Todos.css";
import TodoList from "./TodoList";

const Todos = ({ todos }) => {
  return (
    <div className="todos">
      <h1 className="todos__heading">Todo</h1>
      {todos?.map((item) =>
        item.isDone === 0 ? (
          <TodoList key={item.id} todo={item.title} id={item.id} />
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default Todos;
