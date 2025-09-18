import React from "react";
import TodoItem from "./TodoItem";
import "../styles/TodoList.css";

const TodoList = ({ todos, onToggle, onDelete }) => (
  <ul className="todo-list">
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    ))}
  </ul>
);

export default TodoList;
