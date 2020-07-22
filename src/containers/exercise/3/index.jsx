import React, { useEffect } from "react";
import PaperSocket from "../../../components/caseTemplate";
import { useSelector, useDispatch } from "react-redux";
import { getSize, changeSize } from "../../../actions/exercise/3/exercise3";
import CircularProgress from "@material-ui/core/CircularProgress";
import Resizer from "../../../components/Resizer";
import SplitPane, { Pane } from "react-split-pane";

const Exercise3 = () => {
  const { size, isLoading } = useSelector((state) => state.exercise3);

  const dispatch = useDispatch();

  const changeSizeAction = (size) => dispatch(changeSize(size));
  const getSizeAction = () => dispatch(getSize());

  useEffect(() => {
    getSizeAction();
  }, []);

  const changePaneSize = (size) => {
    console.log("size from pane: ", size);
    //todo:  call changeSizeAction with the received size
  };

  return (
    <PaperSocket fullSize>
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

export default Exercise3;
