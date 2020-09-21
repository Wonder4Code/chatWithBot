import { combineReducers } from "redux";
import chatReducer from "./chatReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
  chat: chatReducer,
  login: loginReducer,
});

export default rootReducer;
