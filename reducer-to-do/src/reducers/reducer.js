// need 2 things - initial state & reducer function

export const initialState = {
    
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
       
}

export const toDoReducer = (state, action) => {
console.log(state, action);
switch(action.type) {
    
    case "ADD_TODO":
    return {

    }

    case "TOGGLE_COMPLETED":
        return {

        }

        case "CLEAR_COMPLETED":
            return {


            }
       default:
           return state;     
}
}