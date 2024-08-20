import { TODOS_SELECT_TODO, TODOS_SET_LOADING, TODOS_TODO_ADDED, TODOS_TODO_DELETED, TODOS_TODO_EDITED, TODOS_TODO_LOAD } from "./constant"
const initialState = {
  todos: [
    { id: 0, content: "Learn React" },
    { id: 1, content: "Learn Redux" },
    { id: 2, content: "Build something fun!" },
  ],
  amount: 3,
  limit: 7,
  page: 1,
  isLoading: true,
  selectedTodo: null // todo
};

export default function appReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TODOS_TODO_ADDED: {
      const { todos, amount, page } = state;
      return {
        todos: todos.concat(payload),
        amount: amount + 1,
        limit: 7,
        page: page,
        selectTodo: null,
        isLoading: false
      };
    }
    case TODOS_TODO_EDITED: {
      const { todos, amount, page } = state;
      return {
        todos: todos.map((todo) => {
          if (todo.id !== payload.id) {
            return todo;
          }
          return payload;
        }),
        amount: amount,
        limit: 7,
        page: page,
        selectedTodo: null,
        isLoading: false
      };
    }
    case TODOS_TODO_DELETED: {
      const { todos, amount, page } = state;
      return {
        todos: todos.filter((todo) => todo.id !== payload),
        amount: amount - 1,
        limit: 7,
        page: page,
        selectTodo: null,
        isLoading: false
      };
    }
    case TODOS_SELECT_TODO: {
      return {
        ... state,
        selectedTodo: payload
      }
    }
    case TODOS_TODO_LOAD: {
      const { page } = state;
      const { todos, amount } = payload;
      return {
        todos: todos,
        amount: amount,
        limit: 7,
        page: page,
        isLoading: false
      };
    }
    case TODOS_SET_LOADING: {
      const { todos, amount, page } = state;
      return {
        todos: todos,
        amount: amount,
        limit: 7,
        page: page,
        isLoading: payload
      }
    }

    default:
      return state;
  }
}

