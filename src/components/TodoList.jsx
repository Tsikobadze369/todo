import { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  state = {
    inputValue: "",
    todos: [
      //   { id: 1, name: "dance" },
      //   { id: 2, name: "eat" },
    ],
  };

  onChange = (e) => {
    const value = e.target.value;
    this.setState({ inputValue: value });
  };
  addToDo = (e) => {
    e.preventDefault();
    const todo = {
      id: this.state.todos.length + 1,
      name: this.state.inputValue,
    };
    this.setState({
      todos: [...this.state.todos, todo],
      inputValue: "",
    });
  };

  removeTodo = (id) => {
    const todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({
      todos,
    });
  };

  render() {
    return (
      <div className="todo">
        <form onSubmit={this.addToDo} className="todo-form">
          <input
            type="text"
            onChange={this.onChange}
            value={this.state.inputValue}
          />
          <button type="submit">Add To Do</button>
        </form>

        {this.state.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            name={todo.name}
            action={this.removeTodo}
          />
        ))}
      </div>
    );
  }
}
export default TodoList;
