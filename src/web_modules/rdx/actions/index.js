let nextTodoId = 0;

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
});

export const setNextTotal = (total) => ({
  type: 'NEXT_NAV',
  total,
});