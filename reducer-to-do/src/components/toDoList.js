// using reducer hook, set up state in your component
// render list of todos from your reducer in your app

import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from "../reducers/reducer";

// actions - "TOGGLE_ITEM", "ADD_ITEM", "CLEAR_COMPLETED"

const Item = () => {
    const [newItem, setNewItem] = useState();

// useReducer - takes in a reducer and an initial stateState object
// returns - a state object and the dispatch function 

const [state, dispatch] = useReducer(todoReducer, initialState)
console.log(state);



