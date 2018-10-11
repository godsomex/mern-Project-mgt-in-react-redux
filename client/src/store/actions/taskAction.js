import { GET_TASKS, LOADING, DELETE_TASKS, ADD_TASKS } from "./types";
import axios from "axios";
//before async call
// export const getTaskAction = () => {
//   return {
//     type: GET_TASKS
//   };
// };

//make asynchronous call to the api
// export const getTaskAction = () => {
//   return dispatch => {
//     dispatch(
//       setTaskLoading(),
//       axios
//         .get("/api/tasks")
//         .then(({ data }) => dispatch({ type: GET_TASKS, data }))
//     );
//   };
// };
export const getTaskAction = () => dispatch => {
  dispatch(setTaskLoading());
  axios
    .get("/api/tasks")
    .then(res => dispatch({ type: GET_TASKS, payload: res.data }));
};

export const addTaskAction = task => dispatch => {
  axios.post("/api/tasks", task).then(res => {
    dispatch({ type: ADD_TASKS, payload: res.data });
  });
};

export const setTaskLoading = () => {
  return {
    type: LOADING
  };
};

export const deleteTask = id => dispatch => {
  axios
    .delete(`/api/tasks/${id}`)
    .then(res => dispatch({ type: DELETE_TASKS, payload: id }));
};
