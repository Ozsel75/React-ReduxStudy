const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action) => {
  if (action.type === "ADD.TODO") {
    return {
      todos: [...state.todos, action.payload],
    };
  }
  return state;
};

export default todosReducer;
