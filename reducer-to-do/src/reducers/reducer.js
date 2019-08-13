// // need 2 things - initial state & reducer function

// export const initialState = {

// item: 'Learn about reducers',
// completed: false,
// id: 3892987589,

// }

// const addItem = itemTask => {
//     const newItem = {
//       task: itemTask,
//       id: Date.now(),
//       completed: false
//     };
//     this.setState({
//       // Adding new item object created above to end of toDo array (used in ToDoForm.js)
//       toDo: [...this.state.toDo, newItem]
//     });
//   };




// export const todoReducer = (state, action) => {
//     console.log(state, action);
//     switch(action.type ) {
//     case "TOGGLE_COMPLETED":
//     return {
//     ...state, completed: !state.completed
    
//     }
    
//     case "ADD_TODO":
//     return {
//     ... state, title: action.payload,
//     editing: !state.editing
    
//     };

//     case "CLEAR_COMPLETED":
//     return {
//     ... state, completed: filter(item => !item.completed)
    
//     };
    
//     default: 
//     return state;
//     }
//     }