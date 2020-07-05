import React from "react";
import ExerciseTemplate from "../exerciseTemplate";
import Exercise1Finished from "../../containers/exerciseFinished/1";
import Exercise1 from "../../containers/exercise/1";
import PaperSocket from "../caseTemplate";

const Exercise1Content = () => {
  return (
    <>
      <ExerciseTemplate>
        <PaperSocket fullSize noMinHeight>
          <p>We want to add cancel functionality</p>
          <p>Solving steps:</p>
          {/* eslint-disable-next-line no-octal-escape */}
          <p>
            1.Add cancel action function to corresponding button
            (src\containers\exercise\1\index.jsx)
          </p>
          {/* eslint-disable-next-line no-octal-escape */}
          <p>
            2. Modify the saga accordingly in order to listen to cancel actions
            (src\sagas\exercise\1\exercise1.js)
          </p>
        </PaperSocket>
        <Exercise1 />
        <Exercise1Finished />
      </ExerciseTemplate>
    </>
  );
};

export default Exercise1Content;
