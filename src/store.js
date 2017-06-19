import {createStore, combineReducers, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import mathReducer from "./app/reducers/mathReducer"
import ticTacToeReducer from "./app/reducers/ticTacToeReducer"
import {add, subtract} from "./app/actions/mathActions"

const store = createStore(
    combineReducers({mathReducer, ticTacToeReducer}),
    {},
    applyMiddleware(createLogger()));

store.subscribe(() => {
    console.log("Store updated!", store.getState())
});

store.dispatch(add(10));
store.dispatch(add(22));
store.dispatch(subtract(10))

export default store;