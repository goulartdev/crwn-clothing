import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

const middlewares = compose(
  applyMiddleware(logger),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, middlewares);

export const persistor = persistStore(store);

export default store;
