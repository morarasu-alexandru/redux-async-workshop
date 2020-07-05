import { combineReducers } from "redux";
import case1Reducer from "./case1";
import case2Reducer from "./case2";
import case3Reducer from "./case3";
import exercise1FinishedReducer from "./exercise/1/exercise1Finished";
import exercise1Reducer from "./exercise/1/exercise1";

const rootReducer = combineReducers({
  case1: case1Reducer,
  case2: case2Reducer,
  case3: case3Reducer,
  exercise1: exercise1Reducer,
  exercise1Finished: exercise1FinishedReducer,
});

export default rootReducer;
