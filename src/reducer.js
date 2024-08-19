
const initialState = {
  todos: [
    { id: 0, content: 'Learn React' },
    { id: 1, content: 'Learn Redux' },
    { id: 2, content: 'Build something fun!' }
  ],
  amount: 3,
  limit: 7,
  page: 1,
}


export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todoAdded': {
      console.log(state)
      return {
        todos: [...state.todos, action.payload],
        amount: state.amount + 1,
        limit: 7,
        page: state.page
      }
    }
    case 'todos/todoEdited': {
      return {
        todos: state.todos.map(todo => {
          if (todo.id !== action.payload.id) {
            return todo
          }
          return action.payload;
        }),
        amount: state.amount,
        limit: 7,
        page: state.page
      }
    }
    case 'todos/todoDeleted': {
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload),
        amount: state.amount - 1,
        limit: 7,
        page: state.page
      }
    }
    case 'todos/todosLoaded': {
      // Replace the existing state entirely by returning the new value
      return {
        todos: action.payload,
        amount: action.payload.length,
        limit: 7,
        page: 1,
      }
    }
    case 'todos/todosLoadedPage': {
      // Replace the existing state entirely by returning the new value
      return {
        todos: action.payload,
        amount: state.amount,
        limit: 7,
        page: state.page
      }
    }
    case 'todos/changePageIndex': {
      // Replace the existing state entirely by returning the new value
      return {
        todos: state.todos,
        amount: state.amount,
        limit: 7,
        page: action.payload
      }
    }
    default:
      return state
  }
}

export async function fetchTodos(dispatch, getState) {
  console.log(getState().page)
  await fetch('https://dummyjson.com/todos').then(res=>res.json()).then(res=>{
    dispatch({ type: 'todos/todosLoaded', payload: res.todos })
  }).then(res=>{
    dispatch(fetchTodosByPage)
  })
}

export async function fetchTodosByPage(dispatch, getState) {
  await fetch('https://dummyjson.com/todos?limit=7&skip='+getState().page * 7).then(res=>res.json()).then(res=>{
    dispatch({ type: 'todos/todosLoadedPage', payload: res.todos })
  })
}

export function saveNewTodo(text) {
  return async function saveNewTodoThunk(dispatch, getState) {
    await fetch('https://dummyjson.com/todos/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        todo: text,
        completed: false,
        userId: 5,
      })
    })
    .then(res => res.json())
    .then(res=>{
      console.log(res)
      dispatch({ type: 'todos/todoAdded', payload: res })
    });
  }
}

export function editTodo(text, id) {
  return async function saveEditTodoThunk(dispatch, getState) {
    await fetch('https://dummyjson.com/todos/'+ id, {
      method: 'PATCH', /* or PATCH */
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        todo: text
      })
    })
    .then(res => res.json())
    .then(res=>{
      dispatch({type: 'todos/todoEdited', payload: res})
    });
  }
}

export function deleteTodo(id) {
  return async function saveNewTodoThunk(dispatch, getState) {
    await fetch('https://dummyjson.com/todos/'+ id, {
      method: 'DELETE', /* or PATCH */
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        todo: text
      })
    })
    .then(res => res.json())
    .then(res=>{
      dispatch({type: 'todos/todoEdited', payload: id})
    });
  }
}