import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getBookListThunk, resetBookList } from "../../actions/case2/case2";

const Case2Content = () => {
  const { list, errorMessage, isLoading } = useSelector((state) => state.case2);
  const dispatch = useDispatch();
  const getBookListThunkFinishedAction = () => dispatch(getBookListThunk());
  const resetBookListFinishedAction = () => dispatch(resetBookList());

  return (
    <>
      <div>
        <button onClick={getBookListThunkFinishedAction}>Make api call</button>
        <button onClick={resetBookListFinishedAction}>Reset</button>
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

export default Case2Content;
