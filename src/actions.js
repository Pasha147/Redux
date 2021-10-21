import {
  INCREMENT,
  MULTIPLY,
  INP_TEXT,
  COMENT_CREATE,
  COMENT_UPDATE,
  COMENT_DELETE,
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
