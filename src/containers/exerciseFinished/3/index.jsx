import React, { useEffect } from "react";
import PaperSocket from "../../../components/caseTemplate";
import SplitPane, { Pane } from "react-split-pane";
import Resizer from "../../../components/Resizer";
import { useDispatch, useSelector } from "react-redux";
import {
  getSize,
  paneResize,
} from "../../../actions/exercise/3/exercise3Finished";

const Exercise3Finished = () => {
  const { size } = useSelector((state) => state.exercise3Finished);

  const dispatch = useDispatch();

  const paneResizeAction = (size) => dispatch(paneResize(size));
  const getSizeAction = () => dispatch(getSize());

  useEffect(() => {
    getSizeAction();
    // console.log("here");
  }, []);

  const changeSize = (size) => {
    paneResizeAction(size);
  };

  return (
    <PaperSocket fullSize>
      <Resizer>
        <SplitPane split="horizontal" onChange={changeSize} size={size}>
          <Pane className={"Pane"}>You can use a Pane component</Pane>
          <Pane className={"Pane"}>
            Using a Pane allows you to specify any constraints directly
          </Pane>
        </SplitPane>
      </Resizer>
    </PaperSocket>
  );
};

export default Exercise3Finished;
