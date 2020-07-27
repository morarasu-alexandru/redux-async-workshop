import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";

import {
  getBookList,
  getBookListCancel,
  resetBookList,
} from "../../actions/case3";
import PaperSocket from "../../components/caseTemplate";

const Case3Content = () => {
  const { list, errorMessage, isLoading } = useSelector((state) => state.case3);
  const dispatch = useDispatch();
  const getBookListAction = () => dispatch(getBookList());
  const getBooksListCancelAction = () => dispatch(getBookListCancel());
  const resetBookListFinishedAction = () => dispatch(resetBookList());

  return (
    <PaperSocket>
      <div className="BoxButtons">
        <Button
          onClick={getBookListAction}
          className={"GeneralButton"}
          size={"small"}
          variant={"contained"}
          color={"primary"}
        >
          Make api call
        </Button>
        <Button
          onClick={getBooksListCancelAction}
          className={"GeneralButton"}
          size={"small"}
          variant={"contained"}
          color={"primary"}
        >
          Cancel
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

export default Case3Content;
