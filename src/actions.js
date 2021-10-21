import {
  INCREMENT,
  MULTIPLY,
  INP_TEXT,
  COMENT_CREATE,
  COMENT_UPDATE,
  COMENT_DELETE,
  COMMENTS_LOAD,
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF,
  ERROR_DISPLAY_ON,
  ERROR_DISPLAY_OFF,
} from "./types";

export function incrCounter() {
  // this is action creator function
  return { type: INCREMENT };
}

export function multiplyCounter(n) {
  return { type: MULTIPLY, payload: n };
}

export function inputText(text) {
  return { type: INP_TEXT, text };
}

export function comentCreate(text, id) {
  return {
    type: COMENT_CREATE,
    data: { text, id },
  };
}

export function comentUpdate(text, id) {
  return {
    type: COMENT_UPDATE,
    data: { text, id },
  };
}

export function comentDelete(id) {
  return {
    type: COMENT_DELETE,
    data: id,
  };
}

export function loaderOn() {
  return {
    type: LOADER_DISPLAY_ON,
  };
}

export function loaderOff() {
  return {
    type: LOADER_DISPLAY_OFF,
  };
}

export function commentsLoad() {
  return async (dispatch) => {
    try {
      dispatch(loaderOn());
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments?_limit=10"
      );
      const jsonData = await response.json();

      dispatch({
        type: COMMENTS_LOAD,
        data: jsonData,
      });

      setTimeout(() => {
        dispatch(loaderOff());
      }, 1000);
    } catch (error) {
      dispatch(errorOn("Error API"));
      dispatch(loaderOff());
    }
  };
}

export function errorOn(text) {
  return (dispatch) => {
    dispatch({
      type: ERROR_DISPLAY_ON,
      text,
    });
    setTimeout(() => {
      dispatch(errorOff());
    }, 2000);
  };
  //   return {
  //     type: ERROR_DISPLAY_ON,
  //     text,
  //   };
}

export function errorOff() {
  return {
    type: ERROR_DISPLAY_OFF,
  };
}
