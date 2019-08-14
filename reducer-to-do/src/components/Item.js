// Toggle Completed 

import React, { useReducer } from "react";
import { initialState, toDoReducer } from "../reducers/reducer";



const Item = props => {
  const [state, dispatch] = useReducer(toDoReducer, initialState)

  return (
    <div
      // className below is for syling the item to mark it out depending on whether or not its complete/purchased
      className={`item${props.item.completed ? ' completed' : ''}`}
      onClick={() => dispatch({ type: "TOGGLE_COMPLETED", payload: props.item.id })}
    >
      <p>{props.item.task}</p>
    </div>
  );
};

export default Item;

