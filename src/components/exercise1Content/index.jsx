import React from "react";
import ExerciseTemplate from "../exerciseTemplate";
import PaperSocket from "../caseTemplate";
import Exercise1 from "../../containers/exercise/1";
import Exercise1Finished from "../../containers/exerciseFinished/1";

const Exercise1Content = () => {
  return (
    <>
      <ExerciseTemplate>
        <PaperSocket fullSize noMinHeight>
          <p>Test</p>
          <p>Solving steps:</p>
        </PaperSocket>
        <Exercise1 />
        <Exercise1Finished />
      </ExerciseTemplate>
    </>
  );
};

export default Exercise1Content;
