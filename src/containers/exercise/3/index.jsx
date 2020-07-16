import React, { useEffect } from "react";
import PaperSocket from "../../../components/caseTemplate";
import { useSelector, useDispatch } from "react-redux";
import { getSize, paneResize } from "../../../actions/exercise/3/exercise3";
import CircularProgress from "@material-ui/core/CircularProgress";
import Resizer from "../../../components/Resizer";
import SplitPane, { Pane } from "react-split-pane";

const Exercise3 = () => {
  const { size, isLoading } = useSelector((state) => state.exercise3);

  const dispatch = useDispatch();

  const paneResizeAction = (size) => dispatch(paneResize(size));
  const getSizeAction = () => dispatch(getSize());

  useEffect(() => {
    getSizeAction();
  }, []);

  const changeSize = (size) => {
    paneResizeAction(size);
  };

  return (
    <PaperSocket fullSize>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Resizer>
          <SplitPane split="horizontal" onChange={changeSize} size={size}>
            <Pane className={"Pane"}>I need some space</Pane>
            <Pane className={"Pane"}>I also need some space</Pane>
          </SplitPane>
        </Resizer>
      )}
    </PaperSocket>
  );
};

export default Exercise3;
