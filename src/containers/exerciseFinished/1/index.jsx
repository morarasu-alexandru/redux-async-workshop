import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";

import {
  cancelGetBookList,
  getBookList,
  resetBookList,
} from "../../../actions/exercise/1/exercise1Finished";
import PaperSocket from "../../../components/caseTemplate";

const Exercise1Finished = () => {
  const { isLoading, list, errorMessage } = useSelector(
    (state) => state.exercise1Finished
  );

  const dispatch = useDispatch();

  const getBookListAction = () => dispatch(getBookList());
  const resetBookListAction = () => dispatch(resetBookList());
  const cancelGetBookListAction = () => dispatch(cancelGetBookList());

  return (
    <PaperSocket fullSize>
      <Button
        onClick={getBookListAction}
        size={"small"}
        variant={"contained"}
        color={"primary"}
      >
        Make api call
      </Button>
      <Button
        onClick={cancelGetBookListAction}
        size={"small"}
        variant={"contained"}
        color={"primary"}
      >
        cancel
      </Button>
      <Button
        onClick={resetBookListAction}
        size={"small"}
        variant={"contained"}
        color={"primary"}
      >
        reset
      </Button>
      <p>{errorMessage}</p>
      <div>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <ul>
            {list.map((elem, idx) => (
              <li key={idx}>{elem.title}</li>
            ))}
          </ul>
        )}
      </div>
    </PaperSocket>
  );
};

export default Exercise1Finished;
