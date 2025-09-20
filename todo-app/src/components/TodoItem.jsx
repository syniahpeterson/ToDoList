import React from "react";
import "../styles/TodoItem.css";

// Renders a single todo item with star, text, and delete button
const TodoItem = ({ todo, onToggle, onDelete, onToggleImportant }) => (
  <li className="todo-item">
    {/* Star button to mark as important */}
    <button
      className={"todo-star-btn" + (todo.important ? " starred" : "")}
      onClick={() => onToggleImportant(todo.id)}
      aria-label={todo.important ? "Unmark as important" : "Mark as important"}
      tabIndex={0}
      type="button"
    >
      {todo.important ? "★" : "☆"}
    </button>
    {/* Todo text, click to toggle completed */}
    <span
      className={todo.completed ? "completed" : ""}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </span>
    {/* Delete button */}
    <button className="todo-delete-btn" onClick={() => onDelete(todo.id)}>
      Delete
    </button>
  </li>
);

export default TodoItem;
