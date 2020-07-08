import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";

import {
  cancelGetBookList,
  getBookList,
  resetBookList,
} from "../../../actions/exercise/2/exercise2";
import PaperSocket from "../../../components/caseTemplate";

const Exercise2 = () => {
  const { isLoading, list, errorMessage } = useSelector(
    (state) => state.exercise2
  );

  const dispatch = useDispatch();

  const getBookListAction = () => dispatch(getBookList());
  const resetBookListAction = () => dispatch(resetBookList());
  const cancelGetBookListAction = () => dispatch(cancelGetBookList());
  // todo: add cancel function to corresponding button

  return (
    <PaperSocket fullSize>
      <div className="BoxButtons">
        <Button
          onClick={getBookListAction}
          className="GeneralButton"
          variant={"contained"}
          color={"primary"}
          size={"small"}
        >
          Make api call
        </Button>
        <Button
          onClick={() => {
            console.log("function has to be replaced with cancel action");
          }}
          className="GeneralButton"
          size={"small"}
          variant={"contained"}
          color={"primary"}
        >
          cancel
        </Button>
        <Button
          onClick={resetBookListAction}
          className="GeneralButton"
          size={"small"}
          variant={"contained"}
          color={"primary"}
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

export default Exercise2;
