import React, { useState, useReducer } from "react";
import { initialState, toDoReducer } from "../reducers/reducer";

import TodoForm from "./TodoForm";

const TodoList = () => {
  const [state, dispatch] = useReducer(toDoReducer, initialState);
  const [input, setInput] = useState("");

  const handleInput = event => setInput(event.target.value);

  const addTodo = event => {
    event.preventDefault();
    dispatch({ type: "ADD_TASK", payload: input });
    setInput("");
  };
  console.log("TodoList state =", state);
  return (
    <div className="todo-list">
      <form onSubmit={addTodo}>
        <input onChange={handleInput} value={input} type="text" />
        <button>Add Task </button>
      </form>
      <div>
        {state.todos.map(todo => (
          <TodoForm
            toggle={() =>
              dispatch({ type: "TOGGLE_COMPLETED", payload: todo.id })
            }
            delete={() => dispatch({ type: "DELETE_TASK", payload: todo.id })}
            key={todo.id}
            todo={todo}
          />
        ))}
      </div>

      <button className="clear-btn" onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;
