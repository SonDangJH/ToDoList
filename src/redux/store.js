import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension'

const middlewareEnhancer = applyMiddleware(thunk)

const enhancers = [middlewareEnhancer,]
const composedEnhancers = composeWithDevTools(...enhancers)

const store = createStore(rootReducer, undefined, composedEnhancers);
export default store;
