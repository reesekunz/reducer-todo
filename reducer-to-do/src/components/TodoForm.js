// Add Task 

import React, { useState, useReducer} from "react";
import { initialState, toDoReducer } from "../reducers/reducer";

const TodoForm = props => {
  const [newItem, setNewItem] = useState("");
// useReducer - takes in a reducer and an initial stateState object
// returns - a state object and the dispatch function

const [state, dispatch] = useReducer(toDoReducer, initialState)
console.log(state);

const handleChanges = event => {
  setNewItem( event.target.value );
};

const submitItem = event => {
  // need prevent default on all form submissions and button clicks
event.preventDefault ();

//props.addTodo(newItem);

// clear form on submission 
setNewItem({ item: ""}) 
}


  return (

        <div>
        {/* <form onSubmit={submitItem}> */}
          <input
            className="item-input"
            type="text"
            name="newItem"
            value={newItem}
            onChange={handleChanges}
          />
          
          <button onClick={() => dispatch({ type: "ADD_TASK", payload: newItem })}>ADD TASK</button>
          {/* </form> */}
        </div>
      )
   
  
}
  
  export default TodoForm;





