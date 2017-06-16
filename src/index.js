import React from 'react';
import {render} from 'react-dom';

import {Provider} from "react-redux";

import {createStore, combineReducers, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";

import Board from "./app/component/Board"

const initialState = {
    result1: 1,
    lastValues: []
}

const initialStateTicTacToe = {
    squares: Array(9).fill(null),
    xIsNext:true,
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                result1: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        case "SUBTRACT":
            break;
    }
    return state;
}

const ticTacToeReducer = (state = initialStateTicTacToe, action) => {
    switch (action.type) {
        case "CHANGE_PLAYER":
            state = {
                squares: action.squares,
                xIsNext: action.xIsNext
            }
            break;
        case "SUBTRACT":
            break;
    }
    return state;
}

const store = createStore(
    combineReducers({reducer, ticTacToeReducer}),
    {},
    applyMiddleware(createLogger()));

store.subscribe(() => {
    console.log("Store updated!", store.getState())
});

store.dispatch({
    type: "ADD",
    payload: 10
});

store.dispatch({
    type: "ADD",
    payload: 22
});

// store.dispatch({
//     type: "CHANGE_PLAYER",
//     payload: false,
//     squares: "X"
// });

render(<Provider store={store}>
        <Board/>
    </Provider>,
    window.document.getElementById('root'));