import { combineReducers } from "redux";
import gymReducer from "./gymReducer";
import typeReducer from "./typeReducer";
import authReducer from "./authReducer";
import clasReducer from "./clasReducer";

const rootReducer = combineReducers({
  authReducer,
  gymReducer,
  clasReducer,
  typeReducer,
});

export default rootReducer;
