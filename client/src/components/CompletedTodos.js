import React from "react";
import "./CompletedTodos.css";
import TodoList from "./TodoList";

const CompletedTodos = ({ todos }) => {
  return (
    <div className="completedTodos">
      <h1 className="completedTodos__heading">Completed</h1>
      {todos?.map((item) =>
        item.isDone === 1 ? (
          <TodoList
            key={item.id}
            todo={item.title}
            id={item.id}
            underline
            isChecked
          />
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default CompletedTodos;
