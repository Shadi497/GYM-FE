import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
import { fetchGyms } from "./actions/gymActions";
import { checkToken } from "./actions/authActions";
import { fetchClases } from "./actions/clasActions.js";
import { fetchTypes } from "./actions/typeActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch(checkToken());
store.dispatch(fetchGyms());
// store.dispatch(fetchTypes());
// store.dispatch(fetchClases());

export default store;
