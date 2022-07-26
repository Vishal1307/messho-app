import { applyMiddleware, combineReducers, createStore,compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/authReducer";
const rootReducer=combineReducers({
    auth:authReducer
})
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))