import { combineReducers } from "redux";
import case1Reducer from "./case1";
import case2Reducer from "./case2";
import case3Reducer from "./case3";

const rootReducer = combineReducers({
  case1: case1Reducer,
  case2: case2Reducer,
  case3: case3Reducer,
});

export default rootReducer;
