import { TODOS_TODO_ADDED, TODOS_TODO_EDITED, TODOS_TODO_LOAD, TODOS_SELECT_TODO, TODOS_TODO_DELETED} from "./constant"

export const todoAdded = (todos) => ({
  type: TODOS_TODO_ADDED,
  payload: todos,
});

export const todoEdited = (todo) => ({
  type: TODOS_TODO_EDITED,
  payload: todo
});


export const todoLoaded = (todos) => ({ 
  type: TODOS_TODO_LOAD, 
  payload: todos
})

export const selectTodo = (payload) => ({
  type: TODOS_SELECT_TODO,
  payload: payload
})

export const removeTodo = (payload) => ({
  type: TODOS_TODO_DELETED,
  payload: payload
})

