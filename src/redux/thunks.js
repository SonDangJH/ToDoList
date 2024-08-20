import { setLoading, DUMMYJSON_URL} from "./constant";
import { makeRequest } from "../utils"
import { todoAdded, todoEdited, todoLoaded, removeTodo } from "./actions"
import toast from "react-hot-toast";
export function fetchTodosByPage(page) {
  return async (dispatch, getState) => {
    dispatch(setLoading);
    makeRequest(`${DUMMYJSON_URL}?limit=7&skip=${page * 7}`)
      .then((res) => {
        const { todos, total } = res;
        dispatch(todoLoaded({
          todos: todos,
          amount: total,
        }));
      });
  }
}

export function saveNewTodo(text) {
  return async function saveNewTodoThunk(dispatch, getState) {
    dispatch(setLoading);
    makeRequest(`${DUMMYJSON_URL}/add`,{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todo: text,
        completed: false,
        userId: 5,
      }),
    })
      .then((res) => {
        toast.success("New todo has added");
        dispatch(todoAdded(res));
      });
  };
}

export function editTodo(text, id) {
  return async function saveEditTodoThunk(dispatch, getState) {
    dispatch(setLoading);
    makeRequest(`${DUMMYJSON_URL}/` + id, {
      method: "PATCH" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todo: text,
      }),
    })
      .then((res) => {
        toast.success("Todo edited");
        dispatch(todoEdited(res));
      });
  };
}

export function deleteTodo(id) {
  return async function saveNewTodoThunk(dispatch, getState) {
    dispatch(setLoading);
    makeRequest(`${DUMMYJSON_URL}/${id}`, {
      method: "DELETE" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        toast.success("Todo deleted")
        dispatch(removeTodo(id));
      });
  };
}