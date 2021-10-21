import { COMENT_CREATE } from "./types";
import { errorOn } from "./actions";

const badWords = ["fuck", "ass"];

export function spamFilter({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === COMENT_CREATE) {
        // console.log("spamFilter", action.data.text);
        const hadBadWords = badWords.some((item) =>
          action.data.text.includes(item)
        );
        if (hadBadWords) {
          return dispatch(errorOn("bad words"));
        }
      }
      return next(action);
    };
  };
}
