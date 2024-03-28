import { combineReducers, createStore } from "redux";
import userReducer from "./reducers/userReducer";
import todoReducer from "./reducers/todoReducer";

const rootReducer = combineReducers({ todoReducer, userReducer });

const store = createStore(rootReducer);

export default store;
