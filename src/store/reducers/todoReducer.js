import ActionTypes from "../actionTypes";
const initialState = {
  todos: [],
  isDarkMode: true,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD:
      console.log(action, "action");
      return { ...state, todos: state.todos.concat(action.payload) };
    case ActionTypes.DELETE:
      const filtered = state.todos.filter((i) => i.id !== action.payload);
      return { ...state, todos: filtered };
    case ActionTypes.UPDATE:
      const updated = state.todos.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );
      return { ...state, todos: updated };
      case ActionTypes.SET:
        return {...state,todos : action.payload}
    default:
      return state;
  }
};

export default todoReducer;
