import { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  // State for all todos
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  // State for the new todo input
  const [newTodo, setNewTodo] = useState("");

  // Add a new todo
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    const todoItem = {
      id: Date.now(),
      text: newTodo,
      completed: false,
      important: false,
    };
    setTodos([...todos, todoItem]);
    setNewTodo("");
  };

  // Toggle the important/starred state
  const toggleImportant = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, important: !todo.important } : todo
      )
    );
  };

  // Toggle the completed state
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Persist todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Sort todos: starred first, then newest first
  const sortedTodos = [...todos].sort((a, b) => {
    if (a.important === b.important) return b.id - a.id;
    return b.important - a.important;
  });

  return (
    <div className="phone-frame">
      <div className="App">
        <h1>My Todo List</h1>
        <TodoForm
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onSubmit={handleAddTodo}
        />
        <TodoList
          todos={sortedTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onToggleImportant={toggleImportant}
        />
      </div>
    </div>
  );
};

export default App;
