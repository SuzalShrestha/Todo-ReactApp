import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";
import "./styles.css";
import { useEffect, useState } from "react";
function App() {
  const [todos, setTodos] = useState(() => {
    const local = localStorage.getItem("todos");
    return local ? JSON.parse(local) : [];
  });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
        },
      ];
    });
  }
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => {
        return todo.id !== id;
      });
    });
  }
  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">TODO LIST</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
