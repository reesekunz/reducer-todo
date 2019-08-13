// need 2 things - initial state & reducer function

export const initialState = {
    
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
       
}

export const toDoReducer = (state, action) => {
console.log(state, action);
switch(action.type) {
    
    case "ADD_TASK":
    return { ...state, item: action.payload,
    
    }

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