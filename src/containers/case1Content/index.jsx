import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

import {
  getBookList,
  getBookListRejected,
  getBookListFulfilled,
  resetBookList,
} from "../../actions/case1/case1";
import { getBooksApi } from "../../mock";

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
    <>
      <div>
        <button onClick={handleApiCall}>Make api call</button>
        <button onClick={resetBookListAction}>Reset</button>
      </div>
      <p>{errorMessage}</p>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <ul>
          {list.map((elem, idx) => (
            <li key={idx}>{elem.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Case1Content;
