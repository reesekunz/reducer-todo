// - `<TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.

import React, { useReducer } from "react";
import { initialState, toDoReducer } from "../reducers/reducer";

import Item from "./Item";


const TodoList = props => {
  const [state, dispatch] = useReducer(toDoReducer, initialState)

  return (
    <div className="todo-list">
      {props.toDo.map(item => (
        <Item key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button onClick={() => dispatch({ type: "TOGGLE_COMPLETED", payload: props.clearCompleted })}>CLEAR COMPLETED</button>

    </div>
  );
};

export default TodoList;


