import React from "react";
import TodoItem from "./TodoItem";
import "../styles/TodoList.css";

// Renders the list of todos, using TodoItem for each
const TodoList = ({ todos, onToggle, onDelete, onToggleImportant }) => (
  <ul className="todo-list">
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onToggle={onToggle}
        onDelete={onDelete}
        onToggleImportant={onToggleImportant}
      />
    ))}
  </ul>
);

export default TodoList;
