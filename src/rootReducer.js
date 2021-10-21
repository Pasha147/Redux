import { combineReducers } from "redux";
import { compReducer } from "./compReducer";
import { inputReducer } from "./inputReducer";
import { comentsReducer } from "./comentsReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
  compReducer, // compReducer: compReducer
  inputReducer,
  comentsReducer,
  appReducer,
});
