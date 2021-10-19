import { createStore } from "redux";

const initialState = {
  counter: 3,
};

const reducer = (state = initialState, action) => {
  console.log("reducer>", action);

  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
