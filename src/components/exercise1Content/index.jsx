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
          <p>We want to delay all async increment actions with 1 second</p>
          <p>Solving steps:</p>
          {/* eslint-disable-next-line no-octal-escape */}
          <p>
            1.Delay the increment action with 1000 ms
            (src\sagas\exercise\1\exercise1.js)
          </p>
          {/* eslint-disable-next-line no-octal-escape */}
          <p>
            2. Modify the watcher function to listen to all async increment
            actions (src\sagas\exercise\1\exercise1.js)
          </p>
        </PaperSocket>
        <Exercise1 />
        <Exercise1Finished />
      </ExerciseTemplate>
    </>
  );
};

export default Exercise1Content;
