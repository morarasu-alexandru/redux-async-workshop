import React from "react";
import PaperSocket from "../../../components/caseTemplate";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementCounter,
  incrementCounterAsync,
  resetCounter,
} from "../../../actions/exercise/1/exercise1";

const Exercise1 = () => {
  const { count } = useSelector((state) => state.exercise1);

  const dispatch = useDispatch();

  const incrementCounterAction = () => dispatch(incrementCounter());
  const incrementCounterAsyncAction = () => dispatch(incrementCounterAsync());
  const resetCounterAction = () => dispatch(resetCounter());

  return (
    <PaperSocket fullSize>
      <div className="BoxButtons">
        <Button
          onClick={incrementCounterAction}
          className="GeneralButton"
          variant={"contained"}
          color={"primary"}
          size={"small"}
        >
          ++
        </Button>
        <Button
          onClick={incrementCounterAsyncAction}
          className="GeneralButton"
          variant={"contained"}
          color={"primary"}
          size={"small"}
        >
          Async ++
        </Button>
        <Button
          onClick={resetCounterAction}
          className="GeneralButton"
          variant={"contained"}
          color={"primary"}
          size={"small"}
        >
          Reset
        </Button>
      </div>
      <div>{count}</div>
    </PaperSocket>
  );
};

export default Exercise1;
