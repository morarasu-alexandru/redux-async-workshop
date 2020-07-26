import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { createEpicMiddleware } from "redux-observable";

import rootReducer from "../reducers";
import rootEpic from "../epics";
import rootSaga from "../sagas";

const epicMiddleware = createEpicMiddleware();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, epicMiddleware, sagaMiddleware))
);

epicMiddleware.run(rootEpic);
sagaMiddleware.run(rootSaga);

export default store;
