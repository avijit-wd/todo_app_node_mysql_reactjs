import React, { useState } from "react";
import "./TodoForm.css";
import InputComponent from "./InputComponent";
import { useDispatch } from "react-redux";
import { addTodos } from "../redux/actions";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo !== "") {
      dispatch(addTodos(todo));
      setTodo("");
    }
  };
  return (
    <div className="todoForm">
      <h1 className="todoForm__heading">Add Item</h1>
      <form className="todoForm__inputBox" onSubmit={handleSubmit}>
        <InputComponent
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button type="submit" className="todoForm__btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
