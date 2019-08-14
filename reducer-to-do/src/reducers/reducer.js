// need 2 things - initial state & reducer function

export const initialState = [
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


export const toDoReducer = (state, action) => {
// console.log(state, action);
switch(action.type) {
    
    case "ADD_TASK":
    return [ ...state, {
        task: action.payload,
        id: Date.now(),
        completed: false
    }]

    case "TOGGLE_COMPLETED":
        return {
            ...state, completed: !state.completed

        }

        case "CLEAR_COMPLETED":
            return {

                // ... state, completed: filter(item => !state.completed)
            }

       default:
           return state;     
}
}