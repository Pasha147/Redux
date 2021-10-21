import { INP_TEXT } from "./types";

const initialState = {
  text: "",
};

export const inputReducer = (state = initialState, action) => {
  //console.log("input_Reducer >", action);
  switch (action.type) {
    case INP_TEXT:
      return {
        ...state,
        text: action.text,
      };

    default:
      return state;
  }
};
