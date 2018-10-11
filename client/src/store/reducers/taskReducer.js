// import uuid from "uuid";
import { ADD_TASKS, GET_TASKS, DELETE_TASKS, LOADING } from "../actions/types";
const initialState = {
  tasks: [],
  loading: false
};
export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TASKS:
      return { ...state, tasks: action.payload, loading: false };

    case DELETE_TASKS:
      return {
        ...state,
        tasks: state.tasks.filter(task => task._id !== action.payload)
      };

    case ADD_TASKS:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };

    case LOADING:
      return { ...state, loading: true };

    default:
      return state;
  }
}
