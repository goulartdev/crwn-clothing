import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = compose(applyMiddleware(logger), (window as any).__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(rootReducer, middlewares);

export default store;