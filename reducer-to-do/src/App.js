// - `<App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
// - All of your application data will be stored here on `<App />`.
// - All of your `handler` functions should live here on `<App />`.

import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./App.css";

const toDoData = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  },
  {
    task: "Finish ToDo Project",
    id: 7,
    completed: false
  },
  {
    task: "Take Nap",
    id: 8,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDo: toDoData
    };
  }
  // new class property - don't need a const = in classes
  toggleItem = id => {
    console.log("toggle item id", id);
    // update our state (toDo) on toggle
    // use this.setState
    // loop through the toDoData array
    // find which element we clicked on and update the 'purchased' property for that element/item
    this.setState({
      // pass through the state objects you are trying to update
      // whenever you update an array or object, rebuild that object from scratch (immutability)
      toDo: this.state.toDo.map(item => {
        // means you found the item that you clicked on
        if (item.id === id) {
          return {
            ...item,
            // ... item is the spread operator, would be the is same as typing each one out
            // task: item.task,
            // id: item.id,
            // completed: item.completed
            // want to keep the same task and id but update when that task is complete (flip the T/F boolean)
            // make sure its after spread operator is it overrides completed value
            completed: !item.completed
          };
        }
        // if it doesn't match, just return item untouched
        else {
          return item;
        }
      })
    });
  };

  // getting itemTask from wherever addItem is being invoked
  addItem = itemTask => {
    const newItem = {
      task: itemTask,
      id: Date.now(),
      completed: false
    };
    this.setState({
      // Adding new item object created above to end of toDo array (used in ToDoForm.js)
      toDo: [...this.state.toDo, newItem]
    });
  };

  clearCompleted = () => {
    this.setState({
      toDo: this.state.toDo.filter(item => !item.completed)
    });
  };

  render() {
    return (

      <div className="App">
        <div className="Header">
      <h2>Reese's To-do List:</h2>
          <TodoForm addItem={this.addItem} />
          {/* // access class property with 'this' keyword */}
          <TodoList
            toDo={this.state.toDo}
            toggleItem={this.toggleItem}
            clearCompleted={this.clearCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
