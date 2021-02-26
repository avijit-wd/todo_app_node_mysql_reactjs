const initialState = {
  todos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_TODOS":
      return {
        ...state,
        todos: action.payload,
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "DELETE_TODO":
      return {
        ...state,
      };
    case "UPDATE_TODO":
      return {
        ...state,
      };
    case "UPDATE_STATUS":
      return {
        ...state,
      };
    default:
      return state;
  }
};
