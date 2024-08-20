export const todosSelector = state => state.todos ?? [];

export const currentTodoSelector = state => state.selectedTodo;

export const todoAmountSelector = state => state.amount;

export const loadingStateSelector = state => state.isLoading;