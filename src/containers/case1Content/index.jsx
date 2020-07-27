import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";

import {
  getBookList,
  getBookListRejected,
  getBookListFulfilled,
  resetBookList,
} from "../../actions/case1";
import { getBooksApi } from "../../mock";
import PaperSocket from "../../components/caseTemplate";

const Case1Content = () => {
  const { list, errorMessage, isLoading } = useSelector((state) => state.case1);
  const dispatch = useDispatch();

  const getBookListAction = () => dispatch(getBookList());
  const getBookListRejectedAction = (err) => dispatch(getBookListRejected(err));
  const getBookListFulfilledAction = (newList) =>
    dispatch(getBookListFulfilled(newList));
  const resetBookListAction = () => dispatch(resetBookList());

  const handleApiCall = () => {
    getBookListAction();

    getBooksApi()
      .then((newList) => {
        getBookListFulfilledAction(newList);
      })
      .catch((err) => {
        getBookListRejectedAction(err);
      });
  };

  return (
    <PaperSocket>
      <div className="BoxButtons">
        <Button
          className={"GeneralButton"}
          onClick={handleApiCall}
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

export default Case1Content;
