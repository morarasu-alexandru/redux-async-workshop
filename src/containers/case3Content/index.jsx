import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookList, resetBookList } from "../../actions/case3/case3";
import CircularProgress from "@material-ui/core/CircularProgress";

const Case3Content = () => {
  const { list, errorMessage, isLoading } = useSelector((state) => state.case3);
  const dispatch = useDispatch();

  const getBookListAction = () => dispatch(getBookList());
  const resetBookListAction = () => dispatch(resetBookList());

  return (
    <>
      <div>
        <button onClick={getBookListAction}>Make api call</button>
        <button onClick={resetBookListAction}>reset</button>
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
      </div>
    </>
  );
};

export default Case3Content;
