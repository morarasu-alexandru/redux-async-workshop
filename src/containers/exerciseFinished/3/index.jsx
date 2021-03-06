import React, { useEffect } from "react";
import PaperSocket from "../../../components/caseTemplate";
import SplitPane, { Pane } from "react-split-pane";
import Resizer from "../../../components/Resizer";
import { useDispatch, useSelector } from "react-redux";
import {
  getSize,
  changeSize,
} from "../../../actions/exercise/3/exercise3Finished";
import CircularProgress from "@material-ui/core/CircularProgress";

const Exercise3Finished = () => {
  const { size, isLoading } = useSelector((state) => state.exercise3Finished);

  const dispatch = useDispatch();

  const changeSizeAction = (size) => dispatch(changeSize(size));
  const getSizeAction = () => dispatch(getSize());

  useEffect(() => {
    getSizeAction();
  }, []);

  const changePaneSize = (size) => {
    changeSizeAction(size);
  };

  return (
    <PaperSocket fullSize>
      <h3>Finished Exercise</h3>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Resizer>
          <SplitPane split="horizontal" onChange={changePaneSize} size={size}>
            <Pane className={"Pane"}>I need some space</Pane>
            <Pane className={"Pane"}>I also need some space</Pane>
          </SplitPane>
        </Resizer>
      )}
    </PaperSocket>
  );
};

export default Exercise3Finished;
