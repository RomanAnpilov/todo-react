import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import colors from "./reducers/colors"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(colors, composeEnhancers(applyMiddleware(thunk)));

export default store;