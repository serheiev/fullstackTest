import { combineReducers, applyMiddleware, createStore } from "redux";
import userReducer from "./userReducer";
// import fileReducer from "./fileReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  user: userReducer,
  // files: fileReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
