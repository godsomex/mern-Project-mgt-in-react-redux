import { combineReducers } from "redux";
import taskReducer from "./taskReducer.js";

const allReducers = combineReducers({
  newTask: taskReducer
});

export default allReducers;
