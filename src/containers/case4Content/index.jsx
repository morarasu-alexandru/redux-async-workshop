import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookList, resetBookList } from "../../actions/case4";
import CircularProgress from "@material-ui/core/CircularProgress";

import Button from "@material-ui/core/Button";
import PaperSocket from "../../components/caseTemplate";

const Case4Content = () => {
  const { list, errorMessage, isLoading } = useSelector((state) => state.case4);
  const dispatch = useDispatch();

  const getBookListAction = () => dispatch(getBookList());
  const resetBookListAction = () => dispatch(resetBookList());

  return (
    <PaperSocket>
      <div className="BoxButtons">
        <Button
          className={"GeneralButton"}
          onClick={getBookListAction}
          size={"small"}
          variant={"contained"}
          color={"primary"}
        >
          Make api call
        </Button>
        <Button
          className={"GeneralButton"}
          onClick={resetBookListAction}
          size={"small"}
          variant={"contained"}
          color={"primary"}
        >
          reset
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

export default Case4Content;
