import React from "react";
import ExerciseTemplate from "../exerciseTemplate";
import PaperSocket from "../caseTemplate";
import Exercise3Finished from "../../containers/exerciseFinished/3";
import Exercise3 from "../../containers/exercise/3";

const Exercise3Content = () => {
  return (
    <>
      <ExerciseTemplate>
        <PaperSocket fullSize noMinHeight>
          <p>Test</p>
        </PaperSocket>
        <Exercise3 />
        <Exercise3Finished />
      </ExerciseTemplate>
    </>
  );
};

export default Exercise3Content;
