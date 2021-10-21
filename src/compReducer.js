import { INCREMENT, MULTIPLY } from "./types";

const initialState = {
  counter: 4,
};

export const compReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case MULTIPLY:
      return {
        ...state,
        counter: state.counter * action.payload,
      };
    default:
      return state;
  }
};
