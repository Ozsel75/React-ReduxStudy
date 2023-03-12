const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action) => {
  if (action.type === "ADD_TODO") {
    return {
      todos: [...state.todos, action.payload],
    };
  }

  if (action.type === "DELETE_TODO") {
    const filteredTodos = state.todos.filter(
      (item) => item.id !== action.payload
    );
    return {
      todos: filteredTodos,
    };
  }

  return state;
};

export default todosReducer;
