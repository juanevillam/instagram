import thunk from "redux-thunk";
import { ui } from "../Reducers/ui";
import { auth } from "../Reducers/auth";
import { profile } from "../Reducers/profile";
import { messenger } from "../Reducers/messenger";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

const composeEnhancers = ( typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) || compose;
const reducers = combineReducers({ ui, auth, profile, messenger });
export const store = createStore( reducers, composeEnhancers( applyMiddleware( thunk ) ) );