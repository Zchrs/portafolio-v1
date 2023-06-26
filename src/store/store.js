import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from "redux";
import { authReducer, authReducerActions } from "../reducers/authReducer";
import userReducer from "../reducers/userReducer";


import thunk from 'redux-thunk';
import { rootReducer } from "../reducers/rootReducer";
// import { authReducers } from "../views/auth/authReducer";

const reducers = combineReducers({
  auth: authReducer,
//   logged: userReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducers,
  composeEnhancers(applyMiddleware(thunk))
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);