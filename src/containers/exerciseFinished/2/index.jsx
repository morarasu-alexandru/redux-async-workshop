import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";

import {
  cancelGetBookList,
  getBookList,
  resetBookList,
} from "../../../actions/exercise/2/exercise2Finished";
import PaperSocket from "../../../components/caseTemplate";

const Exercise2Finished = () => {
  const { isLoading, list, errorMessage } = useSelector(
    (state) => state.exercise2Finished
  );

  const dispatch = useDispatch();

  const getBookListAction = () => dispatch(getBookList());
  const resetBookListAction = () => dispatch(resetBookList());
  const cancelGetBookListAction = () => dispatch(cancelGetBookList());

  return (
    <PaperSocket fullSize>
      <div className="BoxButtons">
        <Button
          onClick={getBookListAction}
          size={"small"}
          variant={"contained"}
          color={"primary"}
          className="GeneralButton"
        >
          Make api call
        </Button>
        <Button
          onClick={cancelGetBookListAction}
          size={"small"}
          variant={"contained"}
          color={"primary"}
          className="GeneralButton"
        >
          cancel
        </Button>
        <Button
          onClick={resetBookListAction}
          size={"small"}
          variant={"contained"}
          color={"primary"}
          className="GeneralButton"
        >
          reset
        </Button>
      </div>
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

export default Exercise2Finished;
