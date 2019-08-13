//   - Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.
//   - Once a todo is submitted, the Todo List should re-render and show the added todo.

import React, { useState, useReducer} from "react";
import { initialState, toDoReducer } from "../reducers/reducer";

const TodoForm = () => {
  const [newItem, setNewItem] = useState();
// useReducer - takes in a reducer and an initial stateState object
// returns - a state object and the dispatch function

const [state, dispatch] = useReducer(toDoReducer, initialState)
console.log(state);

const handleChanges = event => {
  setNewItem( event.target.value );
};
// [event.target.name]: event.target.value


  return (
    <div>
      {!state.completed ? (
        <h1>
          {state.item}{' '}
          <i
            onClick={() => dispatch({ type: "TOGGLE_COMPLETED" })}
          />
        </h1>
      ) : (
        <div>
          <input
            className="item-input"
            type="text"
            name="newItem"
            value={newItem}
            onChange={handleChanges}
          />
          
          <button onClick={() => dispatch({ type: "ADD_TASK", payload: newItem })}>ADD TASK</button>
        </div>
      )}
    </div>
  );
  };
  
  export default TodoForm;




