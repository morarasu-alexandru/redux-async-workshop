import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers";
import { watchGetBookList } from "../sagas/case3";
import { watchCancelableGetBookList } from "../sagas/exercise/1/exercise1Finished";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(watchGetBookList);
sagaMiddleware.run(watchCancelableGetBookList);

export default store;
