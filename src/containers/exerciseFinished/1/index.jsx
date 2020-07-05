import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelGetBookList,
  getBookList,
  resetBookList,
} from "../../../actions/exercise/1/exercise1Finished";

const Exercise1Finished = () => {
  const { isLoading, list } = useSelector((state) => state.exercise1Finished);

  const dispatch = useDispatch();

  const getBookListAction = () => dispatch(getBookList());
  const resetBookListAction = () => dispatch(resetBookList());
  const cancelGetBookListAction = () => dispatch(cancelGetBookList());

  return (
    <div>
      <button onClick={getBookListAction}>Make api call</button>
      <button onClick={cancelGetBookListAction}>cancel</button>
      <button onClick={resetBookListAction}>reset</button>
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
    </div>
  );
};

export default Exercise1Finished;
