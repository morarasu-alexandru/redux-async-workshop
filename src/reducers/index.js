import { combineReducers } from "redux";
import case1Reducer from "./case1";
import case2Reducer from "./case2";
import case4Reducer from "./case4";
import exercise2FinishedReducer from "./exercise/2/exercise2Finished";
import exercise2Reducer from "./exercise/2/exercise2";
import exercise1FinishedReducer from "./exercise/1/exercise1Finished";
import exercise1Reducer from "./exercise/1/exercise1";
import exercise3FinishedReducer from "./exercise/3/exercise3Finished";
import exercise3Reducer from "./exercise/3/exercise3";
import case3Reducer from "./case3";
import case5Reducer from "./case5";

const rootReducer = combineReducers({
  case1: case1Reducer,
  case2: case2Reducer,
  case3: case3Reducer,
  case4: case4Reducer,
  case5: case5Reducer,
  exercise1: exercise1Reducer,
  exercise1Finished: exercise1FinishedReducer,
  exercise2: exercise2Reducer,
  exercise2Finished: exercise2FinishedReducer,
  exercise3: exercise3Reducer,
  exercise3Finished: exercise3FinishedReducer,
});

export default rootReducer;
