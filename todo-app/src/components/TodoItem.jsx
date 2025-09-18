import React from "react";
import "../styles/TodoItem.css";

const TodoItem = ({ todo, onToggle, onDelete }) => (
  <li className="todo-item">
    <span
      className={todo.completed ? "completed" : ""}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </span>
    <button className="todo-delete-btn" onClick={() => onDelete(todo.id)}>
      Delete
    </button>
  </li>
);

export default TodoItem;
