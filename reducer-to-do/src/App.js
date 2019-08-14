// - `<App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
// - All of your application data will be stored here on `<App />`.
// - All of your `handler` functions should live here on `<App />`.

import React, {useReducer} from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./App.css";

import { initialState, toDoReducer } from "./reducers/reducer";

const App = () => {

  const [state, dispatch] = useReducer(toDoReducer, initialState)
  // // new class property - don't need a const = in classes
  // toggleItem = id => {
  //   console.log("toggle item id", id);
  //   // update our state (toDo) on toggle
  //   // use this.setState
  //   // loop through the toDoData array
  //   // find which element we clicked on and update the 'purchased' property for that element/item
  //   this.setState({
  //     // pass through the state objects you are trying to update
  //     // whenever you update an array or object, rebuild that object from scratch (immutability)
  //     toDo: this.state.toDo.map(item => {
  //       // means you found the item that you clicked on
  //       if (item.id === id) {
  //         return {
  //           ...item,
  //           // ... item is the spread operator, would be the is same as typing each one out
  //           // task: item.task,
  //           // id: item.id,
  //           // completed: item.completed
  //           // want to keep the same task and id but update when that task is complete (flip the T/F boolean)
  //           // make sure its after spread operator is it overrides completed value
  //           completed: !item.completed
  //         };
  //       }
  //       // if it doesn't match, just return item untouched
  //       else {
  //         return item;
  //       }
  //     })
  //   });
  // };

  // // getting itemTask from wherever addItem is being invoked
  // const addItem = itemTask => {
  //   const newItem = {
  //     task: itemTask,
  //     id: Date.now(),
  //     completed: false
  //   };
  //   this.setState({
  //     // Adding new item object created above to end of toDo array (used in ToDoForm.js)
  //     toDo: [...this.state.toDo, newItem]
  //   });
  // };

  const clearCompleted = () => {
    this.setState({
      toDo: this.state.toDo.filter(item => !item.completed)
    });
  };
  const addItem = () => {};
  const toggleItem = () => {};
  
    return (

      <div className="App">
        <div className="Header">
      <h2>Reese's To-do List:</h2>
          <TodoForm addItem={addItem} />
          <TodoList
            toDo={state}
            toggleItem={toggleItem}
            clearCompleted={clearCompleted}
          />
        </div>
      </div>
    );
  
}

export default App;
