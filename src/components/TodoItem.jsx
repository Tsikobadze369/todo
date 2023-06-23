import React from "react";

const TodoItem = ({ id, name, action }) => {
  return (
    <div>
      <div className="todo-item">
        <p>{id}</p>
        <p>{name}</p>
        <button onClick={() => action(id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
