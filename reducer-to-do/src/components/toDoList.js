// - `<TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.

import React from "react";
import Item from "./Item";

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.toDo.map(item => (
        <Item key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;


