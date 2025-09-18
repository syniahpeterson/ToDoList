import React from "react";
import "../styles/TodoForm.css";

const TodoForm = ({ value, onChange, onSubmit }) => (
  <form onSubmit={onSubmit} className="todo-form">
    <input
      id="todo-input"
      name="todo"
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Enter a new todo"
      className="todo-input"
      autoComplete="off"
    />
    <button type="submit" className="todo-add-btn">
      Add Todo
    </button>
  </form>
);

export default TodoForm;
