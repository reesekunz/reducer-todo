import React, { useReducer } from "react";
import { initialState, toDoReducer } from "../reducers/reducer";
import "../App.css";
const TodoForm = props => {
  const [state, dispatch] = useReducer(toDoReducer, initialState);
  console.log("TodoForm state =", state);
  return (
    <div onClick={props.toggle}>
      <h3 className={props.todo.completed ? "clear-completed" : null}>
        {props.todo.item}
      </h3>
      <button onClick={props.delete}>delete</button>
    </div>
  );
};

export default TodoForm;
