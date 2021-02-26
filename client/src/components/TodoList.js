import React, { useState, useEffect } from "react";
import "./TodoList.css";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo, updateStatus } from "../redux/actions";
import InputComponent from "./InputComponent";

const TodoList = ({ id, todo, underline, isChecked }) => {
  const [checked, setChecked] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [newTodo, setNewTodo] = useState(todo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (checked) {
      dispatch(updateStatus(id, todo));
    }
    if (checked && underline) {
      dispatch(updateTodo(id, todo));
    }
  }, [checked, dispatch, id, todo]);

  const onDelete = () => {
    dispatch(deleteTodo(id));
  };

  const onEdit = (e) => {
    setShowInput(true);
  };
  const onUpdate = (e) => {
    dispatch(updateTodo(id, newTodo));
    setShowInput(false);
  };
  return (
    <div className="todoList">
      <div className="todoList__todoContainer">
        {isChecked ? (
          <input
            type="checkbox"
            checked
            onChange={() => setChecked(!checked)}
            className="todoList__checkbox"
          />
        ) : (
          <input
            type="checkbox"
            value={checked}
            onChange={() => setChecked(!checked)}
            className="todoList__checkbox"
          />
        )}

        <h4
          className={
            underline
              ? "todoList__todo todoList__lineThrough"
              : "todoList__todo"
          }
        >
          {showInput ? (
            <InputComponent
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
          ) : (
            todo
          )}
        </h4>
      </div>
      <div className="todoList__buttonBox">
        {!showInput && (
          <button className="todoList__btn" onClick={onEdit}>
            Edit
          </button>
        )}
        {showInput && (
          <button className="todoList__btn" onClick={onUpdate}>
            Edit
          </button>
        )}
        <button className="todoList__btn" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoList;
