import React, { useState } from "react";
import "./App.css";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div className="container">
      <h1>ToDo List</h1>
      <input
        type="text"
        id="todo-input"
        placeholder="Write Your Task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button id="add-btn" onClick={handleAdd}>
        Add
      </button>

      <ul id="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <span>{todo.text}</span>
            <div className="actions">
              <button onClick={() => handleDelete(todo.id)}>
                <i className="fa-solid fa-square-xmark"></i>
                {/* <i class="fas fa-marker    "></i> */}
              </button>
              {!todo.completed && (
                <button onClick={() => handleComplete(todo.id)}>
                  <i className="fa fa-square-check"></i>
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
