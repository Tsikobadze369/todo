import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const addToDo = (e) => {
    e.preventDefault();
    const todo = {
      id: todos.length + 1,
      name: inputValue,
    };
    setTodos([...todos, todo]);
    setInputValue("");
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo">
      <form onSubmit={addToDo} className="todo-form">
        <input type="text" onChange={onChange} value={inputValue} />
        <button type="submit">Add To Do</button>
      </form>

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          name={todo.name}
          action={removeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
