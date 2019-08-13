// - `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
//   - Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.
//   - Once a todo is submitted, the Todo List should re-render and show the added todo.

import React from "react";

// building new class because form is going to manage its own state

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: " "
    };
  }

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // Add new import to todo list
  submitItem = event => {
    // need prevent default on form submissions and button clicks
    event.preventDefault();
    // getting the text from the input and using it to update the state property
    this.props.addItem(this.state.item);
    // clears form on submission
    this.setState({ item: " " });
  };

  //

  render() {
    return (
      <>
        <form onSubmit={this.submitItem}>
          <input
            type="text"
            value={this.state.item}
            name="item"
            onChange={this.handleChanges}
          />
          <button className="addTask">Add Task</button>
        </form>
      </>
    );
  }
}

export default TodoForm;
