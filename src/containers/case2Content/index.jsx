import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";

import { getBookListThunk, resetBookList } from "../../actions/case2/case2";
import PaperSocket from "../../components/caseTemplate";

const Case2Content = () => {
  const { list, errorMessage, isLoading } = useSelector((state) => state.case2);
  const dispatch = useDispatch();
  const getBookListThunkFinishedAction = () => dispatch(getBookListThunk());
  const resetBookListFinishedAction = () => dispatch(resetBookList());

  return (
    <PaperSocket>
      <div className="BoxButtons">
        <Button
          onClick={getBookListThunkFinishedAction}
          className={"GeneralButton"}
          size={"small"}
          variant={"contained"}
          color={"primary"}
        >
          Make api call
        </Button>
        <Button
          onClick={resetBookListFinishedAction}
          className={"GeneralButton"}
          size={"small"}
          variant={"contained"}
          color={"primary"}
        >
          Reset
        </Button>
      </div>
      {errorMessage !== "" && <p className="ErrorMessage">{errorMessage}</p>}
      <div className="ResultContent">
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

export default Case2Content;
