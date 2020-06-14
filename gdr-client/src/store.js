import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import usersReducer from './reducers/users'
import currentUserReducer from './reducers/currentUser'
import loginForm from './reducers/loginForm';

const reducer = combineReducers({
  users: usersReducer,
  currentUser: currentUserReducer,
  loginForm
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store;
